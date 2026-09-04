import { useState, useRef, useEffect } from 'react';
import './index.css';

interface Source {
  video_id: string;
  title?: string;
  start_time?: number;
  end_time?: number;
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  sources?: Source[];
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string>(String(Date.now()));

  // Store the currently selected YouTube video
  const [videoId, setVideoId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Check whether user entered a YouTube URL
  const isYouTubeUrl = (text: string) => {
    try {
      const url = new URL(text);

      return (
        url.hostname.includes('youtube.com') ||
        url.hostname.includes('youtu.be')
      );
    } catch {
      return false;
    }
  };

  const formatTimestamp = (seconds: number) => {
    const value = Math.max(0, Math.floor(seconds));
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const remainingSeconds = value % 60;

    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, '0')}:${String(
        remainingSeconds
      ).padStart(2, '0')}`;
    }

    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const getYouTubeTimestampUrl = (source: Source) =>
    `https://www.youtube.com/watch?v=${source.video_id}&t=${Math.floor(
      source.start_time as number
    )}s`;

  const dedupeDisplayedSources = (sources: Source[]) => {
    const timestampWindowSeconds = 8;
    const displayedSources: Source[] = [];

    for (const source of sources) {
      if (
        typeof source.start_time !== 'number' ||
        !Number.isFinite(source.start_time) ||
        source.start_time < 0
      ) {
        if (
          !displayedSources.some(
            (displayedSource) =>
              displayedSource.video_id === source.video_id &&
              displayedSource.title === source.title &&
              displayedSource.start_time === undefined
          )
        ) {
          displayedSources.push(source);
        }

        continue;
      }

      const alreadyDisplayed = displayedSources.some(
        (displayedSource) =>
          displayedSource.video_id === source.video_id &&
          typeof displayedSource.start_time === 'number' &&
          Math.abs(displayedSource.start_time - source.start_time!) <=
            timestampWindowSeconds
      );

      if (!alreadyDisplayed) {
        displayedSources.push(source);
      }
    }

    return displayedSources;
  };

  const sendMessage = async () => {
    if (inputText.trim() === '' || isLoading) return;

    const text = inputText.trim();

    const userMessage: Message = {
      id: Date.now(),
      text,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const apiUrl =
        import.meta.env.VITE_API_URL || 'http://localhost:3000';

      // ------------------------------------------------
      // CASE 1: User entered a YouTube URL
      // ------------------------------------------------
      if (isYouTubeUrl(text)) {
        const response = await fetch(`${apiUrl}/api/video`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: text,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || 'Failed to process YouTube video'
          );
        }

        // Save video ID for future chat questions
        setVideoId(data.video_id);

        // Start a fresh conversation for this video
        setThreadId(String(Date.now()));

        const aiMessage: Message = {
          id: Date.now() + 1,
          text: data.already_exists
            ? `Video "${data.title}" is already loaded. You can ask me questions about it.`
            : `Video "${data.title}" is ready. I added ${data.chunks_added} transcript chunks. You can now ask me questions about it.`,
          isUser: false,
        };

        setMessages((prev) => [...prev, aiMessage]);

        return;
      }

      // ------------------------------------------------
      // CASE 2: User asks a question
      // ------------------------------------------------

      // Require a video before allowing questions
      if (!videoId) {
        const aiMessage: Message = {
          id: Date.now() + 1,
          text: 'Please send a YouTube video URL first.',
          isUser: false,
        };

        setMessages((prev) => [...prev, aiMessage]);

        return;
      }

      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          threadId: String(threadId),

          // Tell backend which transcript to search
          videoId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Failed to get response'
        );
      }

      const aiMessage: Message = {
        id: Date.now() + 1,
        text: data.answer,
        isUser: false,
        sources: Array.isArray(data.sources)
          ? data.sources
          : [],
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);

      const message =
        error instanceof Error
          ? error.message
          : 'Something went wrong';

      const errorMessage: Message = {
        id: Date.now() + 1,
        text: `Sorry, ${message}`,
        isUser: false,
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setThreadId(String(Date.now()));

    // Forget currently selected video
    setVideoId(null);
  };

  return (
    <div className='chat-container'>
      <header className='chat-header'>
        <h1>AI Chat</h1>

        <button className='reset-button' onClick={resetChat}>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8 3V1L4 5L8 9V7C10.21 7 12 8.79 12 11C12 13.21 10.21 15 8 15C5.79 15 4 13.21 4 11H2C2 14.31 4.69 17 8 17C11.31 17 14 14.31 14 11C14 7.69 11.31 5 8 5V3Z'
              fill='currentColor'
            />
          </svg>

          New Chat
        </button>
      </header>

      <div className='messages-container'>
        {messages.length === 0 ? (
          <div className='empty-state'>
            <p>Paste a YouTube URL to start</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`message ${
                message.isUser
                  ? 'user-message'
                  : 'ai-message'
              }`}
            >
              <div className='message-avatar'>
                {message.isUser ? 'You' : 'AI'}
              </div>

              <div className='message-content'>
                <div>{message.text}</div>

                {!message.isUser &&
                  message.sources &&
                  message.sources.length > 0 && (
                    <div className='sources'>
                      <div className='sources-title'>
                        {message.sources[0]?.title
                          ? `Sources - ${message.sources[0].title}`
                          : 'Sources'}
                      </div>

                      {dedupeDisplayedSources(message.sources).map((source, index) => {
                        const hasTimestamp =
                          typeof source.start_time === 'number' &&
                          Number.isFinite(source.start_time) &&
                          source.start_time >= 0;

                        return (
                          <div
                            key={`${source.video_id}-${source.start_time ?? index}-${index}`}
                            className='source-item'
                          >
                            {hasTimestamp ? (
                              <a
                                href={getYouTubeTimestampUrl(source)}
                                target='_blank'
                                rel='noreferrer'
                                className='source-link'
                              >
                                ▶ {formatTimestamp(source.start_time)}
                              </a>
                            ) : (
                              <span className='source-label'>
                                Source {index + 1}
                              </span>
                            )}

                          </div>
                        );
                      })}
                    </div>
                  )}
              </div>
            </div>
          ))
        )}

        {isLoading && (
          <div className='message ai-message'>
            <div className='message-avatar'>AI</div>

            <div className='message-content loading'>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className='input-container'>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={
            videoId
              ? 'Ask something about the video...'
              : 'Paste a YouTube URL...'
          }
          disabled={isLoading}
          rows={1}
        />

        <button
          className='send-button'
          onClick={sendMessage}
          disabled={
            inputText.trim() === '' || isLoading
          }
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z'
              fill='currentColor'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
