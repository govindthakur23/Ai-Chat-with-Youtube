import "dotenv/config";

// Trigger Bright Data YouTube scraping
export const scrapeYouTubeVideo = async (url) => {
  const response = await fetch(
    "https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_lk56epmy2i5g7lzu0k&notify=false&include_errors=true",
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        input: [
          {
            url,
            country: "",
            transcription_language: "",
          },
        ],
        limit_per_input: null,
      }),
    }
  );

  // Handle Bright Data API errors
  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Bright Data error: ${response.status} ${errorText}`
    );
  }

  const data = await response.json();

  console.log("Bright Data response:", data);

  return data;
};