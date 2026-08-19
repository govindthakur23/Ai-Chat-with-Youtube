export default [
  {
    "url": "https://www.youtube.com/watch?v=A95rliroC8Q",
    "title": "8. Authentication and authorization for backend engineers",
    "youtuber": "@sriniously",
    "youtuber_md5": "793018e763c3327a4e238a51db3d8a71",
    "video_url": "https://rr10---sn-bvvbaxivnuxqjvhj5nu-w5me.googlevideo.com/videoplayback?expire=1786723463&ei=J-h-aoORM7LM0_wPibGHkAE&ip=r68d3d7d7877d243b4bda36d6db0cce3d&id=o-AFSK4AZZi1z6cFOT9ylUMsZuSj3XJkRdO023aVsb7sxw&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1786701863%2C&mh=Ml&mm=31%2C29&mn=sn-bvvbaxivnuxqjvhj5nu-w5me%2Csn-5ualdnsy&ms=au%2Crdu&mv=m&mvi=10&pl=24&rms=au%2Cau&initcwndbps=4070000&spc=KBGBclvgPv66yZB7QA8w5Q8_OCN0CYlUUGNi-hF_slbTCFldIKpeaqTasC-BsBiTIPN4V0C3&svpuc=1&ns=xo2P_4bv9cku-uzrdXcxTq8X&sabr=1&rqh=1&mt=1786701416&fvip=4&keepalive=yes&fexp=51565115%2C51946837%2C51973818%2C52089683&c=WEB&n=RCKKpiwSR-A0BK29Q4&sparams=expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Cspc%2Csvpuc%2Cns%2Csabr%2Crqh&sig=AE0s2JYwRAIgOv8XMgld7FR8wxWM8yBrAvOQ6_c_hvz0ca7Rl7pCeigCIFxsnqKwhxj-LPOp-eHJJKinCWup9x0tPTcOc2_IRSQr&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRgIhAI8iQq1b0g0mMxh3Rd8KO4nxDEuuBVQn_t_hEE13YcWpAiEAlhepk-kFGhKPwgO9JprUFd7_-xr4wyH-pMl1qyMKi9g%3D",
    "video_length": 5756,
    "likes": 2564,
    "views": 115270,
    "date_posted": "2024-12-23T04:16:29.000Z",
    "description": "In this video we understand what is authentication and authorization, where do we use it, why do we use it and the importance of it.\n\nJoin the Discord community: https://discord.gg/NXuybNcvVH\n\nSome resources to explore more on your own\nhttps://portswigger.net/web-security/access-control\nhttps://portswigger.net/web-security/authentication\nhttps://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html\nhttps://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html\nhttps://jwt.io/\nhttps://fusionauth.io/blog/category/education/\nhttps://www.pingidentity.com/en/resources/identity-fundamentals/authorization/authorization-methods.html\nhttps://en.wikipedia.org/wiki/Hash_function\nhttps://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html\n\nhttps://cheatsheetseries.owasp.org/index.html is a VERY good resource to master everything related to security overall.\n\n#backend #nodejs #golang #softwareengineering \nNerd out about the history of technologies here https://www.fascinatingtechhistory.xyz/",
    "num_comments": 156,
    "subscribers": 69900,
    "video_id": "A95rliroC8Q",
    "channel_url": "https://www.youtube.com/@sriniously",
    "preview_image": "https://i.ytimg.com/vi/A95rliroC8Q/maxresdefault.jpg",
    "shortcode": "A95rliroC8Q",
    "verified": false,
    "handle_name": "Sriniously",
    "avatar_img_channel": "https://yt3.ggpht.com/7mAkVUE_h0RVubIrH_ULdbiJ8WSlJOjZsUY1u9oEGDQY84OBorNau2NmdWyG6O9wylz_ne8acc0=s48-c-k-c0x00ffffff-no-rj",
    "is_sponsored": false,
    "related_videos": null,
    "license": null,
    "viewport_frames": "1920x1080 / -",
    "current_optimal_res": "1920x1080@60 / 1920x1080@60",
    "codecs": "avc1.64002a / mp4a.40.2",
    "color": "bt709",
    "quality": "hd1080",
    "quality_label": "1080p60",
    "post_type": "post",
    "youtuber_id": "UCy_XB5HjpR0-6dEZPsoE4UA",
    "transcript": "and finally my favorite topic which is\nauthentication and authorization and this is probably one of those areas\nwhich we encounter every day I'm pretty sure all of us have used authentication\nscreens before you have we have logged into different platforms you have signed\nup into different platforms those are basically called the authentication\nflows and to summarize everything in two sentences uh authentication can be\nexplained as something a mechanism to assign an identity to a subject to say\nin the technical terms and basically to answer the question of who are you\nauthentication basically means who are you in a given context in a given\ncontext the context can be a platform a operating system uh or your phone\nanything this the answer to this question the process of finding the\nanswer to the this question is called authentication in the same way the\nanswer to this question which is what can you do in that context in that\nplatform in that operating system all your capabilities all your permissions\nto say in the technical jargon those things the process of finding the answer\nof the question what can you do in a particular context that process is\ncalled authorization those are the two sentence summaries of the whole topic\nand this is what we are going to talk about in this video and we'll dive into\ndifferent aspects uh different components of authentication and\nauthorization basically have a general high level and Technical understanding\nof how it works what is the importance what are the different things that make\nup and build the whole authentication and authorization flows and everything\nsurrounding it now before we dive in let's have some historical context of\nauthentication so first we're going to start with\nauthentication right and for authentication let's have some\nhistorical context of what was the use of it how did we reach here and how did\nwe reach to the modern methods of authentication so the story start\nsomewhere in pre-industrial societies and here authentication was pretty\nintrinsic uh by that I mean it was implied so an identity of a person or a\nsubject was the same as the subject's recognition and what that means is\nsomeone someone who is already respected in the community let's say a village\nElder could vouch for a person and Deals whatever deals were made uh during those\ntimes were sealed with a handshake uh an act of symbolizing Mutual recognition\nand agreement even though it was pretty Elementary this method leveraged a form\nof auth authentication based on human contextual trust it was based on humans\nright it was based on trust and that's how people started the initial methods\nof authentication but as populations grew\ninteractions extended Beyond uh familiar circles uh like Beyond this soci Beyond\nthis Village implicit trust mechanisms fail to scale this cannot scale right\nbecause this person who is this whoever this is in the community the Elder\nVillage Elder that guy is not trusted in all the communities in all over the\nsociety in different different countries or continents right this method cannot\nscale so this marked the beginning of his search for explicit authentication\nexplicit o initially we said this was implicit o which is based on trust\npeople needed proofs of identity that could function independently of personal\nacquaintance independently of any person and that led to that led to seals and\ncryptographic era so by the medieval period Society needed this is society\nSociety needed a system that scaled Beyond personal recognition which we\ntalked about earlier just based on people of trusted reputation who can\nvouch for other people or other subjects or other deals so Society needed a\nsystem which is which can scale beyond that and during those times people came\nup with this system which is called a seal it was Wax Seal people who have\nwatched different movies or series of uh historical times you must have come\nacross this this is like some seal and this was know attached to different\nletters or different agreements as a some form of authentication or you know\nsome form of agreement and it was one form of early cryptographic mechanism a\nseal uh which was of a unique pattern and this is put on documents uh which\nacted as signatures today we have signature digital signatures and uh\nhandwriting based signatures this was one kind of signature during the\nmedieval period and these seals function as the first widely adopted\nauthentication tokens you can say these were one kind of authentication tokens\nduring those times and they were kind of a physical representations of identity\nthat relied on possession something you have if you have this seal you have this\nin your possession then you are said to be authenticated and you can verify\nyourself using those seals seals had their vulnerabilities they were prone to\nforgery uh marking the first recorded instan of authentication bypass attacks\nso we have in the modern times different types of authentication attacks one of\nthose kinds is a bypass attack a bypass attack basically means skipping the\nauthentication with malicious intents forging these kinds of seals for\nmalicious intents was one kind of bypass attacks during the medieval period and\nthis led to the evolution of more sophisticated mechanisms uh including\nthings like uh water marks and encrypted codes right used in different trade\ndocumentation setting a foundation for cryptographic thinking people started\nthinking more about codes how codes can evolve to prevent different kinds of\nattacks and forgeries and frauds and that led to the next era which was past\nphrases and shared secrets so we can say during the times of\nIndustrial Revolution during the of Industrial Revolution a lot of progress\nhappened in terms of machines right in terms of machines a lot of progress\nhappened and the whole world started to change and at the same time at the same\ntime communication systems also started to get upgrades\nCommunications systems also started to progress they started to evolve into\nmore secure and more advanced form of communications and during those times is\ntechnology called telegraph was introduced and Telegraph became a\ncritical infrastructure and with it came the need for secure message validation\nand operators whoever was operating these telegraphs they used pre-agreed\npass phrases you can say you can call it also password but there are some form of\npass phrases and that was an early form of shared secrets and these pass phases\nwere the same as static passwords like they are not dynamic they decided on one\nstatic string one static password and they used it as a pass among them and\nthat relied on the principle of we can say\nsomething you know earlier the principle was something you possessed something\nyou possessed which was a wax seal a some kind of token that you possessed\nthat you can show to verify yourself and that got evolved into something you know\nwhich is which is much better in terms of security and that was one step into\nthe evolution of which in the modern times you know as password that time it\nwas called P phrases and that that the principle whole principle of\nauthentication changed into something you know which is inside your brain or\nin some form of communication either written or verbal and after that we can\nsay we can skip all that to the modern times of computation computation\ncomputational architecture and all the modern authentication that we know of\nand the first form of computation which you already know is main frames main\nframes in the somewhere in mid 20th century and and authentication entered\nits first digital phase so in there is a story called in\n1961 researchers at mit's project Mac they were working with something called\ncompatible time sharing systems also known as ctss and they introduced the\nconcept of passwords for multi-user systems basically they were trying to\ncome up with some kind of system which will allow multiple users to use a\ncomputer without Shar sharing the data without sharing a users data between\neach other between each other and what they did was they stored password in PL\ntext which was in itself a very critical vulnerability and that came into view\nwhen one of them printed the password file in plain text because you can it\nwas a plain text file you can print the password and that was the time when that\nvulnerability came into place and people got aware of that and this incident the\nprinting of the password file this incident marked the Genesis of secure\npassword storage mechanisms right now we have this philosophy that password\nshould not be stored in plain text and this incident of someone printing the\npassword file in a printer that was the initial idea that motivated people to\nthe philosophy of storing passwords securely and that led to different\nInnovations like hashing that you use uh pretty pretty frequently today to store\npasswords in our databases and different cryptographic algorithms which\ntransformed passwords into irreversible fixed length representations so hashing\nis basically cryptographically so you can say there is some kind of algorithm\nit does some kind of computation you provide it a plain text uh string provid\nit and in turn it returns you a hashed string a hash string basically means it\nhas a computational algorithm it will transform that string the plain text\ninto a fixed length the length won't change it does not matter you provided a\nthree character string or a 100 character string the length of the hash\nwill stay the same depending on the hashing algorithm and it will provide\nyou the same result for the same string every time that was the promise of the\nhashing algorithm so these kinds of algorithms started to emerge during in\nthis era and authentication began to align with the principles of\nconfidentiality integrity and availability the core tenets of\ninformation security and then in the 1970s an explosion in in cryptographic\nresearch driven by the work of great people like Whitfield Dey and Martin\nHelman the people who have come up with cryptographic algorithms their invention\nof the Diffy Helman key exchange introduced the concept of asymmetric\nasymmetric cryptography enabling two parties to establish a shared secret\nover a untrusted medium that was the first time asymmetric cryptographic\ntechnique asymmetric cryptography became the backbone of modern authentication\nprotocols all the protocols that we have now those are all based on asymmetric\nkey cryptography and you they are also called pki public Kee infrastructure\nsystems and this era also gave the rise to protocols like karos which introduced\nticket based authentication and karos relied on trusted third parties to issue\ntickets that verified both the user and service identity which is a precursor to\ntoken based authentication system that we have now and we will shortly look at\nthose token based authentication methods right now we are just exploring how all\nthe dots connect together how the historical context led to what we have\ntoday led to what we use used today all the different algorithms mechanisms\nmethods and standard practices moving on if we go forward during around\n1990s when the internet was growing a need for scalable scalable\nauthentication methods was also Rising simple username and password based\nsystems were not enough and they were not strong enough against brute force\nand dictionary attacks that are new newly coming during those times and that\nled to something called that we have MFA which is multiactor\nauthentication so MFA came with the idea of a combination of different principles\nit combined let's say three things one thing is something you know with\nsomething you have with something you are basically something you know can be\npasswords or passwords or pins something you have can be cards smart cards or OTB\ngenerators right and something you are that is your personal identification it\ncan be biometric data biometric data like fingerprints or retina scans right\nand MF came with this revolution of combining different principles different\nlevel layers of principles that provide a combined security to all kinds of\nauthentication applications and because of that biometric authentication emerged\nas a groundbreaking development leveraging pattern recognition\nalgorithms and statistical models to identify users based on unique physical\ntraits however biometric systems introduce challenges of false positives\nnegatives and uh template security so that is also not enough biometric\nsecurity was not the on step solution for all the problems that were emerging\nduring those times and after that you can say we are finally into the modern\ntimes modern times we can which we can Call 21st century the time that we live\ntoday and in the 21st century the rise of things like cloud computing and\nmobile devices and API based architectures they demanded Advanced\nauthentication Frameworks none of the above authentication methods or\nFrameworks or principles were enough so we needed more advanced more technically\nrobust implementations of authentication and during and because of those Demands\na lot of different authentication components or authentication techniques\nemerged and among those we can say some of the important things are o o o 2\nthese are the ones that we still use today and these are the most popular\nones these are I'm just talking about the different comp components of\nauthentication that we are going to discuss soon another thing is\njwt's then we have zero trust architecture we also have for\npasswordless passwordless authentication system like uh web authentication\neliminate passwords entirely relying on public key and private key stored in\nHardware devices we'll discuss O2 n JWT shortly and then this and this is the\ntime that we live now and this is what the future looks like as of now during\nthe time I record this video we have a couple of candidates for the future of\nauthentication world we have decentralized identity decentralized\nidentity that that is created using popular Technologies like blockchain\nthey they offer a they offer a lot of features robust features for\nauthentication people are still they are still in early stages now and people are\nstill experimenting they are promising and a potential candidate\nfor future of authentication then the second is behavioral\nBiometrics we have this concept called post Quantum cryptography so post\nQuantum cryptography is basically the idea that once quantum computers start\ngetting used heavily they are going to break all the cryptographic algorithms\nthat we have now that provide the sense of security that we have that our data\nour passwords our sensitive data is secure because of these algorithms we\nhave RSA and um different different types of public key private key\nalgorithms that are very difficult to break with the hardware with the\ncomputation capability of systems that we possess today so once quantum\ncomputers get uh used heavily uh once they get common enough all these\nalgorithms cryptographic algorithms they are going to break because quantum\ncomputers are very very very fast in terms of what you have today and these\nalgorithms are not made for that this concept called post Quantum uh\ncryptography is basically cryptographic techniques that are even secure for\nquantum computers we already have some algorithms as of my knowledge and you\ncan read up on that all in all this is pretty much all the historical context\nthat we have of authentication in our knowledge with that let's move on to the\ntechnical part the interesting part that you as a backend engineer should have\nthe knowledge of before I jump into authentication I want to introduce three\ncomponents that we are going to discuss again and again uh in this whole video\nso I feel it's better to introduce them right now before we start anything so\nthat you have some kind of context or some kind of familiarity when you hear\nthem and these three are very important in all the authentication on\nauthorization flows though they are sessions J WTS\ncookies and we'll discuss what are they let's start with sessions when the web\nstarted when the whole internet game started\nHTTP protocol that we have that we use for our client server communication if\nyou have watched my HTTP video then you'll understand what I'm talking about\nHTTP emerged as the backbone of all the commun communications between client and\nservers and by Design by Design sttp was stateless stateless stateless which\nbasically means HTTP treated every request as an isolated interaction so it\ndid not remember what was what was your previous request every request had\nenough and all the information that the server needed to perform the business\nlogic that's what it basically means for a stateless protocol it has it had or it\nhas no memory of any past exchanges and this was enough and this was ideal even\nfor the earlier web the web that we started with which mostly consisted of\nstatic Pages static images and data that people mostly read about just you look\nat a website you read something and you move on rable data static data that we\ncan call and people did not need continuity people did not need memory\nbetween different requests that was not a need when it was designed\nhowever however when we evolved as the web transitioned into Dynamic content\nand it happened very soon and when it evolved into Dynamic content the\nstatelessness statelessness of HTTP became a bottleneck how because we had\ndifferent types of websites a highly interactive websites websites like\ne-commerce sites which need to remember what are the items in your cart that is\none example of the interaction or How could a user remain logged in while\nnavigating between different pages that was another uh need and these questions\nmarked the beginning of stateful interactions in the web stateful\ninteractions it was the need for stateful interactions otherwise modern\nwebsites modern needs of Technology was not uh met that's why we needed the web\nto be stateful which HTTP was not and that's why the concept of session came\ninto play a session basically provided a way to establish temporary server side\ncontext for each user and it has some kind of memory about the user that the\nserver can have to remember the user when the user makes a request next time\nso how did it work first part was session creation when a user logged in\nthe server created a unique session ID and it stored it along alongside the\nrelevant user data whatever the users's role name whatever the data the server\nneeded uh to do different kinds of operation again and again it stored it\nwith the session ID whatever the cart items of the user is all those\ninformation that the server needed repeatedly it stored it in a persistent\nstore it can be a database or it can be a redis store which is a inmemory uh\npersistent store compared to database which is a file based persistent store\nso the server stored the session ID with all the user data the cart items or\nwhether the user is authenticated or not all these different kinds of information\nwith the session ID is stored in some kind of persistent store and the second\nphase is the session ID this key unique key\nwas sent to the client which is a browser the server is somewhere in the\nremote it's it is somewhere in the cloud and the session ID is sent to the user\nwhich on a browser as a cookie we will see what a cookie is but it is sent to\nthe user as a cookie and all the requests and all the requests that the\nclient made after that after the session being created included that cookie with\nthose requests so that the cookie can have the session ID and using this\nsession ID server can fetch this information all the cart items users\ndata from this persistent store it can be redes or itav so basically this\nsession IDE enable the web to have some kind of memory enable the servers to\nhave some kind of memory for the sake of the user for the sake of the client and\nin the third phase you can say these sessions were short lift which means\nthey had an expired date so let's say if the session's expired date is 15 minutes\nso after 15 minutes the user sends this session ID to the server and they are\nexpired so the server creates another session and sends the session ID stores\nthe user data in the persistance store and that's how it works again and again\nthat's how this whole session thing works and initially initially sessions\nstarted with file based sessions those were the early session implementations\nand that stored data in files on the server even though they were simple that\napproach suffered from scality issues as the number of users grew and server\nstarted to implements implement database packed sessions to handle large user\nbases and to make the server scalable sessions data moved to databases which\nprovided faster lookups and persistent storage across server restarts that data\nstored in the databases and even though the server restarted the session became\navailable the session stayed available to the server and eventually we remove\nwe move to distributed architectures and during this era the session storage the\npersistent Store where the servers stored the sessions and the users\ninformation move to distributed storage distributed storage like that we have\nredis which is a inmemory store inmemory store basically means storing data in\nRam compared to hard disk that's a on line explanation or mcast which is also\nanother in memory store and servers started to use these these were\ncomparatively faster as compared to DB lookups because they were in memory\nstores so that's how of the uh storage evolution of sessions happened and we\nstill use sessions even today for the same purpose to provide some kind of\nmemory to our servers moving on then we have is jws and this is a very popular\ntechnology in the current times these are very popular and we will see why\nthey become popular what are the advantages that they offered as compared\nto our traditional session based uh authentication approach what are the\nadditional benefits of using jts that cause their popularity so continuing our\nearlier session discussion by the mid 2000s by the mid 2000s web applications\ngrown into globally distributed systems and stateful systems stateful systems\neven though they were effective they caused a bottle link because first thing\nmemory maintaining session data for millions of users became costly so we\nright now we are talking about what led to the emergence of gilies so first\nthing is retaining session data for thousands and millions and billions of\nusers became a large overhead for a lot of servers second thing is\nreplication what this means is in distributed architectures synchronizing\nsession data across servers or regions one server could be in one part of the\nWorld another server could be in the opposite part of the world so\nsynchronizing the user data across these servers from different regions introduce\nlatency so the authentication flow introduced latency which is basically\nmeans delays in authenticating the user and consistency challenges because of\nthe synchronizing need and that led to the birth of\ngwts JWT because developers sought a solution\nthat could offload state from the server while maintaining security and integrity\nthat's what people came up with jws jws which were formalized in the\n2015 were a stateless mechanism stateless this is the word to focus on\nstateless there is stateless mechanism for transferring claims we'll see what\nclaims are shortly transferring claims in a stateless manner between different\nparties let's say two systems transfering claims in a stateless manner\nbetween two parties or two systems and the key Innovation here was\nselfcontained JWT s selfcontained tokens JWT tokens contain\nuser data stuff like user ID their role and the cryptographic signatures in one\ntoken which are base 64 encoded if we go to the website called JWT doio\nwe can take a look at what a JT looks like okay so this is what a JWT looks\nlike this is the whole base 64 encoded JWT string and JWT has three parts so to\nget a high level idea we can look at the parts which are first part is the header\nthe header basically specifies metadata metadata such as the signing algorithm\nwhich can help uh the server to get some information on what was the signing\nalgorithm that is used while the J was being created so the first part the\nheader basically contains metadata about the JWT itself stuff like the signing\nalgorithm and the second part which is the payload data the data of the user\nthe data that we store in the JWT the data that we actually need this also has\nsome kind of format that we typically follow so the first thing is Sub sub is\nthe field where we usually store the users ID we store the user ID and the\nuser ID can be in any context it can be user ID uh from your database it can be\nuser ID from an au provider it can be any user ID from any context this is\njust a storage mechanism right you store the user ID of the user in the sub field\nin the IAT field this stores when the JWT was issued that is the information\nthe I field stores which means basically means issued at that's the full form of\nIAT and then we have optional Fields you can store the name of the user and the\nrole of the user whether the user is an admin is a member or it is a role of\neditor or a viewer or writer whatever the role is you can store information\nlike like that different kinds of information in different kinds of fields\ninside the payload this is the part where you can store information and the\nlast part is the signature of the JWT to verify that whether you are the one who\nissued it whether this data has been tampered or not right and you can do\nthat with a secret key that you can generate and keepy for yourself only you\nhave an access to it if someone makes any change to the JWT and you verify\nthat JWT with your secret key then the validation will fail because someone\nmade some changes to the JWT and it is not tamper proof anymore and now you\nknow that so that is not a JWT valid JWT anymore that's how you can verify users\ndata in in a stateless manner now you don't have to store the session\ninformation anymore whole session verification mechanism just became\nstateless it it happens with every request it is very lightweight and saves\na lot of storage cost so these are the advantages that jws offered that made a\nlot of things in the authentication workflows very simple the first thing\nwas statelessness which basically enabled no\nserver side storage costs second thing was scalability\nscalability scalability basically means a lot of servers these days use the\nmicroservice architecture and distributed architecture and which means\na cookie issued from one server cannot be used for a server which is in another\ndomain as a in a microservice architecture so using technology such as\nJWT enabled a client to send the JWT to different different servers and all the\nservers will have the secret key of the JWT using which they can decode the jwd\nand verify the users's identity for now a lot of servers a server can be scaled\nto a lot of instances and they won't have to worry about user authentication\nanymore all the servers can do the user authentication at the same time using a\nshared secret key and that was one of the major benefits of gwts which and the\nthird thing is the portability and because because of the lightweight\nnature because of the URL friendly nature because of the base 64 encoding\nstring format jwt's could be passed between different systems they could be\nstored in local storage even though you should not do that they should they\ncould be stored in cookies and a lot of different Limited Space storage systems\nthey're very portable you can send them in url values and a lot of other\nadvantages that JWT is offered in terms of portability and on top of that they\nalso introduced some challenges One Challenge was token the the of token\nsince JWT was stateless it was stateless there was no stored mechanism that the\nserver used to uh validate the user's identity if someone has access to your\nJWT now they can impersonate as you they can use your JWT to perform actions on\nbehalf of you that is the one disadvantage of gwts and there is no\nmechanism from the side to invalidate that token until it expired manually\nunless unless the server changed its secret the secret using which the server\nverified all the users now the problem with that is if the server changes the\nsecret to invalidate one token now all the users of that platform of that\nsystem will have to login again and get new jws just because the server wanted\nto in validate token of one user that was one thing second thing was\nrevocation so for some reason if the server wanted to to revoke some users\naccess or some users uh access to the platform or access uh in different\nsystems the server could not do that because jws since they are stateless you\nhave no way to track the status of a JWT token until they are expired you cannot\nreally do anything so these are the two major dis advantages that came up\nbecause of jts because of the use of jws even though these days we found some\nkind of solution for that for example for the first thing and the second thing\ntogether we use a hybrid approach of using gwts so using a hybrid approach\nagain raises some questions first I'll tell you what a hybrid approach is which\nhe came up with to beat the above two advantages so this is how it works the\nuser logs in and the server sends it a token a JWT token which the user stores\nin its system okay and with every subsequent request to the server the\nuser sends a JWT in either a authorization header or in any other\nform or a quicky or anything okay and that's how the server gets the JWT it\nverifies the JWT with its secret key and make sure the user has proper uh access\nor it can identify the user that's how it works in a JW\nbased workflow so in the hybrid approach what we do is we combine statelessness\nwith statefulness what that means is in a jwd typical workflow we don't make an\nadditional lookup in our storage the storage could be a database lookup or a\ninmemory lookup like redis or mcash we don't do that we verify the JWT with a\nsecret key and we find out who the user is using the user ID that is stored\ninside the J WT that's it we don't do any additional storage lookup now in the\nhybrid approach what happens after you verify the gwts after you uh have the\nverification step passed you maintain a blacklist of gwts in your persistance\nstorage again it could be a database call or a inmemory call for redis or\nmcast and using that you can temporarily block some users revoke access for some\nusers uh in case of some users account being hacked or some user doing some\nmalicious activity you can temporarily block their access using a blacklist now\nthe question it raises is the whole point of using JWT was the statelessness\nand if you are doing a persistent storage lookup for checking the validity\nof the jwd why not do the statefulness why not do the stateful approach in the\nfirst place which can provide this advantage and it is considered more\nsecure so these are the kinds of questions that we frequently see uh in\nthe industry typically the advice is don't think about all these different\nauthentication strategies and all go with a Au provider we have a lot of\ndifferent different types of authentication providers we have ozero\nwe have the modern Alternatives like Clerk and all that's their headache\nthat's their headache to worry about what technologies what components of\nauthentication to use which is more secure which is a more secure way which\nare more secure techniques and everything the starting from the\nalgorithm to Hash to salt all the different parts all the different\nheadaches of authentication which which creates a secure authentication system\nthat's their headache it's very important if you are building a medium\nto a largly complex system it's a good idea to go with an external o provider\neven though it's it's a good idea if you're learning backend engineering to\nimplement your own o understand how the different parts work and understand the\ntradeoffs understand the advantages and disadvantages everything after that in a\nproduction system go with au provider go with an O provider unless you're very\nconfident about your authentication workflows okay that is my two sents\nabout what you should do with all this confusion about what is right what is\nnot and all and the third thing that we have is Cookie and we have already\ndiscussed and talked about using cookies in in the earlier two examples for\nexample in the session based authentication uh first I'll explain\nwhat a cookie is Cookie is basically some way of storing a piece of\ninformation it can be any string any value it is one way of storing this\ninformation in a user's browser from the server side that is the important part\nusing cookies using cookies servers now can store some information in client\nbrowsers from this side so this is a very nice features uh offered by\nbrowsers so using the HTTP request workflow a servers can store some kind\nof information in the users browser given given certain conditions\nconditions that that cookie is only accessible to that server a server\ncannot see other servers cookies so that is a nice feature that is a nice\nsecurity feature offered by the browsers so using this whole mechanism cookies\nand all a cookie set by one server in a client's browser will be sent in all the\nsubsequent request to that server so this whole Workplay of cookies the\nserver storing the cookie in the users browser and the cookie being sent to the\nserver with every subsequent request from the users browser this whole\nWorkplay enables that during the authentication workflow so let's come\nhere during the authentication workflow first a user a client authenticates with\nusername and password to the server to the server and if the authentication is\nsuccessful the server sets a cookie we can say a cookie with the authorization\ntoken this looks something like V A JWT token or a session ID it can be whatever\ndepends on the implementation it stores it in the client's cookies and in\nsubsequent request the client's browser it can be Chrome Firefox Papa whatever\nit is tends this information this cookie key to the server so that the server can\nvalidate authenticity of the token and it can authorize it can it can identify\nthe user and it can authorize the user and do all the uh workflows that comes\nafter the authentication so cookie is a very nice way to automate the process of\nserver uh sending the token to the client and the client sending the token\nback to the server with every subsequent request all of this can be done from the\nserver side using the mechanism called cookies because the server has access\naccess to client cookies that is stored in the browser from the server side that\nis the part to focus on and that was about three major components of modern\nauthentication now let's move on to different types of authentication types\nwe pretty much already have discussed what are the two major types of\nauthentication but here we can keep that as a topic at hand and discuss them at a\nvery high level the first part is stateful authentication and the\nsecond is stateless we have also other methods of authentication we have API\nkey based authentication we also have o 2.0 based authentication and these are\npretty much all the major types of authentication that I can think of that\nwe use as backend engineers in our day-to-day lives okay let's dive into\neach of these types and see how they work and what are the advantages\ndisadvantages and when should you use which one and\neverything about them pretty much okay let's get into stateful authentication\nfirst one is a stateful okay all in all this is what stateful authentication\ntypically looks like okay we have client here it is a browser let's say it is a\nbrowser it's a chrome we have the client here client and we have the server here\nokay first step during authentication the client sends\nusername and password to the server username or password or email or\npassword whatever the authentication mechanism is to the server the server\nchecks the validity and the correctness of the password and the username on the\nemail and all if they are correct if the user is eligible to authenticate into\nthe platform the server generates a session ID we have talked about sessions\nalready and this workflow also already but let's just discuss it again a\nsession ID and the users data whatever it is and bundle s user data bundles\nthem and stores in redis it can be a database also but mostly platforms use\nredis because of the fast read time Fast Access time of the redis as compared to\nour traditional databases okay and it stores in the redis and it sends the\nsession ID back to the client back to the client in a cookie in a cookie\nstores it inside a cookie a HTTP only cookie which means JavaScript cannot\naccess the cookie JavaScript cannot access the value of the session ID and\nthe server sends the session ID to the client back in a cookie and because of\nthe nature of the cookie because of the nature of the subsequent request\nattachment quality of the cookie what happens is all the request that happen\nafter that one will have this cookie where where the session ID is present\nand the server will get this cookie the server will take that session ID and it\nwill check the existence of that session ID in redis the expiry of that and the\nuser data and everything and it can identify the user it can authorize the\nuser or whatever it wants to do and the user can has the ability to call the API\nthat's how the typical stateful authentication workflow works and the\nsession ID can be any cryptographic random string it can be JWT token\nwhatever it depends on the implementation and that's all about\nstateful authentication moving on to stateless authentication that's\nstateless and this is how stateless authentication works we have a client\nagain we it's a browser and we have a server the user sends the username or\npassword the email and password and password in the first request while the\nuser is trying to login the server checks the authenticity of the username\nand password and if they are correct if they are correct the server generates a\nsigned JWT token sign JWT token with a secret key the server has its own secret\nkey using which it can sign gwts and it can verify gwts this is very important\nit has to be stored somewhere securely so that it can sign or verify jws and\nthe server creates a new JW token which has the users information things like\nuser ID user role Etc and it sends the JWT back to the client okay then in all\nthe next requests if the client wants to identify itself it wants to authorize\nitself what it can do is it can send the JWT back in a header you can send in any\nway but the standard is you can send in a header called\nauthorization and you paste the jwd here and you send it to the server the server\nextracts this token and it tries to verify it using the secret key that it\nhas and it verifies it and then it can find out the user's ID and if the\nverification is successful the authentication is successful and the\nuser can uh have a successful API response otherwise the Ser will throw an\nerror called unauthorized or forbidden or whatever the convention is and that's\nhow a stateless Authentication works because because it's called stateless\nbecause in a stateful authentication we need to look up a persistent store it\ncan be a database or it can be red and in a stateless authentication whatever\ninformation that we need about the user is stored in the token itself in the JWT\ntoken itself which is a signed token which is a signed token and to verify\nthe authenticity of the token we have a secret key so it's a self sustainable\nself containing token which has the users information that's why it's called\na stateless token or a stateless method of authentication now when should you\nchoose which one so to answer that you have to understand the pros and cons of\nboth the different uh kinds of authentication mechanisms in a stateful\nauthentication system the pros are you have the pros\nare first you have centralized control you have centralized control control\nover all the sessions you have real time information of all the active sessions\nof your users right because you have a persistent store to verify to get that\nkind of information and using that you can easily revoke access of a user you\ncan revoke a session you can log out a user because you have the session you\nhave the control in your hands and it is well suited for applications with modern\ntraffic and strict session requirements and in my opinion most applications\nshould go with a stateful authentication because because of the secure nature and\nthe convenience of revoking tokens and revoking access of users and having\nreal-time information about all the users access and the challenges of a\nstateful authentication is of course uh The Limited scalability issues and the\nhigher operational complexity with distributed systems when you have\nmultiple servers in multiple regions and all you have latency issues and all so\nthose are some of the challenges of State full authentication in large\nsystems in the same way a stateless authentication has Pros the cons of\nstateful authentication are the pros of stateless authentication the pros like\nscalability and no session store dependency and it's ideal for\ndistributed architectures and mobile friendly applications where cookies are\nnot a thing and all those cons of stateful authentication are the pros of\nstateless authentication but the cons are here is token revocation is complex\nand that is one major issue that once you issue a jwd token until it expires\nyou have no way of uh revoking access of that user um and it could be due to\nvarious reasons because the user account might get compromised and the user\ncontacted you using your support channels that the user wants to revoke\nthat session the user wants to uh stop access to their account so so you don't\nhave any way of doing that apart from changing your secret key of the JWT\nwhich will make all the users of your platform to log out which is a serious\ninconvenience so what can you do in this Cas is you can device a devise a hybrid\napproach where the main web app the main web app which runs in a browser you can\nchoose stateful authentication for those clients you can have a hybrid approach\nwhere you authenticate your browsers your web apps using a stateful nature\nand the servers uh and the clients that use your apis in mobile apps where uh\nmobile apps or third party Integrations between different servers they can adopt\na stat stateless authentication for scalability and simplicity so you can\nhave a hybrid approach like this to beat the cons of both the authentication\nmethods and now the third type of authentication method that we can\ndiscuss is API key based API key based authentication K us to a completely\ndifferent set of use cases as compared to the stateful and stateless\nauthentication so the primary reason people came up with API key based\nauthentication and before we get into that let me explain how it works so this\nis how it works uh you go to a platform and you have access to the platform and\nyou in the UI what you do is you go and click on generate an API keyy okay you\ncan generate an API key uh then you will get an cryptographically random string\nuh cryptographically safe random string some some some string and you can use\nthat string to gain access to the server which caters to this UI okay this server\nwhich is responsible for this UI now you can directly gain access to this server\nusing this API key this is primarily why people with the concept of API keys so\nto give you one example everyone is familiar with the interface of chat gbt\nright so in chat gbt you can open and you can type something in the search bar\nand you'll get an response you'll get a response that is the UI okay that is the\nUI that we interact with but to cater to that UI there is somewhere in in the\ncloud not one server there are a lot of servers those are the servers that are\nresponsible to send the response back to the client and the client\nrenders that text in your UI in a very nice userfriendly way so that you can\nread and you get what you are looking for that's how the typical interaction\nworks but open AI the company that created chat GPT they also have feature\ncalled API keys keys and why do people use that so that people who don't want\nto use chat gbt people who have different use cases of the the model the\nllm model uh that powers chat gbd it can be any model GPT 4 GPT 3.5 and all they\nwant programmatic access to the server they want to let's say they might want\nto create a different UI for their use case and they want the servers response\nthe chity server response in that UI how can they do that or they want the\nservice response the response of jat gbt programmatically in their server they\ndon't want their UI they are building some server they want the response of\nopen AI uh chat GB and different models in the server programmatically okay not\nin terms of UI they need access in terms of programs for these kinds of use cases\nto provide access to your server not your UI not your platform to provide\naccess to your server to a different set of users in a confined manner in a\npermission based manner in a expiry based manner to provide that kind of\naccess people have come up with API keys so that I can use this key whatever key\nthat has been generated with some set of permissions some set of expiry dates I\ncan use this key and I can attach this key in some way in headers or depending\non the server's implementation I can send this key back to the charity server\nwhatever ever the server that has provided me with this key and I can do\nall the operations that the servers native platform can do I can also do\nusing the apis okay I can get the access to the server using the API key that's\nthe primary use case of API keys and people have come up with it for\ndifferent different advantages first thing is uh they are easy to generate\neasy to generate you just go to the UI you click on generate and that's it you\nget an API key and you can use that API key to grammatically access the server\nsecond thing they are ideal for machine to machine communication what machine to\nmachine communication means is what we generally see or what we generally use\nis client to machine communication what you can say client to server\ncommunication here we have a UI we interact with our Mouse we interact with\nour keyboard we interact visually with the server right with the UI and the UI\nsends programmatic requests to the server and the server does the business\nlogic and sends a response back and the user renders those information renders\nthose responses so that we can understand and we can again uh interact\nwith it that's how the interaction works it's visual interaction it's client uh\nit's it's human interaction there is another kind of interaction which is\ncalled machine to machine interaction machine to machine interaction so let's\nsay I have a server okay I have a server which to which I have a UI here for my\nplatform and this is the server for my platform and this server\nwants to use the chat gpts capabilities so let's say in my UI the user types\nsomething some string and the US send a request to my server and says summarize\nthis for me summarize this paragraph for me what I want to do I want to use the\nexisting capabilities of chat GPD server so that I can summarize that paragraph\nand send it back to the user now this is called a machine to machine\ncommunication because my server visual machine there is no UI here there is no\nhuman interaction here everything is done programmatically I have written\ncode here in whatever programming languages and that's how the server is\nrunning so This Server uses the API key that I have generated using chat gbt's\nplatform uh interface my server using this API key to make a request to the\nchat JD server and it identifies uh my identity it it authorizes myself the my\nidentity whatever plan I have whatever uh\nquot I have remaining whatever access I have using this API all this information\nis maintained in the server site chat GT server and they can identify they can\nfind out that those information using the API key okay and I can use this key\nand I can get response from the chaty server and I can send the response back\nto my UI so this is how a machine to machine interaction looks like I can use\nmy server to make request to other servers and get that response so it is\ndifferent from like visual interaction or human interaction or uh UI to machine\ninteraction API keys are ideal for these kinds of interactions because if because\nif you imagine in a typical in our stateful or stateless uh based\nauthentication methods we need visual triggers we need human triggers because\nthere is a login form where we manually have to type it out the username and\npassword after to send this request there is uh some server validation\nhappens and the server sends back a GWT token and you have to save that suar and\nall these complex interactions require some kind of human interference and\nthat's why they are called client to servey interaction and in the machine to\nmachine interaction the a simple workflow is you provide the machine a\nsecret key it saves that in whatever environment variable or some kind of\nSecure Storage and it sends that in all the requests to identify itself instead\nof doing all the username password token and all those workflows and API keys are\nideal for those kinds of interactions for programmatic interactions or machine\nto machine interactions now let's get into our last major type of\nauthentication which is O 2.0 or open ID connect whatever it is called okay why\ndo we need this why did we come up with it and everything surrounding it up\nuntil now up until now we have discussed different types of authentic State pull\nand stateless and API keys and all we have a very simple setup right right we\ncreate an account with uh username and password and every time you have to\nprovide that authenticate yourself and you get a token and you return all and\nthat's how the whole workflow works and the more platforms you visit the more\nsites you visit in your computer in your system the more credentials you create\nthe more credentials you have to remember or the more credentials you\nhave to maintain if you use a password manager this approach became a little\nproblematic why first thing is security risk reusing password was very common uh\nduring the initial era now I hope people have become more aware of this and they\nuse uh automatic password generators and password managers to maintain their\npasswords but during the initial internet era reusing passwords like 1 2\n3 4 5 or the string password was very common and a single breach compromised a\nlot of accounts the first thing with this password based approach was Secure\nrisks reusing the same kind of passwords in multiple platforms or multiple\nwebsites the second thing is fatigue all this huge number of accounts\nto manage was very overwhelming for a single user and that gave rise to what\nwe call it's a very important Concept in oath is called delegation Del sorry\ndelegation what delegation means is we quickly came to a class of problem a\nproblem for example websites one website started needing\naccess to other websites resources for example a travel app a travel app like\nuh a hotel booking or a train booking app it needed access to access to Gmail\nyour Gmail account to scan your flight tickets to programmatically scan your\nflight tickets that is one example of one platform one website needing access\nto resource of other platform the same way a social media app it can be\nanything Facebook or Twitter or anything there social media app that wants to\nimport contacts contacts from other platform it it can be another social\nmedia platform or it can be your Google contacts anything right it wants to\nimport Resource One platform wants to import resource from another platform\nprogrammatically see now you see the pattern this was a problem that this was\na use case that we started to see uh which eventually uh gave rise to W so\ninitially what happened was the initial solution that people came up with this\nissue of how one platform or one website can get get access to resources of\nanother platform this is how you just use users came up with the solution they\nwhat they did was they shared passwords they started sharing passwords and this\nwas disastrous this led to so many disasters because sharing a password\nmeant giving full access giving access to everything in your account everything\nin your system and there is no way to limit permissions and the second thing\nwas it was impossible to re roke access it is impossible to revoke access\nwithout changing your password everywhere since users used passwords\nsame passwords everywhere and providing your password to one platform so that\nthat platform can access the resource of another platform meant if you wanted to\nrevoke the access permanently from your side you have to change your password\nnot just in this side you have to change your password from all sides because now\none platform has access to your password and it can do anything it wants which is\na huge security issue that came up with this solution of sharing passwords for\ngiving platforms access to resources of another platform okay that was the\nsolution people came up with initially right now we have a problem that we\ncalled delegation problem a delegation problem which basically means providing\naccess of one platform to another platform providing resources of one\nplatform to another platform programmatically by a user and that was\nthe time in 2007 the birth of O happened which basically meant open\nauthorization and it was not just a protocol it was a very revolutionary\nidea it it it it made so many things easier so many things easier in our\nprogramming world that we have now so historically what happened was a couple\nof engineer a couple of Engineers from companies\nlike Google or Twitter started working on standardizing a way so that users can\naccess user can share access from one platform to another platform which is\nthe delegation problem and what they did was they were trying to find a way to do\nthat without sharing passwords which was a huge security risk so they came up\nwith a technique of sharing tokens sharing tokens to share access\nthe idea was this token has specific permission so a password has all the\naccess to your user account while a token has specific access to a specific\npart of your account for example if you share your Google password with me I can\nI can I have access to everything I can view your Google photos I can see your\nGoogle Maps history and I can look at all your contacts and I can um see your\nyour calendar I can add to your calendar I can remove everything I delete\neverything I can do everything I I can I want using that password but let's say\nif you share a token and that token only has capability to read my contacts okay\nnot delete my contacts not add to my cont Del my contacts now I have\npermission for a specific part of a specific platform that you access that\nyou have that I can access now I can read your Google cont tax so that was\nthe idea that they came up with sharing tokens instead of passwords so there are\ndifferent components uh of the technique that they came up with first was the\nresource owner the second was the client third was resource server and the fourth\nwas authorization server and first thing who is the resource owner the user who\nowns the data so in this case let's say it's you you are the resource owner who\nis the client the app that is requesting access for example we have a uh social\nmedia app let's say it's Facebook and it is requesting access for your contacts\nfrom your Google account so in this case client is your client in this case is\nFacebook who is the resource server in this case it is your Google account\nwhich is the Google server the resource server is the authorization server this\nis the server who issues the token the token for authenticating the user this\nis the token that is issued by the authorization server after\nauthenticating the user so this is how the typical flow of O 1.0 look like so\nwe are still talking about wor 1.0 we will we are yet to reach the wor 2.0\nwhich came after this for a couple of reasons that we'll discuss this is what\nthe what 1.0f flow looked like first the client redirects the user redirects the\nuser to the authorization server OD server okay redirects the client to the\nOD server the client the client who is the client in this case it is Facebook\nFacebook redirected you to the authorization server now what happens\nnext the user authenticates and grants permission you click on yes I allow and\nthese are the permissions that I want to give this server and you do that after\nthat is successful in the third step the authorization server the server that you\nauthenticated that you give all the permissions to that authorization\nservers sends token to the client client who is this client in this case it is\nFacebook it sends the token to Facebook now the client uses the token whatever\ntoken it got from the authorization server it uses the token to access the\nresources what is the resource in this case your context which is in your\nGoogle server so that's how Facebook a client get access to another platform\nwhich is Google in this case another platform's resource which are contacts\nin this case programmatically without you sharing the password with specific\nset of permissions so oath 1.0 solved this problem in a very beautiful way\nwhich eradicated the problem of sharing the password to share access but then\nthe oath 1.0 protocol evolved and we ended up with oo 2.0\nwhich came around 2010 or so oath 1.0 was pretty revolutionary it was pretty\nuseful but it had some limitations one of this was it was one of it was it was\nvery complex for developers to implement the whole flow was pretty complicated\nfor developers at that time second it used cryptographic signature it used\ncryptographic signatures which was very error prone so these are the two\nlimitations technical limitations that what o 2.0 did was first thing it\nintroduced beer tokens which is much much much more simpler in the whole o\nworkflow it is more vulnerable but it made implementations more simple second\nit allowed developers it allowed developers to choose flows based on the\napp type depending on whether the your app is a mobile or it is a server side\napp or it is a device only app or like for example device code app for example\nSmart TV depending on different different use case depending on your\ndevice that you are using these techniques on it it provided different\nflows a couple of flows that you might uh hear is au code flow authorization\ncode flow for server side apps server side apps second implicit flow implicit\nflow for browser based apps which is now discouraged due to security risks third\nclient credentials flow for machine to machine communication machine to machine\ncommunication like communication between two servers without any involvement of\nuser or browsers or any human interactions and fourth is device code\nflow device code flow is used in in devices where we have limited input\nwhere we don't have uh inputs like keyboards and Mouse and all for example\none of a major example is smart TV smart TV authentication uses a flow called\ndevice code flow okay and o 2.0 came with all these features it came with bar\ntoken and it came with all these different types of flows for different\ntypes of devices depending on where you are implementing your authentication but\none thing that I missed to say here was O was great for authorization was great\nfor authorization but but it did not solve the issue of authentication so if\nyou remember authentication is providing an identity saying who you are and\nauthorization is saying what can you do what all permissions do you have what\nall capabilities do you have in the platform and authentication is who are\nyou in the platform what is your identity what is your name what is your\nID and all and authorization is what is your permission okay so o solved the\nissue of authorization using delegation but it did not solve the issue of\nauthentication so that's when in 2014 or so people came up with open ID\nconnect or simply called oidc which was built on top of O 2.0's security\nmechanisms to fill the gap of authentication in the whole\nauthorization workflow so this is how it works what oidc did on top of oath was\nopen ID connect extended o 2.0 by introducing what you call it ID token we\ndid not have that in O 2.0 and the ID token was typically a JWT we have\nalready discussed JWT for the reasons for reasons like this because we will\nkeep coming across JWT is in multiple areas of authentication and\nauthorization that's why we discussed about jws in the initial part of the\nvideo so what open ID connect did was it introduced a concept called ID token in\nthe O 2.0 workflow an ID token was nothing but a JWT which\nhad information like user ID when they logged in which happened because of the\nfield issued at and the issuing authority who issued the token who was\nthe authority who was the platform that issued the token to this user and all\nthis information that was in the JWT the JWT also had information like\nthe user's name and the users email and all the information that the needing\nparty once from the other platform and because of open ID connect now you can\ngo to any platform and major pretty much all the platforms have this feature now\nyou can do sign in with Google sign in with Facebook sign in with Discord and\nthose features use open ID connect behind the scenes to take your identity\nfrom let's say you do sign in with Google so what happens is it takes your\nidentity your email and your Google image your Google profile picture your\nname and all whatever the profile information it asks for it takes your\nidentity from Google and it stores in their database or it just uses that to\nidentify you to authenticate you using Google without having its own\nauthentication mechanisms so that's the use of open ID connect it introduced a\nlayer of identification on top of O 2.0 so this is how a typical open ID connect\nbased workflow works works first thing the client in this case so let's say you\nwent to a platform you went to a platform for note taking the client and\nyou click on sign in with Google so this client the not taking app it redirects\nyou to the authorization server we discussed about authorization server\njust before it redirects you to the authorization server the user logs in\ninto the Google account since they did sign in with Google they log Lo in using\nthe Google account from the Google's authorization server not from the\nclient's server they do it from the Google's authorization server they login\nthey provide whatever permissions that was asked by the client for example\nreading the users email or the name or the profile picture whatever you grant\nthose permissions and the authorization server sends two things a authorization\ncode an authorization code and an ID token back to the client to the not\ntaking platform then what the client does in the second step it uses the code\nand an ID token is optional at this stage in some workflows and when the\nclient uses the Au code the authorization code in the Second Step It\nexchanges the authorization code with the server with the with the resource\nserver for a access token for a access token on behalf of the user and an ID\ntoken if did not get the ID token in the first s it gets an ID token toen in the\nsecond step and the ID token will have jws and inside the JWT it will have the\nusers's ID users name different values of the user and the access token using\nthe access token the not taking server the client can do different different\noperations on behalf of the user in the resource server so now let's say the not\ntaking server asked for Google keeps access okay all the notes that you have\nin your Google keep it ask for that access during the authorization workflow\nso and you granted that access now when everything is done it uses the Au code\nto get this access token now the note taking server can store this token this\naccess token and it can get all your notes from Google server using this\naccess token on behalf of you now that's the use of open ID connect now the\nclient platform the not taking platform can authenticate on behalf of you it can\npose as you it can appear as you to the Google server and it can ask for stuff\nwhatever the stuff it asked permission from you not any uh kind of stuff only\nthe stuff it has permission for in this case all the notes from your Google keep\nokay that's how the whole workflow works so you can imagine or 2.0 and open ID\nconnect together as security guards or key makers of the digital age of the\ndigital Modern Age they ensure that no one not a user or a platform gets more\naccess than they need or then they have asked for in the first place from the\nuser so they only get access to those resources that they have access for that\nthey have permission for and protocols like o 2.0 and open ID connect make sure\nthat it happens it stays like that and together these two revolutionary\ntechnologies have transformed the internet from a password sharing\nchaos into a secure into a secure modern interconnected system and because of\nthese two technologies we have so many new features in so many platforms that\nwe can integrate one system into another we can do different types of uh resource\nsharing we can type do different types of permission sharing and all those\ndifferent things that can happen because of O 2.0 and open ID connect now the\nquestion is when should you use which type of authentication now that we\ndiscussed the four major types of authentication that we use uh in the\nmodern age that you should be aware of as a backend engineer which technique\nwhich type of authentication that you use in which kind of situation so this\ncan help you decide on that so these are some of the thumb rules stateful\nauthentication using a session ID or a GW taken and a persistent storage you\nuse stateful authentication for typically all your web app based\nauthentication work workflows uh which comprise of pretty much a large portion\nof our SAS based models right that's a stateful authentication is ideal for\nthat kind of scenario where user specific session data is stored on the\nserver okay State stateless authentication is ideal for apis or\nscalable systems which have distributed servers all over the world and where\ntokens carry users info or users data we have o authentications\nthis is ideal for third party Integrations and providing login via\nexternal providers like Google Facebook Discord and all we have API key based\nauthentication which is ideal for server to server or machine to machine\ncommunication or a let's say single purpose client access to apis so that's\npretty much all the four kinds of authentication and a simple thumb rule\nto decide you on when to use what in my experience you will use stateful\nauthentic and stateless authentication most of your times when you're building\nyour apis okay and with that we have pretty much talked about everything that\nyou need to know as a backend engineer about authentication that you need to\nunderstand about authentication and now we can move on to authorization this is\nnot as vast as authentication but just you can still get an high level idea of\nwhat it is about as I have already mentioned the the on line explanation of\nof authorization is authentication is basically the who which means who the\nidentity of the user and authorization is the permissions of the user what a\nuser can do and authentication is who the user is in the platform those are\nthe two questions that can help you understand the difference between\nauthentication and authorization now moving on to authorization what was the\nneed of it why did people come up with this concept called authorization\ncircling back to our example let's say we have a user that logged into our\nsystem we have a server and let's say it's a not taking platform\nit's a not taking platform and the user logged into our platform or logged into\nour server using the appropriate credentials so it provided the email or\npassword or whatever the credentials need are and it authenticated itself\ninto the platform now it can create notes it can delete notes it can update\nnotes whatever the typical function it of a not teing platform is that's one\npart second part comes is you as the creator of this platform is a creator of\nthis platform you need to your platform has an ability or let's say a delete\nfeature and the delete feature actually does not delete the note permanently it\nstores the note in kind of a recycle bin or a trash can so the user has the\nability they can either delete it permanently or it will will get\nautomatically deleted after 30 days after 30 days let's say all these notes\nmove into another Zone they get deleted for the user but it don't get\npermanently deleted from the database they move into another Zone let's call\nthis dead zone it all the nodes after 30 days they move into this Zone called\nDead Zone okay and now the requirement is you as a creator of the note taking\nplatform you want to is these notes programmatically using another UI called\nadmin UI so you are the administrator you're the Creator UI or another UI\ncalled Creator UI you as an administrator of this platform or a\ncreator of this platform want to have some permission some capability which\nare not granted to all the users of this platform which are not granted to every\nuser you want special permissions for this platform and you want to create\nanother UI for yourself in for this case one solution for that is one solution\nfor that is you can let's say come up with a random string and you can send\nthe string with each API and using that you can say that okay so uh the server\nwill identify that this is coming from the Creator give the access to those\ncapabilities which are not accessible to all the users now the problem with that\nis this is this has security flaws since you are sending this special string this\nis this god mode string in your apis if someone intercepts this string they get\nhold of the string they can do a lot of uh disastrous thing to your platform\nthey can entirely clean the DB they can mess with other users data they can do a\nlot of Stu there is a huge security risk with this approach that is the first\npart the second part is what if you want to give the same level of access the\nsame level of special access to other users other users let's say to your\nfriends are people who regularly maintain the platform you want to give\nthem these special permissions so now you have to either give that string to\nthem or you will create more strings and add the support in your server to allow\nfor those strings for the special permissions now as you can see the\nsystem just got more complicated than it was before and it is very difficult to\nmanage the access now and it is more prone to security flaws use cases like\nthis use cases like this I have oversimplified the use case but all in\nall what you can see is providing specific\npermissions providing specific permissions to specific users on a\nplatform is basically called authorization what authorization means\nis not all users in the platform have the same level of access not all users\ncan do the can do the same thing some users have different capabilities some\nusers have more capabilities some users have less capabilities some users have\ncompletely different set of capabilities than the other users and if you're\nbuilding a multi-tenant architecture let's say you are providing users to\ncreate organizations and in that organization you want users the admin to\nprovide different permissions to different kinds of members so you want\nto provide you want to provide the admin the capability so that the admin can\nassign read or write permission to some users and only read permissions to some\nusers so because of the need of these kinds of scenarios people came up with\nauthorization techniques and one of the most famous ones that we use still in\nthe modern age that you as a backend engineer should be familiar with is\narback which stands for role based Access Control okay and it's called role\nbased access control because this this is how it typically Works in a typical\nplatform we have different roles one can be a user role it can be an admin role\nit can be a moderator role we have different roles and different roles are\nassigned different set of permissions let's say a user role is only assigned\nread permission admin role is assigned read and write permission same way a\nmoderator role is only assigned read and write permission depending on the role\nand you can create create your own custom roles with own with its own set\nof permissions on different different kinds of resources let's say a notes\nusers have read write and delete but on a different resource let's say accessing\nThe Dead Zone notes that permission is only provided to admin you can go as\ngranular as you want using different roles and permissions and that's all\nthere is to it in our back and authorization so this is how a typical\nworkflow works so in a platform a user registers or a user signs up and the\nserver assigns it a role let's say it assigns it a user role or depending on\nthe use case it assigns it a admin role and in the subsequent request once the\nuser sends its token or it could be session ID using stateful session ID\nusing stateful authentications or a JWT using stateless authentication whatever\nthe means of authentication it is it sends its identification\nand the server can deduce what is the role of the user using that token or it\ncan do a database lookup and see what the assigned role of that user is\nwhether the role is user or the role is admin and depending on the role of that\nuser that is deduced early in the request cycle and it is passed on to the\nnext set of middlewares uh we'll talk about middleware and how the middleware\nchain works in the in a future video but imagine in the first entry point the\nserver checks your uh your identity and checks your role and it attaches that\ninformation so that the next set of code the next set of logic that next set of\nlogic can have access to this information so that they can decide\nwhether whether a user has access to the dead zone notes and the user will have\naccess to the dead zone notes if the role is admin and if the user role is uh\nuser if the role is user then the API will fail and it will the server will\nsend an error called forbidden with status 403 which means you don't have\nenough permission to perform this task or access this resource that's the whole\nidea of arback role based access control and that's pretty much all you need to\nknow about authorization and our back since we are talking about\nauthentication authorization and it's in the context of back and Inus two things\nthat I want people to know these two things\nis sending appropriate error messages in the authentication workflow and some\ninfo about timing attacks so the first thing error messages during the course\nof authentication there will be instances when you have to send messages\nto the client the user logs in with a certain email and you could not find\nthat email in your database and you send a very helpful message called user not\nfound or let's say the email was found but the password was incorrect so you\nsent a friendly message called incorrect password the same way the user tried\ninvalid credentials for sometimes for invalid credential for\na few times and you send a message account locked due to too many failed\nattempts and while these messages are helpful for legitimate users they also\nprovide attackers with clues for example if the error indicates user not found\nthe attacker learns that the username does not exist and if they're trying to\nbreach users some users account they will move on to the next user they will\ntry with a different email and they will keep moving on to the next users if they\nhave a certain list of users they that they want to breach the same way if you\nsend a message called incorrect password now the attacker knows that the username\nwas correct and now they only have to breach the password so they will try a\nlist of brute passwords using brute forcing or dictionary attacks and they\nwill there attack surface will increase because they had some kind of\nconfirmation from you as a server as a backend engineer you should be aware\nthat never send specific messages when it is about authentication right never\nsend friendly messages like these always keep any message related to\nauthentication generic so you can do you can save authentication failed you can\ndo authentication failed for all the three cases does not matter what happens\nwhat kind of uh authentication failure happens always send a generic message to\nthe client so that the attacker is always uh confused if if it's an\nattacker it's confused that what is the next set of actions it they should take\nto breach the system that's one important thing you have to remember\nalways send generic error messages during your authentication workflow\nduring your authentication life cycle do not send friendly client friendly or\nuser friendly error messages particularly in this workflow you can\nsend user friendly error messages during other workflows like validations or\nother apis in the security World there is another kind of attack even though it\nis rare it is called a timing attack and how it works is in a typical\nauthentication workflow when the user submits their credential the email and\nthe password first the server verifies the the username or the email or the\nusername whatever it is provided for the first field it verifies it if it tries\nto find if it exists if the user exists in the platform then the next step is if\nthey are handling it they check if the account is locked or if the account is\nsuspended for a few time because of a couple of invalid credentials that the\nuser has tried with in the near past so servers have this mechanism where they\nlock a a particular user account for some time for 2 minutes or 4 minutes or\na day if they try too many invalid authentication attempts so the second\nstep is first step is find user second step is check if they are locked okay if\nthey are not locked third step is comparing the password the provided\npassword with the stored hash the stored hash that the server has stored in the\ndatabase because passwords are not stored in plain text when you sign up\ninto a platform your password is taken they're hashed into a particular\ncryptographically safe string then they are stored in the database and there is\nno way to get the plain text value of that password even for the server right\nthe server can only encrypt that password in into a particular string and\nthen it can store that password so that so that the next time you provide your\npassword it can compare it can hash that password it can encrypt that password\ninto the same form it can fetch the previously stored password from the\ndatabase and then it can compare those two that's the way servers check if the\npassword is correct or not that's the typical workflow of checking if the user\nhas provided correct password or not they take the provided password they\nhash it using the same algorithms using the same key and they check that version\nwith the stored hashed version in the the database and they check if they are\nsame or not they're not same then the password is incorrect okay that is the\nthird step check password and now the problem here is if the username is\ninvalid if the username is invalid in the first step the system will terminate\nthere only and you will get uh some response that user not found and that\nwill have a faster response time as compared to the system failing at the\nthird step at the third step where username is is valid but the password is\nincorrect In this case the response will have some kind of delay because it\nfailed in the third step and the system will take a little longer due to the\nadditional step of hashing the password hashing the password takes a little\nlonger than doing the other operations that's why if the username is invalid\nthe system will have a faster response if the password is invalid system will\nhave a little delay in the response and use using that parameter that delay\nwhatever 200 milliseconds or whatever the delay is attackers can can find out\nwhether that username was correct or not or at what step the server failed to\nauthenticate and they can find if the usern name was invalid or the password\nwas invalid and they can use this strategy and they can use this\ninformation to further strategize their attack plan they can decide whether to\nTarget on the username or to Target on the password based on brute force or\ndictionary attacks and all so what you can do is as a backend engineer to\ndefend against these kinds of timing attacks you can you have to make sure\nthat authentication systems must introduce measures to equalize the\nresponse times one method you can use is constant time operations there are some\ncryptographically secure constant time comparison functions for password hashes\nthese functions ensure that execution time does not vary based on the input\nsimilarity that is one method you can use the second method that you can use\nthis you can simulate a response delay uh using whatever programming language\nthat you're using if you're using node just you can do set timeout or if you're\nusing goang you can do time do sleep so you can do a simulation so that even in\ncase of username not matching the system does not send a response immediately it\nsimulates some kind of response like 200 milliseconds of delay and then send a\nresponse so that the attackers cannot measure the timing differences between a\nusername failing and a password failing because you are simulating a fake delay\nbut these are the two major kinds of security related information that you\nshould have in mind while you are implementing authentication and\nauthorization and with that that's all about authentication and authorization\nthat you should know as a backend engineer and in the next video we will\nmove on to validations and transformations",
    "formatted_transcript": [
      {
        "start_time": 160,
        "end_time": 8240,
        "duration": 8080,
        "text": "and finally my favorite topic which is\nauthentication and authorization and"
      },
      {
        "start_time": 6120,
        "end_time": 13880,
        "duration": 7760,
        "text": "this is probably one of those areas\nwhich we encounter every day I'm pretty"
      },
      {
        "start_time": 10800,
        "end_time": 17640,
        "duration": 6840,
        "text": "sure all of us have used authentication\nscreens before you have we have logged"
      },
      {
        "start_time": 16039,
        "end_time": 21000,
        "duration": 4961,
        "text": "into different platforms you have signed\nup into different platforms those are"
      },
      {
        "start_time": 19480,
        "end_time": 27000,
        "duration": 7520,
        "text": "basically called the authentication\nflows and to summarize everything in two"
      },
      {
        "start_time": 24400,
        "end_time": 34200,
        "duration": 9800,
        "text": "sentences uh authentication can be\nexplained as something a mechanism to"
      },
      {
        "start_time": 30279,
        "end_time": 39160,
        "duration": 8881,
        "text": "assign an identity to a subject to say\nin the technical terms and basically to"
      },
      {
        "start_time": 36879,
        "end_time": 44440,
        "duration": 7561,
        "text": "answer the question of who are you\nauthentication basically means who are"
      },
      {
        "start_time": 42039,
        "end_time": 51480,
        "duration": 9441,
        "text": "you in a given context in a given\ncontext the context can be a platform a"
      },
      {
        "start_time": 48280,
        "end_time": 55879,
        "duration": 7599,
        "text": "operating system uh or your phone\nanything this the answer to this"
      },
      {
        "start_time": 53680,
        "end_time": 60199,
        "duration": 6519,
        "text": "question the process of finding the\nanswer to the this question is called"
      },
      {
        "start_time": 58239,
        "end_time": 65239,
        "duration": 7000,
        "text": "authentication in the same way the\nanswer to this question which is what"
      },
      {
        "start_time": 62640,
        "end_time": 70400,
        "duration": 7760,
        "text": "can you do in that context in that\nplatform in that operating system all"
      },
      {
        "start_time": 67320,
        "end_time": 75840,
        "duration": 8520,
        "text": "your capabilities all your permissions\nto say in the technical jargon those"
      },
      {
        "start_time": 72920,
        "end_time": 82280,
        "duration": 9360,
        "text": "things the process of finding the answer\nof the question what can you do in a"
      },
      {
        "start_time": 79320,
        "end_time": 89439,
        "duration": 10119,
        "text": "particular context that process is\ncalled authorization those are the two"
      },
      {
        "start_time": 85200,
        "end_time": 94360,
        "duration": 9160,
        "text": "sentence summaries of the whole topic\nand this is what we are going to talk"
      },
      {
        "start_time": 91200,
        "end_time": 97960,
        "duration": 6760,
        "text": "about in this video and we'll dive into\ndifferent aspects uh different"
      },
      {
        "start_time": 96200,
        "end_time": 103040,
        "duration": 6840,
        "text": "components of authentication and\nauthorization basically have a general"
      },
      {
        "start_time": 101079,
        "end_time": 107759,
        "duration": 6680,
        "text": "high level and Technical understanding\nof how it works what is the importance"
      },
      {
        "start_time": 106000,
        "end_time": 111960,
        "duration": 5960,
        "text": "what are the different things that make\nup and build the whole authentication"
      },
      {
        "start_time": 110040,
        "end_time": 116880,
        "duration": 6840,
        "text": "and authorization flows and everything\nsurrounding it now before we dive in"
      },
      {
        "start_time": 114240,
        "end_time": 120479,
        "duration": 6239,
        "text": "let's have some historical context of\nauthentication so first we're going to"
      },
      {
        "start_time": 119240,
        "end_time": 125360,
        "duration": 6120,
        "text": "start with\nauthentication right and for"
      },
      {
        "start_time": 123439,
        "end_time": 131520,
        "duration": 8081,
        "text": "authentication let's have some\nhistorical context of what was the use"
      },
      {
        "start_time": 127799,
        "end_time": 136400,
        "duration": 8601,
        "text": "of it how did we reach here and how did\nwe reach to the modern methods of"
      },
      {
        "start_time": 134040,
        "end_time": 143440,
        "duration": 9400,
        "text": "authentication so the story start\nsomewhere in pre-industrial societies"
      },
      {
        "start_time": 139720,
        "end_time": 150920,
        "duration": 11200,
        "text": "and here authentication was pretty\nintrinsic uh by that I mean it was"
      },
      {
        "start_time": 147280,
        "end_time": 157400,
        "duration": 10120,
        "text": "implied so an identity of a person or a\nsubject was the same as the subject's"
      },
      {
        "start_time": 155120,
        "end_time": 162519,
        "duration": 7399,
        "text": "recognition and what that means is\nsomeone someone who is already respected"
      },
      {
        "start_time": 159800,
        "end_time": 169280,
        "duration": 9480,
        "text": "in the community let's say a village\nElder could vouch for a person and Deals"
      },
      {
        "start_time": 166959,
        "end_time": 174080,
        "duration": 7121,
        "text": "whatever deals were made uh during those\ntimes were sealed with a handshake uh an"
      },
      {
        "start_time": 171720,
        "end_time": 179400,
        "duration": 7680,
        "text": "act of symbolizing Mutual recognition\nand agreement even though it was pretty"
      },
      {
        "start_time": 176599,
        "end_time": 185120,
        "duration": 8521,
        "text": "Elementary this method leveraged a form\nof auth authentication based on human"
      },
      {
        "start_time": 181720,
        "end_time": 190840,
        "duration": 9120,
        "text": "contextual trust it was based on humans\nright it was based on trust and that's"
      },
      {
        "start_time": 187840,
        "end_time": 194760,
        "duration": 6920,
        "text": "how people started the initial methods\nof"
      },
      {
        "start_time": 191799,
        "end_time": 201440,
        "duration": 9641,
        "text": "authentication but as populations grew\ninteractions extended Beyond uh familiar"
      },
      {
        "start_time": 197879,
        "end_time": 206280,
        "duration": 8401,
        "text": "circles uh like Beyond this soci Beyond\nthis Village implicit trust mechanisms"
      },
      {
        "start_time": 204040,
        "end_time": 210640,
        "duration": 6600,
        "text": "fail to scale this cannot scale right\nbecause this person who is this whoever"
      },
      {
        "start_time": 208640,
        "end_time": 215319,
        "duration": 6679,
        "text": "this is in the community the Elder\nVillage Elder that guy is not trusted in"
      },
      {
        "start_time": 213519,
        "end_time": 219400,
        "duration": 5881,
        "text": "all the communities in all over the\nsociety in different different countries"
      },
      {
        "start_time": 216959,
        "end_time": 225480,
        "duration": 8521,
        "text": "or continents right this method cannot\nscale so this marked the beginning of"
      },
      {
        "start_time": 222560,
        "end_time": 231680,
        "duration": 9120,
        "text": "his search for explicit authentication\nexplicit o initially we said this was"
      },
      {
        "start_time": 228599,
        "end_time": 237799,
        "duration": 9200,
        "text": "implicit o which is based on trust\npeople needed proofs of identity that"
      },
      {
        "start_time": 234239,
        "end_time": 245599,
        "duration": 11360,
        "text": "could function independently of personal\nacquaintance independently of any person"
      },
      {
        "start_time": 240879,
        "end_time": 253599,
        "duration": 12720,
        "text": "and that led to that led to seals and\ncryptographic era so by the medieval"
      },
      {
        "start_time": 249720,
        "end_time": 257000,
        "duration": 7280,
        "text": "period Society needed this is society\nSociety needed a system that scaled"
      },
      {
        "start_time": 255319,
        "end_time": 262360,
        "duration": 7041,
        "text": "Beyond personal recognition which we\ntalked about earlier just based on"
      },
      {
        "start_time": 259160,
        "end_time": 266600,
        "duration": 7440,
        "text": "people of trusted reputation who can\nvouch for other people or other subjects"
      },
      {
        "start_time": 264280,
        "end_time": 272440,
        "duration": 8160,
        "text": "or other deals so Society needed a\nsystem which is which can scale beyond"
      },
      {
        "start_time": 269440,
        "end_time": 278039,
        "duration": 8599,
        "text": "that and during those times people came\nup with this system which is called a"
      },
      {
        "start_time": 274759,
        "end_time": 283000,
        "duration": 8241,
        "text": "seal it was Wax Seal people who have\nwatched different movies or series of uh"
      },
      {
        "start_time": 280880,
        "end_time": 288639,
        "duration": 7759,
        "text": "historical times you must have come\nacross this this is like some seal and"
      },
      {
        "start_time": 286160,
        "end_time": 293680,
        "duration": 7520,
        "text": "this was know attached to different\nletters or different agreements as a"
      },
      {
        "start_time": 291160,
        "end_time": 299680,
        "duration": 8520,
        "text": "some form of authentication or you know\nsome form of agreement and it was one"
      },
      {
        "start_time": 296360,
        "end_time": 305680,
        "duration": 9320,
        "text": "form of early cryptographic mechanism a\nseal uh which was of a unique pattern"
      },
      {
        "start_time": 302360,
        "end_time": 309880,
        "duration": 7520,
        "text": "and this is put on documents uh which\nacted as signatures today we have"
      },
      {
        "start_time": 307680,
        "end_time": 313240,
        "duration": 5560,
        "text": "signature digital signatures and uh\nhandwriting based signatures this was"
      },
      {
        "start_time": 311919,
        "end_time": 318160,
        "duration": 6241,
        "text": "one kind of signature during the\nmedieval period and these seals function"
      },
      {
        "start_time": 315759,
        "end_time": 323759,
        "duration": 8000,
        "text": "as the first widely adopted\nauthentication tokens you can say these"
      },
      {
        "start_time": 320800,
        "end_time": 329840,
        "duration": 9040,
        "text": "were one kind of authentication tokens\nduring those times and they were kind of"
      },
      {
        "start_time": 327280,
        "end_time": 334400,
        "duration": 7120,
        "text": "a physical representations of identity\nthat relied on possession something you"
      },
      {
        "start_time": 332000,
        "end_time": 339240,
        "duration": 7240,
        "text": "have if you have this seal you have this\nin your possession then you are said to"
      },
      {
        "start_time": 336919,
        "end_time": 343639,
        "duration": 6720,
        "text": "be authenticated and you can verify\nyourself using those seals seals had"
      },
      {
        "start_time": 341400,
        "end_time": 348080,
        "duration": 6680,
        "text": "their vulnerabilities they were prone to\nforgery uh marking the first recorded"
      },
      {
        "start_time": 345960,
        "end_time": 352520,
        "duration": 6560,
        "text": "instan of authentication bypass attacks\nso we have in the modern times different"
      },
      {
        "start_time": 350120,
        "end_time": 357280,
        "duration": 7160,
        "text": "types of authentication attacks one of\nthose kinds is a bypass attack a bypass"
      },
      {
        "start_time": 355560,
        "end_time": 362039,
        "duration": 6479,
        "text": "attack basically means skipping the\nauthentication with malicious intents"
      },
      {
        "start_time": 359759,
        "end_time": 368120,
        "duration": 8361,
        "text": "forging these kinds of seals for\nmalicious intents was one kind of bypass"
      },
      {
        "start_time": 365400,
        "end_time": 372680,
        "duration": 7280,
        "text": "attacks during the medieval period and\nthis led to the evolution of more"
      },
      {
        "start_time": 370080,
        "end_time": 378919,
        "duration": 8839,
        "text": "sophisticated mechanisms uh including\nthings like uh water marks and encrypted"
      },
      {
        "start_time": 376039,
        "end_time": 383199,
        "duration": 7160,
        "text": "codes right used in different trade\ndocumentation setting a foundation for"
      },
      {
        "start_time": 381039,
        "end_time": 389080,
        "duration": 8041,
        "text": "cryptographic thinking people started\nthinking more about codes how codes can"
      },
      {
        "start_time": 386199,
        "end_time": 396240,
        "duration": 10041,
        "text": "evolve to prevent different kinds of\nattacks and forgeries and frauds and"
      },
      {
        "start_time": 391759,
        "end_time": 402360,
        "duration": 10601,
        "text": "that led to the next era which was past\nphrases and shared secrets so we can say"
      },
      {
        "start_time": 400280,
        "end_time": 408360,
        "duration": 8080,
        "text": "during the times of\nIndustrial Revolution during the of"
      },
      {
        "start_time": 405039,
        "end_time": 413160,
        "duration": 8121,
        "text": "Industrial Revolution a lot of progress\nhappened in terms of machines right in"
      },
      {
        "start_time": 411520,
        "end_time": 418120,
        "duration": 6600,
        "text": "terms of machines a lot of progress\nhappened and the whole world started to"
      },
      {
        "start_time": 415240,
        "end_time": 423039,
        "duration": 7799,
        "text": "change and at the same time at the same\ntime communication"
      },
      {
        "start_time": 420160,
        "end_time": 427319,
        "duration": 7159,
        "text": "systems also started to get upgrades\nCommunications systems also started to"
      },
      {
        "start_time": 425199,
        "end_time": 432800,
        "duration": 7601,
        "text": "progress they started to evolve into\nmore secure and more advanced form of"
      },
      {
        "start_time": 429960,
        "end_time": 438240,
        "duration": 8280,
        "text": "communications and during those times is\ntechnology called telegraph was"
      },
      {
        "start_time": 435280,
        "end_time": 444039,
        "duration": 8759,
        "text": "introduced and Telegraph became a\ncritical infrastructure and with it came"
      },
      {
        "start_time": 441000,
        "end_time": 450360,
        "duration": 9360,
        "text": "the need for secure message validation\nand operators whoever was operating"
      },
      {
        "start_time": 447319,
        "end_time": 456120,
        "duration": 8801,
        "text": "these telegraphs they used pre-agreed\npass phrases you can say you can call it"
      },
      {
        "start_time": 453199,
        "end_time": 463160,
        "duration": 9961,
        "text": "also password but there are some form of\npass phrases and that was an early form"
      },
      {
        "start_time": 459400,
        "end_time": 469280,
        "duration": 9880,
        "text": "of shared secrets and these pass phases\nwere the same as static passwords like"
      },
      {
        "start_time": 465720,
        "end_time": 475479,
        "duration": 9759,
        "text": "they are not dynamic they decided on one\nstatic string one static password and"
      },
      {
        "start_time": 471560,
        "end_time": 480000,
        "duration": 8440,
        "text": "they used it as a pass among them and\nthat relied on the principle of we can"
      },
      {
        "start_time": 478599,
        "end_time": 487199,
        "duration": 8600,
        "text": "say\nsomething you know earlier the principle"
      },
      {
        "start_time": 483840,
        "end_time": 492919,
        "duration": 9079,
        "text": "was something you possessed something\nyou possessed which was a wax seal a"
      },
      {
        "start_time": 490560,
        "end_time": 498039,
        "duration": 7479,
        "text": "some kind of token that you possessed\nthat you can show to verify yourself and"
      },
      {
        "start_time": 495240,
        "end_time": 502560,
        "duration": 7320,
        "text": "that got evolved into something you know\nwhich is which is much better in terms"
      },
      {
        "start_time": 500039,
        "end_time": 507199,
        "duration": 7160,
        "text": "of security and that was one step into\nthe evolution of which in the modern"
      },
      {
        "start_time": 504840,
        "end_time": 511280,
        "duration": 6440,
        "text": "times you know as password that time it\nwas called P phrases and that that the"
      },
      {
        "start_time": 510039,
        "end_time": 515240,
        "duration": 5201,
        "text": "principle whole principle of\nauthentication changed into something"
      },
      {
        "start_time": 512640,
        "end_time": 520479,
        "duration": 7839,
        "text": "you know which is inside your brain or\nin some form of communication either"
      },
      {
        "start_time": 517320,
        "end_time": 525560,
        "duration": 8240,
        "text": "written or verbal and after that we can\nsay we can skip all that to the modern"
      },
      {
        "start_time": 523240,
        "end_time": 529800,
        "duration": 6560,
        "text": "times of computation computation\ncomputational architecture and all the"
      },
      {
        "start_time": 527680,
        "end_time": 535080,
        "duration": 7400,
        "text": "modern authentication that we know of\nand the first form of computation which"
      },
      {
        "start_time": 532160,
        "end_time": 541000,
        "duration": 8840,
        "text": "you already know is main frames main\nframes in the somewhere in mid 20th"
      },
      {
        "start_time": 538800,
        "end_time": 546160,
        "duration": 7360,
        "text": "century and and authentication entered\nits first digital phase so in there is a"
      },
      {
        "start_time": 544640,
        "end_time": 552000,
        "duration": 7360,
        "text": "story called in\n1961 researchers at mit's project Mac"
      },
      {
        "start_time": 550040,
        "end_time": 557079,
        "duration": 7039,
        "text": "they were working with something called\ncompatible time sharing systems also"
      },
      {
        "start_time": 554399,
        "end_time": 561839,
        "duration": 7440,
        "text": "known as ctss and they introduced the\nconcept of passwords for multi-user"
      },
      {
        "start_time": 559200,
        "end_time": 567480,
        "duration": 8280,
        "text": "systems basically they were trying to\ncome up with some kind of system which"
      },
      {
        "start_time": 564279,
        "end_time": 573360,
        "duration": 9081,
        "text": "will allow multiple users to use a\ncomputer without Shar sharing the data"
      },
      {
        "start_time": 571079,
        "end_time": 578880,
        "duration": 7801,
        "text": "without sharing a users data between\neach other between each other and what"
      },
      {
        "start_time": 576240,
        "end_time": 585160,
        "duration": 8920,
        "text": "they did was they stored password in PL\ntext which was in itself a very critical"
      },
      {
        "start_time": 582320,
        "end_time": 590480,
        "duration": 8160,
        "text": "vulnerability and that came into view\nwhen one of them printed the password"
      },
      {
        "start_time": 588000,
        "end_time": 594920,
        "duration": 6920,
        "text": "file in plain text because you can it\nwas a plain text file you can print the"
      },
      {
        "start_time": 592120,
        "end_time": 600880,
        "duration": 8760,
        "text": "password and that was the time when that\nvulnerability came into place and people"
      },
      {
        "start_time": 597680,
        "end_time": 605079,
        "duration": 7399,
        "text": "got aware of that and this incident the\nprinting of the password file this"
      },
      {
        "start_time": 602600,
        "end_time": 609120,
        "duration": 6520,
        "text": "incident marked the Genesis of secure\npassword storage mechanisms right now we"
      },
      {
        "start_time": 607560,
        "end_time": 613959,
        "duration": 6399,
        "text": "have this philosophy that password\nshould not be stored in plain text and"
      },
      {
        "start_time": 612000,
        "end_time": 619000,
        "duration": 7000,
        "text": "this incident of someone printing the\npassword file in a printer that was the"
      },
      {
        "start_time": 616640,
        "end_time": 625680,
        "duration": 9040,
        "text": "initial idea that motivated people to\nthe philosophy of storing passwords"
      },
      {
        "start_time": 622480,
        "end_time": 631360,
        "duration": 8880,
        "text": "securely and that led to different\nInnovations like hashing that you use uh"
      },
      {
        "start_time": 629079,
        "end_time": 636360,
        "duration": 7281,
        "text": "pretty pretty frequently today to store\npasswords in our databases and different"
      },
      {
        "start_time": 634279,
        "end_time": 641440,
        "duration": 7161,
        "text": "cryptographic algorithms which\ntransformed passwords into irreversible"
      },
      {
        "start_time": 638880,
        "end_time": 647040,
        "duration": 8160,
        "text": "fixed length representations so hashing\nis basically cryptographically so you"
      },
      {
        "start_time": 644560,
        "end_time": 652920,
        "duration": 8360,
        "text": "can say there is some kind of algorithm\nit does some kind of computation you"
      },
      {
        "start_time": 649160,
        "end_time": 660160,
        "duration": 11000,
        "text": "provide it a plain text uh string provid\nit and in turn it returns you a hashed"
      },
      {
        "start_time": 657160,
        "end_time": 665920,
        "duration": 8760,
        "text": "string a hash string basically means it\nhas a computational algorithm it will"
      },
      {
        "start_time": 663200,
        "end_time": 671720,
        "duration": 8520,
        "text": "transform that string the plain text\ninto a fixed length the length won't"
      },
      {
        "start_time": 669040,
        "end_time": 676360,
        "duration": 7320,
        "text": "change it does not matter you provided a\nthree character string or a 100"
      },
      {
        "start_time": 674360,
        "end_time": 680399,
        "duration": 6039,
        "text": "character string the length of the hash\nwill stay the same depending on the"
      },
      {
        "start_time": 677920,
        "end_time": 684959,
        "duration": 7039,
        "text": "hashing algorithm and it will provide\nyou the same result for the same string"
      },
      {
        "start_time": 682959,
        "end_time": 689760,
        "duration": 6801,
        "text": "every time that was the promise of the\nhashing algorithm so these kinds of"
      },
      {
        "start_time": 687279,
        "end_time": 695680,
        "duration": 8401,
        "text": "algorithms started to emerge during in\nthis era and authentication began to"
      },
      {
        "start_time": 694160,
        "end_time": 699600,
        "duration": 5440,
        "text": "align with the principles of\nconfidentiality integrity and"
      },
      {
        "start_time": 697480,
        "end_time": 706079,
        "duration": 8599,
        "text": "availability the core tenets of\ninformation security and then in the"
      },
      {
        "start_time": 702880,
        "end_time": 710600,
        "duration": 7720,
        "text": "1970s an explosion in in cryptographic\nresearch driven by the work of great"
      },
      {
        "start_time": 708279,
        "end_time": 715440,
        "duration": 7161,
        "text": "people like Whitfield Dey and Martin\nHelman the people who have come up with"
      },
      {
        "start_time": 712880,
        "end_time": 721079,
        "duration": 8199,
        "text": "cryptographic algorithms their invention\nof the Diffy Helman key exchange"
      },
      {
        "start_time": 718519,
        "end_time": 726760,
        "duration": 8241,
        "text": "introduced the concept of asymmetric\nasymmetric cryptography enabling two"
      },
      {
        "start_time": 724200,
        "end_time": 732279,
        "duration": 8079,
        "text": "parties to establish a shared secret\nover a untrusted medium that was the"
      },
      {
        "start_time": 729880,
        "end_time": 736639,
        "duration": 6759,
        "text": "first time asymmetric cryptographic\ntechnique asymmetric cryptography became"
      },
      {
        "start_time": 734399,
        "end_time": 741800,
        "duration": 7401,
        "text": "the backbone of modern authentication\nprotocols all the protocols that we have"
      },
      {
        "start_time": 739000,
        "end_time": 748120,
        "duration": 9120,
        "text": "now those are all based on asymmetric\nkey cryptography and you they are also"
      },
      {
        "start_time": 745440,
        "end_time": 753720,
        "duration": 8280,
        "text": "called pki public Kee infrastructure\nsystems and this era also gave the rise"
      },
      {
        "start_time": 750480,
        "end_time": 758720,
        "duration": 8240,
        "text": "to protocols like karos which introduced\nticket based authentication and karos"
      },
      {
        "start_time": 756279,
        "end_time": 763680,
        "duration": 7401,
        "text": "relied on trusted third parties to issue\ntickets that verified both the user and"
      },
      {
        "start_time": 760800,
        "end_time": 768279,
        "duration": 7479,
        "text": "service identity which is a precursor to\ntoken based authentication system that"
      },
      {
        "start_time": 765519,
        "end_time": 773160,
        "duration": 7641,
        "text": "we have now and we will shortly look at\nthose token based authentication methods"
      },
      {
        "start_time": 770199,
        "end_time": 777440,
        "duration": 7241,
        "text": "right now we are just exploring how all\nthe dots connect together how the"
      },
      {
        "start_time": 774720,
        "end_time": 782760,
        "duration": 8040,
        "text": "historical context led to what we have\ntoday led to what we use used today all"
      },
      {
        "start_time": 780360,
        "end_time": 788720,
        "duration": 8360,
        "text": "the different algorithms mechanisms\nmethods and standard practices moving on"
      },
      {
        "start_time": 785160,
        "end_time": 795279,
        "duration": 10119,
        "text": "if we go forward during around\n1990s when the internet was growing a"
      },
      {
        "start_time": 791680,
        "end_time": 801120,
        "duration": 9440,
        "text": "need for scalable scalable\nauthentication methods was also Rising"
      },
      {
        "start_time": 797639,
        "end_time": 806800,
        "duration": 9161,
        "text": "simple username and password based\nsystems were not enough and they were"
      },
      {
        "start_time": 804079,
        "end_time": 812079,
        "duration": 8000,
        "text": "not strong enough against brute force\nand dictionary attacks that are new"
      },
      {
        "start_time": 809120,
        "end_time": 817959,
        "duration": 8839,
        "text": "newly coming during those times and that\nled to something called that we have MFA"
      },
      {
        "start_time": 815560,
        "end_time": 824320,
        "duration": 8760,
        "text": "which is multiactor\nauthentication so MFA came with the idea"
      },
      {
        "start_time": 821040,
        "end_time": 829959,
        "duration": 8919,
        "text": "of a combination of different principles\nit combined let's say three things one"
      },
      {
        "start_time": 826639,
        "end_time": 837240,
        "duration": 10601,
        "text": "thing is something you know with\nsomething you have with something you"
      },
      {
        "start_time": 834240,
        "end_time": 844800,
        "duration": 10560,
        "text": "are basically something you know can be\npasswords or passwords or pins something"
      },
      {
        "start_time": 840759,
        "end_time": 851320,
        "duration": 10561,
        "text": "you have can be cards smart cards or OTB\ngenerators right and something you are"
      },
      {
        "start_time": 848519,
        "end_time": 858120,
        "duration": 9601,
        "text": "that is your personal identification it\ncan be biometric data biometric data"
      },
      {
        "start_time": 854279,
        "end_time": 863079,
        "duration": 8800,
        "text": "like fingerprints or retina scans right\nand MF came with this revolution of"
      },
      {
        "start_time": 861120,
        "end_time": 869240,
        "duration": 8120,
        "text": "combining different principles different\nlevel layers of principles that provide"
      },
      {
        "start_time": 865920,
        "end_time": 874160,
        "duration": 8240,
        "text": "a combined security to all kinds of\nauthentication applications and because"
      },
      {
        "start_time": 871800,
        "end_time": 877440,
        "duration": 5640,
        "text": "of that biometric authentication emerged\nas a groundbreaking development"
      },
      {
        "start_time": 875880,
        "end_time": 883360,
        "duration": 7480,
        "text": "leveraging pattern recognition\nalgorithms and statistical models to"
      },
      {
        "start_time": 880440,
        "end_time": 888440,
        "duration": 8000,
        "text": "identify users based on unique physical\ntraits however biometric systems"
      },
      {
        "start_time": 886199,
        "end_time": 894199,
        "duration": 8000,
        "text": "introduce challenges of false positives\nnegatives and uh template security so"
      },
      {
        "start_time": 892360,
        "end_time": 899680,
        "duration": 7320,
        "text": "that is also not enough biometric\nsecurity was not the on step solution"
      },
      {
        "start_time": 896480,
        "end_time": 904720,
        "duration": 8240,
        "text": "for all the problems that were emerging\nduring those times and after that you"
      },
      {
        "start_time": 901839,
        "end_time": 911240,
        "duration": 9401,
        "text": "can say we are finally into the modern\ntimes modern times we can which we can"
      },
      {
        "start_time": 907240,
        "end_time": 917360,
        "duration": 10120,
        "text": "Call 21st century the time that we live\ntoday and in the 21st century the rise"
      },
      {
        "start_time": 914160,
        "end_time": 923120,
        "duration": 8960,
        "text": "of things like cloud computing and\nmobile devices and API based"
      },
      {
        "start_time": 920079,
        "end_time": 927839,
        "duration": 7760,
        "text": "architectures they demanded Advanced\nauthentication Frameworks none of the"
      },
      {
        "start_time": 925839,
        "end_time": 932440,
        "duration": 6601,
        "text": "above authentication methods or\nFrameworks or principles were enough so"
      },
      {
        "start_time": 930240,
        "end_time": 937800,
        "duration": 7560,
        "text": "we needed more advanced more technically\nrobust implementations of authentication"
      },
      {
        "start_time": 935079,
        "end_time": 943360,
        "duration": 8281,
        "text": "and during and because of those Demands\na lot of different authentication"
      },
      {
        "start_time": 940360,
        "end_time": 952120,
        "duration": 11760,
        "text": "components or authentication techniques\nemerged and among those we can say some"
      },
      {
        "start_time": 946680,
        "end_time": 956000,
        "duration": 9320,
        "text": "of the important things are o o o 2\nthese are the ones that we still use"
      },
      {
        "start_time": 954160,
        "end_time": 959759,
        "duration": 5599,
        "text": "today and these are the most popular\nones these are I'm just talking about"
      },
      {
        "start_time": 957959,
        "end_time": 964199,
        "duration": 6240,
        "text": "the different comp components of\nauthentication that we are going to"
      },
      {
        "start_time": 961079,
        "end_time": 972519,
        "duration": 11440,
        "text": "discuss soon another thing is\njwt's then we have zero trust"
      },
      {
        "start_time": 968680,
        "end_time": 977319,
        "duration": 8639,
        "text": "architecture we also have for\npasswordless passwordless authentication"
      },
      {
        "start_time": 975360,
        "end_time": 981839,
        "duration": 6479,
        "text": "system like uh web authentication\neliminate passwords entirely relying on"
      },
      {
        "start_time": 979800,
        "end_time": 989000,
        "duration": 9200,
        "text": "public key and private key stored in\nHardware devices we'll discuss O2 n JWT"
      },
      {
        "start_time": 985160,
        "end_time": 994040,
        "duration": 8880,
        "text": "shortly and then this and this is the\ntime that we live now and this is what"
      },
      {
        "start_time": 991160,
        "end_time": 999680,
        "duration": 8520,
        "text": "the future looks like as of now during\nthe time I record this video we have a"
      },
      {
        "start_time": 996440,
        "end_time": 1003920,
        "duration": 7480,
        "text": "couple of candidates for the future of\nauthentication world we have"
      },
      {
        "start_time": 1001360,
        "end_time": 1008560,
        "duration": 7200,
        "text": "decentralized identity decentralized\nidentity that that is created using"
      },
      {
        "start_time": 1006399,
        "end_time": 1013600,
        "duration": 7201,
        "text": "popular Technologies like blockchain\nthey they offer a they offer a lot of"
      },
      {
        "start_time": 1011920,
        "end_time": 1017199,
        "duration": 5279,
        "text": "features robust features for\nauthentication people are still they are"
      },
      {
        "start_time": 1015480,
        "end_time": 1022040,
        "duration": 6560,
        "text": "still in early stages now and people are\nstill experimenting they"
      },
      {
        "start_time": 1019519,
        "end_time": 1026760,
        "duration": 7241,
        "text": "are promising and a potential candidate\nfor future of authentication then the"
      },
      {
        "start_time": 1024039,
        "end_time": 1033480,
        "duration": 9441,
        "text": "second is behavioral\nBiometrics we have this concept called"
      },
      {
        "start_time": 1029880,
        "end_time": 1038559,
        "duration": 8679,
        "text": "post Quantum cryptography so post\nQuantum cryptography is basically the"
      },
      {
        "start_time": 1035439,
        "end_time": 1043319,
        "duration": 7880,
        "text": "idea that once quantum computers start\ngetting used heavily they are going to"
      },
      {
        "start_time": 1041079,
        "end_time": 1048960,
        "duration": 7881,
        "text": "break all the cryptographic algorithms\nthat we have now that provide the sense"
      },
      {
        "start_time": 1046160,
        "end_time": 1053880,
        "duration": 7720,
        "text": "of security that we have that our data\nour passwords our sensitive data is"
      },
      {
        "start_time": 1051640,
        "end_time": 1058240,
        "duration": 6600,
        "text": "secure because of these algorithms we\nhave RSA and um different different"
      },
      {
        "start_time": 1056679,
        "end_time": 1063600,
        "duration": 6921,
        "text": "types of public key private key\nalgorithms that are very difficult to"
      },
      {
        "start_time": 1060200,
        "end_time": 1069160,
        "duration": 8960,
        "text": "break with the hardware with the\ncomputation capability of systems that"
      },
      {
        "start_time": 1066400,
        "end_time": 1074640,
        "duration": 8240,
        "text": "we possess today so once quantum\ncomputers get uh used heavily uh once"
      },
      {
        "start_time": 1072760,
        "end_time": 1078200,
        "duration": 5440,
        "text": "they get common enough all these\nalgorithms cryptographic algorithms they"
      },
      {
        "start_time": 1076360,
        "end_time": 1083840,
        "duration": 7480,
        "text": "are going to break because quantum\ncomputers are very very very fast in"
      },
      {
        "start_time": 1081400,
        "end_time": 1087760,
        "duration": 6360,
        "text": "terms of what you have today and these\nalgorithms are not made for that this"
      },
      {
        "start_time": 1085760,
        "end_time": 1091880,
        "duration": 6120,
        "text": "concept called post Quantum uh\ncryptography is basically cryptographic"
      },
      {
        "start_time": 1090080,
        "end_time": 1096840,
        "duration": 6760,
        "text": "techniques that are even secure for\nquantum computers we already have some"
      },
      {
        "start_time": 1094799,
        "end_time": 1102440,
        "duration": 7641,
        "text": "algorithms as of my knowledge and you\ncan read up on that all in all this is"
      },
      {
        "start_time": 1099480,
        "end_time": 1107919,
        "duration": 8439,
        "text": "pretty much all the historical context\nthat we have of authentication in our"
      },
      {
        "start_time": 1104440,
        "end_time": 1112200,
        "duration": 7760,
        "text": "knowledge with that let's move on to the\ntechnical part the interesting part that"
      },
      {
        "start_time": 1110159,
        "end_time": 1117039,
        "duration": 6880,
        "text": "you as a backend engineer should have\nthe knowledge of before I jump into"
      },
      {
        "start_time": 1114120,
        "end_time": 1122720,
        "duration": 8600,
        "text": "authentication I want to introduce three\ncomponents that we are going to discuss"
      },
      {
        "start_time": 1119880,
        "end_time": 1127039,
        "duration": 7159,
        "text": "again and again uh in this whole video\nso I feel it's better to introduce them"
      },
      {
        "start_time": 1125000,
        "end_time": 1130880,
        "duration": 5880,
        "text": "right now before we start anything so\nthat you have some kind of context or"
      },
      {
        "start_time": 1129080,
        "end_time": 1134480,
        "duration": 5400,
        "text": "some kind of familiarity when you hear\nthem and these three are very important"
      },
      {
        "start_time": 1133000,
        "end_time": 1139280,
        "duration": 6280,
        "text": "in all the authentication on\nauthorization flows though they are"
      },
      {
        "start_time": 1136280,
        "end_time": 1144520,
        "duration": 8240,
        "text": "sessions J WTS\ncookies and we'll discuss what are they"
      },
      {
        "start_time": 1141919,
        "end_time": 1149840,
        "duration": 7921,
        "text": "let's start with sessions when the web\nstarted when the whole internet game"
      },
      {
        "start_time": 1147720,
        "end_time": 1155480,
        "duration": 7760,
        "text": "started\nHTTP protocol that we have that we use"
      },
      {
        "start_time": 1153520,
        "end_time": 1159360,
        "duration": 5840,
        "text": "for our client server communication if\nyou have watched my HTTP video then"
      },
      {
        "start_time": 1157600,
        "end_time": 1165600,
        "duration": 8000,
        "text": "you'll understand what I'm talking about\nHTTP emerged as the backbone of all the"
      },
      {
        "start_time": 1163120,
        "end_time": 1174520,
        "duration": 11400,
        "text": "commun communications between client and\nservers and by Design by Design sttp was"
      },
      {
        "start_time": 1171200,
        "end_time": 1180320,
        "duration": 9120,
        "text": "stateless stateless stateless which\nbasically means HTTP treated every"
      },
      {
        "start_time": 1177360,
        "end_time": 1185320,
        "duration": 7960,
        "text": "request as an isolated interaction so it\ndid not remember what was what was your"
      },
      {
        "start_time": 1182760,
        "end_time": 1189440,
        "duration": 6680,
        "text": "previous request every request had\nenough and all the information that the"
      },
      {
        "start_time": 1187559,
        "end_time": 1194640,
        "duration": 7081,
        "text": "server needed to perform the business\nlogic that's what it basically means for"
      },
      {
        "start_time": 1191440,
        "end_time": 1201120,
        "duration": 9680,
        "text": "a stateless protocol it has it had or it\nhas no memory of any past exchanges and"
      },
      {
        "start_time": 1198159,
        "end_time": 1206320,
        "duration": 8161,
        "text": "this was enough and this was ideal even\nfor the earlier web the web that we"
      },
      {
        "start_time": 1204039,
        "end_time": 1212640,
        "duration": 8601,
        "text": "started with which mostly consisted of\nstatic Pages static images and data that"
      },
      {
        "start_time": 1210039,
        "end_time": 1218280,
        "duration": 8241,
        "text": "people mostly read about just you look\nat a website you read something and you"
      },
      {
        "start_time": 1214360,
        "end_time": 1224120,
        "duration": 9760,
        "text": "move on rable data static data that we\ncan call and people did not need"
      },
      {
        "start_time": 1221880,
        "end_time": 1229559,
        "duration": 7679,
        "text": "continuity people did not need memory\nbetween different requests that was not"
      },
      {
        "start_time": 1226960,
        "end_time": 1236400,
        "duration": 9440,
        "text": "a need when it was designed\nhowever however when we evolved as the"
      },
      {
        "start_time": 1233080,
        "end_time": 1241320,
        "duration": 8240,
        "text": "web transitioned into Dynamic content\nand it happened very soon and when it"
      },
      {
        "start_time": 1239400,
        "end_time": 1247440,
        "duration": 8040,
        "text": "evolved into Dynamic content the\nstatelessness statelessness of HTTP"
      },
      {
        "start_time": 1244360,
        "end_time": 1251360,
        "duration": 7000,
        "text": "became a bottleneck how because we had\ndifferent types of websites a highly"
      },
      {
        "start_time": 1249480,
        "end_time": 1256840,
        "duration": 7360,
        "text": "interactive websites websites like\ne-commerce sites which need to remember"
      },
      {
        "start_time": 1253799,
        "end_time": 1261120,
        "duration": 7321,
        "text": "what are the items in your cart that is\none example of the interaction or How"
      },
      {
        "start_time": 1258799,
        "end_time": 1266679,
        "duration": 7880,
        "text": "could a user remain logged in while\nnavigating between different pages that"
      },
      {
        "start_time": 1263440,
        "end_time": 1271799,
        "duration": 8359,
        "text": "was another uh need and these questions\nmarked the beginning of stateful"
      },
      {
        "start_time": 1268960,
        "end_time": 1275799,
        "duration": 6839,
        "text": "interactions in the web stateful\ninteractions it was the need for"
      },
      {
        "start_time": 1273840,
        "end_time": 1281960,
        "duration": 8120,
        "text": "stateful interactions otherwise modern\nwebsites modern needs of Technology was"
      },
      {
        "start_time": 1279279,
        "end_time": 1289520,
        "duration": 10241,
        "text": "not uh met that's why we needed the web\nto be stateful which HTTP was not and"
      },
      {
        "start_time": 1286120,
        "end_time": 1295880,
        "duration": 9760,
        "text": "that's why the concept of session came\ninto play a session basically provided a"
      },
      {
        "start_time": 1292960,
        "end_time": 1301960,
        "duration": 9000,
        "text": "way to establish temporary server side\ncontext for each user and it has some"
      },
      {
        "start_time": 1299760,
        "end_time": 1307320,
        "duration": 7560,
        "text": "kind of memory about the user that the\nserver can have to remember the user"
      },
      {
        "start_time": 1305200,
        "end_time": 1313200,
        "duration": 8000,
        "text": "when the user makes a request next time\nso how did it work first part was"
      },
      {
        "start_time": 1310320,
        "end_time": 1319279,
        "duration": 8959,
        "text": "session creation when a user logged in\nthe server created a unique session ID"
      },
      {
        "start_time": 1316720,
        "end_time": 1323320,
        "duration": 6600,
        "text": "and it stored it along alongside the\nrelevant user data whatever the users's"
      },
      {
        "start_time": 1321200,
        "end_time": 1328200,
        "duration": 7000,
        "text": "role name whatever the data the server\nneeded uh to do different kinds of"
      },
      {
        "start_time": 1325440,
        "end_time": 1332720,
        "duration": 7280,
        "text": "operation again and again it stored it\nwith the session ID whatever the cart"
      },
      {
        "start_time": 1330919,
        "end_time": 1337480,
        "duration": 6561,
        "text": "items of the user is all those\ninformation that the server needed"
      },
      {
        "start_time": 1334559,
        "end_time": 1343400,
        "duration": 8841,
        "text": "repeatedly it stored it in a persistent\nstore it can be a database or it can be"
      },
      {
        "start_time": 1340240,
        "end_time": 1347880,
        "duration": 7640,
        "text": "a redis store which is a inmemory uh\npersistent store compared to database"
      },
      {
        "start_time": 1345279,
        "end_time": 1354400,
        "duration": 9121,
        "text": "which is a file based persistent store\nso the server stored the session ID with"
      },
      {
        "start_time": 1350360,
        "end_time": 1358360,
        "duration": 8000,
        "text": "all the user data the cart items or\nwhether the user is authenticated or not"
      },
      {
        "start_time": 1356600,
        "end_time": 1362559,
        "duration": 5959,
        "text": "all these different kinds of information\nwith the session ID is stored in some"
      },
      {
        "start_time": 1359960,
        "end_time": 1367799,
        "duration": 7839,
        "text": "kind of persistent store and the second\nphase"
      },
      {
        "start_time": 1363360,
        "end_time": 1371960,
        "duration": 8600,
        "text": "is the session ID this key unique key\nwas sent to the client which is a"
      },
      {
        "start_time": 1369960,
        "end_time": 1377120,
        "duration": 7160,
        "text": "browser the server is somewhere in the\nremote it's it is somewhere in the cloud"
      },
      {
        "start_time": 1375000,
        "end_time": 1382760,
        "duration": 7760,
        "text": "and the session ID is sent to the user\nwhich on a browser as a cookie we will"
      },
      {
        "start_time": 1380279,
        "end_time": 1387919,
        "duration": 7640,
        "text": "see what a cookie is but it is sent to\nthe user as a cookie and all the"
      },
      {
        "start_time": 1385360,
        "end_time": 1393279,
        "duration": 7919,
        "text": "requests and all the requests that the\nclient made after that after the session"
      },
      {
        "start_time": 1390120,
        "end_time": 1398640,
        "duration": 8520,
        "text": "being created included that cookie with\nthose requests so that the cookie can"
      },
      {
        "start_time": 1396480,
        "end_time": 1403200,
        "duration": 6720,
        "text": "have the session ID and using this\nsession ID server can fetch this"
      },
      {
        "start_time": 1401159,
        "end_time": 1407840,
        "duration": 6681,
        "text": "information all the cart items users\ndata from this persistent store it can"
      },
      {
        "start_time": 1405279,
        "end_time": 1413240,
        "duration": 7961,
        "text": "be redes or itav so basically this\nsession IDE enable the web to have some"
      },
      {
        "start_time": 1411159,
        "end_time": 1418720,
        "duration": 7561,
        "text": "kind of memory enable the servers to\nhave some kind of memory for the sake of"
      },
      {
        "start_time": 1415760,
        "end_time": 1424679,
        "duration": 8919,
        "text": "the user for the sake of the client and\nin the third phase you can say these"
      },
      {
        "start_time": 1421720,
        "end_time": 1430520,
        "duration": 8800,
        "text": "sessions were short lift which means\nthey had an expired date so let's say if"
      },
      {
        "start_time": 1427840,
        "end_time": 1434799,
        "duration": 6959,
        "text": "the session's expired date is 15 minutes\nso after 15 minutes the user sends this"
      },
      {
        "start_time": 1433039,
        "end_time": 1438799,
        "duration": 5760,
        "text": "session ID to the server and they are\nexpired so the server creates another"
      },
      {
        "start_time": 1436640,
        "end_time": 1443400,
        "duration": 6760,
        "text": "session and sends the session ID stores\nthe user data in the persistance store"
      },
      {
        "start_time": 1440400,
        "end_time": 1449679,
        "duration": 9279,
        "text": "and that's how it works again and again\nthat's how this whole session thing"
      },
      {
        "start_time": 1445640,
        "end_time": 1455400,
        "duration": 9760,
        "text": "works and initially initially sessions\nstarted with file based sessions those"
      },
      {
        "start_time": 1452919,
        "end_time": 1460799,
        "duration": 7880,
        "text": "were the early session implementations\nand that stored data in files on the"
      },
      {
        "start_time": 1458000,
        "end_time": 1466440,
        "duration": 8440,
        "text": "server even though they were simple that\napproach suffered from scality issues as"
      },
      {
        "start_time": 1462960,
        "end_time": 1471760,
        "duration": 8800,
        "text": "the number of users grew and server\nstarted to implements implement database"
      },
      {
        "start_time": 1469440,
        "end_time": 1476720,
        "duration": 7280,
        "text": "packed sessions to handle large user\nbases and to make the server scalable"
      },
      {
        "start_time": 1474799,
        "end_time": 1481320,
        "duration": 6521,
        "text": "sessions data moved to databases which\nprovided faster lookups and persistent"
      },
      {
        "start_time": 1478799,
        "end_time": 1485799,
        "duration": 7000,
        "text": "storage across server restarts that data\nstored in the databases and even though"
      },
      {
        "start_time": 1483120,
        "end_time": 1492120,
        "duration": 9000,
        "text": "the server restarted the session became\navailable the session stayed available"
      },
      {
        "start_time": 1487960,
        "end_time": 1499279,
        "duration": 11319,
        "text": "to the server and eventually we remove\nwe move to distributed architectures and"
      },
      {
        "start_time": 1496080,
        "end_time": 1502840,
        "duration": 6760,
        "text": "during this era the session storage the\npersistent Store where the servers"
      },
      {
        "start_time": 1501200,
        "end_time": 1507720,
        "duration": 6520,
        "text": "stored the sessions and the users\ninformation move to distributed storage"
      },
      {
        "start_time": 1505240,
        "end_time": 1512799,
        "duration": 7559,
        "text": "distributed storage like that we have\nredis which is a inmemory store inmemory"
      },
      {
        "start_time": 1510480,
        "end_time": 1519120,
        "duration": 8640,
        "text": "store basically means storing data in\nRam compared to hard disk that's a on"
      },
      {
        "start_time": 1515720,
        "end_time": 1523720,
        "duration": 8000,
        "text": "line explanation or mcast which is also\nanother in memory store and servers"
      },
      {
        "start_time": 1521200,
        "end_time": 1527200,
        "duration": 6000,
        "text": "started to use these these were\ncomparatively faster as compared to DB"
      },
      {
        "start_time": 1525600,
        "end_time": 1532840,
        "duration": 7240,
        "text": "lookups because they were in memory\nstores so that's how of the uh storage"
      },
      {
        "start_time": 1530679,
        "end_time": 1538320,
        "duration": 7641,
        "text": "evolution of sessions happened and we\nstill use sessions even today for the"
      },
      {
        "start_time": 1535919,
        "end_time": 1546559,
        "duration": 10640,
        "text": "same purpose to provide some kind of\nmemory to our servers moving on then we"
      },
      {
        "start_time": 1541520,
        "end_time": 1551200,
        "duration": 9680,
        "text": "have is jws and this is a very popular\ntechnology in the current times these"
      },
      {
        "start_time": 1548679,
        "end_time": 1555960,
        "duration": 7281,
        "text": "are very popular and we will see why\nthey become popular what are the"
      },
      {
        "start_time": 1553720,
        "end_time": 1560480,
        "duration": 6760,
        "text": "advantages that they offered as compared\nto our traditional session based uh"
      },
      {
        "start_time": 1558600,
        "end_time": 1566200,
        "duration": 7600,
        "text": "authentication approach what are the\nadditional benefits of using jts that"
      },
      {
        "start_time": 1563080,
        "end_time": 1572880,
        "duration": 9800,
        "text": "cause their popularity so continuing our\nearlier session discussion by the mid"
      },
      {
        "start_time": 1569399,
        "end_time": 1580520,
        "duration": 11121,
        "text": "2000s by the mid 2000s web applications\ngrown into globally distributed systems"
      },
      {
        "start_time": 1577360,
        "end_time": 1587240,
        "duration": 9880,
        "text": "and stateful systems stateful systems\neven though they were effective they"
      },
      {
        "start_time": 1582600,
        "end_time": 1593120,
        "duration": 10520,
        "text": "caused a bottle link because first thing\nmemory maintaining session data for"
      },
      {
        "start_time": 1589960,
        "end_time": 1597399,
        "duration": 7439,
        "text": "millions of users became costly so we\nright now we are talking about what led"
      },
      {
        "start_time": 1594760,
        "end_time": 1601919,
        "duration": 7159,
        "text": "to the emergence of gilies so first\nthing is retaining session data for"
      },
      {
        "start_time": 1600240,
        "end_time": 1608679,
        "duration": 8439,
        "text": "thousands and millions and billions of\nusers became a large overhead for a lot"
      },
      {
        "start_time": 1604320,
        "end_time": 1613080,
        "duration": 8760,
        "text": "of servers second thing is\nreplication what this means is in"
      },
      {
        "start_time": 1610679,
        "end_time": 1618640,
        "duration": 7961,
        "text": "distributed architectures synchronizing\nsession data across servers or regions"
      },
      {
        "start_time": 1616080,
        "end_time": 1621799,
        "duration": 5719,
        "text": "one server could be in one part of the\nWorld another server could be in the"
      },
      {
        "start_time": 1620399,
        "end_time": 1627399,
        "duration": 7000,
        "text": "opposite part of the world so\nsynchronizing the user data across these"
      },
      {
        "start_time": 1624799,
        "end_time": 1632279,
        "duration": 7480,
        "text": "servers from different regions introduce\nlatency so the authentication flow"
      },
      {
        "start_time": 1629559,
        "end_time": 1637480,
        "duration": 7921,
        "text": "introduced latency which is basically\nmeans delays in authenticating the user"
      },
      {
        "start_time": 1634919,
        "end_time": 1642760,
        "duration": 7841,
        "text": "and consistency challenges because of\nthe synchronizing need and that led to"
      },
      {
        "start_time": 1641039,
        "end_time": 1648240,
        "duration": 7201,
        "text": "the birth of\ngwts"
      },
      {
        "start_time": 1644480,
        "end_time": 1653679,
        "duration": 9199,
        "text": "JWT because developers sought a solution\nthat could offload state from the server"
      },
      {
        "start_time": 1650360,
        "end_time": 1659840,
        "duration": 9480,
        "text": "while maintaining security and integrity\nthat's what people came up with jws jws"
      },
      {
        "start_time": 1657240,
        "end_time": 1666559,
        "duration": 9319,
        "text": "which were formalized in the\n2015 were a stateless mechanism"
      },
      {
        "start_time": 1663679,
        "end_time": 1671960,
        "duration": 8281,
        "text": "stateless this is the word to focus on\nstateless there is stateless mechanism"
      },
      {
        "start_time": 1669200,
        "end_time": 1677080,
        "duration": 7880,
        "text": "for transferring claims we'll see what\nclaims are shortly transferring claims"
      },
      {
        "start_time": 1674720,
        "end_time": 1682000,
        "duration": 7280,
        "text": "in a stateless manner between different\nparties let's say two systems"
      },
      {
        "start_time": 1679360,
        "end_time": 1687640,
        "duration": 8280,
        "text": "transfering claims in a stateless manner\nbetween two parties or two systems and"
      },
      {
        "start_time": 1685159,
        "end_time": 1694799,
        "duration": 9640,
        "text": "the key Innovation here was\nselfcontained JWT s"
      },
      {
        "start_time": 1691279,
        "end_time": 1700279,
        "duration": 9000,
        "text": "selfcontained tokens JWT tokens contain\nuser data stuff like user ID their role"
      },
      {
        "start_time": 1697600,
        "end_time": 1708440,
        "duration": 10840,
        "text": "and the cryptographic signatures in one\ntoken which are base 64 encoded if we go"
      },
      {
        "start_time": 1703559,
        "end_time": 1713279,
        "duration": 9720,
        "text": "to the website called JWT doio\nwe can take a look at what a JT looks"
      },
      {
        "start_time": 1710799,
        "end_time": 1721480,
        "duration": 10681,
        "text": "like okay so this is what a JWT looks\nlike this is the whole base 64 encoded"
      },
      {
        "start_time": 1716279,
        "end_time": 1726760,
        "duration": 10481,
        "text": "JWT string and JWT has three parts so to\nget a high level idea we can look at the"
      },
      {
        "start_time": 1723600,
        "end_time": 1733399,
        "duration": 9799,
        "text": "parts which are first part is the header\nthe header basically specifies metadata"
      },
      {
        "start_time": 1729960,
        "end_time": 1738919,
        "duration": 8959,
        "text": "metadata such as the signing algorithm\nwhich can help uh the server to get some"
      },
      {
        "start_time": 1737399,
        "end_time": 1743919,
        "duration": 6520,
        "text": "information on what was the signing\nalgorithm that is used while the J was"
      },
      {
        "start_time": 1741399,
        "end_time": 1748480,
        "duration": 7081,
        "text": "being created so the first part the\nheader basically contains metadata about"
      },
      {
        "start_time": 1746200,
        "end_time": 1754080,
        "duration": 7880,
        "text": "the JWT itself stuff like the signing\nalgorithm and the second part which is"
      },
      {
        "start_time": 1751159,
        "end_time": 1759679,
        "duration": 8520,
        "text": "the payload data the data of the user\nthe data that we store in the JWT the"
      },
      {
        "start_time": 1756799,
        "end_time": 1766080,
        "duration": 9281,
        "text": "data that we actually need this also has\nsome kind of format that we typically"
      },
      {
        "start_time": 1761679,
        "end_time": 1771080,
        "duration": 9401,
        "text": "follow so the first thing is Sub sub is\nthe field where we usually store the"
      },
      {
        "start_time": 1768799,
        "end_time": 1777080,
        "duration": 8281,
        "text": "users ID we store the user ID and the\nuser ID can be in any context it can be"
      },
      {
        "start_time": 1774159,
        "end_time": 1782200,
        "duration": 8041,
        "text": "user ID uh from your database it can be\nuser ID from an au provider it can be"
      },
      {
        "start_time": 1779640,
        "end_time": 1787399,
        "duration": 7759,
        "text": "any user ID from any context this is\njust a storage mechanism right you store"
      },
      {
        "start_time": 1784919,
        "end_time": 1793840,
        "duration": 8921,
        "text": "the user ID of the user in the sub field\nin the IAT field this stores when the"
      },
      {
        "start_time": 1790200,
        "end_time": 1798519,
        "duration": 8319,
        "text": "JWT was issued that is the information\nthe I field stores which means basically"
      },
      {
        "start_time": 1796440,
        "end_time": 1803440,
        "duration": 7000,
        "text": "means issued at that's the full form of\nIAT and then we have optional Fields you"
      },
      {
        "start_time": 1801000,
        "end_time": 1808519,
        "duration": 7519,
        "text": "can store the name of the user and the\nrole of the user whether the user is an"
      },
      {
        "start_time": 1805159,
        "end_time": 1812880,
        "duration": 7721,
        "text": "admin is a member or it is a role of\neditor or a viewer or writer whatever"
      },
      {
        "start_time": 1810919,
        "end_time": 1816559,
        "duration": 5640,
        "text": "the role is you can store information\nlike like that different kinds of"
      },
      {
        "start_time": 1814159,
        "end_time": 1821279,
        "duration": 7120,
        "text": "information in different kinds of fields\ninside the payload this is the part"
      },
      {
        "start_time": 1819279,
        "end_time": 1826600,
        "duration": 7321,
        "text": "where you can store information and the\nlast part is the signature of the JWT to"
      },
      {
        "start_time": 1824440,
        "end_time": 1831000,
        "duration": 6560,
        "text": "verify that whether you are the one who\nissued it whether this data has been"
      },
      {
        "start_time": 1828519,
        "end_time": 1836120,
        "duration": 7601,
        "text": "tampered or not right and you can do\nthat with a secret key that you can"
      },
      {
        "start_time": 1833440,
        "end_time": 1841640,
        "duration": 8200,
        "text": "generate and keepy for yourself only you\nhave an access to it if someone makes"
      },
      {
        "start_time": 1837960,
        "end_time": 1845600,
        "duration": 7640,
        "text": "any change to the JWT and you verify\nthat JWT with your secret key then the"
      },
      {
        "start_time": 1843519,
        "end_time": 1851159,
        "duration": 7640,
        "text": "validation will fail because someone\nmade some changes to the JWT and it is"
      },
      {
        "start_time": 1848640,
        "end_time": 1857559,
        "duration": 8919,
        "text": "not tamper proof anymore and now you\nknow that so that is not a JWT valid JWT"
      },
      {
        "start_time": 1854519,
        "end_time": 1861880,
        "duration": 7361,
        "text": "anymore that's how you can verify users\ndata in in a stateless manner now you"
      },
      {
        "start_time": 1860080,
        "end_time": 1866080,
        "duration": 6000,
        "text": "don't have to store the session\ninformation anymore whole session"
      },
      {
        "start_time": 1863880,
        "end_time": 1870279,
        "duration": 6399,
        "text": "verification mechanism just became\nstateless it it happens with every"
      },
      {
        "start_time": 1868039,
        "end_time": 1876159,
        "duration": 8120,
        "text": "request it is very lightweight and saves\na lot of storage cost so these are the"
      },
      {
        "start_time": 1872600,
        "end_time": 1879919,
        "duration": 7319,
        "text": "advantages that jws offered that made a\nlot of things in the authentication"
      },
      {
        "start_time": 1877559,
        "end_time": 1884000,
        "duration": 6441,
        "text": "workflows very simple the first thing\nwas"
      },
      {
        "start_time": 1880799,
        "end_time": 1888919,
        "duration": 8120,
        "text": "statelessness which basically enabled no\nserver side storage costs second thing"
      },
      {
        "start_time": 1887080,
        "end_time": 1893399,
        "duration": 6319,
        "text": "was scalability\nscalability scalability basically means"
      },
      {
        "start_time": 1891720,
        "end_time": 1898159,
        "duration": 6439,
        "text": "a lot of servers these days use the\nmicroservice architecture and"
      },
      {
        "start_time": 1895039,
        "end_time": 1903639,
        "duration": 8600,
        "text": "distributed architecture and which means\na cookie issued from one server cannot"
      },
      {
        "start_time": 1900919,
        "end_time": 1909000,
        "duration": 8081,
        "text": "be used for a server which is in another\ndomain as a in a microservice"
      },
      {
        "start_time": 1905799,
        "end_time": 1914200,
        "duration": 8401,
        "text": "architecture so using technology such as\nJWT enabled a client to send the JWT to"
      },
      {
        "start_time": 1912679,
        "end_time": 1920960,
        "duration": 8281,
        "text": "different different servers and all the\nservers will have the secret key of the"
      },
      {
        "start_time": 1917080,
        "end_time": 1926880,
        "duration": 9800,
        "text": "JWT using which they can decode the jwd\nand verify the users's identity for now"
      },
      {
        "start_time": 1924480,
        "end_time": 1932360,
        "duration": 7880,
        "text": "a lot of servers a server can be scaled\nto a lot of instances and they won't"
      },
      {
        "start_time": 1929760,
        "end_time": 1936840,
        "duration": 7080,
        "text": "have to worry about user authentication\nanymore all the servers can do the user"
      },
      {
        "start_time": 1934399,
        "end_time": 1942519,
        "duration": 8120,
        "text": "authentication at the same time using a\nshared secret key and that was one of"
      },
      {
        "start_time": 1939519,
        "end_time": 1947000,
        "duration": 7481,
        "text": "the major benefits of gwts which and the\nthird thing is the portability and"
      },
      {
        "start_time": 1945000,
        "end_time": 1950919,
        "duration": 5919,
        "text": "because because of the lightweight\nnature because of the URL friendly"
      },
      {
        "start_time": 1948519,
        "end_time": 1956159,
        "duration": 7640,
        "text": "nature because of the base 64 encoding\nstring format jwt's could be passed"
      },
      {
        "start_time": 1953919,
        "end_time": 1959320,
        "duration": 5401,
        "text": "between different systems they could be\nstored in local storage even though you"
      },
      {
        "start_time": 1957760,
        "end_time": 1965000,
        "duration": 7240,
        "text": "should not do that they should they\ncould be stored in cookies and a lot of"
      },
      {
        "start_time": 1962080,
        "end_time": 1969159,
        "duration": 7079,
        "text": "different Limited Space storage systems\nthey're very portable you can send them"
      },
      {
        "start_time": 1966799,
        "end_time": 1974760,
        "duration": 7961,
        "text": "in url values and a lot of other\nadvantages that JWT is offered in terms"
      },
      {
        "start_time": 1971519,
        "end_time": 1981320,
        "duration": 9801,
        "text": "of portability and on top of that they\nalso introduced some challenges One"
      },
      {
        "start_time": 1977240,
        "end_time": 1987720,
        "duration": 10480,
        "text": "Challenge was token the the of token\nsince JWT was stateless it was stateless"
      },
      {
        "start_time": 1984880,
        "end_time": 1994120,
        "duration": 9240,
        "text": "there was no stored mechanism that the\nserver used to uh validate the user's"
      },
      {
        "start_time": 1990679,
        "end_time": 2001320,
        "duration": 10641,
        "text": "identity if someone has access to your\nJWT now they can impersonate as you they"
      },
      {
        "start_time": 1997360,
        "end_time": 2006480,
        "duration": 9120,
        "text": "can use your JWT to perform actions on\nbehalf of you that is the one"
      },
      {
        "start_time": 2003320,
        "end_time": 2013120,
        "duration": 9800,
        "text": "disadvantage of gwts and there is no\nmechanism from the side to invalidate"
      },
      {
        "start_time": 2009679,
        "end_time": 2020919,
        "duration": 11240,
        "text": "that token until it expired manually\nunless unless the server changed its"
      },
      {
        "start_time": 2017519,
        "end_time": 2026080,
        "duration": 8561,
        "text": "secret the secret using which the server\nverified all the users now the problem"
      },
      {
        "start_time": 2024159,
        "end_time": 2032200,
        "duration": 8041,
        "text": "with that is if the server changes the\nsecret to invalidate one token now all"
      },
      {
        "start_time": 2029159,
        "end_time": 2037320,
        "duration": 8161,
        "text": "the users of that platform of that\nsystem will have to login again and get"
      },
      {
        "start_time": 2035039,
        "end_time": 2043120,
        "duration": 8081,
        "text": "new jws just because the server wanted\nto in validate token of one user that"
      },
      {
        "start_time": 2040519,
        "end_time": 2048280,
        "duration": 7761,
        "text": "was one thing second thing was\nrevocation so for some reason if the"
      },
      {
        "start_time": 2045519,
        "end_time": 2053399,
        "duration": 7880,
        "text": "server wanted to to revoke some users\naccess or some users uh access to the"
      },
      {
        "start_time": 2051159,
        "end_time": 2059159,
        "duration": 8000,
        "text": "platform or access uh in different\nsystems the server could not do that"
      },
      {
        "start_time": 2055679,
        "end_time": 2064839,
        "duration": 9160,
        "text": "because jws since they are stateless you\nhave no way to track the status of a JWT"
      },
      {
        "start_time": 2062639,
        "end_time": 2070159,
        "duration": 7520,
        "text": "token until they are expired you cannot\nreally do anything so these are the two"
      },
      {
        "start_time": 2066919,
        "end_time": 2076440,
        "duration": 9521,
        "text": "major dis advantages that came up\nbecause of jts because of the use of jws"
      },
      {
        "start_time": 2073440,
        "end_time": 2080520,
        "duration": 7080,
        "text": "even though these days we found some\nkind of solution for that for example"
      },
      {
        "start_time": 2078320,
        "end_time": 2086599,
        "duration": 8279,
        "text": "for the first thing and the second thing\ntogether we use a hybrid approach of"
      },
      {
        "start_time": 2083320,
        "end_time": 2091440,
        "duration": 8120,
        "text": "using gwts so using a hybrid approach\nagain raises some questions first I'll"
      },
      {
        "start_time": 2089079,
        "end_time": 2097280,
        "duration": 8201,
        "text": "tell you what a hybrid approach is which\nhe came up with to beat the above two"
      },
      {
        "start_time": 2093760,
        "end_time": 2103240,
        "duration": 9480,
        "text": "advantages so this is how it works the\nuser logs in and the server sends it a"
      },
      {
        "start_time": 2100160,
        "end_time": 2107640,
        "duration": 7480,
        "text": "token a JWT token which the user stores\nin its system okay and with every"
      },
      {
        "start_time": 2105920,
        "end_time": 2112720,
        "duration": 6800,
        "text": "subsequent request to the server the\nuser sends a JWT in either a"
      },
      {
        "start_time": 2109839,
        "end_time": 2117680,
        "duration": 7841,
        "text": "authorization header or in any other\nform or a quicky or anything okay and"
      },
      {
        "start_time": 2115400,
        "end_time": 2123960,
        "duration": 8560,
        "text": "that's how the server gets the JWT it\nverifies the JWT with its secret key and"
      },
      {
        "start_time": 2121160,
        "end_time": 2128240,
        "duration": 7080,
        "text": "make sure the user has proper uh access\nor it can identify the user that's how"
      },
      {
        "start_time": 2126560,
        "end_time": 2134160,
        "duration": 7600,
        "text": "it works in a JW\nbased workflow so in the hybrid approach"
      },
      {
        "start_time": 2131520,
        "end_time": 2140400,
        "duration": 8880,
        "text": "what we do is we combine statelessness\nwith statefulness what that means is in"
      },
      {
        "start_time": 2137240,
        "end_time": 2146160,
        "duration": 8920,
        "text": "a jwd typical workflow we don't make an\nadditional lookup in our storage the"
      },
      {
        "start_time": 2144000,
        "end_time": 2152839,
        "duration": 8839,
        "text": "storage could be a database lookup or a\ninmemory lookup like redis or mcash we"
      },
      {
        "start_time": 2149200,
        "end_time": 2157040,
        "duration": 7840,
        "text": "don't do that we verify the JWT with a\nsecret key and we find out who the user"
      },
      {
        "start_time": 2155200,
        "end_time": 2163359,
        "duration": 8159,
        "text": "is using the user ID that is stored\ninside the J WT that's it we don't do"
      },
      {
        "start_time": 2160280,
        "end_time": 2169520,
        "duration": 9240,
        "text": "any additional storage lookup now in the\nhybrid approach what happens after you"
      },
      {
        "start_time": 2165800,
        "end_time": 2175560,
        "duration": 9760,
        "text": "verify the gwts after you uh have the\nverification step passed you maintain a"
      },
      {
        "start_time": 2172560,
        "end_time": 2180079,
        "duration": 7519,
        "text": "blacklist of gwts in your persistance\nstorage again it could be a database"
      },
      {
        "start_time": 2177760,
        "end_time": 2186599,
        "duration": 8839,
        "text": "call or a inmemory call for redis or\nmcast and using that you can temporarily"
      },
      {
        "start_time": 2183880,
        "end_time": 2193160,
        "duration": 9280,
        "text": "block some users revoke access for some\nusers uh in case of some users account"
      },
      {
        "start_time": 2190079,
        "end_time": 2199640,
        "duration": 9561,
        "text": "being hacked or some user doing some\nmalicious activity you can temporarily"
      },
      {
        "start_time": 2196119,
        "end_time": 2205000,
        "duration": 8881,
        "text": "block their access using a blacklist now\nthe question it raises is the whole"
      },
      {
        "start_time": 2202079,
        "end_time": 2209599,
        "duration": 7520,
        "text": "point of using JWT was the statelessness\nand if you are doing a persistent"
      },
      {
        "start_time": 2207119,
        "end_time": 2215280,
        "duration": 8161,
        "text": "storage lookup for checking the validity\nof the jwd why not do the statefulness"
      },
      {
        "start_time": 2212480,
        "end_time": 2220560,
        "duration": 8080,
        "text": "why not do the stateful approach in the\nfirst place which can provide this"
      },
      {
        "start_time": 2217599,
        "end_time": 2226280,
        "duration": 8681,
        "text": "advantage and it is considered more\nsecure so these are the kinds of"
      },
      {
        "start_time": 2223400,
        "end_time": 2230560,
        "duration": 7160,
        "text": "questions that we frequently see uh in\nthe industry typically the advice is"
      },
      {
        "start_time": 2228480,
        "end_time": 2235800,
        "duration": 7320,
        "text": "don't think about all these different\nauthentication strategies and all go"
      },
      {
        "start_time": 2232599,
        "end_time": 2239599,
        "duration": 7000,
        "text": "with a Au provider we have a lot of\ndifferent different types of"
      },
      {
        "start_time": 2237440,
        "end_time": 2244280,
        "duration": 6840,
        "text": "authentication providers we have ozero\nwe have the modern Alternatives like"
      },
      {
        "start_time": 2242160,
        "end_time": 2248359,
        "duration": 6199,
        "text": "Clerk and all that's their headache\nthat's their headache to worry about"
      },
      {
        "start_time": 2245839,
        "end_time": 2252160,
        "duration": 6321,
        "text": "what technologies what components of\nauthentication to use which is more"
      },
      {
        "start_time": 2250000,
        "end_time": 2255599,
        "duration": 5599,
        "text": "secure which is a more secure way which\nare more secure techniques and"
      },
      {
        "start_time": 2253960,
        "end_time": 2259560,
        "duration": 5600,
        "text": "everything the starting from the\nalgorithm to Hash to salt all the"
      },
      {
        "start_time": 2258240,
        "end_time": 2264480,
        "duration": 6240,
        "text": "different parts all the different\nheadaches of authentication which which"
      },
      {
        "start_time": 2261760,
        "end_time": 2268160,
        "duration": 6400,
        "text": "creates a secure authentication system\nthat's their headache it's very"
      },
      {
        "start_time": 2265960,
        "end_time": 2275280,
        "duration": 9320,
        "text": "important if you are building a medium\nto a largly complex system it's a good"
      },
      {
        "start_time": 2272319,
        "end_time": 2278680,
        "duration": 6361,
        "text": "idea to go with an external o provider\neven though it's it's a good idea if"
      },
      {
        "start_time": 2276800,
        "end_time": 2283480,
        "duration": 6680,
        "text": "you're learning backend engineering to\nimplement your own o understand how the"
      },
      {
        "start_time": 2280800,
        "end_time": 2289400,
        "duration": 8600,
        "text": "different parts work and understand the\ntradeoffs understand the advantages and"
      },
      {
        "start_time": 2286160,
        "end_time": 2294200,
        "duration": 8040,
        "text": "disadvantages everything after that in a\nproduction system go with au provider go"
      },
      {
        "start_time": 2292079,
        "end_time": 2298520,
        "duration": 6441,
        "text": "with an O provider unless you're very\nconfident about your authentication"
      },
      {
        "start_time": 2296240,
        "end_time": 2302480,
        "duration": 6240,
        "text": "workflows okay that is my two sents\nabout what you should do with all this"
      },
      {
        "start_time": 2300800,
        "end_time": 2306920,
        "duration": 6120,
        "text": "confusion about what is right what is\nnot and all and the third thing that we"
      },
      {
        "start_time": 2304400,
        "end_time": 2311839,
        "duration": 7439,
        "text": "have is Cookie and we have already\ndiscussed and talked about using cookies"
      },
      {
        "start_time": 2309200,
        "end_time": 2315720,
        "duration": 6520,
        "text": "in in the earlier two examples for\nexample in the session based"
      },
      {
        "start_time": 2313400,
        "end_time": 2321319,
        "duration": 7919,
        "text": "authentication uh first I'll explain\nwhat a cookie is Cookie is basically"
      },
      {
        "start_time": 2317920,
        "end_time": 2326480,
        "duration": 8560,
        "text": "some way of storing a piece of\ninformation it can be any string any"
      },
      {
        "start_time": 2324119,
        "end_time": 2331160,
        "duration": 7041,
        "text": "value it is one way of storing this\ninformation in a user's browser from the"
      },
      {
        "start_time": 2328880,
        "end_time": 2338160,
        "duration": 9280,
        "text": "server side that is the important part\nusing cookies using cookies servers now"
      },
      {
        "start_time": 2335000,
        "end_time": 2342400,
        "duration": 7400,
        "text": "can store some information in client\nbrowsers from this side so this is a"
      },
      {
        "start_time": 2340520,
        "end_time": 2348119,
        "duration": 7599,
        "text": "very nice features uh offered by\nbrowsers so using the HTTP request"
      },
      {
        "start_time": 2345400,
        "end_time": 2353599,
        "duration": 8199,
        "text": "workflow a servers can store some kind\nof information in the users browser"
      },
      {
        "start_time": 2350920,
        "end_time": 2358160,
        "duration": 7240,
        "text": "given given certain conditions\nconditions that that cookie is only"
      },
      {
        "start_time": 2356119,
        "end_time": 2362960,
        "duration": 6841,
        "text": "accessible to that server a server\ncannot see other servers cookies so that"
      },
      {
        "start_time": 2361560,
        "end_time": 2367480,
        "duration": 5920,
        "text": "is a nice feature that is a nice\nsecurity feature offered by the browsers"
      },
      {
        "start_time": 2365440,
        "end_time": 2374599,
        "duration": 9159,
        "text": "so using this whole mechanism cookies\nand all a cookie set by one server in a"
      },
      {
        "start_time": 2371280,
        "end_time": 2380079,
        "duration": 8799,
        "text": "client's browser will be sent in all the\nsubsequent request to that server so"
      },
      {
        "start_time": 2377040,
        "end_time": 2383839,
        "duration": 6799,
        "text": "this whole Workplay of cookies the\nserver storing the cookie in the users"
      },
      {
        "start_time": 2381599,
        "end_time": 2387920,
        "duration": 6321,
        "text": "browser and the cookie being sent to the\nserver with every subsequent request"
      },
      {
        "start_time": 2385960,
        "end_time": 2394079,
        "duration": 8119,
        "text": "from the users browser this whole\nWorkplay enables that during the"
      },
      {
        "start_time": 2391359,
        "end_time": 2399319,
        "duration": 7960,
        "text": "authentication workflow so let's come\nhere during the authentication workflow"
      },
      {
        "start_time": 2395880,
        "end_time": 2404240,
        "duration": 8360,
        "text": "first a user a client authenticates with\nusername and password to the server to"
      },
      {
        "start_time": 2402280,
        "end_time": 2409599,
        "duration": 7319,
        "text": "the server and if the authentication is\nsuccessful the server sets a cookie we"
      },
      {
        "start_time": 2407240,
        "end_time": 2414720,
        "duration": 7480,
        "text": "can say a cookie with the authorization\ntoken this looks something like V A JWT"
      },
      {
        "start_time": 2412200,
        "end_time": 2419800,
        "duration": 7600,
        "text": "token or a session ID it can be whatever\ndepends on the implementation it stores"
      },
      {
        "start_time": 2416880,
        "end_time": 2424640,
        "duration": 7760,
        "text": "it in the client's cookies and in\nsubsequent request the client's browser"
      },
      {
        "start_time": 2422359,
        "end_time": 2430720,
        "duration": 8361,
        "text": "it can be Chrome Firefox Papa whatever\nit is tends this information this cookie"
      },
      {
        "start_time": 2427359,
        "end_time": 2436119,
        "duration": 8760,
        "text": "key to the server so that the server can\nvalidate authenticity of the token and"
      },
      {
        "start_time": 2433400,
        "end_time": 2440960,
        "duration": 7560,
        "text": "it can authorize it can it can identify\nthe user and it can authorize the user"
      },
      {
        "start_time": 2438040,
        "end_time": 2445160,
        "duration": 7120,
        "text": "and do all the uh workflows that comes\nafter the authentication so cookie is a"
      },
      {
        "start_time": 2443119,
        "end_time": 2449319,
        "duration": 6200,
        "text": "very nice way to automate the process of\nserver uh sending the token to the"
      },
      {
        "start_time": 2446880,
        "end_time": 2453520,
        "duration": 6640,
        "text": "client and the client sending the token\nback to the server with every subsequent"
      },
      {
        "start_time": 2450839,
        "end_time": 2457319,
        "duration": 6480,
        "text": "request all of this can be done from the\nserver side using the mechanism called"
      },
      {
        "start_time": 2455359,
        "end_time": 2461280,
        "duration": 5921,
        "text": "cookies because the server has access\naccess to client cookies that is stored"
      },
      {
        "start_time": 2459440,
        "end_time": 2466920,
        "duration": 7480,
        "text": "in the browser from the server side that\nis the part to focus on and that was"
      },
      {
        "start_time": 2463800,
        "end_time": 2473040,
        "duration": 9240,
        "text": "about three major components of modern\nauthentication now let's move on to"
      },
      {
        "start_time": 2470160,
        "end_time": 2477000,
        "duration": 6840,
        "text": "different types of authentication types\nwe pretty much already have discussed"
      },
      {
        "start_time": 2475800,
        "end_time": 2482319,
        "duration": 6519,
        "text": "what are the two major types of\nauthentication but here we can keep that"
      },
      {
        "start_time": 2479960,
        "end_time": 2487599,
        "duration": 7639,
        "text": "as a topic at hand and discuss them at a\nvery high level the first part"
      },
      {
        "start_time": 2484319,
        "end_time": 2494079,
        "duration": 9760,
        "text": "is stateful authentication and the\nsecond is stateless we have also other"
      },
      {
        "start_time": 2490720,
        "end_time": 2502119,
        "duration": 11399,
        "text": "methods of authentication we have API\nkey based authentication we also have o"
      },
      {
        "start_time": 2498400,
        "end_time": 2506839,
        "duration": 8439,
        "text": "2.0 based authentication and these are\npretty much all the major types of"
      },
      {
        "start_time": 2504720,
        "end_time": 2511599,
        "duration": 6879,
        "text": "authentication that I can think of that\nwe use as backend engineers in our"
      },
      {
        "start_time": 2509400,
        "end_time": 2516440,
        "duration": 7040,
        "text": "day-to-day lives okay let's dive into\neach of these types and see how they"
      },
      {
        "start_time": 2513720,
        "end_time": 2521200,
        "duration": 7480,
        "text": "work and what are the advantages\ndisadvantages"
      },
      {
        "start_time": 2517880,
        "end_time": 2525960,
        "duration": 8080,
        "text": "and when should you use which one and\neverything about them pretty much okay"
      },
      {
        "start_time": 2523760,
        "end_time": 2532800,
        "duration": 9040,
        "text": "let's get into stateful authentication\nfirst one is a stateful okay all in all"
      },
      {
        "start_time": 2530839,
        "end_time": 2539599,
        "duration": 8760,
        "text": "this is what stateful authentication\ntypically looks like okay we have client"
      },
      {
        "start_time": 2536119,
        "end_time": 2545839,
        "duration": 9720,
        "text": "here it is a browser let's say it is a\nbrowser it's a chrome we have the client"
      },
      {
        "start_time": 2541760,
        "end_time": 2551119,
        "duration": 9359,
        "text": "here client and we have the server here\nokay first step"
      },
      {
        "start_time": 2547839,
        "end_time": 2555599,
        "duration": 7760,
        "text": "during authentication the client sends\nusername and password to the server"
      },
      {
        "start_time": 2553720,
        "end_time": 2559119,
        "duration": 5399,
        "text": "username or password or email or\npassword whatever the authentication"
      },
      {
        "start_time": 2556880,
        "end_time": 2564440,
        "duration": 7560,
        "text": "mechanism is to the server the server\nchecks the validity and the correctness"
      },
      {
        "start_time": 2562520,
        "end_time": 2569319,
        "duration": 6799,
        "text": "of the password and the username on the\nemail and all if they are correct if the"
      },
      {
        "start_time": 2566920,
        "end_time": 2574640,
        "duration": 7720,
        "text": "user is eligible to authenticate into\nthe platform the server generates a"
      },
      {
        "start_time": 2572480,
        "end_time": 2579400,
        "duration": 6920,
        "text": "session ID we have talked about sessions\nalready and this workflow also already"
      },
      {
        "start_time": 2576839,
        "end_time": 2585800,
        "duration": 8961,
        "text": "but let's just discuss it again a\nsession ID and the users data whatever"
      },
      {
        "start_time": 2582000,
        "end_time": 2590760,
        "duration": 8760,
        "text": "it is and bundle s user data bundles\nthem and stores in redis it can be a"
      },
      {
        "start_time": 2588480,
        "end_time": 2595760,
        "duration": 7280,
        "text": "database also but mostly platforms use\nredis because of the fast read time Fast"
      },
      {
        "start_time": 2593359,
        "end_time": 2600359,
        "duration": 7000,
        "text": "Access time of the redis as compared to\nour traditional databases okay and it"
      },
      {
        "start_time": 2597839,
        "end_time": 2607119,
        "duration": 9280,
        "text": "stores in the redis and it sends the\nsession ID back to the client back to"
      },
      {
        "start_time": 2603599,
        "end_time": 2612880,
        "duration": 9281,
        "text": "the client in a cookie in a cookie\nstores it inside a cookie a HTTP only"
      },
      {
        "start_time": 2610040,
        "end_time": 2617720,
        "duration": 7680,
        "text": "cookie which means JavaScript cannot\naccess the cookie JavaScript cannot"
      },
      {
        "start_time": 2614599,
        "end_time": 2623160,
        "duration": 8561,
        "text": "access the value of the session ID and\nthe server sends the session ID to the"
      },
      {
        "start_time": 2619720,
        "end_time": 2626960,
        "duration": 7240,
        "text": "client back in a cookie and because of\nthe nature of the cookie because of the"
      },
      {
        "start_time": 2624760,
        "end_time": 2632000,
        "duration": 7240,
        "text": "nature of the subsequent request\nattachment quality of the cookie what"
      },
      {
        "start_time": 2629400,
        "end_time": 2639359,
        "duration": 9959,
        "text": "happens is all the request that happen\nafter that one will have this cookie"
      },
      {
        "start_time": 2636800,
        "end_time": 2643800,
        "duration": 7000,
        "text": "where where the session ID is present\nand the server will get this cookie the"
      },
      {
        "start_time": 2641880,
        "end_time": 2649599,
        "duration": 7719,
        "text": "server will take that session ID and it\nwill check the existence of that session"
      },
      {
        "start_time": 2646880,
        "end_time": 2653920,
        "duration": 7040,
        "text": "ID in redis the expiry of that and the\nuser data and everything and it can"
      },
      {
        "start_time": 2652079,
        "end_time": 2658640,
        "duration": 6561,
        "text": "identify the user it can authorize the\nuser or whatever it wants to do and the"
      },
      {
        "start_time": 2656079,
        "end_time": 2664400,
        "duration": 8321,
        "text": "user can has the ability to call the API\nthat's how the typical stateful"
      },
      {
        "start_time": 2660319,
        "end_time": 2670040,
        "duration": 9721,
        "text": "authentication workflow works and the\nsession ID can be any cryptographic"
      },
      {
        "start_time": 2667400,
        "end_time": 2673280,
        "duration": 5880,
        "text": "random string it can be JWT token\nwhatever it depends on the"
      },
      {
        "start_time": 2671119,
        "end_time": 2678480,
        "duration": 7361,
        "text": "implementation and that's all about\nstateful authentication moving on to"
      },
      {
        "start_time": 2675960,
        "end_time": 2682760,
        "duration": 6800,
        "text": "stateless authentication that's\nstateless and this is how stateless"
      },
      {
        "start_time": 2680760,
        "end_time": 2688960,
        "duration": 8200,
        "text": "authentication works we have a client\nagain we it's a browser and we have a"
      },
      {
        "start_time": 2686280,
        "end_time": 2693000,
        "duration": 6720,
        "text": "server the user sends the username or\npassword the email and password and"
      },
      {
        "start_time": 2691079,
        "end_time": 2698400,
        "duration": 7321,
        "text": "password in the first request while the\nuser is trying to login the server"
      },
      {
        "start_time": 2695440,
        "end_time": 2704079,
        "duration": 8639,
        "text": "checks the authenticity of the username\nand password and if they are correct if"
      },
      {
        "start_time": 2700559,
        "end_time": 2711520,
        "duration": 10961,
        "text": "they are correct the server generates a\nsigned JWT token sign JWT token with a"
      },
      {
        "start_time": 2708520,
        "end_time": 2717640,
        "duration": 9120,
        "text": "secret key the server has its own secret\nkey using which it can sign gwts and it"
      },
      {
        "start_time": 2714680,
        "end_time": 2723040,
        "duration": 8360,
        "text": "can verify gwts this is very important\nit has to be stored somewhere securely"
      },
      {
        "start_time": 2719880,
        "end_time": 2729160,
        "duration": 9280,
        "text": "so that it can sign or verify jws and\nthe server creates a new JW token which"
      },
      {
        "start_time": 2726079,
        "end_time": 2737119,
        "duration": 11040,
        "text": "has the users information things like\nuser ID user role Etc and it sends the"
      },
      {
        "start_time": 2733000,
        "end_time": 2743280,
        "duration": 10280,
        "text": "JWT back to the client okay then in all\nthe next requests if the client wants to"
      },
      {
        "start_time": 2740720,
        "end_time": 2749440,
        "duration": 8720,
        "text": "identify itself it wants to authorize\nitself what it can do is it can send the"
      },
      {
        "start_time": 2745599,
        "end_time": 2753800,
        "duration": 8201,
        "text": "JWT back in a header you can send in any\nway but the standard is you can send in"
      },
      {
        "start_time": 2752359,
        "end_time": 2760000,
        "duration": 7641,
        "text": "a header called\nauthorization and you paste the jwd here"
      },
      {
        "start_time": 2757720,
        "end_time": 2766200,
        "duration": 8480,
        "text": "and you send it to the server the server\nextracts this token and it tries to"
      },
      {
        "start_time": 2762760,
        "end_time": 2772480,
        "duration": 9720,
        "text": "verify it using the secret key that it\nhas and it verifies it and then it can"
      },
      {
        "start_time": 2769400,
        "end_time": 2775480,
        "duration": 6080,
        "text": "find out the user's ID and if the\nverification is successful the"
      },
      {
        "start_time": 2773760,
        "end_time": 2780520,
        "duration": 6760,
        "text": "authentication is successful and the\nuser can uh have a successful API"
      },
      {
        "start_time": 2777880,
        "end_time": 2784960,
        "duration": 7080,
        "text": "response otherwise the Ser will throw an\nerror called unauthorized or forbidden"
      },
      {
        "start_time": 2782640,
        "end_time": 2789480,
        "duration": 6840,
        "text": "or whatever the convention is and that's\nhow a stateless Authentication works"
      },
      {
        "start_time": 2787440,
        "end_time": 2793920,
        "duration": 6480,
        "text": "because because it's called stateless\nbecause in a stateful authentication we"
      },
      {
        "start_time": 2791800,
        "end_time": 2799400,
        "duration": 7600,
        "text": "need to look up a persistent store it\ncan be a database or it can be red and"
      },
      {
        "start_time": 2797280,
        "end_time": 2805040,
        "duration": 7760,
        "text": "in a stateless authentication whatever\ninformation that we need about the user"
      },
      {
        "start_time": 2801559,
        "end_time": 2811400,
        "duration": 9841,
        "text": "is stored in the token itself in the JWT\ntoken itself which is a signed token"
      },
      {
        "start_time": 2808680,
        "end_time": 2816400,
        "duration": 7720,
        "text": "which is a signed token and to verify\nthe authenticity of the token we have a"
      },
      {
        "start_time": 2813240,
        "end_time": 2820800,
        "duration": 7560,
        "text": "secret key so it's a self sustainable\nself containing token which has the"
      },
      {
        "start_time": 2818559,
        "end_time": 2827040,
        "duration": 8481,
        "text": "users information that's why it's called\na stateless token or a stateless method"
      },
      {
        "start_time": 2823960,
        "end_time": 2831760,
        "duration": 7800,
        "text": "of authentication now when should you\nchoose which one so to answer that you"
      },
      {
        "start_time": 2829520,
        "end_time": 2837200,
        "duration": 7680,
        "text": "have to understand the pros and cons of\nboth the different uh kinds of"
      },
      {
        "start_time": 2834000,
        "end_time": 2842400,
        "duration": 8400,
        "text": "authentication mechanisms in a stateful\nauthentication system the pros are you"
      },
      {
        "start_time": 2840559,
        "end_time": 2847160,
        "duration": 6601,
        "text": "have the pros\nare first you have centralized control"
      },
      {
        "start_time": 2845599,
        "end_time": 2851440,
        "duration": 5841,
        "text": "you have centralized control control\nover all the sessions you have real time"
      },
      {
        "start_time": 2849400,
        "end_time": 2856440,
        "duration": 7040,
        "text": "information of all the active sessions\nof your users right because you have a"
      },
      {
        "start_time": 2853800,
        "end_time": 2860680,
        "duration": 6880,
        "text": "persistent store to verify to get that\nkind of information and using that you"
      },
      {
        "start_time": 2858480,
        "end_time": 2864800,
        "duration": 6320,
        "text": "can easily revoke access of a user you\ncan revoke a session you can log out a"
      },
      {
        "start_time": 2863280,
        "end_time": 2869119,
        "duration": 5839,
        "text": "user because you have the session you\nhave the control in your hands and it is"
      },
      {
        "start_time": 2867160,
        "end_time": 2874520,
        "duration": 7360,
        "text": "well suited for applications with modern\ntraffic and strict session requirements"
      },
      {
        "start_time": 2871599,
        "end_time": 2879040,
        "duration": 7441,
        "text": "and in my opinion most applications\nshould go with a stateful authentication"
      },
      {
        "start_time": 2876559,
        "end_time": 2883119,
        "duration": 6560,
        "text": "because because of the secure nature and\nthe convenience of revoking tokens and"
      },
      {
        "start_time": 2881280,
        "end_time": 2887559,
        "duration": 6279,
        "text": "revoking access of users and having\nreal-time information about all the"
      },
      {
        "start_time": 2884640,
        "end_time": 2894079,
        "duration": 9439,
        "text": "users access and the challenges of a\nstateful authentication is of course uh"
      },
      {
        "start_time": 2889920,
        "end_time": 2897640,
        "duration": 7720,
        "text": "The Limited scalability issues and the\nhigher operational complexity with"
      },
      {
        "start_time": 2896079,
        "end_time": 2902480,
        "duration": 6401,
        "text": "distributed systems when you have\nmultiple servers in multiple regions and"
      },
      {
        "start_time": 2899680,
        "end_time": 2907480,
        "duration": 7800,
        "text": "all you have latency issues and all so\nthose are some of the challenges of"
      },
      {
        "start_time": 2904839,
        "end_time": 2913520,
        "duration": 8681,
        "text": "State full authentication in large\nsystems in the same way a stateless"
      },
      {
        "start_time": 2910480,
        "end_time": 2918240,
        "duration": 7760,
        "text": "authentication has Pros the cons of\nstateful authentication are the pros of"
      },
      {
        "start_time": 2915280,
        "end_time": 2923599,
        "duration": 8319,
        "text": "stateless authentication the pros like\nscalability and no session store"
      },
      {
        "start_time": 2921319,
        "end_time": 2927359,
        "duration": 6040,
        "text": "dependency and it's ideal for\ndistributed architectures and mobile"
      },
      {
        "start_time": 2925480,
        "end_time": 2933520,
        "duration": 8040,
        "text": "friendly applications where cookies are\nnot a thing and all those cons of"
      },
      {
        "start_time": 2930839,
        "end_time": 2939839,
        "duration": 9000,
        "text": "stateful authentication are the pros of\nstateless authentication but the cons"
      },
      {
        "start_time": 2935680,
        "end_time": 2946160,
        "duration": 10480,
        "text": "are here is token revocation is complex\nand that is one major issue that once"
      },
      {
        "start_time": 2943200,
        "end_time": 2952079,
        "duration": 8879,
        "text": "you issue a jwd token until it expires\nyou have no way of uh revoking access of"
      },
      {
        "start_time": 2948960,
        "end_time": 2956799,
        "duration": 7839,
        "text": "that user um and it could be due to\nvarious reasons because the user account"
      },
      {
        "start_time": 2954640,
        "end_time": 2960760,
        "duration": 6120,
        "text": "might get compromised and the user\ncontacted you using your support"
      },
      {
        "start_time": 2958359,
        "end_time": 2967680,
        "duration": 9321,
        "text": "channels that the user wants to revoke\nthat session the user wants to uh stop"
      },
      {
        "start_time": 2964160,
        "end_time": 2972160,
        "duration": 8000,
        "text": "access to their account so so you don't\nhave any way of doing that apart from"
      },
      {
        "start_time": 2970240,
        "end_time": 2977280,
        "duration": 7040,
        "text": "changing your secret key of the JWT\nwhich will make all the users of your"
      },
      {
        "start_time": 2974000,
        "end_time": 2984240,
        "duration": 10240,
        "text": "platform to log out which is a serious\ninconvenience so what can you do in this"
      },
      {
        "start_time": 2980400,
        "end_time": 2991200,
        "duration": 10800,
        "text": "Cas is you can device a devise a hybrid\napproach where the main web app the main"
      },
      {
        "start_time": 2988160,
        "end_time": 2996160,
        "duration": 8000,
        "text": "web app which runs in a browser you can\nchoose stateful authentication for those"
      },
      {
        "start_time": 2993680,
        "end_time": 3001880,
        "duration": 8200,
        "text": "clients you can have a hybrid approach\nwhere you authenticate your browsers"
      },
      {
        "start_time": 2998839,
        "end_time": 3009000,
        "duration": 10161,
        "text": "your web apps using a stateful nature\nand the servers uh and the clients that"
      },
      {
        "start_time": 3004839,
        "end_time": 3013359,
        "duration": 8520,
        "text": "use your apis in mobile apps where uh\nmobile apps or third party Integrations"
      },
      {
        "start_time": 3011040,
        "end_time": 3019280,
        "duration": 8240,
        "text": "between different servers they can adopt\na stat stateless authentication for"
      },
      {
        "start_time": 3015839,
        "end_time": 3024640,
        "duration": 8801,
        "text": "scalability and simplicity so you can\nhave a hybrid approach like this to beat"
      },
      {
        "start_time": 3021960,
        "end_time": 3028359,
        "duration": 6399,
        "text": "the cons of both the authentication\nmethods and now the third type of"
      },
      {
        "start_time": 3026880,
        "end_time": 3034040,
        "duration": 7160,
        "text": "authentication method that we can\ndiscuss is API key based API key based"
      },
      {
        "start_time": 3031119,
        "end_time": 3038599,
        "duration": 7480,
        "text": "authentication K us to a completely\ndifferent set of use cases as compared"
      },
      {
        "start_time": 3036720,
        "end_time": 3043319,
        "duration": 6599,
        "text": "to the stateful and stateless\nauthentication so the primary reason"
      },
      {
        "start_time": 3041240,
        "end_time": 3047599,
        "duration": 6359,
        "text": "people came up with API key based\nauthentication and before we get into"
      },
      {
        "start_time": 3045200,
        "end_time": 3052480,
        "duration": 7280,
        "text": "that let me explain how it works so this\nis how it works uh you go to a platform"
      },
      {
        "start_time": 3050400,
        "end_time": 3059200,
        "duration": 8800,
        "text": "and you have access to the platform and\nyou in the UI what you do is you go and"
      },
      {
        "start_time": 3056359,
        "end_time": 3064200,
        "duration": 7841,
        "text": "click on generate an API keyy okay you\ncan generate an API key uh then you will"
      },
      {
        "start_time": 3061359,
        "end_time": 3069839,
        "duration": 8480,
        "text": "get an cryptographically random string\nuh cryptographically safe random string"
      },
      {
        "start_time": 3066760,
        "end_time": 3077160,
        "duration": 10400,
        "text": "some some some string and you can use\nthat string to gain access to the server"
      },
      {
        "start_time": 3073079,
        "end_time": 3082680,
        "duration": 9601,
        "text": "which caters to this UI okay this server\nwhich is responsible for this UI now you"
      },
      {
        "start_time": 3079880,
        "end_time": 3088760,
        "duration": 8880,
        "text": "can directly gain access to this server\nusing this API key this is primarily why"
      },
      {
        "start_time": 3086040,
        "end_time": 3093319,
        "duration": 7279,
        "text": "people with the concept of API keys so\nto give you one example everyone is"
      },
      {
        "start_time": 3091000,
        "end_time": 3098440,
        "duration": 7440,
        "text": "familiar with the interface of chat gbt\nright so in chat gbt you can open and"
      },
      {
        "start_time": 3096440,
        "end_time": 3102880,
        "duration": 6440,
        "text": "you can type something in the search bar\nand you'll get an response you'll get a"
      },
      {
        "start_time": 3100440,
        "end_time": 3109760,
        "duration": 9320,
        "text": "response that is the UI okay that is the\nUI that we interact with but to cater to"
      },
      {
        "start_time": 3107240,
        "end_time": 3114040,
        "duration": 6800,
        "text": "that UI there is somewhere in in the\ncloud not one server there are a lot of"
      },
      {
        "start_time": 3111720,
        "end_time": 3119559,
        "duration": 7839,
        "text": "servers those are the servers that are\nresponsible to send the response"
      },
      {
        "start_time": 3117160,
        "end_time": 3125240,
        "duration": 8080,
        "text": "back to the client and the client\nrenders that text in your UI in a very"
      },
      {
        "start_time": 3123200,
        "end_time": 3129920,
        "duration": 6720,
        "text": "nice userfriendly way so that you can\nread and you get what you are looking"
      },
      {
        "start_time": 3128079,
        "end_time": 3137160,
        "duration": 9081,
        "text": "for that's how the typical interaction\nworks but open AI the company that"
      },
      {
        "start_time": 3133040,
        "end_time": 3145040,
        "duration": 12000,
        "text": "created chat GPT they also have feature\ncalled API keys keys and why do people"
      },
      {
        "start_time": 3141480,
        "end_time": 3150680,
        "duration": 9200,
        "text": "use that so that people who don't want\nto use chat gbt people who have"
      },
      {
        "start_time": 3147960,
        "end_time": 3158720,
        "duration": 10760,
        "text": "different use cases of the the model the\nllm model uh that powers chat gbd it can"
      },
      {
        "start_time": 3154480,
        "end_time": 3165000,
        "duration": 10520,
        "text": "be any model GPT 4 GPT 3.5 and all they\nwant programmatic access to the server"
      },
      {
        "start_time": 3162160,
        "end_time": 3170119,
        "duration": 7959,
        "text": "they want to let's say they might want\nto create a different UI for their use"
      },
      {
        "start_time": 3167520,
        "end_time": 3175319,
        "duration": 7799,
        "text": "case and they want the servers response\nthe chity server response in that UI how"
      },
      {
        "start_time": 3172520,
        "end_time": 3180160,
        "duration": 7640,
        "text": "can they do that or they want the\nservice response the response of jat gbt"
      },
      {
        "start_time": 3178119,
        "end_time": 3185000,
        "duration": 6881,
        "text": "programmatically in their server they\ndon't want their UI they are building"
      },
      {
        "start_time": 3182000,
        "end_time": 3191720,
        "duration": 9720,
        "text": "some server they want the response of\nopen AI uh chat GB and different models"
      },
      {
        "start_time": 3188200,
        "end_time": 3197359,
        "duration": 9159,
        "text": "in the server programmatically okay not\nin terms of UI they need access in terms"
      },
      {
        "start_time": 3194359,
        "end_time": 3202480,
        "duration": 8121,
        "text": "of programs for these kinds of use cases\nto provide access to your server not"
      },
      {
        "start_time": 3200079,
        "end_time": 3209400,
        "duration": 9321,
        "text": "your UI not your platform to provide\naccess to your server to a different set"
      },
      {
        "start_time": 3204839,
        "end_time": 3214160,
        "duration": 9321,
        "text": "of users in a confined manner in a\npermission based manner in a expiry"
      },
      {
        "start_time": 3211640,
        "end_time": 3220680,
        "duration": 9040,
        "text": "based manner to provide that kind of\naccess people have come up with API keys"
      },
      {
        "start_time": 3217400,
        "end_time": 3225480,
        "duration": 8080,
        "text": "so that I can use this key whatever key\nthat has been generated with some set of"
      },
      {
        "start_time": 3223160,
        "end_time": 3231200,
        "duration": 8040,
        "text": "permissions some set of expiry dates I\ncan use this key and I can attach this"
      },
      {
        "start_time": 3228160,
        "end_time": 3236160,
        "duration": 8000,
        "text": "key in some way in headers or depending\non the server's implementation I can"
      },
      {
        "start_time": 3233440,
        "end_time": 3239799,
        "duration": 6359,
        "text": "send this key back to the charity server\nwhatever ever the server that has"
      },
      {
        "start_time": 3237400,
        "end_time": 3243960,
        "duration": 6560,
        "text": "provided me with this key and I can do\nall the operations that the servers"
      },
      {
        "start_time": 3241480,
        "end_time": 3249680,
        "duration": 8200,
        "text": "native platform can do I can also do\nusing the apis okay I can get the access"
      },
      {
        "start_time": 3246680,
        "end_time": 3254319,
        "duration": 7639,
        "text": "to the server using the API key that's\nthe primary use case of API keys and"
      },
      {
        "start_time": 3252599,
        "end_time": 3258400,
        "duration": 5801,
        "text": "people have come up with it for\ndifferent different advantages first"
      },
      {
        "start_time": 3255960,
        "end_time": 3263000,
        "duration": 7040,
        "text": "thing is uh they are easy to generate\neasy to generate you just go to the UI"
      },
      {
        "start_time": 3260559,
        "end_time": 3268760,
        "duration": 8201,
        "text": "you click on generate and that's it you\nget an API key and you can use that API"
      },
      {
        "start_time": 3265599,
        "end_time": 3273440,
        "duration": 7841,
        "text": "key to grammatically access the server\nsecond thing they are ideal for machine"
      },
      {
        "start_time": 3271160,
        "end_time": 3278520,
        "duration": 7360,
        "text": "to machine communication what machine to\nmachine communication means is what we"
      },
      {
        "start_time": 3276359,
        "end_time": 3281319,
        "duration": 4960,
        "text": "generally see or what we generally use\nis client to machine communication what"
      },
      {
        "start_time": 3280240,
        "end_time": 3285240,
        "duration": 5000,
        "text": "you can say client to server\ncommunication here we have a UI we"
      },
      {
        "start_time": 3283599,
        "end_time": 3291079,
        "duration": 7480,
        "text": "interact with our Mouse we interact with\nour keyboard we interact visually with"
      },
      {
        "start_time": 3288200,
        "end_time": 3295000,
        "duration": 6800,
        "text": "the server right with the UI and the UI\nsends programmatic requests to the"
      },
      {
        "start_time": 3293240,
        "end_time": 3300319,
        "duration": 7079,
        "text": "server and the server does the business\nlogic and sends a response back and the"
      },
      {
        "start_time": 3296839,
        "end_time": 3304160,
        "duration": 7321,
        "text": "user renders those information renders\nthose responses so that we can"
      },
      {
        "start_time": 3302359,
        "end_time": 3308440,
        "duration": 6081,
        "text": "understand and we can again uh interact\nwith it that's how the interaction works"
      },
      {
        "start_time": 3305839,
        "end_time": 3312000,
        "duration": 6161,
        "text": "it's visual interaction it's client uh\nit's it's human interaction there is"
      },
      {
        "start_time": 3310599,
        "end_time": 3315799,
        "duration": 5200,
        "text": "another kind of interaction which is\ncalled machine to machine interaction"
      },
      {
        "start_time": 3313880,
        "end_time": 3323280,
        "duration": 9400,
        "text": "machine to machine interaction so let's\nsay I have a server okay I have a server"
      },
      {
        "start_time": 3319480,
        "end_time": 3326920,
        "duration": 7440,
        "text": "which to which I have a UI here for my\nplatform and this is the server for my"
      },
      {
        "start_time": 3325039,
        "end_time": 3333599,
        "duration": 8560,
        "text": "platform and this server\nwants to use the chat gpts capabilities"
      },
      {
        "start_time": 3329720,
        "end_time": 3338240,
        "duration": 8520,
        "text": "so let's say in my UI the user types\nsomething some string and the US send a"
      },
      {
        "start_time": 3336240,
        "end_time": 3343880,
        "duration": 7640,
        "text": "request to my server and says summarize\nthis for me summarize this paragraph for"
      },
      {
        "start_time": 3341079,
        "end_time": 3349839,
        "duration": 8760,
        "text": "me what I want to do I want to use the\nexisting capabilities of chat GPD server"
      },
      {
        "start_time": 3346760,
        "end_time": 3354520,
        "duration": 7760,
        "text": "so that I can summarize that paragraph\nand send it back to the user now this is"
      },
      {
        "start_time": 3352599,
        "end_time": 3358760,
        "duration": 6161,
        "text": "called a machine to machine\ncommunication because my server visual"
      },
      {
        "start_time": 3357160,
        "end_time": 3361640,
        "duration": 4480,
        "text": "machine there is no UI here there is no\nhuman interaction here everything is"
      },
      {
        "start_time": 3360160,
        "end_time": 3365359,
        "duration": 5199,
        "text": "done programmatically I have written\ncode here in whatever programming"
      },
      {
        "start_time": 3363119,
        "end_time": 3371359,
        "duration": 8240,
        "text": "languages and that's how the server is\nrunning so This Server uses the API key"
      },
      {
        "start_time": 3368960,
        "end_time": 3376559,
        "duration": 7599,
        "text": "that I have generated using chat gbt's\nplatform uh interface my server using"
      },
      {
        "start_time": 3374559,
        "end_time": 3383240,
        "duration": 8681,
        "text": "this API key to make a request to the\nchat JD server and it identifies uh my"
      },
      {
        "start_time": 3380240,
        "end_time": 3386839,
        "duration": 6599,
        "text": "identity it it authorizes myself the my\nidentity whatever plan I have whatever"
      },
      {
        "start_time": 3386079,
        "end_time": 3391559,
        "duration": 5480,
        "text": "uh\nquot I have remaining whatever access I"
      },
      {
        "start_time": 3388920,
        "end_time": 3395720,
        "duration": 6800,
        "text": "have using this API all this information\nis maintained in the server site chat GT"
      },
      {
        "start_time": 3393640,
        "end_time": 3402200,
        "duration": 8560,
        "text": "server and they can identify they can\nfind out that those information using"
      },
      {
        "start_time": 3397960,
        "end_time": 3406400,
        "duration": 8440,
        "text": "the API key okay and I can use this key\nand I can get response from the chaty"
      },
      {
        "start_time": 3404440,
        "end_time": 3411319,
        "duration": 6879,
        "text": "server and I can send the response back\nto my UI so this is how a machine to"
      },
      {
        "start_time": 3409599,
        "end_time": 3415920,
        "duration": 6321,
        "text": "machine interaction looks like I can use\nmy server to make request to other"
      },
      {
        "start_time": 3413079,
        "end_time": 3420760,
        "duration": 7681,
        "text": "servers and get that response so it is\ndifferent from like visual interaction"
      },
      {
        "start_time": 3418240,
        "end_time": 3425799,
        "duration": 7559,
        "text": "or human interaction or uh UI to machine\ninteraction API keys are ideal for these"
      },
      {
        "start_time": 3423559,
        "end_time": 3430200,
        "duration": 6641,
        "text": "kinds of interactions because if because\nif you imagine in a typical in our"
      },
      {
        "start_time": 3428240,
        "end_time": 3435960,
        "duration": 7720,
        "text": "stateful or stateless uh based\nauthentication methods we need visual"
      },
      {
        "start_time": 3433000,
        "end_time": 3440280,
        "duration": 7280,
        "text": "triggers we need human triggers because\nthere is a login form where we manually"
      },
      {
        "start_time": 3438359,
        "end_time": 3443760,
        "duration": 5401,
        "text": "have to type it out the username and\npassword after to send this request"
      },
      {
        "start_time": 3442000,
        "end_time": 3447799,
        "duration": 5799,
        "text": "there is uh some server validation\nhappens and the server sends back a GWT"
      },
      {
        "start_time": 3445920,
        "end_time": 3451960,
        "duration": 6040,
        "text": "token and you have to save that suar and\nall these complex interactions require"
      },
      {
        "start_time": 3449440,
        "end_time": 3456240,
        "duration": 6800,
        "text": "some kind of human interference and\nthat's why they are called client to"
      },
      {
        "start_time": 3454240,
        "end_time": 3460359,
        "duration": 6119,
        "text": "servey interaction and in the machine to\nmachine interaction the a simple"
      },
      {
        "start_time": 3458319,
        "end_time": 3464880,
        "duration": 6561,
        "text": "workflow is you provide the machine a\nsecret key it saves that in whatever"
      },
      {
        "start_time": 3463119,
        "end_time": 3469520,
        "duration": 6401,
        "text": "environment variable or some kind of\nSecure Storage and it sends that in all"
      },
      {
        "start_time": 3467319,
        "end_time": 3474480,
        "duration": 7161,
        "text": "the requests to identify itself instead\nof doing all the username password token"
      },
      {
        "start_time": 3471680,
        "end_time": 3479480,
        "duration": 7800,
        "text": "and all those workflows and API keys are\nideal for those kinds of interactions"
      },
      {
        "start_time": 3477039,
        "end_time": 3484839,
        "duration": 7800,
        "text": "for programmatic interactions or machine\nto machine interactions now let's get"
      },
      {
        "start_time": 3481960,
        "end_time": 3493000,
        "duration": 11040,
        "text": "into our last major type of\nauthentication which is O 2.0 or open ID"
      },
      {
        "start_time": 3488720,
        "end_time": 3497240,
        "duration": 8520,
        "text": "connect whatever it is called okay why\ndo we need this why did we come up with"
      },
      {
        "start_time": 3495200,
        "end_time": 3501760,
        "duration": 6560,
        "text": "it and everything surrounding it up\nuntil now up until now we have discussed"
      },
      {
        "start_time": 3499960,
        "end_time": 3507039,
        "duration": 7079,
        "text": "different types of authentic State pull\nand stateless and API keys and all we"
      },
      {
        "start_time": 3504760,
        "end_time": 3511920,
        "duration": 7160,
        "text": "have a very simple setup right right we\ncreate an account with uh username and"
      },
      {
        "start_time": 3509760,
        "end_time": 3515640,
        "duration": 5880,
        "text": "password and every time you have to\nprovide that authenticate yourself and"
      },
      {
        "start_time": 3513640,
        "end_time": 3521319,
        "duration": 7679,
        "text": "you get a token and you return all and\nthat's how the whole workflow works and"
      },
      {
        "start_time": 3518480,
        "end_time": 3527039,
        "duration": 8559,
        "text": "the more platforms you visit the more\nsites you visit in your computer in your"
      },
      {
        "start_time": 3524400,
        "end_time": 3530760,
        "duration": 6360,
        "text": "system the more credentials you create\nthe more credentials you have to"
      },
      {
        "start_time": 3528760,
        "end_time": 3535319,
        "duration": 6559,
        "text": "remember or the more credentials you\nhave to maintain if you use a password"
      },
      {
        "start_time": 3532559,
        "end_time": 3541280,
        "duration": 8721,
        "text": "manager this approach became a little\nproblematic why first thing is security"
      },
      {
        "start_time": 3537920,
        "end_time": 3546960,
        "duration": 9040,
        "text": "risk reusing password was very common uh\nduring the initial era now I hope people"
      },
      {
        "start_time": 3544720,
        "end_time": 3551000,
        "duration": 6280,
        "text": "have become more aware of this and they\nuse uh automatic password generators and"
      },
      {
        "start_time": 3549599,
        "end_time": 3555400,
        "duration": 5801,
        "text": "password managers to maintain their\npasswords but during the initial"
      },
      {
        "start_time": 3553160,
        "end_time": 3561640,
        "duration": 8480,
        "text": "internet era reusing passwords like 1 2\n3 4 5 or the string password was very"
      },
      {
        "start_time": 3558400,
        "end_time": 3566400,
        "duration": 8000,
        "text": "common and a single breach compromised a\nlot of accounts the first thing with"
      },
      {
        "start_time": 3564039,
        "end_time": 3571440,
        "duration": 7401,
        "text": "this password based approach was Secure\nrisks reusing the same kind of passwords"
      },
      {
        "start_time": 3568599,
        "end_time": 3577440,
        "duration": 8841,
        "text": "in multiple platforms or multiple\nwebsites the second thing is"
      },
      {
        "start_time": 3574720,
        "end_time": 3583559,
        "duration": 8839,
        "text": "fatigue all this huge number of accounts\nto manage was very overwhelming for a"
      },
      {
        "start_time": 3580119,
        "end_time": 3591119,
        "duration": 11000,
        "text": "single user and that gave rise to what\nwe call it's a very important Concept in"
      },
      {
        "start_time": 3585920,
        "end_time": 3598880,
        "duration": 12960,
        "text": "oath is called delegation Del sorry\ndelegation what delegation means is we"
      },
      {
        "start_time": 3594960,
        "end_time": 3604200,
        "duration": 9240,
        "text": "quickly came to a class of problem a\nproblem for example"
      },
      {
        "start_time": 3601280,
        "end_time": 3612559,
        "duration": 11279,
        "text": "websites one website started needing\naccess to other websites resources for"
      },
      {
        "start_time": 3608000,
        "end_time": 3619440,
        "duration": 11440,
        "text": "example a travel app a travel app like\nuh a hotel booking or a train booking"
      },
      {
        "start_time": 3615319,
        "end_time": 3626000,
        "duration": 10681,
        "text": "app it needed access to access to Gmail\nyour Gmail account to scan your flight"
      },
      {
        "start_time": 3623400,
        "end_time": 3630400,
        "duration": 7000,
        "text": "tickets to programmatically scan your\nflight tickets that is one example of"
      },
      {
        "start_time": 3628480,
        "end_time": 3635839,
        "duration": 7359,
        "text": "one platform one website needing access\nto resource of other platform the same"
      },
      {
        "start_time": 3632880,
        "end_time": 3641559,
        "duration": 8679,
        "text": "way a social media app it can be\nanything Facebook or Twitter or anything"
      },
      {
        "start_time": 3638480,
        "end_time": 3647760,
        "duration": 9280,
        "text": "there social media app that wants to\nimport contacts contacts from other"
      },
      {
        "start_time": 3645119,
        "end_time": 3653079,
        "duration": 7960,
        "text": "platform it it can be another social\nmedia platform or it can be your Google"
      },
      {
        "start_time": 3650720,
        "end_time": 3660079,
        "duration": 9359,
        "text": "contacts anything right it wants to\nimport Resource One platform wants to"
      },
      {
        "start_time": 3657039,
        "end_time": 3665480,
        "duration": 8441,
        "text": "import resource from another platform\nprogrammatically see now you see the"
      },
      {
        "start_time": 3662359,
        "end_time": 3672799,
        "duration": 10440,
        "text": "pattern this was a problem that this was\na use case that we started to see uh"
      },
      {
        "start_time": 3668599,
        "end_time": 3677319,
        "duration": 8720,
        "text": "which eventually uh gave rise to W so\ninitially what happened was the initial"
      },
      {
        "start_time": 3675440,
        "end_time": 3683400,
        "duration": 7960,
        "text": "solution that people came up with this\nissue of how one platform or one website"
      },
      {
        "start_time": 3680599,
        "end_time": 3688559,
        "duration": 7960,
        "text": "can get get access to resources of\nanother platform this is how you just"
      },
      {
        "start_time": 3685559,
        "end_time": 3693680,
        "duration": 8121,
        "text": "use users came up with the solution they\nwhat they did was they shared passwords"
      },
      {
        "start_time": 3691280,
        "end_time": 3700319,
        "duration": 9039,
        "text": "they started sharing passwords and this\nwas disastrous this led to so many"
      },
      {
        "start_time": 3697160,
        "end_time": 3706559,
        "duration": 9399,
        "text": "disasters because sharing a password\nmeant giving full access giving access"
      },
      {
        "start_time": 3703760,
        "end_time": 3712079,
        "duration": 8319,
        "text": "to everything in your account everything\nin your system and there is no way to"
      },
      {
        "start_time": 3709359,
        "end_time": 3718799,
        "duration": 9440,
        "text": "limit permissions and the second thing\nwas it was impossible to re roke access"
      },
      {
        "start_time": 3716920,
        "end_time": 3723599,
        "duration": 6679,
        "text": "it is impossible to revoke access\nwithout changing your password"
      },
      {
        "start_time": 3720680,
        "end_time": 3728720,
        "duration": 8040,
        "text": "everywhere since users used passwords\nsame passwords everywhere and providing"
      },
      {
        "start_time": 3726359,
        "end_time": 3734440,
        "duration": 8081,
        "text": "your password to one platform so that\nthat platform can access the resource of"
      },
      {
        "start_time": 3731400,
        "end_time": 3738680,
        "duration": 7280,
        "text": "another platform meant if you wanted to\nrevoke the access permanently from your"
      },
      {
        "start_time": 3736760,
        "end_time": 3742640,
        "duration": 5880,
        "text": "side you have to change your password\nnot just in this side you have to change"
      },
      {
        "start_time": 3740520,
        "end_time": 3747720,
        "duration": 7200,
        "text": "your password from all sides because now\none platform has access to your password"
      },
      {
        "start_time": 3745240,
        "end_time": 3753680,
        "duration": 8440,
        "text": "and it can do anything it wants which is\na huge security issue that came up with"
      },
      {
        "start_time": 3751440,
        "end_time": 3757680,
        "duration": 6240,
        "text": "this solution of sharing passwords for\ngiving platforms access to resources of"
      },
      {
        "start_time": 3755920,
        "end_time": 3763200,
        "duration": 7280,
        "text": "another platform okay that was the\nsolution people came up with initially"
      },
      {
        "start_time": 3759839,
        "end_time": 3769559,
        "duration": 9720,
        "text": "right now we have a problem that we\ncalled delegation problem a delegation"
      },
      {
        "start_time": 3766880,
        "end_time": 3774400,
        "duration": 7520,
        "text": "problem which basically means providing\naccess of one platform to another"
      },
      {
        "start_time": 3772039,
        "end_time": 3779039,
        "duration": 7000,
        "text": "platform providing resources of one\nplatform to another platform"
      },
      {
        "start_time": 3775880,
        "end_time": 3788240,
        "duration": 12360,
        "text": "programmatically by a user and that was\nthe time in 2007 the birth of O happened"
      },
      {
        "start_time": 3784960,
        "end_time": 3793839,
        "duration": 8879,
        "text": "which basically meant open\nauthorization and it was not just a"
      },
      {
        "start_time": 3791319,
        "end_time": 3798599,
        "duration": 7280,
        "text": "protocol it was a very revolutionary\nidea it it it it made so many things"
      },
      {
        "start_time": 3796559,
        "end_time": 3805240,
        "duration": 8681,
        "text": "easier so many things easier in our\nprogramming world that we have now so"
      },
      {
        "start_time": 3802240,
        "end_time": 3808240,
        "duration": 6000,
        "text": "historically what happened was a couple\nof engineer"
      },
      {
        "start_time": 3806480,
        "end_time": 3815720,
        "duration": 9240,
        "text": "a couple of Engineers from companies\nlike Google or Twitter started working"
      },
      {
        "start_time": 3811880,
        "end_time": 3819400,
        "duration": 7520,
        "text": "on standardizing a way so that users can\naccess user can share access from one"
      },
      {
        "start_time": 3817960,
        "end_time": 3825000,
        "duration": 7040,
        "text": "platform to another platform which is\nthe delegation problem and what they did"
      },
      {
        "start_time": 3821960,
        "end_time": 3831839,
        "duration": 9879,
        "text": "was they were trying to find a way to do\nthat without sharing passwords which was"
      },
      {
        "start_time": 3828000,
        "end_time": 3838400,
        "duration": 10400,
        "text": "a huge security risk so they came up\nwith a technique of sharing"
      },
      {
        "start_time": 3834720,
        "end_time": 3843599,
        "duration": 8879,
        "text": "tokens sharing tokens to share access\nthe idea was this token has specific"
      },
      {
        "start_time": 3841200,
        "end_time": 3849319,
        "duration": 8119,
        "text": "permission so a password has all the\naccess to your user account while a"
      },
      {
        "start_time": 3846119,
        "end_time": 3855200,
        "duration": 9081,
        "text": "token has specific access to a specific\npart of your account for example if you"
      },
      {
        "start_time": 3852039,
        "end_time": 3861000,
        "duration": 8961,
        "text": "share your Google password with me I can\nI can I have access to everything I can"
      },
      {
        "start_time": 3858599,
        "end_time": 3865720,
        "duration": 7121,
        "text": "view your Google photos I can see your\nGoogle Maps history and I can look at"
      },
      {
        "start_time": 3863000,
        "end_time": 3868920,
        "duration": 5920,
        "text": "all your contacts and I can um see your\nyour calendar I can add to your calendar"
      },
      {
        "start_time": 3867440,
        "end_time": 3873960,
        "duration": 6520,
        "text": "I can remove everything I delete\neverything I can do everything I I can I"
      },
      {
        "start_time": 3871039,
        "end_time": 3881359,
        "duration": 10320,
        "text": "want using that password but let's say\nif you share a token and that token only"
      },
      {
        "start_time": 3877119,
        "end_time": 3886799,
        "duration": 9680,
        "text": "has capability to read my contacts okay\nnot delete my contacts not add to my"
      },
      {
        "start_time": 3883520,
        "end_time": 3892559,
        "duration": 9039,
        "text": "cont Del my contacts now I have\npermission for a specific part of a"
      },
      {
        "start_time": 3889720,
        "end_time": 3896760,
        "duration": 7040,
        "text": "specific platform that you access that\nyou have that I can access now I can"
      },
      {
        "start_time": 3894640,
        "end_time": 3902400,
        "duration": 7760,
        "text": "read your Google cont tax so that was\nthe idea that they came up with sharing"
      },
      {
        "start_time": 3899480,
        "end_time": 3906559,
        "duration": 7079,
        "text": "tokens instead of passwords so there are\ndifferent components uh of the technique"
      },
      {
        "start_time": 3904520,
        "end_time": 3915000,
        "duration": 10480,
        "text": "that they came up with first was the\nresource owner the second was the client"
      },
      {
        "start_time": 3910760,
        "end_time": 3921799,
        "duration": 11039,
        "text": "third was resource server and the fourth\nwas authorization server and first thing"
      },
      {
        "start_time": 3919400,
        "end_time": 3927680,
        "duration": 8280,
        "text": "who is the resource owner the user who\nowns the data so in this case let's say"
      },
      {
        "start_time": 3924839,
        "end_time": 3934279,
        "duration": 9440,
        "text": "it's you you are the resource owner who\nis the client the app that is requesting"
      },
      {
        "start_time": 3930680,
        "end_time": 3939119,
        "duration": 8439,
        "text": "access for example we have a uh social\nmedia app let's say it's Facebook and it"
      },
      {
        "start_time": 3936400,
        "end_time": 3944480,
        "duration": 8080,
        "text": "is requesting access for your contacts\nfrom your Google account so in this case"
      },
      {
        "start_time": 3941680,
        "end_time": 3949160,
        "duration": 7480,
        "text": "client is your client in this case is\nFacebook who is the resource server in"
      },
      {
        "start_time": 3946839,
        "end_time": 3954359,
        "duration": 7520,
        "text": "this case it is your Google account\nwhich is the Google server the resource"
      },
      {
        "start_time": 3951599,
        "end_time": 3960200,
        "duration": 8601,
        "text": "server is the authorization server this\nis the server who issues the token the"
      },
      {
        "start_time": 3957520,
        "end_time": 3963839,
        "duration": 6319,
        "text": "token for authenticating the user this\nis the token that is issued by the"
      },
      {
        "start_time": 3962480,
        "end_time": 3970200,
        "duration": 7720,
        "text": "authorization server after\nauthenticating the user so this is how"
      },
      {
        "start_time": 3965920,
        "end_time": 3975559,
        "duration": 9639,
        "text": "the typical flow of O 1.0 look like so\nwe are still talking about wor 1.0 we"
      },
      {
        "start_time": 3973400,
        "end_time": 3980160,
        "duration": 6760,
        "text": "will we are yet to reach the wor 2.0\nwhich came after this for a couple of"
      },
      {
        "start_time": 3977720,
        "end_time": 3986799,
        "duration": 9079,
        "text": "reasons that we'll discuss this is what\nthe what 1.0f flow looked like first the"
      },
      {
        "start_time": 3983920,
        "end_time": 3991839,
        "duration": 7919,
        "text": "client redirects the user redirects the\nuser to the authorization server OD"
      },
      {
        "start_time": 3989680,
        "end_time": 3997160,
        "duration": 7480,
        "text": "server okay redirects the client to the\nOD server the client the client who is"
      },
      {
        "start_time": 3994279,
        "end_time": 4001279,
        "duration": 7000,
        "text": "the client in this case it is Facebook\nFacebook redirected you to the"
      },
      {
        "start_time": 3999160,
        "end_time": 4006799,
        "duration": 7639,
        "text": "authorization server now what happens\nnext the user authenticates and grants"
      },
      {
        "start_time": 4003960,
        "end_time": 4012119,
        "duration": 8159,
        "text": "permission you click on yes I allow and\nthese are the permissions that I want to"
      },
      {
        "start_time": 4008839,
        "end_time": 4017720,
        "duration": 8881,
        "text": "give this server and you do that after\nthat is successful in the third step the"
      },
      {
        "start_time": 4014839,
        "end_time": 4021039,
        "duration": 6200,
        "text": "authorization server the server that you\nauthenticated that you give all the"
      },
      {
        "start_time": 4019279,
        "end_time": 4026720,
        "duration": 7441,
        "text": "permissions to that authorization\nservers sends token to the client client"
      },
      {
        "start_time": 4024920,
        "end_time": 4032599,
        "duration": 7679,
        "text": "who is this client in this case it is\nFacebook it sends the token to Facebook"
      },
      {
        "start_time": 4029359,
        "end_time": 4037520,
        "duration": 8161,
        "text": "now the client uses the token whatever\ntoken it got from the authorization"
      },
      {
        "start_time": 4035039,
        "end_time": 4041559,
        "duration": 6520,
        "text": "server it uses the token to access the\nresources what is the resource in this"
      },
      {
        "start_time": 4039240,
        "end_time": 4047160,
        "duration": 7920,
        "text": "case your context which is in your\nGoogle server so that's how Facebook a"
      },
      {
        "start_time": 4044599,
        "end_time": 4051000,
        "duration": 6401,
        "text": "client get access to another platform\nwhich is Google in this case another"
      },
      {
        "start_time": 4049279,
        "end_time": 4055720,
        "duration": 6441,
        "text": "platform's resource which are contacts\nin this case programmatically without"
      },
      {
        "start_time": 4053200,
        "end_time": 4061720,
        "duration": 8520,
        "text": "you sharing the password with specific\nset of permissions so oath 1.0 solved"
      },
      {
        "start_time": 4059079,
        "end_time": 4067319,
        "duration": 8240,
        "text": "this problem in a very beautiful way\nwhich eradicated the problem of sharing"
      },
      {
        "start_time": 4064000,
        "end_time": 4075680,
        "duration": 11680,
        "text": "the password to share access but then\nthe oath 1.0 protocol evolved and we"
      },
      {
        "start_time": 4071680,
        "end_time": 4083039,
        "duration": 11359,
        "text": "ended up with oo 2.0\nwhich came around 2010 or so oath 1.0"
      },
      {
        "start_time": 4079960,
        "end_time": 4089480,
        "duration": 9520,
        "text": "was pretty revolutionary it was pretty\nuseful but it had some limitations one"
      },
      {
        "start_time": 4086079,
        "end_time": 4094799,
        "duration": 8720,
        "text": "of this was it was one of it was it was\nvery complex for developers to implement"
      },
      {
        "start_time": 4092720,
        "end_time": 4100400,
        "duration": 7680,
        "text": "the whole flow was pretty complicated\nfor developers at that time second it"
      },
      {
        "start_time": 4097640,
        "end_time": 4104799,
        "duration": 7159,
        "text": "used cryptographic signature it used\ncryptographic signatures which was very"
      },
      {
        "start_time": 4102679,
        "end_time": 4111719,
        "duration": 9040,
        "text": "error prone so these are the two\nlimitations technical limitations that"
      },
      {
        "start_time": 4107159,
        "end_time": 4119000,
        "duration": 11841,
        "text": "what o 2.0 did was first thing it\nintroduced beer tokens which is much"
      },
      {
        "start_time": 4115799,
        "end_time": 4125759,
        "duration": 9960,
        "text": "much much more simpler in the whole o\nworkflow it is more vulnerable but it"
      },
      {
        "start_time": 4121920,
        "end_time": 4130839,
        "duration": 8919,
        "text": "made implementations more simple second\nit allowed developers it allowed"
      },
      {
        "start_time": 4128120,
        "end_time": 4137679,
        "duration": 9559,
        "text": "developers to choose flows based on the\napp type depending on whether the your"
      },
      {
        "start_time": 4134279,
        "end_time": 4143400,
        "duration": 9121,
        "text": "app is a mobile or it is a server side\napp or it is a device only app or like"
      },
      {
        "start_time": 4140560,
        "end_time": 4147239,
        "duration": 6679,
        "text": "for example device code app for example\nSmart TV depending on different"
      },
      {
        "start_time": 4145560,
        "end_time": 4151679,
        "duration": 6119,
        "text": "different use case depending on your\ndevice that you are using these"
      },
      {
        "start_time": 4148799,
        "end_time": 4159400,
        "duration": 10601,
        "text": "techniques on it it provided different\nflows a couple of flows that you might"
      },
      {
        "start_time": 4155319,
        "end_time": 4164920,
        "duration": 9601,
        "text": "uh hear is au code flow authorization\ncode flow for server side apps server"
      },
      {
        "start_time": 4162199,
        "end_time": 4171400,
        "duration": 9201,
        "text": "side apps second implicit flow implicit\nflow for browser based apps which is now"
      },
      {
        "start_time": 4168520,
        "end_time": 4176560,
        "duration": 8040,
        "text": "discouraged due to security risks third\nclient credentials flow for machine to"
      },
      {
        "start_time": 4174839,
        "end_time": 4181640,
        "duration": 6801,
        "text": "machine communication machine to machine\ncommunication like communication between"
      },
      {
        "start_time": 4178600,
        "end_time": 4186839,
        "duration": 8239,
        "text": "two servers without any involvement of\nuser or browsers or any human"
      },
      {
        "start_time": 4183839,
        "end_time": 4191719,
        "duration": 7880,
        "text": "interactions and fourth is device code\nflow device code flow is used in in"
      },
      {
        "start_time": 4189679,
        "end_time": 4197000,
        "duration": 7321,
        "text": "devices where we have limited input\nwhere we don't have uh inputs like"
      },
      {
        "start_time": 4194279,
        "end_time": 4203480,
        "duration": 9201,
        "text": "keyboards and Mouse and all for example\none of a major example is smart TV smart"
      },
      {
        "start_time": 4200560,
        "end_time": 4208520,
        "duration": 7960,
        "text": "TV authentication uses a flow called\ndevice code flow okay and o 2.0 came"
      },
      {
        "start_time": 4206440,
        "end_time": 4211880,
        "duration": 5440,
        "text": "with all these features it came with bar\ntoken and it came with all these"
      },
      {
        "start_time": 4210280,
        "end_time": 4217120,
        "duration": 6840,
        "text": "different types of flows for different\ntypes of devices depending on where you"
      },
      {
        "start_time": 4214239,
        "end_time": 4223280,
        "duration": 9041,
        "text": "are implementing your authentication but\none thing that I missed to say here was"
      },
      {
        "start_time": 4219560,
        "end_time": 4230400,
        "duration": 10840,
        "text": "O was great for authorization was great\nfor authorization but but it did not"
      },
      {
        "start_time": 4227280,
        "end_time": 4234840,
        "duration": 7560,
        "text": "solve the issue of authentication so if\nyou remember authentication is providing"
      },
      {
        "start_time": 4232280,
        "end_time": 4239040,
        "duration": 6760,
        "text": "an identity saying who you are and\nauthorization is saying what can you do"
      },
      {
        "start_time": 4237600,
        "end_time": 4243120,
        "duration": 5520,
        "text": "what all permissions do you have what\nall capabilities do you have in the"
      },
      {
        "start_time": 4240760,
        "end_time": 4246760,
        "duration": 6000,
        "text": "platform and authentication is who are\nyou in the platform what is your"
      },
      {
        "start_time": 4244560,
        "end_time": 4251840,
        "duration": 7280,
        "text": "identity what is your name what is your\nID and all and authorization is what is"
      },
      {
        "start_time": 4248840,
        "end_time": 4256000,
        "duration": 7160,
        "text": "your permission okay so o solved the\nissue of authorization using delegation"
      },
      {
        "start_time": 4254400,
        "end_time": 4264159,
        "duration": 9759,
        "text": "but it did not solve the issue of\nauthentication so that's when in"
      },
      {
        "start_time": 4259719,
        "end_time": 4271840,
        "duration": 12121,
        "text": "2014 or so people came up with open ID\nconnect or simply called oidc which was"
      },
      {
        "start_time": 4268080,
        "end_time": 4275640,
        "duration": 7560,
        "text": "built on top of O 2.0's security\nmechanisms to fill the gap of"
      },
      {
        "start_time": 4274159,
        "end_time": 4283040,
        "duration": 8881,
        "text": "authentication in the whole\nauthorization workflow so this is how it"
      },
      {
        "start_time": 4279360,
        "end_time": 4290800,
        "duration": 11440,
        "text": "works what oidc did on top of oath was\nopen ID connect extended o 2.0 by"
      },
      {
        "start_time": 4288040,
        "end_time": 4296320,
        "duration": 8280,
        "text": "introducing what you call it ID token we\ndid not have that in O 2.0 and the ID"
      },
      {
        "start_time": 4293480,
        "end_time": 4300280,
        "duration": 6800,
        "text": "token was typically a JWT we have\nalready discussed JWT for the reasons"
      },
      {
        "start_time": 4298320,
        "end_time": 4304040,
        "duration": 5720,
        "text": "for reasons like this because we will\nkeep coming across JWT is in multiple"
      },
      {
        "start_time": 4302840,
        "end_time": 4307600,
        "duration": 4760,
        "text": "areas of authentication and\nauthorization that's why we discussed"
      },
      {
        "start_time": 4305600,
        "end_time": 4313400,
        "duration": 7800,
        "text": "about jws in the initial part of the\nvideo so what open ID connect did was it"
      },
      {
        "start_time": 4310719,
        "end_time": 4319520,
        "duration": 8801,
        "text": "introduced a concept called ID token in\nthe O 2.0 workflow"
      },
      {
        "start_time": 4315800,
        "end_time": 4324840,
        "duration": 9040,
        "text": "an ID token was nothing but a JWT which\nhad information like user ID when they"
      },
      {
        "start_time": 4322120,
        "end_time": 4330000,
        "duration": 7880,
        "text": "logged in which happened because of the\nfield issued at and the issuing"
      },
      {
        "start_time": 4326840,
        "end_time": 4334520,
        "duration": 7680,
        "text": "authority who issued the token who was\nthe authority who was the platform that"
      },
      {
        "start_time": 4332199,
        "end_time": 4339719,
        "duration": 7520,
        "text": "issued the token to this user and all\nthis information that was in the"
      },
      {
        "start_time": 4337040,
        "end_time": 4345199,
        "duration": 8159,
        "text": "JWT the JWT also had information like\nthe user's name and the users email and"
      },
      {
        "start_time": 4341920,
        "end_time": 4350520,
        "duration": 8600,
        "text": "all the information that the needing\nparty once from the other platform and"
      },
      {
        "start_time": 4347840,
        "end_time": 4355760,
        "duration": 7920,
        "text": "because of open ID connect now you can\ngo to any platform and major pretty much"
      },
      {
        "start_time": 4353040,
        "end_time": 4360159,
        "duration": 7119,
        "text": "all the platforms have this feature now\nyou can do sign in with Google sign in"
      },
      {
        "start_time": 4357560,
        "end_time": 4366960,
        "duration": 9400,
        "text": "with Facebook sign in with Discord and\nthose features use open ID connect"
      },
      {
        "start_time": 4363880,
        "end_time": 4371120,
        "duration": 7240,
        "text": "behind the scenes to take your identity\nfrom let's say you do sign in with"
      },
      {
        "start_time": 4368560,
        "end_time": 4375960,
        "duration": 7400,
        "text": "Google so what happens is it takes your\nidentity your email and your Google"
      },
      {
        "start_time": 4374280,
        "end_time": 4380520,
        "duration": 6240,
        "text": "image your Google profile picture your\nname and all whatever the profile"
      },
      {
        "start_time": 4377400,
        "end_time": 4387120,
        "duration": 9720,
        "text": "information it asks for it takes your\nidentity from Google and it stores in"
      },
      {
        "start_time": 4384199,
        "end_time": 4391639,
        "duration": 7440,
        "text": "their database or it just uses that to\nidentify you to authenticate you using"
      },
      {
        "start_time": 4389880,
        "end_time": 4397360,
        "duration": 7480,
        "text": "Google without having its own\nauthentication mechanisms so that's the"
      },
      {
        "start_time": 4394840,
        "end_time": 4404199,
        "duration": 9359,
        "text": "use of open ID connect it introduced a\nlayer of identification on top of O 2.0"
      },
      {
        "start_time": 4401840,
        "end_time": 4409320,
        "duration": 7480,
        "text": "so this is how a typical open ID connect\nbased workflow works works first thing"
      },
      {
        "start_time": 4406199,
        "end_time": 4415000,
        "duration": 8801,
        "text": "the client in this case so let's say you\nwent to a platform you went to a"
      },
      {
        "start_time": 4411600,
        "end_time": 4420920,
        "duration": 9320,
        "text": "platform for note taking the client and\nyou click on sign in with Google so this"
      },
      {
        "start_time": 4417760,
        "end_time": 4424880,
        "duration": 7120,
        "text": "client the not taking app it redirects\nyou to the authorization server we"
      },
      {
        "start_time": 4423159,
        "end_time": 4430679,
        "duration": 7520,
        "text": "discussed about authorization server\njust before it redirects you to the"
      },
      {
        "start_time": 4427440,
        "end_time": 4435920,
        "duration": 8480,
        "text": "authorization server the user logs in\ninto the Google account since they did"
      },
      {
        "start_time": 4433280,
        "end_time": 4439080,
        "duration": 5800,
        "text": "sign in with Google they log Lo in using\nthe Google account from the Google's"
      },
      {
        "start_time": 4437400,
        "end_time": 4443120,
        "duration": 5720,
        "text": "authorization server not from the\nclient's server they do it from the"
      },
      {
        "start_time": 4441159,
        "end_time": 4447800,
        "duration": 6641,
        "text": "Google's authorization server they login\nthey provide whatever permissions that"
      },
      {
        "start_time": 4445800,
        "end_time": 4452480,
        "duration": 6680,
        "text": "was asked by the client for example\nreading the users email or the name or"
      },
      {
        "start_time": 4450400,
        "end_time": 4458120,
        "duration": 7720,
        "text": "the profile picture whatever you grant\nthose permissions and the authorization"
      },
      {
        "start_time": 4454639,
        "end_time": 4465080,
        "duration": 10441,
        "text": "server sends two things a authorization\ncode an authorization code and an ID"
      },
      {
        "start_time": 4462600,
        "end_time": 4470320,
        "duration": 7720,
        "text": "token back to the client to the not\ntaking platform then what the client"
      },
      {
        "start_time": 4467159,
        "end_time": 4475000,
        "duration": 7841,
        "text": "does in the second step it uses the code\nand an ID token is optional at this"
      },
      {
        "start_time": 4472120,
        "end_time": 4479960,
        "duration": 7840,
        "text": "stage in some workflows and when the\nclient uses the Au code the"
      },
      {
        "start_time": 4477199,
        "end_time": 4485040,
        "duration": 7841,
        "text": "authorization code in the Second Step It\nexchanges the authorization code with"
      },
      {
        "start_time": 4482560,
        "end_time": 4491400,
        "duration": 8840,
        "text": "the server with the with the resource\nserver for a access token for a access"
      },
      {
        "start_time": 4488320,
        "end_time": 4495440,
        "duration": 7120,
        "text": "token on behalf of the user and an ID\ntoken if did not get the ID token in the"
      },
      {
        "start_time": 4493719,
        "end_time": 4500639,
        "duration": 6920,
        "text": "first s it gets an ID token toen in the\nsecond step and the ID token will have"
      },
      {
        "start_time": 4497920,
        "end_time": 4505440,
        "duration": 7520,
        "text": "jws and inside the JWT it will have the\nusers's ID users name different values"
      },
      {
        "start_time": 4503239,
        "end_time": 4510760,
        "duration": 7521,
        "text": "of the user and the access token using\nthe access token the not taking server"
      },
      {
        "start_time": 4508719,
        "end_time": 4517239,
        "duration": 8520,
        "text": "the client can do different different\noperations on behalf of the user in the"
      },
      {
        "start_time": 4514000,
        "end_time": 4522000,
        "duration": 8000,
        "text": "resource server so now let's say the not\ntaking server asked for Google keeps"
      },
      {
        "start_time": 4519920,
        "end_time": 4526800,
        "duration": 6880,
        "text": "access okay all the notes that you have\nin your Google keep it ask for that"
      },
      {
        "start_time": 4524639,
        "end_time": 4532000,
        "duration": 7361,
        "text": "access during the authorization workflow\nso and you granted that access now when"
      },
      {
        "start_time": 4529560,
        "end_time": 4536880,
        "duration": 7320,
        "text": "everything is done it uses the Au code\nto get this access token now the note"
      },
      {
        "start_time": 4534679,
        "end_time": 4541760,
        "duration": 7081,
        "text": "taking server can store this token this\naccess token and it can get all your"
      },
      {
        "start_time": 4539159,
        "end_time": 4548320,
        "duration": 9161,
        "text": "notes from Google server using this\naccess token on behalf of you now that's"
      },
      {
        "start_time": 4545239,
        "end_time": 4555000,
        "duration": 9761,
        "text": "the use of open ID connect now the\nclient platform the not taking platform"
      },
      {
        "start_time": 4550480,
        "end_time": 4560199,
        "duration": 9719,
        "text": "can authenticate on behalf of you it can\npose as you it can appear as you to the"
      },
      {
        "start_time": 4557880,
        "end_time": 4566199,
        "duration": 8319,
        "text": "Google server and it can ask for stuff\nwhatever the stuff it asked permission"
      },
      {
        "start_time": 4562840,
        "end_time": 4570480,
        "duration": 7640,
        "text": "from you not any uh kind of stuff only\nthe stuff it has permission for in this"
      },
      {
        "start_time": 4568280,
        "end_time": 4576199,
        "duration": 7919,
        "text": "case all the notes from your Google keep\nokay that's how the whole workflow works"
      },
      {
        "start_time": 4572719,
        "end_time": 4582639,
        "duration": 9920,
        "text": "so you can imagine or 2.0 and open ID\nconnect together as security guards or"
      },
      {
        "start_time": 4580000,
        "end_time": 4590000,
        "duration": 10000,
        "text": "key makers of the digital age of the\ndigital Modern Age they ensure that no"
      },
      {
        "start_time": 4586360,
        "end_time": 4595440,
        "duration": 9080,
        "text": "one not a user or a platform gets more\naccess than they need or then they have"
      },
      {
        "start_time": 4593560,
        "end_time": 4600320,
        "duration": 6760,
        "text": "asked for in the first place from the\nuser so they only get access to those"
      },
      {
        "start_time": 4598320,
        "end_time": 4605719,
        "duration": 7399,
        "text": "resources that they have access for that\nthey have permission for and protocols"
      },
      {
        "start_time": 4603199,
        "end_time": 4611280,
        "duration": 8081,
        "text": "like o 2.0 and open ID connect make sure\nthat it happens it stays like that and"
      },
      {
        "start_time": 4609440,
        "end_time": 4615560,
        "duration": 6120,
        "text": "together these two revolutionary\ntechnologies have transformed the"
      },
      {
        "start_time": 4613000,
        "end_time": 4621080,
        "duration": 8080,
        "text": "internet from a password sharing\nchaos into a secure into a secure modern"
      },
      {
        "start_time": 4618560,
        "end_time": 4626440,
        "duration": 7880,
        "text": "interconnected system and because of\nthese two technologies we have so many"
      },
      {
        "start_time": 4623120,
        "end_time": 4631159,
        "duration": 8039,
        "text": "new features in so many platforms that\nwe can integrate one system into another"
      },
      {
        "start_time": 4628840,
        "end_time": 4635719,
        "duration": 6879,
        "text": "we can do different types of uh resource\nsharing we can type do different types"
      },
      {
        "start_time": 4633320,
        "end_time": 4640360,
        "duration": 7040,
        "text": "of permission sharing and all those\ndifferent things that can happen because"
      },
      {
        "start_time": 4637880,
        "end_time": 4644920,
        "duration": 7040,
        "text": "of O 2.0 and open ID connect now the\nquestion is when should you use which"
      },
      {
        "start_time": 4643159,
        "end_time": 4648440,
        "duration": 5281,
        "text": "type of authentication now that we\ndiscussed the four major types of"
      },
      {
        "start_time": 4646639,
        "end_time": 4653960,
        "duration": 7321,
        "text": "authentication that we use uh in the\nmodern age that you should be aware of"
      },
      {
        "start_time": 4651280,
        "end_time": 4659520,
        "duration": 8240,
        "text": "as a backend engineer which technique\nwhich type of authentication that you"
      },
      {
        "start_time": 4655639,
        "end_time": 4664960,
        "duration": 9321,
        "text": "use in which kind of situation so this\ncan help you decide on that so these are"
      },
      {
        "start_time": 4662560,
        "end_time": 4669840,
        "duration": 7280,
        "text": "some of the thumb rules stateful\nauthentication using a session ID or a"
      },
      {
        "start_time": 4667520,
        "end_time": 4674040,
        "duration": 6520,
        "text": "GW taken and a persistent storage you\nuse stateful authentication for"
      },
      {
        "start_time": 4672239,
        "end_time": 4679040,
        "duration": 6801,
        "text": "typically all your web app based\nauthentication work workflows uh which"
      },
      {
        "start_time": 4676280,
        "end_time": 4684840,
        "duration": 8560,
        "text": "comprise of pretty much a large portion\nof our SAS based models right that's a"
      },
      {
        "start_time": 4682440,
        "end_time": 4689679,
        "duration": 7239,
        "text": "stateful authentication is ideal for\nthat kind of scenario where user"
      },
      {
        "start_time": 4687760,
        "end_time": 4695320,
        "duration": 7560,
        "text": "specific session data is stored on the\nserver okay State stateless"
      },
      {
        "start_time": 4692400,
        "end_time": 4700320,
        "duration": 7920,
        "text": "authentication is ideal for apis or\nscalable systems which have distributed"
      },
      {
        "start_time": 4697920,
        "end_time": 4705320,
        "duration": 7400,
        "text": "servers all over the world and where\ntokens carry users info or users data we"
      },
      {
        "start_time": 4703360,
        "end_time": 4710120,
        "duration": 6760,
        "text": "have o authentications\nthis is ideal for third party"
      },
      {
        "start_time": 4706719,
        "end_time": 4714520,
        "duration": 7801,
        "text": "Integrations and providing login via\nexternal providers like Google Facebook"
      },
      {
        "start_time": 4712400,
        "end_time": 4718120,
        "duration": 5720,
        "text": "Discord and all we have API key based\nauthentication which is ideal for server"
      },
      {
        "start_time": 4716520,
        "end_time": 4724360,
        "duration": 7840,
        "text": "to server or machine to machine\ncommunication or a let's say single"
      },
      {
        "start_time": 4721440,
        "end_time": 4728800,
        "duration": 7360,
        "text": "purpose client access to apis so that's\npretty much all the four kinds of"
      },
      {
        "start_time": 4726000,
        "end_time": 4734360,
        "duration": 8360,
        "text": "authentication and a simple thumb rule\nto decide you on when to use what in my"
      },
      {
        "start_time": 4731760,
        "end_time": 4738880,
        "duration": 7120,
        "text": "experience you will use stateful\nauthentic and stateless authentication"
      },
      {
        "start_time": 4736639,
        "end_time": 4743600,
        "duration": 6961,
        "text": "most of your times when you're building\nyour apis okay and with that we have"
      },
      {
        "start_time": 4741719,
        "end_time": 4748320,
        "duration": 6601,
        "text": "pretty much talked about everything that\nyou need to know as a backend engineer"
      },
      {
        "start_time": 4745679,
        "end_time": 4753480,
        "duration": 7801,
        "text": "about authentication that you need to\nunderstand about authentication and now"
      },
      {
        "start_time": 4750760,
        "end_time": 4759400,
        "duration": 8640,
        "text": "we can move on to authorization this is\nnot as vast as authentication but just"
      },
      {
        "start_time": 4756840,
        "end_time": 4764719,
        "duration": 7879,
        "text": "you can still get an high level idea of\nwhat it is about as I have already"
      },
      {
        "start_time": 4761639,
        "end_time": 4770000,
        "duration": 8361,
        "text": "mentioned the the on line explanation of\nof authorization is authentication is"
      },
      {
        "start_time": 4767080,
        "end_time": 4775960,
        "duration": 8880,
        "text": "basically the who which means who the\nidentity of the user and authorization"
      },
      {
        "start_time": 4772840,
        "end_time": 4781199,
        "duration": 8359,
        "text": "is the permissions of the user what a\nuser can do and authentication is who"
      },
      {
        "start_time": 4778639,
        "end_time": 4784600,
        "duration": 5961,
        "text": "the user is in the platform those are\nthe two questions that can help you"
      },
      {
        "start_time": 4783480,
        "end_time": 4788719,
        "duration": 5239,
        "text": "understand the difference between\nauthentication and authorization now"
      },
      {
        "start_time": 4786600,
        "end_time": 4793000,
        "duration": 6400,
        "text": "moving on to authorization what was the\nneed of it why did people come up with"
      },
      {
        "start_time": 4791199,
        "end_time": 4799440,
        "duration": 8241,
        "text": "this concept called authorization\ncircling back to our example let's say"
      },
      {
        "start_time": 4796679,
        "end_time": 4805159,
        "duration": 8480,
        "text": "we have a user that logged into our\nsystem we have a server"
      },
      {
        "start_time": 4801800,
        "end_time": 4809000,
        "duration": 7200,
        "text": "and let's say it's a not taking platform\nit's a not taking platform and the user"
      },
      {
        "start_time": 4807280,
        "end_time": 4814639,
        "duration": 7359,
        "text": "logged into our platform or logged into\nour server using the appropriate"
      },
      {
        "start_time": 4811120,
        "end_time": 4818960,
        "duration": 7840,
        "text": "credentials so it provided the email or\npassword or whatever the credentials"
      },
      {
        "start_time": 4816320,
        "end_time": 4823040,
        "duration": 6720,
        "text": "need are and it authenticated itself\ninto the platform now it can create"
      },
      {
        "start_time": 4821120,
        "end_time": 4827440,
        "duration": 6320,
        "text": "notes it can delete notes it can update\nnotes whatever the typical function it"
      },
      {
        "start_time": 4825040,
        "end_time": 4833000,
        "duration": 7960,
        "text": "of a not teing platform is that's one\npart second part comes is you as the"
      },
      {
        "start_time": 4830840,
        "end_time": 4838880,
        "duration": 8040,
        "text": "creator of this platform is a creator of\nthis platform you need to your platform"
      },
      {
        "start_time": 4836760,
        "end_time": 4843639,
        "duration": 6879,
        "text": "has an ability or let's say a delete\nfeature and the delete feature actually"
      },
      {
        "start_time": 4841199,
        "end_time": 4850159,
        "duration": 8960,
        "text": "does not delete the note permanently it\nstores the note in kind of a recycle bin"
      },
      {
        "start_time": 4846840,
        "end_time": 4855320,
        "duration": 8480,
        "text": "or a trash can so the user has the\nability they can either delete it"
      },
      {
        "start_time": 4853040,
        "end_time": 4860280,
        "duration": 7240,
        "text": "permanently or it will will get\nautomatically deleted after 30 days"
      },
      {
        "start_time": 4857840,
        "end_time": 4865239,
        "duration": 7399,
        "text": "after 30 days let's say all these notes\nmove into another Zone they get deleted"
      },
      {
        "start_time": 4862760,
        "end_time": 4870639,
        "duration": 7879,
        "text": "for the user but it don't get\npermanently deleted from the database"
      },
      {
        "start_time": 4867600,
        "end_time": 4876360,
        "duration": 8760,
        "text": "they move into another Zone let's call\nthis dead zone it all the nodes after 30"
      },
      {
        "start_time": 4873760,
        "end_time": 4881960,
        "duration": 8200,
        "text": "days they move into this Zone called\nDead Zone okay and now the requirement"
      },
      {
        "start_time": 4879040,
        "end_time": 4887639,
        "duration": 8599,
        "text": "is you as a creator of the note taking\nplatform you want to is these notes"
      },
      {
        "start_time": 4885360,
        "end_time": 4891639,
        "duration": 6279,
        "text": "programmatically using another UI called\nadmin UI so you are the administrator"
      },
      {
        "start_time": 4889600,
        "end_time": 4895600,
        "duration": 6000,
        "text": "you're the Creator UI or another UI\ncalled Creator UI you as an"
      },
      {
        "start_time": 4893560,
        "end_time": 4902120,
        "duration": 8560,
        "text": "administrator of this platform or a\ncreator of this platform want to have"
      },
      {
        "start_time": 4899120,
        "end_time": 4907080,
        "duration": 7960,
        "text": "some permission some capability which\nare not granted to all the users of this"
      },
      {
        "start_time": 4904920,
        "end_time": 4911600,
        "duration": 6680,
        "text": "platform which are not granted to every\nuser you want special permissions for"
      },
      {
        "start_time": 4909960,
        "end_time": 4916840,
        "duration": 6880,
        "text": "this platform and you want to create\nanother UI for yourself in for this case"
      },
      {
        "start_time": 4914639,
        "end_time": 4923120,
        "duration": 8481,
        "text": "one solution for that is one solution\nfor that is you can let's say come up"
      },
      {
        "start_time": 4920480,
        "end_time": 4930440,
        "duration": 9960,
        "text": "with a random string and you can send\nthe string with each API and using that"
      },
      {
        "start_time": 4926840,
        "end_time": 4934280,
        "duration": 7440,
        "text": "you can say that okay so uh the server\nwill identify that this is coming from"
      },
      {
        "start_time": 4932360,
        "end_time": 4938440,
        "duration": 6080,
        "text": "the Creator give the access to those\ncapabilities which are not accessible to"
      },
      {
        "start_time": 4936360,
        "end_time": 4943920,
        "duration": 7560,
        "text": "all the users now the problem with that\nis this is this has security flaws since"
      },
      {
        "start_time": 4941880,
        "end_time": 4950120,
        "duration": 8240,
        "text": "you are sending this special string this\nis this god mode string in your apis if"
      },
      {
        "start_time": 4946960,
        "end_time": 4954760,
        "duration": 7800,
        "text": "someone intercepts this string they get\nhold of the string they can do a lot of"
      },
      {
        "start_time": 4952520,
        "end_time": 4959400,
        "duration": 6880,
        "text": "uh disastrous thing to your platform\nthey can entirely clean the DB they can"
      },
      {
        "start_time": 4957600,
        "end_time": 4964239,
        "duration": 6639,
        "text": "mess with other users data they can do a\nlot of Stu there is a huge security risk"
      },
      {
        "start_time": 4962239,
        "end_time": 4969480,
        "duration": 7241,
        "text": "with this approach that is the first\npart the second part is what if you want"
      },
      {
        "start_time": 4967120,
        "end_time": 4973920,
        "duration": 6800,
        "text": "to give the same level of access the\nsame level of special access to other"
      },
      {
        "start_time": 4971600,
        "end_time": 4978600,
        "duration": 7000,
        "text": "users other users let's say to your\nfriends are people who regularly"
      },
      {
        "start_time": 4976360,
        "end_time": 4984760,
        "duration": 8400,
        "text": "maintain the platform you want to give\nthem these special permissions so now"
      },
      {
        "start_time": 4981280,
        "end_time": 4990159,
        "duration": 8879,
        "text": "you have to either give that string to\nthem or you will create more strings and"
      },
      {
        "start_time": 4988280,
        "end_time": 4994400,
        "duration": 6120,
        "text": "add the support in your server to allow\nfor those strings for the special"
      },
      {
        "start_time": 4991920,
        "end_time": 4998600,
        "duration": 6680,
        "text": "permissions now as you can see the\nsystem just got more complicated than it"
      },
      {
        "start_time": 4996719,
        "end_time": 5004880,
        "duration": 8161,
        "text": "was before and it is very difficult to\nmanage the access now and it is more"
      },
      {
        "start_time": 5001480,
        "end_time": 5009280,
        "duration": 7800,
        "text": "prone to security flaws use cases like\nthis use cases like this I have"
      },
      {
        "start_time": 5006840,
        "end_time": 5014480,
        "duration": 7640,
        "text": "oversimplified the use case but all in\nall what you can see is"
      },
      {
        "start_time": 5011760,
        "end_time": 5020800,
        "duration": 9040,
        "text": "providing specific\npermissions providing specific"
      },
      {
        "start_time": 5016920,
        "end_time": 5026320,
        "duration": 9400,
        "text": "permissions to specific users on a\nplatform is basically called"
      },
      {
        "start_time": 5024159,
        "end_time": 5032800,
        "duration": 8641,
        "text": "authorization what authorization means\nis not all users in the platform have"
      },
      {
        "start_time": 5029679,
        "end_time": 5038679,
        "duration": 9000,
        "text": "the same level of access not all users\ncan do the can do the same thing some"
      },
      {
        "start_time": 5036080,
        "end_time": 5042560,
        "duration": 6480,
        "text": "users have different capabilities some\nusers have more capabilities some users"
      },
      {
        "start_time": 5040679,
        "end_time": 5046840,
        "duration": 6161,
        "text": "have less capabilities some users have\ncompletely different set of capabilities"
      },
      {
        "start_time": 5044600,
        "end_time": 5051199,
        "duration": 6599,
        "text": "than the other users and if you're\nbuilding a multi-tenant architecture"
      },
      {
        "start_time": 5048840,
        "end_time": 5056840,
        "duration": 8000,
        "text": "let's say you are providing users to\ncreate organizations and in that"
      },
      {
        "start_time": 5053199,
        "end_time": 5061000,
        "duration": 7801,
        "text": "organization you want users the admin to\nprovide different permissions to"
      },
      {
        "start_time": 5058679,
        "end_time": 5066000,
        "duration": 7321,
        "text": "different kinds of members so you want\nto provide you want to provide the admin"
      },
      {
        "start_time": 5063560,
        "end_time": 5070560,
        "duration": 7000,
        "text": "the capability so that the admin can\nassign read or write permission to some"
      },
      {
        "start_time": 5068360,
        "end_time": 5076040,
        "duration": 7680,
        "text": "users and only read permissions to some\nusers so because of the need of these"
      },
      {
        "start_time": 5073120,
        "end_time": 5082320,
        "duration": 9200,
        "text": "kinds of scenarios people came up with\nauthorization techniques and one of the"
      },
      {
        "start_time": 5078400,
        "end_time": 5086800,
        "duration": 8400,
        "text": "most famous ones that we use still in\nthe modern age that you as a backend"
      },
      {
        "start_time": 5084480,
        "end_time": 5092719,
        "duration": 8239,
        "text": "engineer should be familiar with is\narback which stands for role based"
      },
      {
        "start_time": 5090360,
        "end_time": 5096639,
        "duration": 6279,
        "text": "Access Control okay and it's called role\nbased access control because this this"
      },
      {
        "start_time": 5094440,
        "end_time": 5101560,
        "duration": 7120,
        "text": "is how it typically Works in a typical\nplatform we have different roles one can"
      },
      {
        "start_time": 5099040,
        "end_time": 5105719,
        "duration": 6679,
        "text": "be a user role it can be an admin role\nit can be a moderator role we have"
      },
      {
        "start_time": 5103280,
        "end_time": 5111040,
        "duration": 7760,
        "text": "different roles and different roles are\nassigned different set of permissions"
      },
      {
        "start_time": 5107719,
        "end_time": 5117440,
        "duration": 9721,
        "text": "let's say a user role is only assigned\nread permission admin role is assigned"
      },
      {
        "start_time": 5113800,
        "end_time": 5123360,
        "duration": 9560,
        "text": "read and write permission same way a\nmoderator role is only assigned read and"
      },
      {
        "start_time": 5120600,
        "end_time": 5127080,
        "duration": 6480,
        "text": "write permission depending on the role\nand you can create create your own"
      },
      {
        "start_time": 5124880,
        "end_time": 5132040,
        "duration": 7160,
        "text": "custom roles with own with its own set\nof permissions on different different"
      },
      {
        "start_time": 5129000,
        "end_time": 5137800,
        "duration": 8800,
        "text": "kinds of resources let's say a notes\nusers have read write and delete but on"
      },
      {
        "start_time": 5135520,
        "end_time": 5144719,
        "duration": 9199,
        "text": "a different resource let's say accessing\nThe Dead Zone notes that permission is"
      },
      {
        "start_time": 5141080,
        "end_time": 5149360,
        "duration": 8280,
        "text": "only provided to admin you can go as\ngranular as you want using different"
      },
      {
        "start_time": 5147199,
        "end_time": 5153239,
        "duration": 6040,
        "text": "roles and permissions and that's all\nthere is to it in our back and"
      },
      {
        "start_time": 5151440,
        "end_time": 5159600,
        "duration": 8160,
        "text": "authorization so this is how a typical\nworkflow works so in a platform a user"
      },
      {
        "start_time": 5156719,
        "end_time": 5165280,
        "duration": 8561,
        "text": "registers or a user signs up and the\nserver assigns it a role let's say it"
      },
      {
        "start_time": 5162360,
        "end_time": 5170520,
        "duration": 8160,
        "text": "assigns it a user role or depending on\nthe use case it assigns it a admin role"
      },
      {
        "start_time": 5168280,
        "end_time": 5175080,
        "duration": 6800,
        "text": "and in the subsequent request once the\nuser sends its token or it could be"
      },
      {
        "start_time": 5172840,
        "end_time": 5179920,
        "duration": 7080,
        "text": "session ID using stateful session ID\nusing stateful authentications or a JWT"
      },
      {
        "start_time": 5177920,
        "end_time": 5184719,
        "duration": 6799,
        "text": "using stateless authentication whatever\nthe means of authentication it is it"
      },
      {
        "start_time": 5181639,
        "end_time": 5190440,
        "duration": 8801,
        "text": "sends its identification\nand the server can deduce what is the"
      },
      {
        "start_time": 5187360,
        "end_time": 5195400,
        "duration": 8040,
        "text": "role of the user using that token or it\ncan do a database lookup and see what"
      },
      {
        "start_time": 5192639,
        "end_time": 5200600,
        "duration": 7961,
        "text": "the assigned role of that user is\nwhether the role is user or the role is"
      },
      {
        "start_time": 5197800,
        "end_time": 5205960,
        "duration": 8160,
        "text": "admin and depending on the role of that\nuser that is deduced early in the"
      },
      {
        "start_time": 5203000,
        "end_time": 5209920,
        "duration": 6920,
        "text": "request cycle and it is passed on to the\nnext set of middlewares uh we'll talk"
      },
      {
        "start_time": 5208280,
        "end_time": 5214639,
        "duration": 6359,
        "text": "about middleware and how the middleware\nchain works in the in a future video but"
      },
      {
        "start_time": 5212840,
        "end_time": 5220760,
        "duration": 7920,
        "text": "imagine in the first entry point the\nserver checks your uh your identity and"
      },
      {
        "start_time": 5217960,
        "end_time": 5225880,
        "duration": 7920,
        "text": "checks your role and it attaches that\ninformation so that the next set of code"
      },
      {
        "start_time": 5223239,
        "end_time": 5229880,
        "duration": 6641,
        "text": "the next set of logic that next set of\nlogic can have access to this"
      },
      {
        "start_time": 5228239,
        "end_time": 5236080,
        "duration": 7841,
        "text": "information so that they can decide\nwhether whether a user has access to the"
      },
      {
        "start_time": 5233239,
        "end_time": 5241400,
        "duration": 8161,
        "text": "dead zone notes and the user will have\naccess to the dead zone notes if the"
      },
      {
        "start_time": 5238280,
        "end_time": 5246719,
        "duration": 8439,
        "text": "role is admin and if the user role is uh\nuser if the role is user then the API"
      },
      {
        "start_time": 5245040,
        "end_time": 5251800,
        "duration": 6760,
        "text": "will fail and it will the server will\nsend an error called forbidden with"
      },
      {
        "start_time": 5248920,
        "end_time": 5256719,
        "duration": 7799,
        "text": "status 403 which means you don't have\nenough permission to perform this task"
      },
      {
        "start_time": 5254320,
        "end_time": 5261480,
        "duration": 7160,
        "text": "or access this resource that's the whole\nidea of arback role based access control"
      },
      {
        "start_time": 5259719,
        "end_time": 5265880,
        "duration": 6161,
        "text": "and that's pretty much all you need to\nknow about authorization and our back"
      },
      {
        "start_time": 5264000,
        "end_time": 5271360,
        "duration": 7360,
        "text": "since we are talking about\nauthentication authorization and it's in"
      },
      {
        "start_time": 5268760,
        "end_time": 5274719,
        "duration": 5959,
        "text": "the context of back and Inus two things\nthat I want people to know these two"
      },
      {
        "start_time": 5273920,
        "end_time": 5279320,
        "duration": 5400,
        "text": "things\nis sending appropriate error messages in"
      },
      {
        "start_time": 5277159,
        "end_time": 5283600,
        "duration": 6441,
        "text": "the authentication workflow and some\ninfo about timing attacks so the first"
      },
      {
        "start_time": 5281480,
        "end_time": 5288360,
        "duration": 6880,
        "text": "thing error messages during the course\nof authentication there will be"
      },
      {
        "start_time": 5285520,
        "end_time": 5293040,
        "duration": 7520,
        "text": "instances when you have to send messages\nto the client the user logs in with a"
      },
      {
        "start_time": 5291040,
        "end_time": 5297119,
        "duration": 6079,
        "text": "certain email and you could not find\nthat email in your database and you send"
      },
      {
        "start_time": 5295199,
        "end_time": 5302800,
        "duration": 7601,
        "text": "a very helpful message called user not\nfound or let's say the email was found"
      },
      {
        "start_time": 5300440,
        "end_time": 5307639,
        "duration": 7199,
        "text": "but the password was incorrect so you\nsent a friendly message called incorrect"
      },
      {
        "start_time": 5304520,
        "end_time": 5312800,
        "duration": 8280,
        "text": "password the same way the user tried\ninvalid credentials"
      },
      {
        "start_time": 5309679,
        "end_time": 5316280,
        "duration": 6601,
        "text": "for sometimes for invalid credential for\na few times and you send a message"
      },
      {
        "start_time": 5314239,
        "end_time": 5322639,
        "duration": 8400,
        "text": "account locked due to too many failed\nattempts and while these messages are"
      },
      {
        "start_time": 5318760,
        "end_time": 5328320,
        "duration": 9560,
        "text": "helpful for legitimate users they also\nprovide attackers with clues for example"
      },
      {
        "start_time": 5325960,
        "end_time": 5333560,
        "duration": 7600,
        "text": "if the error indicates user not found\nthe attacker learns that the username"
      },
      {
        "start_time": 5330480,
        "end_time": 5338320,
        "duration": 7840,
        "text": "does not exist and if they're trying to\nbreach users some users account they"
      },
      {
        "start_time": 5336400,
        "end_time": 5342760,
        "duration": 6360,
        "text": "will move on to the next user they will\ntry with a different email and they will"
      },
      {
        "start_time": 5340480,
        "end_time": 5348840,
        "duration": 8360,
        "text": "keep moving on to the next users if they\nhave a certain list of users they that"
      },
      {
        "start_time": 5345639,
        "end_time": 5353360,
        "duration": 7721,
        "text": "they want to breach the same way if you\nsend a message called incorrect password"
      },
      {
        "start_time": 5351119,
        "end_time": 5358520,
        "duration": 7401,
        "text": "now the attacker knows that the username\nwas correct and now they only have to"
      },
      {
        "start_time": 5355560,
        "end_time": 5363520,
        "duration": 7960,
        "text": "breach the password so they will try a\nlist of brute passwords using brute"
      },
      {
        "start_time": 5361159,
        "end_time": 5368480,
        "duration": 7321,
        "text": "forcing or dictionary attacks and they\nwill there attack surface will increase"
      },
      {
        "start_time": 5366639,
        "end_time": 5372560,
        "duration": 5921,
        "text": "because they had some kind of\nconfirmation from you as a server as a"
      },
      {
        "start_time": 5370639,
        "end_time": 5377760,
        "duration": 7121,
        "text": "backend engineer you should be aware\nthat never send specific messages when"
      },
      {
        "start_time": 5375360,
        "end_time": 5383000,
        "duration": 7640,
        "text": "it is about authentication right never\nsend friendly messages like these always"
      },
      {
        "start_time": 5380119,
        "end_time": 5389600,
        "duration": 9481,
        "text": "keep any message related to\nauthentication generic so you can do you"
      },
      {
        "start_time": 5386280,
        "end_time": 5394119,
        "duration": 7839,
        "text": "can save authentication failed you can\ndo authentication failed for all the"
      },
      {
        "start_time": 5391800,
        "end_time": 5399239,
        "duration": 7439,
        "text": "three cases does not matter what happens\nwhat kind of uh authentication failure"
      },
      {
        "start_time": 5397000,
        "end_time": 5404840,
        "duration": 7840,
        "text": "happens always send a generic message to\nthe client so that the attacker is"
      },
      {
        "start_time": 5402040,
        "end_time": 5410880,
        "duration": 8840,
        "text": "always uh confused if if it's an\nattacker it's confused that what is the"
      },
      {
        "start_time": 5408199,
        "end_time": 5414520,
        "duration": 6321,
        "text": "next set of actions it they should take\nto breach the system that's one"
      },
      {
        "start_time": 5412960,
        "end_time": 5419239,
        "duration": 6279,
        "text": "important thing you have to remember\nalways send generic error messages"
      },
      {
        "start_time": 5417119,
        "end_time": 5423960,
        "duration": 6841,
        "text": "during your authentication workflow\nduring your authentication life cycle do"
      },
      {
        "start_time": 5421440,
        "end_time": 5428040,
        "duration": 6600,
        "text": "not send friendly client friendly or\nuser friendly error messages"
      },
      {
        "start_time": 5425840,
        "end_time": 5432560,
        "duration": 6720,
        "text": "particularly in this workflow you can\nsend user friendly error messages during"
      },
      {
        "start_time": 5430639,
        "end_time": 5437199,
        "duration": 6560,
        "text": "other workflows like validations or\nother apis in the security World there"
      },
      {
        "start_time": 5434760,
        "end_time": 5444239,
        "duration": 9479,
        "text": "is another kind of attack even though it\nis rare it is called a timing attack and"
      },
      {
        "start_time": 5441280,
        "end_time": 5450840,
        "duration": 9560,
        "text": "how it works is in a typical\nauthentication workflow when the user"
      },
      {
        "start_time": 5446760,
        "end_time": 5456480,
        "duration": 9720,
        "text": "submits their credential the email and\nthe password first the server verifies"
      },
      {
        "start_time": 5453800,
        "end_time": 5461400,
        "duration": 7600,
        "text": "the the username or the email or the\nusername whatever it is provided for the"
      },
      {
        "start_time": 5458920,
        "end_time": 5467040,
        "duration": 8120,
        "text": "first field it verifies it if it tries\nto find if it exists if the user exists"
      },
      {
        "start_time": 5463840,
        "end_time": 5470880,
        "duration": 7040,
        "text": "in the platform then the next step is if\nthey are handling it they check if the"
      },
      {
        "start_time": 5468960,
        "end_time": 5476400,
        "duration": 7440,
        "text": "account is locked or if the account is\nsuspended for a few time because of a"
      },
      {
        "start_time": 5473480,
        "end_time": 5483119,
        "duration": 9639,
        "text": "couple of invalid credentials that the\nuser has tried with in the near past so"
      },
      {
        "start_time": 5480440,
        "end_time": 5488320,
        "duration": 7880,
        "text": "servers have this mechanism where they\nlock a a particular user account for"
      },
      {
        "start_time": 5485360,
        "end_time": 5494520,
        "duration": 9160,
        "text": "some time for 2 minutes or 4 minutes or\na day if they try too many invalid"
      },
      {
        "start_time": 5492320,
        "end_time": 5500960,
        "duration": 8640,
        "text": "authentication attempts so the second\nstep is first step is find user second"
      },
      {
        "start_time": 5497840,
        "end_time": 5505400,
        "duration": 7560,
        "text": "step is check if they are locked okay if\nthey are not locked third step is"
      },
      {
        "start_time": 5503040,
        "end_time": 5512920,
        "duration": 9880,
        "text": "comparing the password the provided\npassword with the stored hash the stored"
      },
      {
        "start_time": 5510040,
        "end_time": 5517840,
        "duration": 7800,
        "text": "hash that the server has stored in the\ndatabase because passwords are not"
      },
      {
        "start_time": 5515840,
        "end_time": 5522800,
        "duration": 6960,
        "text": "stored in plain text when you sign up\ninto a platform your password is taken"
      },
      {
        "start_time": 5520320,
        "end_time": 5527280,
        "duration": 6960,
        "text": "they're hashed into a particular\ncryptographically safe string then they"
      },
      {
        "start_time": 5525600,
        "end_time": 5531840,
        "duration": 6240,
        "text": "are stored in the database and there is\nno way to get the plain text value of"
      },
      {
        "start_time": 5529480,
        "end_time": 5537639,
        "duration": 8159,
        "text": "that password even for the server right\nthe server can only encrypt that"
      },
      {
        "start_time": 5534600,
        "end_time": 5541719,
        "duration": 7119,
        "text": "password in into a particular string and\nthen it can store that password so that"
      },
      {
        "start_time": 5539639,
        "end_time": 5546880,
        "duration": 7241,
        "text": "so that the next time you provide your\npassword it can compare it can hash that"
      },
      {
        "start_time": 5545040,
        "end_time": 5552639,
        "duration": 7599,
        "text": "password it can encrypt that password\ninto the same form it can fetch the"
      },
      {
        "start_time": 5550719,
        "end_time": 5558360,
        "duration": 7641,
        "text": "previously stored password from the\ndatabase and then it can compare those"
      },
      {
        "start_time": 5554920,
        "end_time": 5562480,
        "duration": 7560,
        "text": "two that's the way servers check if the\npassword is correct or not that's the"
      },
      {
        "start_time": 5560280,
        "end_time": 5566960,
        "duration": 6680,
        "text": "typical workflow of checking if the user\nhas provided correct password or not"
      },
      {
        "start_time": 5565080,
        "end_time": 5572119,
        "duration": 7039,
        "text": "they take the provided password they\nhash it using the same algorithms using"
      },
      {
        "start_time": 5569440,
        "end_time": 5575520,
        "duration": 6080,
        "text": "the same key and they check that version\nwith the stored hashed version in the"
      },
      {
        "start_time": 5573840,
        "end_time": 5579440,
        "duration": 5600,
        "text": "the database and they check if they are\nsame or not they're not same then the"
      },
      {
        "start_time": 5577360,
        "end_time": 5584800,
        "duration": 7440,
        "text": "password is incorrect okay that is the\nthird step check password and now the"
      },
      {
        "start_time": 5581560,
        "end_time": 5589600,
        "duration": 8040,
        "text": "problem here is if the username is\ninvalid if the username is invalid in"
      },
      {
        "start_time": 5587239,
        "end_time": 5594719,
        "duration": 7480,
        "text": "the first step the system will terminate\nthere only and you will get uh some"
      },
      {
        "start_time": 5591719,
        "end_time": 5600199,
        "duration": 8480,
        "text": "response that user not found and that\nwill have a faster response time as"
      },
      {
        "start_time": 5597520,
        "end_time": 5605719,
        "duration": 8199,
        "text": "compared to the system failing at the\nthird step at the third step where"
      },
      {
        "start_time": 5602960,
        "end_time": 5610719,
        "duration": 7759,
        "text": "username is is valid but the password is\nincorrect In this case the response will"
      },
      {
        "start_time": 5608360,
        "end_time": 5615520,
        "duration": 7160,
        "text": "have some kind of delay because it\nfailed in the third step and the system"
      },
      {
        "start_time": 5613239,
        "end_time": 5620159,
        "duration": 6920,
        "text": "will take a little longer due to the\nadditional step of hashing the password"
      },
      {
        "start_time": 5617920,
        "end_time": 5626000,
        "duration": 8080,
        "text": "hashing the password takes a little\nlonger than doing the other operations"
      },
      {
        "start_time": 5622679,
        "end_time": 5630199,
        "duration": 7520,
        "text": "that's why if the username is invalid\nthe system will have a faster response"
      },
      {
        "start_time": 5628000,
        "end_time": 5635719,
        "duration": 7719,
        "text": "if the password is invalid system will\nhave a little delay in the response and"
      },
      {
        "start_time": 5633400,
        "end_time": 5641119,
        "duration": 7719,
        "text": "use using that parameter that delay\nwhatever 200 milliseconds or whatever"
      },
      {
        "start_time": 5637840,
        "end_time": 5647600,
        "duration": 9760,
        "text": "the delay is attackers can can find out\nwhether that username was correct or not"
      },
      {
        "start_time": 5644639,
        "end_time": 5651400,
        "duration": 6761,
        "text": "or at what step the server failed to\nauthenticate and they can find if the"
      },
      {
        "start_time": 5649440,
        "end_time": 5656520,
        "duration": 7080,
        "text": "usern name was invalid or the password\nwas invalid and they can use this"
      },
      {
        "start_time": 5654719,
        "end_time": 5663040,
        "duration": 8321,
        "text": "strategy and they can use this\ninformation to further strategize their"
      },
      {
        "start_time": 5660199,
        "end_time": 5668080,
        "duration": 7881,
        "text": "attack plan they can decide whether to\nTarget on the username or to Target on"
      },
      {
        "start_time": 5665760,
        "end_time": 5672679,
        "duration": 6919,
        "text": "the password based on brute force or\ndictionary attacks and all so what you"
      },
      {
        "start_time": 5669719,
        "end_time": 5677159,
        "duration": 7440,
        "text": "can do is as a backend engineer to\ndefend against these kinds of timing"
      },
      {
        "start_time": 5675080,
        "end_time": 5681400,
        "duration": 6320,
        "text": "attacks you can you have to make sure\nthat authentication systems must"
      },
      {
        "start_time": 5679199,
        "end_time": 5687119,
        "duration": 7920,
        "text": "introduce measures to equalize the\nresponse times one method you can use is"
      },
      {
        "start_time": 5684480,
        "end_time": 5691719,
        "duration": 7239,
        "text": "constant time operations there are some\ncryptographically secure constant time"
      },
      {
        "start_time": 5689480,
        "end_time": 5697360,
        "duration": 7880,
        "text": "comparison functions for password hashes\nthese functions ensure that execution"
      },
      {
        "start_time": 5693920,
        "end_time": 5702199,
        "duration": 8279,
        "text": "time does not vary based on the input\nsimilarity that is one method you can"
      },
      {
        "start_time": 5699760,
        "end_time": 5707760,
        "duration": 8000,
        "text": "use the second method that you can use\nthis you can simulate a response delay"
      },
      {
        "start_time": 5706040,
        "end_time": 5711719,
        "duration": 5679,
        "text": "uh using whatever programming language\nthat you're using if you're using node"
      },
      {
        "start_time": 5709600,
        "end_time": 5717880,
        "duration": 8280,
        "text": "just you can do set timeout or if you're\nusing goang you can do time do sleep so"
      },
      {
        "start_time": 5714080,
        "end_time": 5723000,
        "duration": 8920,
        "text": "you can do a simulation so that even in\ncase of username not matching the system"
      },
      {
        "start_time": 5720560,
        "end_time": 5727040,
        "duration": 6480,
        "text": "does not send a response immediately it\nsimulates some kind of response like 200"
      },
      {
        "start_time": 5725119,
        "end_time": 5731840,
        "duration": 6721,
        "text": "milliseconds of delay and then send a\nresponse so that the attackers cannot"
      },
      {
        "start_time": 5729960,
        "end_time": 5736440,
        "duration": 6480,
        "text": "measure the timing differences between a\nusername failing and a password failing"
      },
      {
        "start_time": 5734080,
        "end_time": 5741000,
        "duration": 6920,
        "text": "because you are simulating a fake delay\nbut these are the two major kinds of"
      },
      {
        "start_time": 5739199,
        "end_time": 5744119,
        "duration": 4920,
        "text": "security related information that you\nshould have in mind while you are"
      },
      {
        "start_time": 5742719,
        "end_time": 5749920,
        "duration": 7201,
        "text": "implementing authentication and\nauthorization and with that that's all"
      },
      {
        "start_time": 5747400,
        "end_time": 5753840,
        "duration": 6440,
        "text": "about authentication and authorization\nthat you should know as a backend"
      },
      {
        "start_time": 5751400,
        "end_time": 5758080,
        "duration": 6680,
        "text": "engineer and in the next video we will\nmove on to validations and"
      },
      {
        "start_time": 5755199,
        "end_time": 5758080,
        "duration": 2881,
        "text": "transformations"
      }
    ],
    "hashtags": [
      {
        "hashtag": "#golang",
        "link": "https://www.youtube.com/hashtag/golang"
      },
      {
        "hashtag": "#backend",
        "link": "https://www.youtube.com/hashtag/backend"
      },
      {
        "hashtag": "#nodejs",
        "link": "https://www.youtube.com/hashtag/nodejs"
      },
      {
        "hashtag": "#softwareengineering",
        "link": "https://www.youtube.com/hashtag/softwareengineering"
      }
    ],
    "tags": [],
    "next_recommended_videos": null,
    "recommended_videos": [
      {
        "url": "https://www.youtube.com/watch?v=qedj_JjjL-U&pp=0gcJCfkLAYcqIYzv",
        "title": "9. Validations and transformations for backend engineers",
        "thumbnail": "https://i.ytimg.com/vi/qedj_JjjL-U/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLB95yy_FClDvCOI4xLWLDBOeG43Tg"
      },
      {
        "url": "https://www.youtube.com/watch?v=R-4_DbV1Su4&pp=ugUEEgJlbg%3D%3D",
        "title": "API Security Fundamentals – Course for Beginners",
        "thumbnail": "https://i.ytimg.com/vi/R-4_DbV1Su4/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLBZ8BfAFYMATmAhgIWKU_IZFVNZ0w"
      },
      {
        "url": "https://www.youtube.com/watch?v=nVoAGtq6Edw",
        "title": "LIVE: JavaScript System Design Practice | Build Real-World Projects Together | Coding Beatz",
        "thumbnail": "https://i.ytimg.com/vi/nVoAGtq6Edw/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLAdWx-NdNeDPf9HXSZTVj6SIkMnbg"
      },
      {
        "url": "https://www.youtube.com/watch?v=oYxTTirKY8M",
        "title": "System Design Explained: APIs, Databases, Caching, CDNs, Load Balancing & Production Infra",
        "thumbnail": "https://i.ytimg.com/vi/oYxTTirKY8M/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLC6OWlMWCryBUM7BkEDNDYPpHfr0A"
      },
      {
        "url": "https://www.youtube.com/watch?v=OztvXV2QPKw&list=RDOztvXV2QPKw&start_radio=1&pp=oAcB",
        "title": "Deep Work Music & Flow State Music ~ Ultimate Concentration Music for Coding and Deep Productivity",
        "thumbnail": "https://i.ytimg.com/vi/OztvXV2QPKw/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLDO-pD8HckwmnZ14hYZsbwg0quaeA"
      },
      {
        "url": "https://www.youtube.com/watch?v=EnY6fSng3Ew&pp=ugUEEgJlbtIHCQn5CwGHKiGM7w%3D%3D",
        "title": "HTTPS, SSL, TLS & Certificate Authority Explained",
        "thumbnail": "https://i.ytimg.com/vi/EnY6fSng3Ew/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLAmGGhTn9zZ5QsKGFhlh8YuDZgbkw"
      },
      {
        "url": "https://www.youtube.com/watch?v=nHvf6P4cFCQ",
        "title": "Node.js Authentication & Authorization Mastery | JWT, OAuth, 2FA, RBAC, VPS Deployment, Hostinger",
        "thumbnail": "https://i.ytimg.com/vi/nHvf6P4cFCQ/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLCJ2w-HEZ_FE14OCKo4n2CZvzE_ng"
      },
      {
        "url": "https://www.youtube.com/watch?v=cn58kbyHgbs&pp=ugUHEgVlbi1VUw%3D%3D",
        "title": "PLC Troubleshooting.  Diagnosing Faults to Become a Better Technician",
        "thumbnail": "https://i.ytimg.com/vi/cn58kbyHgbs/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLC1GgFP1KHGYPmq2Jm5vPEGSVeAPA"
      },
      {
        "url": "https://www.youtube.com/watch?v=xB1C1xZZW4k",
        "title": "20. Backend Security: Everything You Need to Know",
        "thumbnail": "https://i.ytimg.com/vi/xB1C1xZZW4k/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLA_bG3YdXepaS8gKwUM8pWNjIyobQ"
      },
      {
        "url": "https://www.youtube.com/watch?v=H5FAxTBuNM8&pp=0gcJCfkLAYcqIYzv",
        "title": "DevOps from Zero to Hero: Build and Deploy a Production API",
        "thumbnail": "https://i.ytimg.com/vi/H5FAxTBuNM8/hqdefault.jpg?sqp=-oaymwErCNACELwBSFryq4qpAx0IARUAAIhCGAHYAQHiAQoIGBACGAY4AUABuALzGA==&rs=AOn4CLBVkTaQ3s5JRwMT1HpSOS2KPKHAZg"
      },
      {
        "url": "https://www.youtube.com/watch?v=MT7X17ZRo1U&pp=ugUEEgJlbg%3D%3D",
        "title": "17. User Authentication",
        "thumbnail": "https://i.ytimg.com/vi/MT7X17ZRo1U/hqdefault.jpg?sqp=-oaymwFFCNACELwBSFryq4qpAzcIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEogSShlMA-4AvMY&rs=AOn4CLDNc9MdUAFx_Kzu_mRqLXULYf-VqQ"
      }
    ],
    "transcript_language": [
      {
        "language": "English (auto-generated)",
        "auto_translate": true
      }
    ],
    "chapters": null,
    "transcription_language": null,
    "is_age_restricted": false,
    "channel_url_decoded": "https://www.youtube.com/@sriniously",
    "category": "People & Blogs",
    "audio_tracks": [
      {
        "audio_track_language_id": "ar",
        "audio_track_language": "Arabic"
      },
      {
        "audio_track_language_id": "de-DE",
        "audio_track_language": "German (DE)"
      },
      {
        "audio_track_language_id": "es-US",
        "audio_track_language": "Spanish (US)"
      },
      {
        "audio_track_language_id": "fr-FR",
        "audio_track_language": "French (FR)"
      },
      {
        "audio_track_language_id": "hi",
        "audio_track_language": "Hindi"
      },
      {
        "audio_track_language_id": "id",
        "audio_track_language": "Indonesian"
      },
      {
        "audio_track_language_id": "it",
        "audio_track_language": "Italian"
      },
      {
        "audio_track_language_id": "iw",
        "audio_track_language": "Hebrew"
      },
      {
        "audio_track_language_id": "ko",
        "audio_track_language": "Korean"
      },
      {
        "audio_track_language_id": "ml",
        "audio_track_language": "Malayalam"
      },
      {
        "audio_track_language_id": "nl-NL",
        "audio_track_language": "Dutch (NL)"
      },
      {
        "audio_track_language_id": "pt-BR",
        "audio_track_language": "Portuguese (BR)"
      },
      {
        "audio_track_language_id": "ta",
        "audio_track_language": "Tamil"
      },
      {
        "audio_track_language_id": "te",
        "audio_track_language": "Telugu"
      },
      {
        "audio_track_language_id": "en-US",
        "audio_track_language": "English (US) original"
      }
    ],
    "made_for_kids": false,
    "player_notification_text": null,
    "ai_content_label": true,
    "live_status": "not_live",
    "timestamp": "2026-08-14T10:05:19.789Z",
    "input": {
      "url": "https://www.youtube.com/watch?v=A95rliroC8Q",
      "country": "",
      "transcription_language": ""
    }
  },
  {
    "url": "https://www.youtube.com/watch?v=kEtGm75uBes&t=2536s",
    "title": "Build a Full Stack RAG System with React, Langchain & Node.js",
    "youtuber": "@notjustdev",
    "youtuber_md5": "22b02a77e45db13832ec986839e835cf",
    "video_url": "https://rr3---sn-nv0ui4gvou-hape.googlevideo.com/videoplayback?expire=1786723467&ei=K-h-asOoF43HybgPv-_Q2Ao&ip=rd5d4e20c9d2d13a5efe5cb14b9a4e406&id=o-AAElHNZD3Fb65PKQk_LgnQWAb_V8u-q2C0O3pMG0RORv&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=223&met=1786701867%2C&mh=N1&mm=31%2C29&mn=sn-nv0ui4gvou-hape%2Csn-vgqsrnzz&ms=au%2Crdu&mv=m&mvi=3&pl=23&rms=au%2Cau&initcwndbps=2907500&spc=KBGBciO9ZGRi89DeW0lmSDC48eA-Y_S5o8QZGSZaHEpzo1pvU5gcABsxz75orU2WTdw-Z4Yy&svpuc=1&ns=1F_0GaZorumSy0HDhEVFCt4X&sabr=1&rqh=1&mt=1786701416&fvip=3&keepalive=yes&fexp=51565115%2C51946838%2C51973818%2C52089683&c=WEB&n=D7g0o1GSt8wlI4mODU&sparams=expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Cspc%2Csvpuc%2Cns%2Csabr%2Crqh&sig=AE0s2JYwRQIhAPhvR7ILxjhIgh23bGL3XUziT-CFYbqYvp5BNrXHf3eTAiBDAgVsd7qVzWJaze_0Ov-SFQFjKfoRfmQogHpOSed9lQ%3D%3D&lsparams=cps%2Cmet%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRAIgNnyo1AIlpEDa2UAupkleq7noC2dv9VU7oylpuI4xvH4CICwBIyRV5Q8lPkphEaYGO0LqQD-EWmO4DQsyECearIQv",
    "video_length": 12712,
    "likes": 544,
    "views": 18732,
    "date_posted": "2025-03-22T06:26:40.000Z",
    "description": "✨ Want to scrape data like a pro? Get $15 in free credits here: https://brdta.com/notjustdev\n✨ Try Genezio today to simplify scaling and deploying your API. Sign up for free here: https://bit.ly/41LCDzh\n\n📚 Get the step-by-step guide: https://assets.notjust.dev/youtube-chat\n\nWant to chat with any YouTube video using AI? 🤖 In this tutorial, you’ll learn how to build a full-stack Retrieval-Augmented Generation (RAG) system that lets you ask questions about YouTube content and get accurate, AI-generated answers. You’ll learn how to scrape video transcripts using BrightData, process them with Langchain, and connect to powerful LLMs like OpenAI and Anthropic—all deployed with Genezio. 🤖 🚀\n\n❗️ React Native Mastery is the ONLY course you need to Master mobile development with React Native & Expo 🚀\nEnroll here: https://www.notjust.dev/react-native-mastery\n\n📝 This video includes a lot of tools and technologies, providing an excellent opportunity to learn:\n👉 How to scrape YouTube video transcripts using BrightData\n👉 How to build a NodeJS and Express backend for a RAG system\n👉 How to process YouTube transcripts and generate embeddings with Langchain\n👉 How to query OpenAI and Anthropic models for context-aware answers\n👉 How to store and retrieve embeddings from a PostgreSQL vector database\n👉 How to create a React web app to chat with YouTube videos in real time\n👉 How to deploy a full-stack AI app seamlessly using Genezio\n.. and MORE!\n\n💡 Have an idea for a future tutorial? Share it on our Idea Board: https://github.com/orgs/notJust-dev/discussions\n\n💬 Join the notJust Development gang and let's build together:\nTwitter: https://twitter.com/VadimNotJustDev\nInstagram: https://www.instagram.com/VadimNotJustDev\nFacebook: https://www.facebook.com/notjustdev\nLinkedIn: https://www.linkedin.com/in/vadimsavin\nDiscord: https://discord.gg/VpURUN2\n\n#notjustdev #langchain #react",
    "num_comments": 22,
    "subscribers": 131000,
    "video_id": "kEtGm75uBes",
    "channel_url": "https://www.youtube.com/@notjustdev",
    "preview_image": "https://i.ytimg.com/vi/kEtGm75uBes/maxresdefault.jpg?v=67dd6c05",
    "shortcode": "kEtGm75uBes",
    "verified": false,
    "handle_name": "notJust․dev",
    "avatar_img_channel": "https://yt3.ggpht.com/VdNMLGk6QNH3gRusX4H3drUDqTb0NxbQp9NLU7tOVY1U_Qy0ah8TK1NviXBwYyikhl89Zzg3=s48-c-k-c0x00ffffff-no-rj",
    "is_sponsored": false,
    "related_videos": null,
    "license": null,
    "viewport_frames": "1920x1080 / -",
    "current_optimal_res": "1280x720@30 / 1920x1080@60",
    "codecs": "avc1.64002a / mp4a.40.2",
    "color": "bt709",
    "quality": "hd1080",
    "quality_label": "1080p60",
    "post_type": "post",
    "youtuber_id": "UCYSa_YLoJokZAwHhlwJntIA",
    "transcript": "what's up Noz developers welcome back to\nanother live tutorial today we're going to have another AI agent tutorial and\nour AI tutorial that is going to help and teach you how to build an AI agent\nfrom scratch using langra as with an aspect of rag today we're going to learn\nmore about all of these terms what we mean and I'm so excited about everything\nthat is happening right now in the AI world like what's possible to build what\npowerful tools we have available at our fingertips and how easy it is to\nactually Implement them after we understand how they work and the goal of\nthese tutorials is to help you make sense of everything that is going on out\nthere and to give this ideas of what is possible so make sure to follow along\nthis tutorial by the end and I promise you that you're going to know more about\nAI agents and how to build them know more about rag system and how to build\nthem and by then you're actually going to have an system an AI agent with an\ninterface with backend deployed and accessible by\nanyone that can uh answer questions about YouTube videos so the project that\nwe're going to build today is the AI chat with YouTube videos and what do I\nmean by that let me give you a little context that one of the most powerful\napplications of llm nowadays is to build this\nsophisticated um question answering Bots that have knowledge about a very\nparticular area because we most probably all have already experienced uh general\npurpose llms uh such as the chbt let's say from open AI that is exceptionally\ngood at understanding human language and generating text answering questions\nor continuing uh text generation however the general purpose\nAI models they do not know very specific information so while it's a very good\ngeneralist when it comes to specializing in a very specific topic it's not very\ngood it doesn't have most up-to-date information out of a box um so for\nexample if we ask a question about a documentation or about like a document a\nlaw or something like that it can get a little bit lost however if we as\ndevelopers give the right information to the llm the llm can use that information\nto generate an accurate and upto-date anware which makes this system so\npowerful this system of injecting uh context into llm is called Rag and\nthat's what we are going to use today and in our project\nour system is going to get information is\ngoing to get a YouTube video we're going to do some magic there to scrape that\ntranscript of that YouTube video so we know what's being talked in that YouTube\nvideo and then our AI chat is going to be able to answer questions very\nspecific to that YouTube video such as what is the main topic of a podcast how\nmuch money did for example he invest in Beast games like very specific of what\nbeing discussed there and what's going to happen is our AI system is going to\ngo ahead and get the part that is most relevant to this question and based on\nthat part of the interview is going to generate an answer or for example it can\ntake an eight hour tutorial from our Channel and you can ask questions like\nwhat tools didim use there he's going to look for the video uh transcript is\ngoing to find the information there and is going to give you an answer or uh\nmaybe you can use it like I get an error did I miss anything and again it's going\nto use the brain power of an nlm with the context of a video to give you the\nright answer and this is actually how I came\nup to this idea I was thinking about building an agent that can answer\nquestions based on our videos for example you might be searching for um a\ntool and you want to know in which video we implemented you can use this agent to\nask and it's going to go and knowing all the information about our videos is\ngoing to answer where that is happening there are a lot of applications of this\nkind of powerful Bots uh from uh analyzing public data like on YouTube\nchatting with long TXS with long loss uh with blog posts with\npodcasts and much much much more so if we talked about rag let me\nquickly discuss more about that so what is rag rag is stands for retrieval\naugmented generation and in simple terms generation means the part of an llm that\ngenerates text you give it some text usually let's say a question and how it\nworks it generates what is the most probable next part of a text that comes\nafter that usually an answer for example retrieval augmented means that it first\nReves context that it needs and it augments it improves the generation part\nusing the information retrieved so in our case with YouTube it\nfirst will retrieve information about the video about the transcript and then\nusing that information is going to uh generate the\nanswer rag has usually two parts in it and the first part is in the pipeline is\na indexing pipeline this usually happens offline um not when\nthe user requests something but beforehand and that usually happens in\nfollowing steps first we have to load the data this can be documents this can\nbe HTML Json URLs PDFs we need to get the data that we uh want to work with\nafter we get the data we have to split it into manageable chunks because uh if\nwe have like thousands of uh characters into a document it's going to be harder\nto um there is a limit to how much context we can give it an llm and it\nwould be better to split it and then when we have a question only get the\nchunks the pieces of data that are relevant to that question after we split\nthe documents into small chunks what we do is we embed\nembeddings um in simple words means we take take a bunch of text we put it\nthrough a system and in the end we get an vector and a vector is basically an\narray of numbers array of numbers that represents\na vector uh in a very multi multi-dimensional space to think about a\nvector very simple one would be a two-dimensional Vector that is an arrow\npointing into One Direction and having this vector\nlater we can compare it with other vectors to know how similar they are\nthat's basically how similarity search in this system works we take a text we\ngenerate a vector which is a numerical representation of that text after that\nwe take a in The Next Step we're going to see how we find the\nsimilarity so after we generate this embeddings and again it's important to\nunderstand the concept of it it's not very important to understand how this is\nhappening because it's a matter of calling an AI model that is built for\ngenerating this embeddings so think about it as a function we give it text\nit gives us back an array of numbers which represents a\nvector having this Vector we need to store it somewhere and we need to store\nit in a database that can support querying based on Vector similarity\nbasically saying give me documents that are very similar to this document based\non these numbers after we have a store data there\nwe are ready for the next step the next step is retrieve and generate this\nusually happens when the user interacts with our system when it asks a question\nso the user asks a normal question in a very human readable language it can have\nmistakes and so on but llm is smart enough to embed it and based on the\nembedding of a question which is the same process as here we are finding the\ndocuments that are related to that question that are very similar to that question then we see which of these\ndocuments are the most relevant document to this question most relevant pieces of\ndo parts of our text relevant to the question we retrieve it from the\ndatabase and we put it as context in the prompt then this prompt we send it to a\nnormal llm such as open AI um models and then we get an answer back but the\nanswer has the context so it's very specific to the data that we\ngave let me know if that is um that is clear um but we're going to understand\nit and I'm going to explain it again and again as we Implement all of these steps\nlet's talk a little bit about the architecture of application that we're\ngoing to build today so first we're going to have a chat interface we're\ngoing to build that with react the chat interface uh is going\nto interact with our AI agent which is going to be um in in our backend we're\ngoing to build our back end with no GS I'm a JavaScript developer so\nI must rather I I feel more comfortable building with JavaScript but if you're\npython developer langra is also available for Python and I know a lot of\npeople prefer python in this in this situations over JavaScript but I think\nit's perfectly fine with GS as well so the backend is in our case is\ngoing to be an API that is going to contain multiple Parts one of them is\ngoing to be our AI agent and the AI agent in this case like is a simple\nabstraction on top of an llm the large language model provided by either\nanthropic or open Ai and these uh providers like entropic\nand open AI they are very uh interchangeable so use the one that you\nuh feel best um in this situation we're going to\nhave a simple chat chatting application such as CH that we can ask a question it\ncan answer us back nothing more than that it not doesn't yet have context\nabout YouTube videos but we need our chat interface to know and to talk about\nthe YouTube videos that we want to talk about for that we're going to have to\nindex our YouTube videos to build this rag system so if we look at the uh flow\nwe have to load the data first how we're going to load the data\nwell the data we're going to get it from YouTube uh and we're going to do that\nusing the web scraper provided by bright data if you don't know about bright data\nthis is the best uh tool to scrape and get access to public data uh on the\ninternet uh they run on a very powerful proxy Network and are implementing a lot\nof features of unblocking the web for you like solving capturas or rotating\nIPS and basically you can think about like okay I need data I don't know and I\ndon't want to care about how to get it just going to go on bright data and\nthere you're most probably will find an API pre-build for scraping this data for\nyou if not you can use the scraping browser and implement this yourself and\nin the world of AI with bright data you can give basically access to any data on\nthe web to your AI because the power of our AI models is depends on the power of\nthe data that we provide or give it access to so with combining bright data\nwith AI models I think this is a very good combination and Powerful one to\nthat unlocks you so much possibilities so we're going to use Bri\ndata to scrape YouTube videos specifically the transcriptions the\ncaptions and then we're going to need to uh if we looking back into this one we\nneed to split and embed it for that we're going to use an l M such as open\nAI that is uh and specifically an embedding model not a generation model\nembedding means we give you text you give me back a vector after we have a\nvector we need to store it somewhere we will store it in a vector database so it\nshould be a database that can do these queries on vectors like similarity\nqueries and pogress has a PG vector that is an extension uh allowing to do this\nkind of uh similarity search on postgress data so we're going to do that\nas well we're going to create a database we're going to store the data\nthere and that is the first step done for the next step when the user ask a\nquestion we need to retrieve this data and generate it so that's where our AI\nagent we're going to have to give it access to our vector database to\nretrieve the information that it needs to generate the answer so finally we're going to deploy\neverything to jio both the front end and our back end for the AI agent and the\nAPI and if you don't know about genesio this is the best way to deploy web\napplications they support a lot of Frameworks both front end and backend\nand that's what I like about it because I can use jio to deploy both the front\nend and the back end of our application and we're going to have it everything up\nand running very very fast and I would like to say thank you to janio and to\nBri data for making this video possible very excited uh if you are also excited\nI think we can get started let's roll the [Music] intro all all right\nso I want to mention that the step-by-step guide as usually is in the\nlink in the description below so if you go ahead on the under the video where is\nit uh and open it here you're going to see the guide so go ahead open it up uh\ngo to site leave your name email and you're going to\nreceive access to the uh to the guide to the notion guide so\nlet me copy the URL as well to open it up here with\nyou and here you're going to have like more step by step and I left here a\nlittle bit more resources where you can learn\nmore um so we're going to use a lot the blog from linkchain because we're going\nto use l chain to build our AI agent and we have here a two-part block log\nhowever not everything from here is super applicable to our case so I would\nrecommend you read here to know more or follow what we are going to do and we're\ngoing to do everything step by step for that let's go ahead and open a terminal\nand get started I cannot wait to to get started I'm going to zoom in here let's\nnavigate to our project YouTube 0320 like this and let's create a\ndirectory let's call it chat with YouTube\nuh let's call it AI chat with YouTube let's go ahead and open this\nfolder in our editor of choice I'm going to open it with cursor you can open it\nwith Visual Studio code uh or any other editor of your choice in\nmy case using cursor is going to speed up a little bit the the development\nprocess because nowadays I feel more and more often using um AI Co code\ngeneration to to speed up my my process today I'm going to use it only in\nspecific cases where it's going to save us time but when it comes to learning\nthe AI agent we're going to try to write everything\nourself um so being in this folder in this project we're going to create uh\nfirst one folder called server and this folder I open up\nterminal and did mkd server where you can simply do new folder here and let's\ngo ahead and do CD server in our terminal and initialize our noj project\nI'm going to do that with npm in need- Y and in our server we have package.json\nwhile we are here maybe we can even do here type\nmodule um\nto be able to use like normal import statements and for now that's it in a\nsecond we're going to install dependencies here but for now let's go\nahead and simply create the agent. GS here because the first step in our case\nis is going to build our agent here let's just do console log\nhello world in our package.json\nH maybe I don't need it I will just go ahead in the\nterminal inside being inside the server I'm going to do\nnode agent. GS and if I do that we're going to see Hello World so that's how\nwe're going going to start initially testing it we're going to Simply execute\nthis agent file later we're going to put it inside um behind an API uh so we can\nfetch and integrate it from the client side from the front\nend perfect let's go ahead and um there is also a blog post which I did two\nweeks ago around building AI agents with lra that one is really a step by step uh\nimplementation of how to build this kind of agents and I will open it up because\nthere I showed you how to get started with that what I want to do is I want to\nFirst install these dependencies I will install Leng chain L graph length chain\nDas core and L chain entropic because I'm going to use entropic for the llm\nfor the completion model and then also Zod we're going to see why we need Zod\nin a moment so let's copy this command from here I'm by the way also going to\nadd it uh here in the steps actually it's you can go in the steps and take it\nfrom there and being inside the server here\nlet's go ahead and install L chain langra where is it\nlangra and Zod now we need to create thatv file\nwhere we're going to write the um how is it called we need the environment variable\nwith entropic key to get the entropic key go ahead on entopic anthropic doc go ahead and uh do build with CLA do\nlearn more start building and in your uh after signing in in your account you're\ngoing to be able to generate an API Key by the way entropic is not the only way\nto do that you can easily integrate with open AI as well however I tried with\nopen Ai and I didn't really like the performance like how it behaved there so\nI don't know maybe I didn't try the right model from open AI but we're still\ngoing to use open AI in the next step for something\nelse so in the embedding what we need to do in the EnV we need to provide here\nthe API key actually let me go ahead and uh entropic console. entropic to generate a new key that we\ncan easily remove later uh I need the de how is it\ncalled console entropic do don't remember the the\naccount that I used okay here it is so what I'm going\nto do is I'm going to go into the API keys I'm going to click read key and I'm\ngoing to see say here chat with YouTube Key let's do add I'm going to\ncopy it I'm going to also delete it later don't worry and here let's put it\ninto an an Tropic come on\nun Tropic API key and let's put the API key here let's also go ahead and add a new file\nhere dogit\nignore with without dasg ignore and add the. EnV file V because\nwe don't want to commit the uh private key of our models to our git while we're\nve we can also put the node modules perfect now that we have\nentropic key here uh we are going going to have access to it through\nprocess.env but what we're going to do is we are going to use it to create the the entropic chat\nclient so in our agent what we need is first we need to do to import chat entropic from L chain\nentropic then we need to say hey our llm is going\nto be a new chat entropic where you can also specify here\nthe model that you want to use for example 3.5 like this or maybe you can\neven do latest or now we can do 3.7 if we\nwant you can also provide here the API key but if you don't provide B\ninjected as entropic aior key with this name it's going to automatically take it\nfrom there so we're going to see like if it it if it has\nit next we will create a react agent react not from react GS that we\nuse on to build uh interfaces uh it's from uh it stands for\nuh reason and act so it's going to be an agent that can\nreason and use tools for us uh we just give it like what's possible and it's\ngoing to decide how to to uh execute everything to provide the the answer\nwe're going to see in a second like what I mean by that to create one we're going\nto import uh create\nagent from L chair uh L chain core let me see\nwhere from length chain\nslash length graph slash prebuild if I'm not mistaken now we can say that hey our\nagent is going to be this agent and an agent needs first of all\nthe llm the llm which is going to be how is going to complete stuff but it also\nneeds let's set of tools in our casee we do not have tools yet so we're going to\ngive an empty array in this case this agent is really dump it's a simple llm\nbut later we can add tools so it can do more stuff let's go ahead and uh test it\nout by saying Hey I want to do an invocation of this agent with was the\ncapital of the Moon that's very interesting question let's see the\nresult and to test it out I'm going to to Simply uh execute this agent. GS if I\ndo node agent. GS we're going to see an error seeing\nthat uh What uh the create agent right at Lang chain d l\ngraph D prebuild isn't it from there oh create react agent I forgot that so\nyeah create react agent so in this case it's not input but it's what uh I think\nit should be messages right messages let's see how to invoke it\nproperly what is the capital of a moon I don't\nknow it says uh it has a red warning here but I think it's going to work\nmaybe we'll see we'll see ah no I don't think it will so it's actually should\nbe we need to give it an array of messages and one message will be will\nhave role user and content what is the capital of a moon very similar to how um\na chat interface will look like you have an array of messages the last one is\nfrom the user and the result is going to contain the list of messages and what we\nare interested in is actually the the last message but let's see if it will\nwork like this if I do node agent what we see is the API key entropic API key\nnot found that's because even though we set it up here in the EnV when we\nexecuted node agent. GS uh we should also provide the\nEnV file equal EnV so we need to load the environments from that file before\nexecuting the file the agent and just like that we have the answer we have\nmessages we have a human message and we have an AI\nmessage this is ID content the moon doesn't have a capital city because it\ndoesn't have permanent and so on so cool that's\nbasically uh our list of messages so to get the last one usually what we do is\nwe say results at minus one to take the last message from that array and then we\nlook at the message do content and if I execute it again we should see just the\nanswer no oh it's results. messages dot\ncontent so results. messages there's the array we take the last one and we\ndisplay the content if I run the file we see a simple answer like this perfect let me know what do you\nthink we should do next do we connect this simple llm because at the moment\nthis is a simple llm like like we called it agent and we used like an agent but\nthis doesn't make it a true agent why because an agent needs a set of\ntools and the agent is going to receive an input for example a prompt and it's\ngoing to first create a plan for itself by calling different tools by\ngovering different data it's going to create a plan and it will do that over\nand over again until the llm is happy and said said like okay this is answer\nthis is a good answer and it's going to answer it\nso for that to happen it needs list access to tools we're going to do that\nlater and one of the tools is going to be to retrieve information about like\nvideos but for now our agent is a simple llm we can give it a question it will\ngive us an answer using the cloud 3.7 from anthropic nothing too fancy now\nthe question is do you want us to build first the rug system here in a server\nenvironment and test it with calling this function or do you want us to build\nthe interface first and connect it with our server so we can interact from the\nfrom the client side from the interface what first maybe maybe maybe I know but\nlet's see what do you think uh and by the way hello everyone who is\njoining us live how are you doing guys I'm using L chain in production want to\ntry yam index I haven't tried yam index yet uh what's the benefit of uh of it\nover L chain or what's the difference I'm also learning a lot like\nabout this AI lately and I'm so excited what what the possibilities\nare hello um Joshy hello roio hello blender music how are you guys\nuh Hey man you're doing a great job just finished your react na8 hour videos what\na Content thank you so much thank you I appreciate\nit is it possible to persist data between each agent tool calls yes it's\npossible and uh between uh agent tool calls yes yes and we are going to do it\nwe're going to persist the the history of the of the chat so that you you can\nask ask followup questions okay let me see\num so I think we go rag first I also believe so because rag is the topic the\nthe Hye part of this video and I want to explain it well because client side um\nis just the interface so first we're going to interact it with this like this\nlater we're going to put it into an API and connect it to the client side so\nwe're going to do both of them but first let's go ahead and build the the\nrag system oky dokie\nso again um uh if you go into the where is\nit well first of all uh in our presentation if we look at the steps the\nfirst one is going to be loading again our plan for loading the data was to use\nbright data to scrape the transcript of YouTube videos from YouTube let's go\nahead and manually do that together with PR data and uh get some very specific\ndata of how this is going to look in the next step for that uh and by the way\nthis part of the video of scraping is sponsoring by Bri data so thank you very\nmuch our partners from Bri data for um enabling us to build such amazing\napplications and to unlock any data on the web so go to follow the link in the\ndescription below or go to bata.com com uh and if you go to your\ndashboard we're going to use their web data U where is\nit the web scrapers so go ahead open web scrapers\nand if we go into the web scraper Library these are pre-built webs\nscrapers that give you access to data in a similar way as you would fetch an API\nbut actually that data is uh scraped in real time from the websites in a very\nsecure and scalable way so you can you can scale your\nproject without any limitations there are a lot of sources data sources like\nLinkedIn Instagram Facebook uh and so on uh even like Ecommerce like from Amazon\nand so on what I'm interested in is YouTube data so so if I search Here\nYouTube we're going to see that there are actually eight scrapers for YouTube\nand the one that I need is uh video posts by URL so let's go ahead and click\non video posts by URL there is also a link in our guide scraper API let's do\nnext in the documentation of this API we say that we just give a YouTube url we\ncan give also a country where to look from\nand in as a response we are going to get the data about that YouTube such as the\ntitle the video URL likes views date posted description\nand so on but what's cool is that we're also going to um scrape the transcript\nthe transcript both in raw format like the whole transcript like this and also\nif you scroll down below the transcript formatted with a\nduration similar to how it appears on the\nvideo so we're going to use this transcript from Bri data in our system\nto provide information to our rag system to be able to answer questions about\nthat video giving information to the llm like what's happening in that video\nlet's go ahead in the API request Builder and see how we would interact\nwith Bri data to give us this data for example we're going to give inputs and\nwe can do batch request so we can do multiple inputs per\nrequest and here it's a simple URL of a YouTube video for example uh let me do\ntwo YouTube videos that I'm interested in I'm going to do one short one and one\na bit bigger let's do where is it I'm going to do a short video to be\nable to to see like what's happening and later I'm going to also do a bigger one\ngive me one second or maybe we should actually do my\nvideo like some some some of my videos yeah let's do\nthat for example h\nwhich one I'm going to do a live stream that one is going to be like huge but maybe yeah we're we're going to\ntest it with a huge video as well let me just grab for example this one so I'm going to give a 7\nMinutes video from Formula 1 about today's Sprint col\nification I haven't watched it yet because I'm preparing but I'm very\ninterested I'm going to go into the Bri data API where it is here and the first\ninput is going to be this one and the second one is going to be a longer video\nlike a 4our videos from our Channel about building with react native and\nreanimated let's copy this URL as well send it as the second\none and what do we see here are some configurations to include errors if they\nhappen we can provide a URL where to send\nnotifications and I'm going to exclude this delivery to external\nstorages if I do that and copy this Cur command and go into a terminal and open it up like this and\npaste the command here also make sure to add the API token\nhere from your account like go ahead and first create an API token and added here\nand it's going to automatically be added to the command what we're going to see\nback is a snapshot ID a snapshot ID basically means that a job for scraping\nthe data started usually scraping data takes some time\nit's not instant because it has to actually simulate opening a browser and\nnavigating to that page and interacting like a user would do so if we look in\nthe logs here we see that a new job with this snapshot that we just copy from the\nconsole log we see it here what we can do is we can click download to Json and\nwe're going to have a Json file let me take the Json file\nand bring it in our server\nas come on I'm going to bring it here and I'm\ngoing to call it\ndata let's call itgs to easier import it I'm going to click save to format it and\nI'm going to add at the top export default so what we see inde the is an\narray with two objects the first one and then the second one we see that this is\nthe title of the video Sprint qualifying we see this is the transcript and then we see if we scroll\ndown through this transcript formatted we're going going to see the second\nvideo as well oh come\non the second video is this one and the transcript is what'sapp not\njust developers so now that we have this data\nlater we're going to automate how we uh start and how we get this data for now\nlet's just import it from data.js let's import it in our agent GS and say hey\nimport data from data GS and let's\nsay video one equal to data at position zero or video yeah let's do video\none because this is an array we're going to look at the first\nvideo Perfect here is the data The Next Step that we have to\ndo is we loaded the data now we have to split it let me uh splitting we can do that in a\nvery ourself by simply looking at the transcript of that video and splitting\nit into chunks of 1,000 characters however L chain provides some pre-build\nSplitters that are a little bit more sophisticated that is improving how this\nsplitting Works to not lose some context one of these Splitters is called re\nrecursive character text Splitter from length chain\ntext is it at L chain isn't it like this uh like this and probably I need to\ninstall it right npm install yes let's install length\nchain SL text splitters so here we're going to\ndo split the video into chunks for that we're going to have to define a splitter\nusing new recursive character splitter and\nprovide here some options as we can see the default ones that are recommended\nhere for me is chunk size and chunk overlap so what does it mean chunk size\nmeans how large should the chunks of data be here we say it should be 1,000\ncharacters and chck overlap is going to Simply uh repeat the last 200 characters\nfrom this Chunk in the next one as well in this way if there is important\ncontext between these splits we're not going to lose it so even vaa is going to\nlead to a little bit more data because it repeats 200 characters at the\nbeginning at end it's going to allow to give enough context and not lose it now um splitter like this at yeah uh is\ngoing to work oh wait splitter by calling split\nuh not text we can do split text as well yeah I think we can do split text but we should actually work a\nbetter way would be to work with documents um so we're going to call\nsplit documents for that we need to have a\nlist of documents let's call them docs I'm going to Define them a little\nbit here to the top saying that the docs is going to be an\narray an array where we create one of these documents with our video one\nlet's say that the document needs page content and the page content is what is\ninside that document inside that document we're going to use the video\none. transcript which if we look into the data video one is this object and\nthe transcript is this long\ntext so this is going to be the page content the new document that document\nshould be imported from L chain core\ndocuments now if we take the documents and split the documents here we have\nchunks let's see what are these chunks console.log chunks if I open it up and\nrun the do node agent we're going to see\nwhat entropic key not found yeah because we need to\ndo withv file so what we see here is that this chunks is an array with bunch\nof texts the first 1,000 characters then\nthe next one and these all are documents documents documents documents if we look\nat the last part I'm going to even copy it and search for it we're going to see\nthat it's both here and both here because the text overlaps and that works\nwith v end as well if I'm going to copy it it's going to be both here and both\nhere because the last part might be important information for this chunk but\nit also can be important information for for this\nchunk now we see that these uh documents also have this metadata this is a great\nplace to write additional data about those documents so if I look into where\nwe Define this document here we can def find the metadata here as well and one\nof the important metadata Parts here is what video is this content transcripts\nabout because later we're going to have a lot of videos so we need to know like\nwhat where is it coming from we can call it video ID and say that the video ID is\ncoming from video one. uh video ID because if we look into the data there\nis a video ID property here now if I will execute this one again\nwe're going to see that in metadata we have video ID later we can also filter\nonly the documents that are related to this\nvideo perfect so the splitting Parts is done\nthe next step is embedding and embedding\nif we look into the length chain here um this is what L graph I'm going to\nfind this one uh as you can see for the chat model\nbasically the model that will generate text we can use these kind of available\nmodels uh grop open Ai entropic and so on and actually more but for the\nembedding we need to use a model that is specific for\nembeddings uh as I see entropic doesn't have an embedding model so that's why\nit's not here for that we can use open AI you can see that open AI embeddings you're going to see that that\nmaybe on their site or the documentation is that they have this\nkind of models where you give as we input some text and it get back the\nembedding as an array of numbers the vector of that\ntext so let's go ahead and say that we are going to\nuse um open AI as our embedding model so let's go ahead and first install length\nchain - open AI in our application let's do make sure\nyou are inside the server and install the open\nAi and what we're going to need to do is we're going to import the first we need\nthe open AI key inside ourv go ahead sign up for open AI get to\na key and I'm going to get it here\nhere let me do it like this\nand I added it to the EnV now we are ready to use open AI what\nwe need is to import open AI embeddings in our agent open AI\nembeddings from L chain open AI after\nsplitting what we are going to do let's do here embed chunks to embed chunks we\nneed the embeddings using the new create or how is it open Ai embeddings and you can also specify the\nmodel here I'm pretty sure is like uh default\none if you don't specify but know that you can specify what exact model we're\ngoing to use the embedding free large that is going to produce a specific like\nthe model uh produces a specific amount of\num the size of a vector so a large model not mistaken should be around I don't\nknow 2,000 or something like that um dimensions of that Vector so the more\nDimensions the more nuances it can detect in the text but at the same time it's more data\nto store larger it's more consuming okay so the thing is that now\nthat we have this model that can generate embeddings we need a store\nsomewhere to store that embedding that data with\nembeddings what we can do if we look in the documentation we need to pick a\nvector store we need a storage solution that can store these vectors not only\nthey can store it but they can optimally query based on\nsimilarity I'm going to start with memory because this is going to be the\neasiest one it simply stores them in memory and to get started that's totally\nfine for us let's go ahead and import memory Vector store from Vector store\nmemory at the top\num and let's create the vector store where we have our embeddings so\nthis is the vector store new memory Vector store and we send this embedding model finally finally what we need to do give me one\nsecond is to um Let me let me think like how to to\nintroduce this one slowly okay so what we need to do is say hey\nawait Vector store add documents and we're going to add the chunks that we\ngenerated here as simple as that um how to visualize it that's another\nquestion because yeah let's try right now\nlike vector store let's try to Simply run our\nproject with no DMV file we see a problem package Json\nreader cannot find L chain input imported I think uh we also need to\ninstall length chain like this without ad npmi length chain okay perfect let's now try to\ninvoke the agent again and we don't see any errors that\nmeans that everything went fine uh which chunks should be should have been\nembedded and wrote to the database but we do not have like we do not see it\nlike how can we visualize what's happening there\nwell that's because we have simply done the first step of indexing loading the\ndata splitting generating embeddings and storing the data the next part is the\nretrieving and generating let's go ahead and see how we can\nretrieve documents from our database that are similar to a question to do\nthat let's go ahead and say here uh\nretrieve the most relevant chunks so what we are going to do is\nwe're going to say a docs equal a wait Vector store we're going to work with\nthis Vector store we're going to do a similarity\nsearch a similarity search uh because we index the table\nthe the data from qualifying let's do what season is this\nSprint in I'm going to ask send a\nquestion relative similar to the context of a\nvideo and I'm going to do a similarity search meaning that I'm going to find\nthe chunks that are more similar to this question so let's see what is going to\nbe the answer uh dogs we already have it right\nso retrieved docs let's do it like this and we say\ngive me five docs if I run the agent\nagain what we're going to see\nis the documents where at the top is the most\nmost similar one I was expecting to see also the actual\nsimilarity because here how do I prove you that it's\nworking what if I something from the end [Music] what was the finish time of Norris uh and I'm going to select\none and before that I'm going to console log the\nchunks and here I'm going to console log this one but I'm also going to have like so that we see let's go ahead and\ntry to run it again initially the documents are in\nchronological order from the beginning uh the first one is personal\nbest through the sector and so one and at the end we do a similarity\nsearch for for the question what is the Norris end time and we see that here\nit's the document that is most related to the the the finish time of Norris so\nwe can use this text to try to answer that question by move putting it through\nan llm uh again this is the similarity\nsearch uh let me see if I can actually get query filter call backs yeah it doesn't give us the exact like\nuh similarity value but that's good it at least does\nthe similarity search so what can we do\nhere now that we can having a query a question if we can\nfind similar part similar transcripts from the video we can use\nthem put them through uh the llm here in the agent so that it's going to use it\nto create the answer for example if my my question here is going to be what was\nthe finished time of Norris it's not going to be able to to\ngive me a proper result uh answer because this llm the agent does\nnot yet have access to our Vector database or not provide the information\nI have so let's go ahead and build a\ntool that can use the vector store to retrieve the\nright information building a tool is also\ngreatly documented and explained in our previous tutorial build and deploy your\nfirst AI agent with langra um yeah this is the tool so what we need\nto do is import this tool at the top let's import the tool\nand we are going to create it maybe here\nretrieval tool const\nretrieve tool is equal to Tool and we create it like this we're\ngoing to have an async and it should return\nsomething a tool has two two parameters the first\none is the actual function that is going to run the second one is going to be\nsome metadata about the to Tool let's call give it a name retrieve and we need\nto also give it a description description is very important because\nthat's how the llm will know what is this tool supposed to do and when should\nit be used uh here retrieve most relevant uh\nrelevant chunks of text from the\ntranscript of a YouTube video something like\nthat it's also important to provide here a\nschema a schema we are going to Define it with\nZod so let's go at the top and import Z from\nZod and Zod is a tool that can create help us create schemas of how object\nshould look like and a tool needs a schema so that the llm knows what inputs\nwhat data to send there let's say that the schema is going to be an object and there will be a\nquery and the query is going to be a string this query now that we added it\nhere is going to be accessible through the tool execution function so we can\nhave query and here we can say hey console\nconsole oh come on console.log retrieve dogs for the query\nconsole log query I'm not going to do a similarity search yet let's just return\nan empty string noris was\nfirst finishing in uh 33 seconds which is impossible but\nit's a way for us to test if this tool was invoked or\nnot now if we take this tool and we give it to our agent inside the tools\nhere the agent will know that hey I have a tool that has this description it can\nretrieve the most relevant chunks of text from the video transcript it will\nsay that it's a question that might benefit from this information it's going\nto look at the schema and it's going to create a query and it's going to call\nthis tool then is going to get back result and we'll analyze and see what to\ndo next let's go ahead and see what actually is happening now I'm going to\nmaybe comment out the logs that we did before and I'm going to invoke our agent that was bad so what do we see based on the\ntranscript information I found noris finished in 33 seconds and was first\nplace that's exactly what we kind of said like it's not the right information\nbut where is it our question to our agent was what\nwas the finish time of Norris you see this is what we are\nasking then LM analyze this question and is invoking the retrieve tool and in the\nretrieve tool we are doing here console log query the query is already different\nbecause the llm was smart enough to change it in a way to get the data that\nit needs so it simply changed it to noris finished\ntime that's what an agent that's how an agent improves a rag\nsystem because the question is can you build an rag system without an agent\ninvance is totally yes you can build a normal\num uh flow AI flow for an Rec system without this agent inside it's simply\ndoing it step by step in a sequence first get data when generate embeddings\nthen get similarities then create the prompt and then send it to the llm a lot\nof things can be done manually and in sequence but having an llm here we see\nthe first benefit is that the question that we ask is going to\nactually be transformed to something that is going to make a lot more sense\nfor the AI to get the data and we see that we faked some data\nhere so in the retrieval tool we just said no resource first and finish in 33\nseconds and then having this information llm generated the final answer that we\nsee here in their response perfect but let's go ahead and\nhaving this query let's do this retrieval of\ndocs because we have a query we have a vector store we can use the query inside a similarity search\nwe can search how many chunks are do you think would be Rel\nlet's do three chunks maybe it's going to to be in three different places at\nthe same time the llm can call this over and over again for to get all the\nresponse so F3 or maybe F5 probably is going to be enough so now that we\nretrieve the docks um let's put the them in a Ser alized\ndogs meaning let's merge them together and what I'm going to do is I'm going to\ndo retrieve dock so for every doc\nlet's return I don't know content doc. page content do Doc Page content and at the\nend I'm going to put up dashn to say that it's the end or maybe I'll simply do let's let's\nsimplify it so I'm going to map for the documents\nI'm going to leave an array of Simply the content and I'm going to do a DOT\njoin with a dashn basically what I'm doing here is\nI'm taking five or three docs that we get and put them in one single text\nand I can take the serialized docs and return it\nhere uh to back to the llm now if I'm going to go ahead and execute the same\nquery again it's supposed to base its answer from the transcript that we\nactually fetched so this is the query that our\ntool received and we see based on the information retrieve from the video\ntranscript L is finish in six position in what appears to be a Sprint\nqualifying session the transcript mentions Hamilton versus upb cler\nRussell Norris in six we listening the order of drivers so you see it generated\nan answer based on the transcript so that's in a way our whole rag AI agent\ncomplete uh if we look at this we started with indexing first and now we\nhave this retrieval and generation having a question from a\nuser we provide a tool that can retrieve relevant information from\ntranscripts from our Vector database and then using an llm like entropic we are\ngenerating the answer here perfect now let me go ahead um\nand initialize a git so you're going to have access\nbecause this is the base but we are just getting started guys let's do get add\ngit commit uh\nbasic AI agent with rag um what's happening let me check the the live chat\nif you have any questions feel free to to ask them I'm going to stop from time\nto time to answer them I'm already building a project like\nthis amazing I had not started to do the video file pipeline yet so this is\nperfect this is a video file uh we are not working with video files we're\nworking with transcripts of the videos Sprint but you said spring not sure\nwhen oh it uses transcript that's how my project currently works yeah perfect\nwhat is rag rag as I was explaining earlier is\nso we have an llm an llm is great at generating text that's how it answers\nquestions you give it some text which can be a question and it tries to\npredict what should be the next part of a text meaning an answer it's very good\nat understanding language and at predicting what comes next and it's very\ngood at general information but it's not very good at very specific information\nthat either my not be public or it can be information that is super up to date\nlike what is today's we in AI llm will not have that\ninformation so what we are doing is we are giving AI access to a data source\nthat we can uh index on the similarity based on\na search term for example you have a documentation\nwebsite and you want to build a chatbot that users can write how to initialize a\nnew project the chatbot will first look through all the the documentation pages\nand will find the documentation pages that are more relevant to the question\nhow to initialize a project it might find two to three very relevant\ndocumentations it's going to use the information from V it's going to put it\nthrough the llm back saying hey this is what user is asking this is what\ndocumentations we have provide an answer to that question so this part of\ninjecting this data retrieving the data is the what makes it a rag\nsystem and allows it to be powerful in order to know like more data more\nrelevant data that you that you might need for specific use cases so llm we access to additional data have you figure out how to prompt\ncash how to prompt cash with transcripts in this setup what do you mean by that\nprompt prompt C cash let me know okay so we have our agent that\nwhere is it at current is doing a lot of\nstuff it's loading data from from our dam data there it's splitting it it's uh\nadding it to a vector database by embedding so a lot of things are\nhappening here behind the scene behind this line documents it's not simply\ninserting it to the database but it's first generating these embeddings using\nthe open AI model uh because having them inside a vector\nstore we can later retrieve them based on a similarity search basically hey\nhaving this text what is the most similar document for for for that text\nand similar in in terms of context so we build a tool and we build\nan agent we give that agent V tool that can retrieve documents perfect\nin The Next Step we're going to clean it up a bit and start thinking about like\nhow to move it closer to a production R application and system that that can run\non autopilot with multiple um with multiple videos with a\nproper database because right now we are using the memory Vector store in memory\nVector store storing this data in memory and as soon as I stop the the server\nit's lost so for AI there is prom caching where\nthe llm will cache your input so it can be can be reused so like with Claude\nyour cached input is like if the input is $1 the cached input will\nbe 115 but then you send the same thing again into cash so the input is like 20 cents yeah not sure not sure how this is\ngoing to work here I would have to look into that okayy dokie okay uh one second guys let me think about\nsomething um next let me show you a small problem\nand fix it together with you for example we are asking the first question let's\ndo it like this uh console log q1 is going to be this one and what if\nwe go ahead and ask the question two which is going to\nbe what is the finish time of very stop and I don't know finish\ntime or position or no let's do it in another way let's do what about ver\nstopen and here what was the uh finish position and time what I'm trying to do\nhere and let's do results two and here results two is I'm trying to simulate\nasking a follow-up question a followup question might not have all the context\nI mean a good chat AI agent will REM will understand that a question like\nthis what about stopen is not is is connected with a previous question\nso it should be something like finish position over stoen in order for that to\nhappen our agent should have short-term memory knowing uh or actually long-term\nmemory uh having context about like previous messages in the Fred because if\nI do that right now if I'm not mistaken uh let me do CD ser server let's do\nnode and invoke it it should answer correctly the first the question one\nwhat is the finished position it failed to actually invoke\nthe tool there and in the cute question two about your\nstomping why did it ask about Norris wait a second that's a bit weird because when I\nasked about ver St and it started doing about noris\nuh oh oh oh oh oh oh oh because I'm stupid let's do what about we're\nstopping here I left literally the same question based on video transcript let's try again so for this question it invokes the tool\nit asks for noris finish time it doesn't like the response it\ninvokes it again nor is final time position oh no no no it understand that\nit this question finish position and time it split automatically in two\nrequests one is noris finish time and another one noris final time position\nresult amazing and then by invoking by by retrieving two\nsets of data it was able to say that yeah there is no specific time\nthere in numerical format and here what about verstappen\nand what it says I'd be happy to help you find information about m versten\nhowever I need to search for YouTube video transfer for could you please\nclarify what specific aspect about ma Sten you're interested in so here we\nunderstand that when we asked second time a follow-up question what about\nresten it did not connect it with a first question and he did not understand\nthat we mean like finish position in time it's not clear here it's for us\nit's clear that the AI doesn't connect the two questions together that it's the\nsame interaction for that to happen we need to provide here to the agent a\nlong-term memory a checkpoint so again in the previous\ntutorial I have here adding memory to our agent and we can do that by\nimporting memory from linkchain L graph at the top\nand somewhere here where we create the agent we can say a memory saver and\nwe're going to give it here as if I'm not mistaken is check\npointer memory saver check pointer memory saver or if you want to\nsave on some characters you can call it here\ncheckpoint and remove a duplicated because it's the same name now because\nit has a checkpoint we are not going to be able to invoke it like this and if we\ndo if I'm not mistaken we're going to have an error saying that now you have a\ncheckpoint we need to provide them um a configuration with a Fred ID so using a\nFred ID we're going to know like what other previous messages to connect it\nwith and that is going to happen when we call agent.\ninvoke uh after the whole invocation we are going to have here a conf\nconfigurable options with configurable and here we're going to have Fred ID\nlet's say like I don't know Fred number one I'm going to take this options and\nI'm going to add it to the second invocation as well that way connecting\nthem together and pay attention where I am adding them this is actually after\nthe object that has a messages it's not besides it so it's two different objects\nnow if I'm going to send the same request here what I expect is that the\nsecond question will understand that it's a follow up for the first one so it\nwill understand that I'm asking about finish time and position for where\nstoping and we see that indeed it understood so it's doing a search query\nin our tool forward stop and finish time and position results uh finished second place right\nbehind Lou Hamilton amazing so that's uh not amazing that he finished second uh\nnot a big fan but amazing that it's working so just by simply adding this\ncheckpoint that's what we managed to do adding like more configuration here um another thing that we can do\nhere uh when we invoke in the configurable we can send more\nmetadata things like let's say the video ID that we are querying for video uncore\nID is going to be equal to let's go into the data and say that we are working\nwith with this video ID the first one Sprint\nqualifying we can take this video ID and in the configure we say that in this\nthread hey we are talking about this video again it depends on how you want\nto uh architect the the experience but if you want one thread to be specific to\none video that would be a good configuration later we can think about\nlike how maybe we can send a channel ID here or we can let the AI agent\nunderstand magically how what video we are talking about but this is a good way\nto send data so I'm going to send it through configurable here I will remove\na second one because we we had it just for testing\nthing and I'm going to take this video ID and what where we going to receive it\nI need to receive it somehow here in the retrieve tool to receive it in the\nretrieve tool this is the input of the\ntool but here we get the options of the invocation and we can go ahead and get\naccess to the Fred ID where in this case I need the video uncore\nID so if I do here uh\nquery console log video ID let's see if in our tool we get access to the video\nID from our invocation if I call this one here we see that ID here it's still going to work the same\nbecause we just simply do this but what we can do here is we can use the video\nID for the similarity search I'm going to show you the documentation where you\ncan find it just Google L graph uh Vector store and the\nJavaScript for example if I'm not mistaken\nhere and you're going to see that L graph Vector l l chain Vector\nstore GS so in the documentation you're going\nto see some options that you can use I need options yeah I'm pretty sure like you can you\nyou'll find here like maybe I'm going to leave a link in the guide here so you\ncan have access to it but what I mean there is that when we do Vector store.\nsimilarity search the first one is query the second one is how many items we want\nto receive but the next one is the filtering in the filter can be uh a\nfilter on the metadata so so we can say that I want only the dog dogs or maybe I need filter\nhere let me double check that no it shouldn't be filter it should\nbe simply video ID so this is the filter that is being\napplied and is being applied on the metadata of our documents and if we look\nin the metadata of our documents we store the video ID here later when we\nadd the database we're going to be able to see visually what I mean there and\nnow let's go ahead and see maybe um console log retrieve docs\nto see what document docs did it receive for that\nquery I'm going to go ahead and ask the invoke the this one with a question\nwhat is the finished position of Nores it knows that is this video ID because\nwe specified it it's going to ask norish finish\ntime and it will say the apolog but it seems there is a technical issue with\nthe retrieval function in order to provide more with accurate information\nbasically it says that there is no items with this\nID and why is that happening something wrong with here with a video\nID video ID did I call it video uncore ID here metadata video ID and let me\nlook in the database video uncore ID Vore ID filter this is Vector store similarity\nsearch I'm wondering if this uh is not going to\nwork for the inmemory vector databases but only for the for the postgress databases uh\nbecause as I see the retrieve docks\nright retrieve docks for query it doesn't even get here so it\nmust fail completely it doesn't get retrieve docks so let's try to do a try catch\njust to to see why it's not working it's it's hopefully it's going to to show\nme but yeah as I'm saying maybe uh this kind of filtering doesn't work on the\ninmemory filter is not a function okay so for the in memory maybe\nfilter should be a function let's try let's try saying that hey\nDoc is a function and we're going to return true if doc\ndo metadata. video ID is equal to\nvideo uh video video ID that you're looking\nfor again uh this is going to be a bit different later but now for in memory\ndatabase I think it expects a function for\nfiltering and let's uh let's try to maybe remove a TR\ncatch and invoke it again okay we see that and we\nsee retrieve documents V documents cool if for example I'm going\nto make a mistake and say give me we are working with video ID one 2 three\nthis video ID is not in our database and it's supposed to filter out like other\ndocuments in the database we see retrieve docs as an\nempty um array saying that meaning that our\nfiltering is working correctly now what we can do is we can\nload the other video as well let me go ahead and maybe split up a\nlittle bit the logic of of generating this embeddings because I would like to\nalready clean up a little bit here this file is getting a little bit out of hand\nand it um is responsible for different pipelines different layers uh it's both\nfor indexing and adding to the database and it's also about the agent I want\nagent to be only specific to agent [Music] um so let's go ahead and create here in\nthe server a new file called\nembeddings edings hopefully I wrote it correctly\nmaybe not is it with double d\nembeddings maybe and from the agent move stuff related to embeddings\nwhere what stuff do I mean well first of all I want to move\nthe gener uh creating the open Ai embeddings and the vector\nstore I will copy them from here I will cut them actually and move them\nhere I want to import what we need here and we have here what export Vector\nstore maybe I'm going to do export const Vector store so that other files can\nimport this storage I'll also do export\nconst add documents to Vector store function uh or not documents but let's\ndo add YouTube video\nto Vector store let's say we're going to get video\ndata and we need to do something with it what do we need to do in order to add\nit to to the vector store well we already have it in the logic in the\nagent AI if we look here well first we have to Define the split\nor actually with docs so I'm going to copy creating with\ndocuments creating with splitter generating the chunks and finally doing\nVector store at documents I'm going to copy all of this\ninto embeddings because this is part of\nadding a YouTube video data to Vector store so for the document we need to\nimport uh document from linkchain core\ndocuments page content is going to be video data. transcript metadata is going\nto be video data video ID or we can do it easily\nhere destructuring and video ID is going to\nbe like this because it has the same name and\ntitle we need to import the recursive character text splitter from L chain\ntext splitter here we're going to leave the same configuration we're going to\nremove this console log and we are adding it to the vector store that we\ncreated at the top Vector store add documents chunks perfect so now this file is\nresponsible for setting up the vector store and adding for example YouTube\nvideos to Vector store let's go ahead back and clean up a\nlittle bit here uh we'll leave a retrieve tool\nhere I don't know I don't need the video one or maybe I need do I need\nit I think I don't yeah I need it because it's still going to be here that\nI want to add this video to our database so for that we need to\nimport Vector store and add YouTube video to Vector store from embeddings\nand I want to call here a wait add YouTube video to Vector store so I still\nwant to add it here later we're going to think where to do it for now I just want\nto I move a code in another file and call it from\nhere I'm still going to have a retrieve tool that needs access to the vector\nstore so that's why we exported and we import it here the same access to the\nsame database and everything else is related\nto this one I can clean up a little bit here the Imports of what we do not need\nanymore leaving only things that we need like\nthis and what else cleaning up a little bit the console logs here as well checkpoint or video ID okay this one is also going to go away\nin a second but it's\ntesting the agent perfect so let's double check if\nit still works I'm going to invoke the agent.\nGS uh question was the position of Norris come on uh based on I can provide with\nmore details Hamilton vers yeah like it we we understand that it's working it's\nusing the transcript data uh what I want you to do now is let's try to add two\nvideos to the store and see that in that case it can f filter out with\ntranscripts related to one specific video for example I'm going to do a same\nawait video add YouTube video to Vector store and I'm going to say that we want\nto add the data at position one here I can do data position zero and data\nposition one if I'm going to go ahead and\num ask the question about this video ID about Norris I think it's going to be\nfine because it's going to look only at the transcripts for that user at the\nsame time it took a little bit of time to to add the embeddings but it's very\nfast like it's super fast let's see what's happening now uh I\ndon't see a specific time for Norris mentioned that Norris racing that is\ngoing quickly through the middle part of a lap by 800 milliseconds however if I'm\ngoing to go into the data and take the idea of my second\nvideo let's find it with Vore ID and the second one is this\none if I'm going to say it hey now this same question what is the finish time of\nNorris is going to be on a different video what I expect to see is I expect\nthe model not to know how to answer because it doesn't have that information\nwe gave it information from a different video let's see um based on the transcript I don't\nsee any information about nor is the transcript appear to be discussing\nprogramming Concepts so that's exactly true because we are filtering out only\ndata from our Vector store for this video ID if I will go ahead and\ntransform change the question to what uh will people learn from this\nvideo Let's see what that answer is going to to look like because remember\nthis video with this ID is a tutorial from my\nchannel uh about Apple invite application so if we look at the response it doesn't understand that it\nneeds to call the tool so let's see what will people learn from uh the video\nbased on it's it's transcript it's still sometimes doesn't\nknow that but it has this capabilities so maybe I need to inform it like hey at\nany moment you have information about video you just need to call the\nTool uh but with a better question I think it's going to work better now as\nwe can see it's thinking and we see based on the the video tutorial about\nbuilding a mobile application how to create custom auto\nscrolling component Marquee building and boarding screens with animation\nimplementing UI react development Concepts and so on so perfect now our AA\nagent can work with multiple videos it can store his data in a database but\nwhen asked it's going to look at only specific information for a specific\nvideo Perfect let me go ahead and do a git add\ngit CIT agent with rag\nI'm going to bring some water and the next step for us is going to be to\nchange from a memory Vector store to an actual\ndatabase so that this data is not going to be lost and we're not going to have\nto generate the embeddings always we're going to store and cash them so that\nnext time when we ask the same question about the same video we don't have to\nget the data again and again so that's our going to be our next step give me\none second hello uh perfect so as I was saying the next step is\ngoing to be to transform to a proper database for our Vector store and that's\none thing that I like about Lang chain is how everything um is abstract in\ndifferent layers and you're going to see how easy is going to be to swap from a\nmemory to we postgress database we just have to create it and change here how we\nconnect it and everything else is going to remain the same without us having to\ndo much changes for the database uh we need a\npostgress database with pogress SQL We There is a PG Vector extension that\nenables us to do similarity searches and index database based on vectors perfect\nfor our in Bings so we need a pogress database you\ncan run it locally you can use pogress with a Docker to run it locally that's\ntotally fine but I think it's a little bit more technical uh and maybe not\neveryone has the environment set up to run postgress locally what you can do is\nyou can use for example ne. Tech\nuh and with neon tack it's it's actually super fast and easy to to get a post\ndatabase up and running uh and I think they also have a\ngood free tier for up to 10 projects let's go ahead sign up and in your\nprofile go ahead and do a new project I'm going to call it you AI YouTube\nchat and let's do create here uh we need to enable\npostgress uh database so what we have to do is we are going to enable it by\nrunning a query in the SQL editor the query I don't remember how it was but\nlet's do enable PG Vector neon and that is going to be a query\ncalled create extension Vector so if I go into the SQL editor of\nmy database on new one and write this command create extensions vector and do run it didn't like why it didn't like second time statement executed\nsuccessfully so maybe it was not ready yet yet now it executed successfully so\nI enable this Vector uh extension on our database so our tables here will be able\nto have like vector um columns columns and index and\nsearch based on their similarity the next step is to Simply connect to this\nproject from our uh application I'm going to go here and I'm going to copy\nthe connection string let's go ahead and put it into that EnV file and let's\ncall um DB URL and let's space\nthe the connection string that we got from here make sure connection pooling\nis enabled and the next step is to go and\ndouble check with with where with uh with length chain under P your vector\nstore I'm going to select PG Vector what I need to do is do npm install at L\nchain Community let's do that first and then we can create this Vector\nSC store like\nthis so from our Bings files at the top we import PG\nvector and we create it instead of using memory Vector we create it using PG\nVector store. initialize we give the same embeddings model\nthere but we need to provide here some configuration configuration uh such as postgress\nconnection options and the connection options you can either use a connection\nstring the easiest way or you can have like Port host database name and so on\nbut the easiest one is just to provide connection string as process. EnV DB URL\nthat we added here in our environment\nvariables and then we are not done yet with the configuration we need to give a\ntable name the table name what is going to be the table name\nfor this tour let's do transcript transcripts let's do transcripts um columns we can have\nID column name come on\ncolumns the ID column name let's do it ID let's do the embedding column name\nyou can specify what should be the name of the embedding you can do embedding or\nvector for example what I don't have text column\nname content column name this is the content\nof that embedding and there is also metadata column name name metadata I\nthink you can leave them out as well but because it's going to be default but\nknow that you can adjust them is it embeddings or vector oh it's Vector\ncolumn name sorry Vector column name vector and besides columns you can also\nhave a distance strategy and this is a little bit more\ntechnical basically meaning what uh function to use to calculate uh the\nsimilarity there is cosine uh there is uh whatever yeah there are other methods as\nwell like inner product or Ean as well but cosine is default so you can leave\nit like this or you can even leave it out as well anyway now if I restart my\napplication the vector store should automatically connect with this\nuh database with this configuration I don't need to change anything else the\nvector store will have the same ad documents and stuff like that and it\nshould automatically handle the database creation for me if I go into new one\nunder tables we don't have any tables yet but if I'm going to go ahead and\nrestart or run our agent uh if everything is successful\nit's going to connect and store information in postgress we see\nthat we cannot find the PG uh package because for that we need to do npm\ninstall PG this is for postgress so it's a pure\ndependency uh let's try to run it again we see Vector store from embeddings\ndogs does not provide an export member I forgot to do export\nVector store if I do it again how many tabs open in that browser\nI don't know a lot and that's not even enough uh what will people learn from\nthe video like now at this point if I go to the tables we see a new table called\ntranscripts if you go into the options here and enable table RW count we see\nthat we have around 167 chunks of data so this is not 167\nvideos but because my video one of them is 4 hours long it divided in in that\nmany chunks so we see that the first ones is\nabout L stroll and so one fastest ahead Louis Hamilton definitely uh transcript\nfrom uh Formula 1 videos but if you scroll down a bit we see that what\ninformation about the Bol text and react native and so on so this is the second\nvideo in the metadata there is the metadata about\nvideo ID so this is how the filtering is supposed to work and let's double check\nif filtering is working in a second and there is this Vector which as you can\nsee is a bunch of numbers if I will I don't know I can\ncopy it maybe I don't but you're going to see that it's\nsimply a bunch of numbers so this is a better way because\nnow it is stored in the database so we can we don't have to embed and generate\nthem every time we can build a huge cache of this data to later interact\nwith this is the information and again let me double\ncheck in the agent in that tool for retrieval we have\nhere the function but as we can see now that our\nVector store is a database it would be better to provide here a filter\nobject and that filter object if I'm not mistaken is going to be added on the\ndatabase layer so it's going to completely ignore those items when it\ndoes we SQL query so this is the filter to retrieve documents based on the video\nIDE perfect now I will\n[Music] do like this and at this moment we are still\nadding like that those items in the database so most probably we're going to\nhave duplicated items we had 150 now we have\n334 uh but it works here like this time it didn't call the tool but\nanyway or maybe it's a problem maybe it call the\ntool I'm going to comment out this wait add YouTube videos to the vector store\nbecause we're already there and I'm going to run it again to\nsee if the filtering is working correctly because it's I not calling\ntool where the tool is not doing yeah I see information so that means that it's\nworking correctly Perfecto amazing so this is our G ad\ndatabase uh\npogress for the vector database I think in the next step we are\nkind of ready to integrate the the chat\ninterface and before we do that I want our server to be an restful API so that\nwe later can interact with it by sending HTTP requests at the moment our agent we\ninteract with it by literally calling agent. invoke\nand invoking that um executing this file but what I want want to do is I\nwant to create an API that I can send this question as a post request and I\ncan invoke this agent and get back the answer for that let's go ahead in the\nserver and create the index do GS file and our server is going to be\nan HTTP server we're going to create using Express so let's install Express\nmaybe course and types SL Express and let's start by creating a\nsimple uh import Express from Express import course from\ncourse we create the express application we add course which is you don't have if\nyou don't know like it's not a big deal here just add it because it's going to\nlater help us send requests from different from our front end to our back\nend when we will be deployed and what I can do is I can say simply add a get\nrequest to the slash that will return hello world and start listening at P\n3,000 for example or maybe we can do here const Port equal process. env. port\nor 3,000 if it's not provided I'll take Port\nhere and the call back is going to be executed when we the server started\nlistening this is a very basic barebone uh HTTP server what I can do with it is\nI can do node maybe with EnV file and I'm going to execute not agent but\nindex.js if I do that we see Server is listening on Port\n3,000 because this is a get request I can simply go to\nuh in the browser and do Local Host 3,000 and we see the hello\nworld the hello world that was sent from here usually we are going to send this\nrequests maybe we're going to be Coral request uh post request so we can also\nuse the coral command in the in the terminal to send these\nrequests okay good um what what I'm going to add now is not a get request\nbut a post request to the endpoint maybe generator query or yeah let's do\ngenerate my generate is going to be like question and answer I send a question\nand I expect back an answer the query itself I expect it from\nthe body and let's do console log query and return send like this now\nbecause this is a post requ actually I did some changes so I need to stop the\nserver and run it again or I can do I can add come\non to my node I can add here at d-w watch so that is going to watch any\nchanges if I'm going to change something here it's going to restart so I don't\nhave to think about restarting it always perfect now that our server has\nrestarted we can send a post request to/ generate to do that in a new terminal\nI'm going to do coral Dash um that is a header let me try\nuh send a post request using\ncurl to slash generate with a query data uh let's see what the AI will tell\nme yeah it's the dash X that I was looking\nfor it should be here so I'm trying to send a post\nrequest to Local H Local Host 3000 SL generate with the data this query what\nwill people learn from this video and this video\nID maybe I will take video ID as well if I send this query we see\nsomething we don't know what exactly but we see some errors and an error here as\nwell canot distract your property query from requestbody that's because we\ndidn't um add quite important part which is the\nhere as a middleware we can add a express.\nJson that will automatically transform our request body to Json because without\nthat the request body is not a Json format if I simply add that one I can\nuse it as adjacent and D structure the inputs like this\nnow if making sure that the server is running if I send the same request again\nwe see hello world because that's what we send but in the server we see that\nthe query is this one and the video ID is this one meaning that I can go ahead\nand import the agent here from our agent. JS\nlet's make sure that in our agent. GS we do\nexport const a agent we no longer interact with it directly so I can\nremove this part all together or maybe I'm not going to remove it let me\nactually copy paste it in our index inside the\ngenerate I'm going to put it here I'm going to come to it in a second but I\nneed to change how we import the agent we need to destructure it when importing\nbecause we are expor in it as a constant so we have agent here from agent. JS and\nwhen there is a request to SL generate we get the query we get the video\nID uh and we have the interaction with agent as we had before I'm going to do\nsome changes we no longer need this video ID because it's going to come from\nthe request body I'm not going to have his console\nlog I'm going to have agent. invoke and roll user and the content is going to be\nquery not this hardcoded one but the query that we\nreceive for configuration we have Fred ID so\nmaybe we're also going to send the Fred ID\nhere so let's do Fred ID and video\nID then we take the result and we return it back as results\nmaybe I can do it like this let's see return that\nJson to send it as a Json and I'm going to send the last\nmessage maybe it's going to be too much information but let's see what's going\nto happen now our server has restarted and we can send the same\nrequest but we need to change it slightly\nto add in this um- D I'm going to add a comma here I'm\ngoing to do a is it an enter come on it's a bit hard\nto to edit them but I can I'll do it like this I'm going to add it here I'm going\nto comment it out PR ID one I'm going to uncomment it\ncopy it and comment it back and I'm going to leave it here for you to also\nbe able to test this endpoint easily I'm going to go into\nthe terminal and I'm going to send this request it's going to already work with\nthis query and with this video ID and we see a lot of things but we also\nsee the content and I'm thinking should I just\nreturn the content is anything else important here\nfor the front end where is cash and so on in response metadata ID model let me simplify\nit and just say rest. send Das content so I'm simply going to\nsend the content there and if I send it again it's going\njust to give me the content you can adjust it like depending on what\ninformation you want to send to the to the front end perfect it works and I think that is it for our\nfirst step into creating a restful and a server for our AI agent so\nthat in the next step our front end is going to be able to interact with this\nserver when the user write something in an input box for now let's do go ahead\nand do G status git add get\ncommit um add\nrest API for our backend and for the agent perfect now it is time to already\ninstead of instead of doing it for C request it\nis time to integrate the the frontend the client side application from which\nwe're going to be able to interact with our our AI\nagent I don't want to spend a lot of time building\nit uh and for that reason I'm going to show you I'm going to leave in the in\nthe guide let me\nthink yeah if we look into the tutorial build AI agent with\nlra for the front end what I did is I simply created this prompt and I use entropic\nto build the front end for me so I told it build a simple UI interface for an AI\nchat up with this structure with this styling with this and that and that and\nin then we got like this AI chat interface and I think it's pretty good\nfor us uh and because I don't want to focus on building the uh the front end\nwe can reuse the same code here where we can try to reuse the same uh\num uh llm generation as well I'm not sure what is going to be the result so\nit's better to use it together with me so first let's go ahead and run npm\ncreate V at latest to generate a new react project but this time make sure\nthat you are not inside the server so if you are in server you can do PFD to look\nwhere you are make sure to go one layer up to be if you do us to see the server\nhere and now let's go ahead and do npm create V latest let's give a project\nname let's do chat with YouTube or let's do here client let's call let's use uh a\nframework and the framework is going to be\nreact I'm going to use um should I use typescript let's use typescript\nrpt and that's it now we have a client side project if I'm going to go into CD\nclient and do npm start or npm install to install the dependencies in van npm run\nDev we're going to see a local host here and if I open open it up we're going to\nsee the starting point for a react application perfect let's go ahead and\nas as I was saying either uh use this llm to\ngenerate uh this prompt in an llm like entropic or in the CLA or um\nchbt and generate the Cod is like that or come here I'm going to leave it in\nthe comments so you have access to it uh and press the source code\nhere we're going to have the same client here in the source I'm going to look at\nthe up. TSX I'm going to copy everything here and I'm going to come into the\nclient source application based everything\nhere and this same thing for uh is it index. CSS I think so let's\ncopy everything from index. CSX and add it here by replacing everything like this uh the only thing is that if you\nlook into up. TSX it tries to connect to Local Host 3000 so let's change it to 3\n3,001 let's change it to 3,000 because now our back end is running on\n3,000 and let's try to what to restart it by running npm run\nDev again this is the API if I open it up here boom here\nwe have a chat interface if I'm going to say what's going to happen what's going\nto happen in the client if I if I'll say hello there was an error because\nprobably we're going to have to change a little bit how we do\nthat uh if we look into app. TSX and are looking\nhere around line 50 we have API generate and the data\nhere is a little bit different it does prompt it does Fred ID and it does video\nID let's try to do video ID like this in the server in the index what do we have\nit should be the same SL generate slash\ngenerate instead of prompt I'm using query it was easier if I use the same so\nlet's just change query here Friday is good video ID hardcoded video\nID hardcoded and now if I go here and say\nhello if I reload say hello what's going on here if I look in\nthe console into the network Tab and say again\nhello send we see that it failed why it's because of a what uh response request what's going\non maybe our API is not running server yes fail to run\nindex I'm going to go ahead and restart start my API my server and it still\nfails to run no now it says server running on this port if I come back here\nand say hello okay now it gets to the\nAPI hello I'm here to help you find information from YouTube video\ntranscripts is there a specific YouTube video or topic you would like me to\nsearch for information about I can retrieve relevant parts of a video\ntranscript based on a query perfect what we're going to do is let's go ahead and\ndouble check like we hardcoded vi video ID that video ID I'm just going to\ndouble check in the data if we have such a video ID yeah we\ndo have and this one is is this apple style video let's\ncheck what um will the viewer\nlearn by following this tutorial this is a question about a\nspecific video use\nthe tool to get to get to get to get to get how is\nit called to get uh relevant transcript okay it's very insistent\nokay what is the topic of the video you see like the\nthe one benefit of an AI agent is that it can decide like how often and how to\ninteract with the tool in this case a retrieval tool for the rag system the\ndownside is that you lose a little bit of control and as you can see here some\nquestions the tool didn't realize that it has to inter integrate with that um\nit has to call that tool so sometimes an old school chain of calls might be\nbetter but with write prompt engineering with WR descriptions of a tool uh I\nthink you can get like where actual results and keep the benefits of having\nthis AI agent that decides like um what to to call how often to call and so on\nso we see that based on the transcript this video appears to be aor about\ncreating a mobile application perfect amazing so we have our front end as well\nwe have our client side as well let me go ahead\nand do the following um I'm going to do a git add G commit minus\nM front and chat interface another issue is the agent\nwill call a tool when you don't want it to yeah that that's also true like\nhaving like an agent as we have here we don't say like the word or how to do the\nthings we just give it a bunch of tools and we let it decide like when to call\nit how to call it and so on so yeah sometimes it's going to do things that\nyou might not do but that's it's That's The Power of an autonomous agent mine likes to use the generate\nimage tool anytime it writes an image generation prompt I highly doubt you're comfortable\nspeaking like that when you are not behind the safety of the screen what do\nyou mean oh you you have some beef chill\nguys it's okay okay so what do we want to do next\nguys um what do I want to do next I know what\nI want to do next um the next step is being able to\nstart conversation about new videos because right now in our neon database\nwe prefilled it with some transcripts from two different videos and we can\ntalk about those videos by hardcoding some data what I want to do next is to\nbe able to embed an index any kind of video that\nthe user wants to talk about for that we need to allow that to happen and one\nstep before reaching that because we're going to do that with Bri data uh before\nwe do that I want to host our both client side and server side so that we\nlater we're going to see see like how we can connect bright data back to our\nsystem to get this data about the video transcripts so what we're going to do is\nwe now are going to host our server with jio go ahead jio.com where you can\nfollow the link in the description by the way uh this part of the video is\nsponsored by jio so thank you very much jio for making this possible and you can\ngo uh on janio you're going to go into products deployment\nplatform and you can uh go ahead in the documentation create an\naccount and you can see different Frameworks and tutorials how to um\ndeploy them in the genesio CLI let's go ahead\nand install genesio first by doing npm install genesio\nDG in the terminal I'm going to do that here I already have it installed but it\nthat is not bad to update it as well uh and then we have to run genesio\nlogin let me double check that yeah need this one but make sure to create a genesio\naccount and then you're going to need the deployment the the API key from\nthere and you're going to run genesio is it login I forgot like how to\nto connect it with our yes jio login to the platform so if you\nrun jio login you're going to connect it with\nyour account after that we can start deploying our application but before\ndeploying I'm going to create um genesio do yaml file that will specify how do we\nwant to deploy our po server and the client um VL uh I'll will also provide\nit in the guide so you don't have to write it but I will write it quickly so\nuh I will comment like what everything means so first we have let me do it like this so I have a\nreference so the name is going to be the name of our project let's call\nit YouTube chat application you can specify the region\nwhere you want to deploy it for example Us East one and let's do yaml version\ntwo next we we have two things one of them is the back end and another one\nlater is going to be the front end but first let's focus on the back end the\nback end you specify the puff to it so the puff is This Server so let's say\nserver then language uh we're going to say name is\nuh GS and you can also specify the package package manager in my case I\nwill specify npm now back in this line with language\nwe're going to also have a environment that I don't know we'll have for example\nthe API URL which is going to be the actual URL of uh our\nAPI let's say ABC for a\nsecond after that in our back end we're going to have some functions the\nfunction that we're going to have let's say that it's going to be\nname API simply API the puff to that function is going\nto be because relative to the back and puff\nserver our function is going to be this puff so it's going to be dot slash the\nHandler or the entry actually the entry is going to be index\nfile so index\ndogs and the type is going to be HTTP\nserver so Jano is going to run a function that is going to serve our\nexpress application now in this environment API\nURL I want the whole backend to have access to the URL of where is our\nbackend deployed so we can access it dynamically like this by saying that I\nwill look into the backend so backend\ndot functions functions. name API do URL and\nthis is going to be uh provided as a environment variable API URL everywhere\nin our backend we're going to see why we need\nit later now that we have our back end done let's go ahead and focus on the\nfront end in case of a front end\num the path is going to be client we are going to say what do we\nwant to publish and we're going to publish with this folder with this\nfolder is something that is going to be generated uh if we run a script when we\nwant to deploy npm run build so if we run npm\nrun build in the client is going to generate um this dist folder and that\nthis folder is what we want to send and publish uh finally we need some\nenvironment here as well as we have on the back\nend something similar to here where is it I need some spaces but in this case it's a little\nbit differently uh it should be prefix with vcore API URL if you do V it's\ngoing to be accessible in the client side code there that's it now let's go ahead open\nthe terminal and try to uh you can also do genio local to run it locally or you\ncan do jio deploy to deploy it to jio hosting it says that we detect that\nentropic and open Ai and DB URL are not set remotely do you want us to set them\nfor you let's do yes and I think it's going to look for this configuration and\nset them remotely uh everything on the back end work\ncorrectly the front end this does not exist uh I was expecting it to run\nautomatically npm run build oh I think the problem is here it should be scripts\nnot script because I can run it myself but\nit should run automatically when the engine are deployed so let's try again\nby changing it to scripts and what do we see we see that\nthe function is deployed we see that is building the back the front end we see\nthat because we didn't provide any subdomain it automatically addited it\nfor us in Vis jio yaml like this automatically generated we see the link\nto the application dashboard and the link to the front end if I open front\nend what's going to happen we see that our AI chat has been\nhosted and we can say hello and if it can connect with our backend as well\nthat means that everything is perfect perly configured and as we can see it\nactually is and we can ask things about the video what is the video\nabout and it's going to interact with our neon\ndatabase it didn't know it didn't call the tool but later it it will everything\nworks or maybe not let me actually try um what is the video topic based on the\nretrieved transcript being more specific like what\nit should do like you know like I don't have any retrieve transcript yet to\nsearch no you actually have\num you actually have just try it trust me you have transcript will it believe me I think it does\nbecause it's yeah based on the retrieve transcript the video appears to be about\nup development uh blah blah blah and so on\nand so on perfect amazing so this URL now is publicly\naccessible because we use jio to to host it very easily I will\ngive it to you but I don't know if I should give it to you but you saw it so\nit depends uh if we open here janio in the\ndashboard we see that we have a function and we have a front end if you want to\ndebug the functions you're going to go into the\nmonitoring or into the logs and you're going to see different logs from your\nfunction calls you actually here just try it this is very um\ninput so yeah this is how easy it is to deploy uh full stack applications both\nfront end and back end with genesio perfect now in The Next Step let\nme actually go ahead and do get add\ndeploy to genesio in the next step we are going to\num add functionalities to interact with bright data and to scrape the transcripts of the videos\nthat the user needs seems like convex would be a\nbetter option for the database how did you settle on new one\nuh I just wanted something simple like postgress and that's\nwhy like when I need just a simple barebone pogress I go to to new one but\nbut um I haven't worked with convex yet actually and I'm pretty sure like if\nit's build like exactly for for for that one it would be better but it's super\nsimple to change the only thing that you would have to change is in the\nserver in our embedding here in the vector store you're going to initialize\na different Vector store and L chain integrates with convex HS it's possible\nlike that as well give me one second I'm going to take a very very short break\nand I come back and we continue with our implementation for hello so let me just double check something\num I'm thinking how to design the user experience of of starting of of indexing a video that's that's\nwhat I wanted to say my initial idea was before we\nstart and actually I had it before we start an AI chat we have to we have an\ninput we have a um an input where we put the video ID not the video ID the video\nURL and then we take take the URL we scrape it we index it and only then we\nopen up the chat and we can talk with that\nvideo now that now that I'm thinking wouldn't it be better if we just have a\nchat interface and we paste a YouTube video here and we start talking about it\nthen we paste another video here and we talk about it and so on what do you\nthink um how should we index videos more free flow in a chat way where our\nAI agent is going to have a tool that knows how to index videos or a more\nstructured way where we have like an input give me the video ID I'm going to\nindex it and then we open a chart with that\nvideo let me know in the comments like in the in the chat what what do you\nthink would be better what you would like to see for example\ncome on because there let me close some of\nthe stuff down this is we need\nit I don't need this ones because in any way we're going to use\nBri data to uh to fetch or to scrape the video data from YouTube we already saw\nhow to do that uh uh and what we did is we want to Bright data we created an\naccount then under web scrapers we go to web scrapers Library we are searching\nfor YouTube and we see that there are eight different scrapers for YouTube\nwhile we are interested in this collect videos by URL so I'm going to click on\nit scrape our API let's do next and here in the API request Builder in the API request Builder we add the\nAPI token we add some inputs and we see a c\ncommand in this part we can also see how we can do that from node using fetch if\nI do that I can and also if I'm going to do a couple\nof things I need to include the errors\nthat's good and I don't need to delete deliver results to S free storage I'm\ngoing to unselect that one but I want to send it to a web hook sending the\nresponse to a web hook uh the way it's going to work is oh\nI didn't show the the parts let me do it again so the thing is that uh we are\nstill going to use bright data so going on bright data\num dashboard we're going to go under web scrapers come on why it's not changing\nhere so bright data dashboard web scrapers web scrapers library and we are\nsearching for YouTube we're looking at the YouTube\nvideos post and we select scraper API here we see\nthat we already saw in the API request Builder but we just send the URL of a\nvideo and as a result we're going to get the scrape data including the\ntranscript we're going to configure it a little\nbit for example I'm going to delete and leave only one input it's going to be\neasier for me to see there eror I'm going to deselect deliver results to\nexternal storage and I'm going to send send to\nweb hook that means that when we send this request to to Bri\ndat data set trigger we are sending a request to start the scraping job but\nbecause scraping jobs can be it's a long time task it can be a couple of seconds\nbut if there is lots of data it can be minutes um depending on the collection\nthis one we see that on average is 7 Seconds anyway instead of waiting for\nthe result we just trigger the request and then we can either re send another\nrequest to check the status where we can give Bri data a\nURL that bright data is going to call when it finishes the scraping job that's\nwhat we're going to do we're going to do here let's do HTTP\nexample.com and later we're going to fetch it change\nit let's do example com/\nwebhook this means that hey bright data when you finish scraping this job send\nthis data here and the file format I'm going to\nleave it to Json and in the example request instead of Linux\nbash I'm going to do node fetch here is a good example of how we can send this\nrequest let me copy it let's go in our server and I'm going to call create a\nnew uh new file let's call it bright dat.\nGS and let's export const\nuh start\nor Trigger YouTube video scrape we have the URL of a video and\nwhat we have to do is we're going to paste the code that bright data gave us\nso we're going to change it a little bit for example we do not need to import\nfetch from anywhere I'm going to remove it because it's going to be there in the\ndata this is the input so this is the URL that is going to\nbe um s here so what I'm going to do is maybe I'm going to call this trigger\nscrape input with this URL not with this URL with this\nURL and here I'm going to Simply take the URL from the parameters and send it\nto Bright data like this maybe we can adjust it to send\nmultiple uh videos as well but for now it's good like this\nthen what we do here is we send a fetch to this long URL but let's break it down\nfor example I'm going to break it down into maybe like this everything until\nslash trigger let's do here\nconst bright data trigger URL is going to be equal to this one let's take it and let's transform\nthis URL into a template string with your back ticks come\non back tick here so that we can replace this URL with simply\nsaying bright data trigger URL then we have data set ID data set ID identifies\nthis YouTube video post data set it can also be dynamic if you want I leave it\nlike this endp point is where do we want to send the results\nto where do we want to send the results to well we want to send it back to our\nAPI back to our server so in our index here let's go ahead and\ncreate a post post request called Web hook request response and let's simply\ngo conso log request. body to see what data we're going to\nreceive here now we have to say hey Bri data\nsimply call back the server here at SL web hook but the URL we don't know we\ncan hardcode it from uh from genisio platform but remember in jio yaml we\nsaid that we're going to give a environment variable called API URL\nthat's what we why we need it we need it to dynamically say hey the const call\nback or web hook URL is going to be this one but actually it's going to\nbe I'm going to change here to process. env. API URL SL\nwebhook b/ web Hook is important because it's our endpoint implemented\nhere okay so let's change the endpoint here pay attention of how we're going to\ndo it this HTTP example.com webhook Until the End we're going to delete and\nreplace it with the web hook URL then we have format Json is good uncompressed\nweb hook true and include errors true everything is good here now the method\nis post authorization uh headers this is the bright data uh your API key so it's\nbetter to take it from here and add it to the environment variables as bright\ndata API key and back here we're going to replace\nit again with a with process.env do bright come on should be bright data\nAPI key then content type Json and for the\nbody we give this data I don't like the dot van so what\nI'm going to do I'm going to before fetch I'm going to say\nconst response equal a weight then I'm going to put here I'm\ngoing to stop and what we have then we have data so const data equal a weit\nresponse Json and that's it and maybe you can\nalso do a try catch maybe we can do result and we can do console log result and this is our function that is\ngoing to trigger a scraping job for a video\nURL we can do that by again we simply call it here maybe we\ncan we should call it at the end right not at the\ntop so we can give here a YouTube url like this\none and we can do let's do CD\nserver clear and I'm going to do node EnV file and\nlet's run the BR data GS this\nfunction so we see that as a result we get the snapshot ID if we look into the\nBri data logs we should have a new job here and\nif we look at this snapshot ID ending with 9 Q this is the last one here it\ntook 5 Seconds to complete we can download or we can check what happened\nthere with the endpoint um we haven't deployed it yet\nso give me a second\nbut if we look here back in our API request Builder and you put here the URL\nof our genesio let's see uh let's first stop this one and\nlet's deploy our update our update has this SL web\nhook endpoint yeah because we need to go one\nabove to be in the root we detected a new bright data let's\nset it remotely automatically for us um so we see that the function API is\nthis URL so I can copy it and basically use this one in the notify\nURL or no in the send web hook so send to web hook web hook URL this URL of my\nfunction you can also open it in the dashboard and here you're going to see a\nfunction URL\nand we need to also do slash web hook you can also press test web\nhook and this is going to test send a test result and we see test sent\nsuccessfully if we go into the jio into the\nlogs we're going to see a test a request body this was the test\nthat was sent for us and we received it in our backend uh in our backend invest SL web\nhook that means that now if I am going to invoke the same function again for\nexample Trigger YouTube video with this URL by this is a little bit hacky right\nnow but in a second we're going to connect it with our API and it's going\nto make a lot more sense but I want to trigger a new scraping job and I want it\nto automatically call our web hook so if I go into the\nserver and do node bright data GS that is calling this function\nwe see this snapshot and this snapshot if I look into the logs it's\nready and it's supposed to call our backend and if I\nreload we see yes we did um actually no it\ndidn't you know why I know why because I'm running it\nlocally and locally\nthe web hook URL is not setting is not correct so that's why we need to do it remotely uh but yeah the next question\nis uh should I when should I call this Trigger YouTube video scrape should I\ncreate a tool out of it and give it to my uh let's try to\ncreate it as a tool let's try to create it as a tool I haven't tried it creating it as a tool\num make sure to to remove it from here as a tool in our agent uh When I\nWas preparing I did it like with uh a input here so you input the YouTube\nvideo URL and then you talk with it but I think it would make more sense to see\nat least how we can do it with a tool in our agent so let's go ahead in our\nagent and create here a tool const um\nTrigger YouTube scrape scrape tool now it has a\nfunction that does something and some configuration for example name it can be\nTrigger YouTube scrape tool and description description\ntrigger the scraping of a YouTube video using it using the URL the tool\nwill not will uh start a\nscraping job that usually I will give it more context to know how to use it maybe\nI can do it even in in new lines like\nthis The Tool uh that usually takes around 7 seconds maybe later we\ncan give it a tool to also ask for um the status of\njobs the tool will return the job ID that can be used to check the status of\na scraping job this is a bit the tool will return the job ID\nshould I just from Bright data here because it returns an object with\nsnapshot ID should I just return snapshot ID I think so let's just do\nreturn results dot\nsnapshot ID the tool will return the snap\nshot slash job ID that can be use okay use the tool only if a video is not\nin the vector store already in the schema we need the URL\nand we are going to get it here as URL what we need to do with it is we\nneed to say hey snapshot ID return Trigger YouTube video from Bright data let's do console.log triggering\nYouTube video scrape and this one that's cool that because now if I'm\ngoing to make sure to run the server and run the front end\nlocally and if I'm going to go to local call host\nuh what's the the API for the Local Host it's this one if I will say uh I will go ahead and\ntake a YouTube url but wait a second I forgot one thing\nI forgot to take the trigger YouTube video scrape tool and give it to my\nagent now if I'm going to go ahead and take a\nvideo for let me see what exactly I want here I don't know what to\n[Music] say I'm going to do also\nF1 so if I take this URL and send it here\ncan we talk about this and if I send this is a very\ninteresting this is a very specific prompt saying that hey I want to scrape\nthis video let's see what's going to do\nwhat's going to happen if I look in the logs for our server we see the\ntriggering YouTube scrape job for this video ID for this video\nID and it's not finished yet YouTube video scrip scrape triggered so it has a snap snapshot\nID and what it does based on the information covered from the video\ntranscript I can provide you with a summary of a YouTube YouTube video\nsummary building a custom scrolling component in react native no that's not\nreally true that's not really true and we are\ngoing to have to adjust it a little bit that's because now that we are\nworking with URLs and video IDs like this it's not longer going to\nbe part like in the retrieve tool it's no longer going to be the video ID\nhere so I'm going to remove this configurable video ID or maybe let me do it like this and I'm\ngoing to take it from here from the parameters that our tool is going to\nreceive and it's going to be the llm that is going to decide what the video\nID is so again giving more control to the llm in here we're going to say in\nthe schema that we have the video ID but we can also describe\nthe ID of a video to retrieve yeah for a\nspecific YouTube video now if I'm going to go ahead and\nsay the same thing can we talk about this it's going to do that trigger and then is going to try to use\nthe data from newon the thing is that it's not ready yet like our trigger even\nthough we are triggering it the data is not stored in\nthe in the database yet we didn't complete the loop yet so that's why we\nsay I apology but it looks like the video content is still being processed\nand is available for me to retrieve information yet this typically takes\naround 7 seconds but sometimes it can take a bit longer that means that even\nthough scraping job was correctly triggered as we can see\nhere it's correctly triggered by our agent\nuh we need to deploy it and make sure that our SL\nweb hook receives the requestbody but not only do we need to\nreceive a request. body we need to index them how do we do\nthat well request. body is basically similar to this data. GS it's an array\nwith videos it can be one video it can be multiple video at the same\ntime we have embeddings which has a function add video to Vector\nstore which expects a video data so in our server index in the web hook what we\nneed to do is we need to in a simple way we need to do a\nweight making it a sync first add video to vector store\nrequestbody sl0 because the body is going to be an array and I can show you\nthat by looking into the logs of genesio logs we see bodies and\narray but if you want to store all of them what we have to do is we have to\nsay request. body. map for every single video data there we want to addit to um to the vector store and because\nthis is an array of promises we're going to put it into a weit promise.\nall and say that hey a wait storing all the data and only then finish it return\nokay so now if we deploy uh I will probably\ndo that\num there is one more small thing that we need to take care of and instead of\nshowing you the problem first let me explain\nit usually the express are going to limit how big the body of the post\nrequest can be however in our case if we are fetching the if we are scraping a\npodcast of 4 hours that's going to have a lot of data so it can be a couple of\nkilobytes couple of hundred kilobytes so in V express. Json we can give a option\nhere to increase the limit of that data I can even do 200 megabytes I'm just\njust to make sure that it's going to work now that I have this one here let\nme go ahead and deploy everything to production\nusing um jio deploy and we're no longer going to test\nit locally we're going to test it the deployed one so we see front and URL you can copy\nit we can go here and we can start by copying a URL\nlet's go back to our application and let's talk about and let's do the\nvideo URL now if we look really quickly here\non uh bright data I think it's supposed to to trigger a new job\nhere yes it's running and this bright data job should call back back our API\nat/ web hook we're going to see that in the logs here I don't think we logged\nanything but we see that the function call at 51 just now which means that in\nnewon if everything work correctly in neon database we should already\nhave information about a video from a new from a new video I\nthat is this four L at the end so if I look here in the new on [Music] database this is still that one and if I\nscroll there are a lot of them so let's do like this this is the last page if I look at the\nend it didn't work right I don't think it did uh um I need to double check if it actually\nwas scraped correctly so video this one can I do a\nfilter here where metadata but metadata is it oh no yeah here it is Louis congrats\nyou see for it's a small video so it's four chunks at the\nend uh if I search here you see that these four chunks are about this video\nso what I can say here now is uh is it ready yet\nand it's supposed to already look into the neon database instead of triggering\na new one did it trigger a new one uh this is now is 53 so I don't see\na new job being triggered which is very good and the answer is great news the\nvideo content is now available based on what uh I've retrieved this appear to be\na video about Formula 1 racing specifically featuring Louis Hamilton\nhere is what I can tell you from the content\nuh how did Louis what was\nLouis last uh\nwords last words not not that bad like last words in the\ninterview let's see if it will if it can understand this kind of stuff based on we'll stay positive we'll keep\nour hands high and keep pushing forward perfect now I can go ahead and take a\nnew video for example from our\nChannel and say hey come on\nlive let's take this Lucas video and we can continue here as well\ncan we talk about this video and provide a video it's supposed to trigger a new\nscraping jump let's see yes it's running so this\nis all done by the AI agent it's crazy and after some time it's going to\nadd new stuff in our transcripts table we're going to already have\n639 but this video is huge so that's why it took a little bit of time is it ready [Music] So based on a Content retrieve at around\n42 minutes Mark I'm not sure like why it's say that at this point of a video\nLucas appears to be wrapping up a tutorial live stream he's just finished\nimplementing some functionalities related to making items pressible he\njust finished like that that that uh what is the tutorial about so basically\nI can talk with this tutorial with this YouTube video let me try to find\nsomething that lookas maybe do so sad what kind of list let's do what kind\nof list is that tutorial teaching shall we do\nthat that's going to be the next question so this beginner friendly tutorial where\nLucas is teaching the viewers how to build Apple news cloning R native like\nthat like that like that what kind of list is Lucas\nteaching so how it's going to work it's going to look at it's going to find from\nall of the transcripts here from around 300 transcripts transcripts that are\nmore similar to that maybe this one around here and based on that it's going\nto analyze and answer the question so let's see maybe something even more specific [Music] H how specific do we want to get but yeah let's see what's the answer and now because we are using\num the AI model we can even combine multiple\nvideos error processing request that's interesting I'm wondering why I don't know maybe time limit I don't know but\nwhat I wanted to try to do is go back to a previous video for example the Louis\num what what was Louis excited\nabout and I think it should link it to the previous video without scraping new\ndata because it already has it in the database mhm the video where is earlier\nwas about Formula One Would you like me yeah the question was about the previous\nvideo with ID maybe this one now I can properly answer your\nquestion uh what kind of was discussing okay key points about qualifying session\nperfect so I think this is better because it's very flexible it can start\nscraping like different jobs and even if we try to do that again I hope it's not\ngoing to add new items in the database because if it's smart enough it should\nfirst check if it has information about that so even if I remove and restart the\nchat from scratch and say can we talk about and the video about\nLucas I I hope it's not going to start a scraping job but it's not up to us it's\nup to the agent and it actually indeed tried to to do\nthat uh maybe we can instruct it better through the description of our agents use the tool only if a video is\nnot in the vector store already so we need to tell it like check\nthe vector store first because it added more items here\nalso you can add a table with video IDs where you're going to save a status so\nso that it easier understand if it has videos or\nnot um before calling this\ntool make sure that that it is not already in the\nvector store so maybe like this maybe with an\nadditional tool to check the status of a video it can also improve like how our\nAI is going to is going to work but well let's change what I want to do here is\nthat now from the client we are no longer having to send the video ID\nmanually because that is the agent is going to understand from the context of\nwhat we are talking about um it's going to understand like the the\nvideo uh let's see and in the backend in the\nserver here in the index we don't need in the generate the\nvideo ID again this is something that the chat is going to understand through\nthe messages that it worked with perfect so now I can deploy it\nagain and I think with this we\nhave a pretty cool rag system that we can use to talk with YouTube videos Lucas filling in for Vadim who\nwill return next week he's a developer video content and so\none um all right what will you guys guys build with this one let me know in the\ncomments below because I believe this system opens up so many opportunities\nand possibilities I'm thinking you can um you can build like a Chrome extension\nwhere you go in a video and you can already pop up here and chat with that\nvideo like give me the summary what did he say at the beginning what did he say\nat the end like uh it can be a great Learning Resource on top of you YouTube\nor other sources uh from the internet that can change the way we are consuming\nuh content um another idea that I have that\nuh this might serve as a core for implementing uh can be\nsomething for example we as notes da have a lot of content on uh um on our\nChannel when but sometimes it's hard to remember\nwhere for a new students to know like where did we use what so for example if\nyou're interested in animation I would go into a tool into a\nchat box and say in what video uh did they talk about or uh give\nme the video ID or better URL for videos about\nF1 you have you know about I think without even changing anything\nit might work because it will look at the context it will check F1 and we'll\nfind like these videos and let's see I don't have pre-existing list of\nvideos I would need to specific on tools however tools I have designed R\ninformation from videos already know already know about by providing a video\nID where to scrape new videos by providing video URLs mhm okay so yeah it\ndoesn't have a tool to look at video yeah yeah yeah or to scrape new videos provide videos what if it just uses the same\ntool it should work it should work we generate in with the retrieve it needs a\nquery and a video ID yeah this video ID yeah look I'm uh I was not sharing it\nbut I wanted to for it to give me a list of videos about Formula 1 uh I think what but for that to work\nwe just need to create a new tool let me try I'm really curious to\nsee I'll create a new tool called retrieve similar videos and it's not going to get a video\nID but it's going to get the query it's not going to get\nconfiguration and it's going to find like yeah top three videos about that\nand it's going not going to have any filter looking at all the data in the\ndatabase it's not going to serialize the content of a page but it's going\nto uh map over doc. metadata do video ID so\nIDs and then we're going to return IDs retrieve similar videos\ndescription retrieve the IDs of the more similar videos to the\nquery and I don't have this video this video ID so it's another tool that I can\ngive to my agent and I think with that tool if I\ndeploy we should be able to\nto talk with all the videos there and by adding this kind of tools\nlike maybe you you are the tool to index a channel in all of his videos and then\nuh get um a tutor based on a Creator so you index the whole thing that he said\nand then you create a chatbot based on that\nCreator that's actually a very good idea let me see what's happening it deployed\nlet's see uh the same\nthe same question again let's see if it now can give me a list of uh video URLs I found a Formula One related video\nin the database here is the details video ID and this is the video\nlink perfect is the highlights but there is\none more you can access the F1 video direct\n[Music] through um\nI know what I know what happened there because even though um there are more\nitems there about F1 the similarity search here of similar videos only received\nfree top chunks and the fre top chunks might be for the same video so that's\nwhy uh it only gave me one video instead of more so maybe you can increase here\nfrom three chunks to 30 most similar chunks to that query H I\ndon't know or you can have another table where you have videos and what are they\nabout with a little bit shorter description with a shorter Vector based\non the description so that you can also search like this for the videos as\nwell perfect love it and I hope you enjoy this one as well uh all the links\nall the documentation and the are going to be available through the guide link\nin the description below so just simply go in the description and you'll find a\nlink to the step-by-step guide um I'm going to put there also the\nsource code so you can look at it and maybe Implement something of your own\nplay with it like I'm so excited with with the possibilities of this one and\neverything related to AI nowadays um it looks like magic like we\nput stuff together we put the tools together and then it can do anything we\njust have to ask it the right question so I hope you enjoy this one I hope you\nlearn something new uh learn new about a agents about rag system thank you very\nmuch for our sponsors bright data that allowed us to get access to any data on\nthe internet which is so important nowadays in the AI age to have access to\ndata and also uh janio for helping us host deploy our application in a very\nscalable environment in a in a in a server that can scale with our uh\napplication thank you everyone who joined uh if you have more ideas if\nyou'd like to learn more about AI or mobile development or anything else let\nme know in the comments below I'm going to to read them and note it down to to\nbuild something for you in the next week if you enjoy this one make sure to\nsubscribe and I'll see you guys next week bye-bye",
    "formatted_transcript": [
      {
        "start_time": 199,
        "end_time": 9120,
        "duration": 8921,
        "text": "what's up Noz developers welcome back to\nanother live tutorial today we're going"
      },
      {
        "start_time": 5319,
        "end_time": 15759,
        "duration": 10440,
        "text": "to have another AI agent tutorial and\nour AI tutorial that is going to help"
      },
      {
        "start_time": 12639,
        "end_time": 21960,
        "duration": 9321,
        "text": "and teach you how to build an AI agent\nfrom scratch using langra as with an"
      },
      {
        "start_time": 19320,
        "end_time": 28800,
        "duration": 9480,
        "text": "aspect of rag today we're going to learn\nmore about all of these terms what we"
      },
      {
        "start_time": 24000,
        "end_time": 34000,
        "duration": 10000,
        "text": "mean and I'm so excited about everything\nthat is happening right now in the AI"
      },
      {
        "start_time": 30759,
        "end_time": 38760,
        "duration": 8001,
        "text": "world like what's possible to build what\npowerful tools we have available at our"
      },
      {
        "start_time": 36360,
        "end_time": 43920,
        "duration": 7560,
        "text": "fingertips and how easy it is to\nactually Implement them after we"
      },
      {
        "start_time": 41280,
        "end_time": 48399,
        "duration": 7119,
        "text": "understand how they work and the goal of\nthese tutorials is to help you make"
      },
      {
        "start_time": 46399,
        "end_time": 53640,
        "duration": 7241,
        "text": "sense of everything that is going on out\nthere and to give this ideas of what is"
      },
      {
        "start_time": 51320,
        "end_time": 58359,
        "duration": 7039,
        "text": "possible so make sure to follow along\nthis tutorial by the end and I promise"
      },
      {
        "start_time": 55480,
        "end_time": 63760,
        "duration": 8280,
        "text": "you that you're going to know more about\nAI agents and how to build them know"
      },
      {
        "start_time": 60840,
        "end_time": 70119,
        "duration": 9279,
        "text": "more about rag system and how to build\nthem and by then you're actually going"
      },
      {
        "start_time": 66119,
        "end_time": 73840,
        "duration": 7721,
        "text": "to have an system an AI agent with an\ninterface with backend deployed and"
      },
      {
        "start_time": 72439,
        "end_time": 81000,
        "duration": 8561,
        "text": "accessible by\nanyone that can uh answer questions"
      },
      {
        "start_time": 78320,
        "end_time": 86600,
        "duration": 8280,
        "text": "about YouTube videos so the project that\nwe're going to build today is the AI"
      },
      {
        "start_time": 83600,
        "end_time": 90960,
        "duration": 7360,
        "text": "chat with YouTube videos and what do I\nmean by that let me give you a little"
      },
      {
        "start_time": 88079,
        "end_time": 95520,
        "duration": 7441,
        "text": "context that one of the most powerful\napplications of llm nowadays is to build"
      },
      {
        "start_time": 94280,
        "end_time": 103360,
        "duration": 9080,
        "text": "this\nsophisticated um question answering Bots"
      },
      {
        "start_time": 99920,
        "end_time": 110439,
        "duration": 10519,
        "text": "that have knowledge about a very\nparticular area because we most probably"
      },
      {
        "start_time": 107399,
        "end_time": 117520,
        "duration": 10121,
        "text": "all have already experienced uh general\npurpose llms uh such as the chbt let's"
      },
      {
        "start_time": 113600,
        "end_time": 123560,
        "duration": 9960,
        "text": "say from open AI that is exceptionally\ngood at understanding human language"
      },
      {
        "start_time": 120399,
        "end_time": 130119,
        "duration": 9720,
        "text": "and generating text answering questions\nor continuing uh text"
      },
      {
        "start_time": 126600,
        "end_time": 135480,
        "duration": 8880,
        "text": "generation however the general purpose\nAI models they do not know very specific"
      },
      {
        "start_time": 132760,
        "end_time": 140680,
        "duration": 7920,
        "text": "information so while it's a very good\ngeneralist when it comes to specializing"
      },
      {
        "start_time": 138120,
        "end_time": 145680,
        "duration": 7560,
        "text": "in a very specific topic it's not very\ngood it doesn't have most up-to-date"
      },
      {
        "start_time": 142760,
        "end_time": 150920,
        "duration": 8160,
        "text": "information out of a box um so for\nexample if we ask a question about a"
      },
      {
        "start_time": 148120,
        "end_time": 157280,
        "duration": 9160,
        "text": "documentation or about like a document a\nlaw or something like that it can get a"
      },
      {
        "start_time": 153640,
        "end_time": 162400,
        "duration": 8760,
        "text": "little bit lost however if we as\ndevelopers give the right information to"
      },
      {
        "start_time": 159599,
        "end_time": 168360,
        "duration": 8761,
        "text": "the llm the llm can use that information\nto generate an accurate and upto-date"
      },
      {
        "start_time": 165560,
        "end_time": 175280,
        "duration": 9720,
        "text": "anware which makes this system so\npowerful this system of injecting uh"
      },
      {
        "start_time": 171840,
        "end_time": 180200,
        "duration": 8360,
        "text": "context into llm is called Rag and\nthat's what we are going to use today"
      },
      {
        "start_time": 177720,
        "end_time": 184519,
        "duration": 6799,
        "text": "and in our project\nour"
      },
      {
        "start_time": 181840,
        "end_time": 189720,
        "duration": 7880,
        "text": "system is going to get information is\ngoing to get a YouTube video we're going"
      },
      {
        "start_time": 186879,
        "end_time": 193799,
        "duration": 6920,
        "text": "to do some magic there to scrape that\ntranscript of that YouTube video so we"
      },
      {
        "start_time": 191519,
        "end_time": 199560,
        "duration": 8041,
        "text": "know what's being talked in that YouTube\nvideo and then our AI chat is going to"
      },
      {
        "start_time": 197200,
        "end_time": 204080,
        "duration": 6880,
        "text": "be able to answer questions very\nspecific to that YouTube video such as"
      },
      {
        "start_time": 201840,
        "end_time": 209879,
        "duration": 8039,
        "text": "what is the main topic of a podcast how\nmuch money did for example he invest in"
      },
      {
        "start_time": 206920,
        "end_time": 214159,
        "duration": 7239,
        "text": "Beast games like very specific of what\nbeing discussed there and what's going"
      },
      {
        "start_time": 211959,
        "end_time": 220120,
        "duration": 8161,
        "text": "to happen is our AI system is going to\ngo ahead and get the part that is most"
      },
      {
        "start_time": 217879,
        "end_time": 226159,
        "duration": 8280,
        "text": "relevant to this question and based on\nthat part of the interview is going to"
      },
      {
        "start_time": 222959,
        "end_time": 230680,
        "duration": 7721,
        "text": "generate an answer or for example it can\ntake an eight hour tutorial from our"
      },
      {
        "start_time": 228400,
        "end_time": 235079,
        "duration": 6679,
        "text": "Channel and you can ask questions like\nwhat tools didim use there he's going to"
      },
      {
        "start_time": 232879,
        "end_time": 240319,
        "duration": 7440,
        "text": "look for the video uh transcript is\ngoing to find the information there and"
      },
      {
        "start_time": 236720,
        "end_time": 244959,
        "duration": 8239,
        "text": "is going to give you an answer or uh\nmaybe you can use it like I get an error"
      },
      {
        "start_time": 242840,
        "end_time": 250959,
        "duration": 8119,
        "text": "did I miss anything and again it's going\nto use the brain power of an nlm with"
      },
      {
        "start_time": 247959,
        "end_time": 253760,
        "duration": 5801,
        "text": "the context of a video to give you the\nright"
      },
      {
        "start_time": 254079,
        "end_time": 261639,
        "duration": 7560,
        "text": "answer and this is actually how I came\nup to this idea I was thinking about"
      },
      {
        "start_time": 259040,
        "end_time": 266880,
        "duration": 7840,
        "text": "building an agent that can answer\nquestions based on our videos for"
      },
      {
        "start_time": 263360,
        "end_time": 272160,
        "duration": 8800,
        "text": "example you might be searching for um a\ntool and you want to know in which video"
      },
      {
        "start_time": 269400,
        "end_time": 276120,
        "duration": 6720,
        "text": "we implemented you can use this agent to\nask and it's going to go and knowing all"
      },
      {
        "start_time": 274720,
        "end_time": 280680,
        "duration": 5960,
        "text": "the information about our videos is\ngoing to answer where that is happening"
      },
      {
        "start_time": 278919,
        "end_time": 285919,
        "duration": 7000,
        "text": "there are a lot of applications of this\nkind of powerful Bots uh from uh"
      },
      {
        "start_time": 283880,
        "end_time": 293039,
        "duration": 9159,
        "text": "analyzing public data like on YouTube\nchatting with long TXS with long loss uh"
      },
      {
        "start_time": 290320,
        "end_time": 300039,
        "duration": 9719,
        "text": "with blog posts with\npodcasts and much much much"
      },
      {
        "start_time": 296240,
        "end_time": 306080,
        "duration": 9840,
        "text": "more so if we talked about rag let me\nquickly discuss more about that so what"
      },
      {
        "start_time": 302680,
        "end_time": 312479,
        "duration": 9799,
        "text": "is rag rag is stands for retrieval\naugmented generation and in simple terms"
      },
      {
        "start_time": 309400,
        "end_time": 317680,
        "duration": 8280,
        "text": "generation means the part of an llm that\ngenerates text you give it some text"
      },
      {
        "start_time": 315199,
        "end_time": 323360,
        "duration": 8161,
        "text": "usually let's say a question and how it\nworks it generates what is the most"
      },
      {
        "start_time": 320400,
        "end_time": 329680,
        "duration": 9280,
        "text": "probable next part of a text that comes\nafter that usually an answer for example"
      },
      {
        "start_time": 327000,
        "end_time": 336400,
        "duration": 9400,
        "text": "retrieval augmented means that it first\nReves context that it needs and it"
      },
      {
        "start_time": 332680,
        "end_time": 341639,
        "duration": 8959,
        "text": "augments it improves the generation part\nusing the information"
      },
      {
        "start_time": 338440,
        "end_time": 346160,
        "duration": 7720,
        "text": "retrieved so in our case with YouTube it\nfirst will retrieve information about"
      },
      {
        "start_time": 343639,
        "end_time": 351639,
        "duration": 8000,
        "text": "the video about the transcript and then\nusing that information is going to uh"
      },
      {
        "start_time": 349280,
        "end_time": 358280,
        "duration": 9000,
        "text": "generate the\nanswer rag has usually two parts in it"
      },
      {
        "start_time": 355639,
        "end_time": 363880,
        "duration": 8241,
        "text": "and the first part is in the pipeline is\na indexing pipeline"
      },
      {
        "start_time": 360360,
        "end_time": 368919,
        "duration": 8559,
        "text": "this usually happens offline um not when\nthe user requests something but"
      },
      {
        "start_time": 366039,
        "end_time": 374720,
        "duration": 8681,
        "text": "beforehand and that usually happens in\nfollowing steps first we have to load"
      },
      {
        "start_time": 372000,
        "end_time": 382919,
        "duration": 10919,
        "text": "the data this can be documents this can\nbe HTML Json URLs PDFs we need to get"
      },
      {
        "start_time": 379160,
        "end_time": 388800,
        "duration": 9640,
        "text": "the data that we uh want to work with\nafter we get the data we have to split"
      },
      {
        "start_time": 384680,
        "end_time": 394560,
        "duration": 9880,
        "text": "it into manageable chunks because uh if\nwe have like thousands of uh characters"
      },
      {
        "start_time": 391840,
        "end_time": 400240,
        "duration": 8400,
        "text": "into a document it's going to be harder\nto um there is a limit to how much"
      },
      {
        "start_time": 397360,
        "end_time": 404720,
        "duration": 7360,
        "text": "context we can give it an llm and it\nwould be better to split it and then"
      },
      {
        "start_time": 402360,
        "end_time": 410360,
        "duration": 8000,
        "text": "when we have a question only get the\nchunks the pieces of data that are"
      },
      {
        "start_time": 407400,
        "end_time": 415560,
        "duration": 8160,
        "text": "relevant to that question after we split\nthe documents into small chunks what we"
      },
      {
        "start_time": 412639,
        "end_time": 422560,
        "duration": 9921,
        "text": "do is we embed\nembeddings um in simple words means we"
      },
      {
        "start_time": 419360,
        "end_time": 428639,
        "duration": 9279,
        "text": "take take a bunch of text we put it\nthrough a system and in the end we get"
      },
      {
        "start_time": 425160,
        "end_time": 433400,
        "duration": 8240,
        "text": "an vector and a vector is basically an\narray of"
      },
      {
        "start_time": 429960,
        "end_time": 439240,
        "duration": 9280,
        "text": "numbers array of numbers that represents\na vector uh in a very multi"
      },
      {
        "start_time": 436720,
        "end_time": 443879,
        "duration": 7159,
        "text": "multi-dimensional space to think about a\nvector very simple one would be a"
      },
      {
        "start_time": 441560,
        "end_time": 449639,
        "duration": 8079,
        "text": "two-dimensional Vector that is an arrow\npointing into One Direction and having"
      },
      {
        "start_time": 447479,
        "end_time": 455120,
        "duration": 7641,
        "text": "this vector\nlater we can compare it with other"
      },
      {
        "start_time": 452400,
        "end_time": 460960,
        "duration": 8560,
        "text": "vectors to know how similar they are\nthat's basically how similarity search"
      },
      {
        "start_time": 458000,
        "end_time": 467479,
        "duration": 9479,
        "text": "in this system works we take a text we\ngenerate a vector which is a numerical"
      },
      {
        "start_time": 464039,
        "end_time": 472120,
        "duration": 8081,
        "text": "representation of that text after that\nwe take a in The Next Step we're going"
      },
      {
        "start_time": 469440,
        "end_time": 477639,
        "duration": 8199,
        "text": "to see how we find the\nsimilarity so after we generate this"
      },
      {
        "start_time": 474800,
        "end_time": 480879,
        "duration": 6079,
        "text": "embeddings and again it's important to\nunderstand the concept of it it's not"
      },
      {
        "start_time": 479120,
        "end_time": 487120,
        "duration": 8000,
        "text": "very important to understand how this is\nhappening because it's a matter of"
      },
      {
        "start_time": 483479,
        "end_time": 490960,
        "duration": 7481,
        "text": "calling an AI model that is built for\ngenerating this embeddings so think"
      },
      {
        "start_time": 489080,
        "end_time": 496879,
        "duration": 7799,
        "text": "about it as a function we give it text\nit gives us back an array of numbers"
      },
      {
        "start_time": 494000,
        "end_time": 501360,
        "duration": 7360,
        "text": "which represents a\nvector having this Vector we need to"
      },
      {
        "start_time": 499280,
        "end_time": 508120,
        "duration": 8840,
        "text": "store it somewhere and we need to store\nit in a database that can support"
      },
      {
        "start_time": 504919,
        "end_time": 512680,
        "duration": 7761,
        "text": "querying based on Vector similarity\nbasically saying give me documents that"
      },
      {
        "start_time": 510039,
        "end_time": 517760,
        "duration": 7721,
        "text": "are very similar to this document based\non these"
      },
      {
        "start_time": 514519,
        "end_time": 522320,
        "duration": 7801,
        "text": "numbers after we have a store data there\nwe are ready for the next step the next"
      },
      {
        "start_time": 520560,
        "end_time": 527680,
        "duration": 7120,
        "text": "step is retrieve and generate this\nusually happens when the user interacts"
      },
      {
        "start_time": 524279,
        "end_time": 533600,
        "duration": 9321,
        "text": "with our system when it asks a question\nso the user asks a normal question in a"
      },
      {
        "start_time": 530279,
        "end_time": 540079,
        "duration": 9800,
        "text": "very human readable language it can have\nmistakes and so on but llm is smart"
      },
      {
        "start_time": 535800,
        "end_time": 546600,
        "duration": 10800,
        "text": "enough to embed it and based on the\nembedding of a question which is the"
      },
      {
        "start_time": 542800,
        "end_time": 553720,
        "duration": 10920,
        "text": "same process as here we are finding the\ndocuments that are related to that"
      },
      {
        "start_time": 549440,
        "end_time": 553720,
        "duration": 4280,
        "text": "question that are very similar to that"
      },
      {
        "start_time": 553920,
        "end_time": 563640,
        "duration": 9720,
        "text": "question then we see which of these\ndocuments are the most relevant document"
      },
      {
        "start_time": 560120,
        "end_time": 568959,
        "duration": 8839,
        "text": "to this question most relevant pieces of\ndo parts of our text relevant to the"
      },
      {
        "start_time": 567120,
        "end_time": 575560,
        "duration": 8440,
        "text": "question we retrieve it from the\ndatabase and we put it as context in the"
      },
      {
        "start_time": 573160,
        "end_time": 583200,
        "duration": 10040,
        "text": "prompt then this prompt we send it to a\nnormal llm such as open AI um models and"
      },
      {
        "start_time": 580640,
        "end_time": 589079,
        "duration": 8439,
        "text": "then we get an answer back but the\nanswer has the context so it's very"
      },
      {
        "start_time": 585959,
        "end_time": 595839,
        "duration": 9880,
        "text": "specific to the data that we\ngave let me know if that is um that is"
      },
      {
        "start_time": 593360,
        "end_time": 602000,
        "duration": 8640,
        "text": "clear um but we're going to understand\nit and I'm going to explain it again and"
      },
      {
        "start_time": 598160,
        "end_time": 605040,
        "duration": 6880,
        "text": "again as we Implement all of these steps\nlet's talk a little bit about the"
      },
      {
        "start_time": 603120,
        "end_time": 610279,
        "duration": 7159,
        "text": "architecture of application that we're\ngoing to build today so first we're"
      },
      {
        "start_time": 607040,
        "end_time": 617000,
        "duration": 9960,
        "text": "going to have a chat interface we're\ngoing to build that with react the chat"
      },
      {
        "start_time": 613320,
        "end_time": 625040,
        "duration": 11720,
        "text": "interface uh is going\nto interact with our AI agent which is"
      },
      {
        "start_time": 621160,
        "end_time": 629839,
        "duration": 8679,
        "text": "going to be um in in our backend we're\ngoing to build our back end with no GS"
      },
      {
        "start_time": 627680,
        "end_time": 634720,
        "duration": 7040,
        "text": "I'm a JavaScript developer so\nI must rather I I feel more comfortable"
      },
      {
        "start_time": 632279,
        "end_time": 639639,
        "duration": 7360,
        "text": "building with JavaScript but if you're\npython developer langra is also"
      },
      {
        "start_time": 637360,
        "end_time": 644279,
        "duration": 6919,
        "text": "available for Python and I know a lot of\npeople prefer python in this in this"
      },
      {
        "start_time": 642519,
        "end_time": 649440,
        "duration": 6921,
        "text": "situations over JavaScript but I think\nit's perfectly fine with GS as"
      },
      {
        "start_time": 646800,
        "end_time": 653079,
        "duration": 6279,
        "text": "well so the backend is in our case is\ngoing to be an API that is going to"
      },
      {
        "start_time": 651360,
        "end_time": 658560,
        "duration": 7200,
        "text": "contain multiple Parts one of them is\ngoing to be our AI agent and the AI"
      },
      {
        "start_time": 655760,
        "end_time": 665440,
        "duration": 9680,
        "text": "agent in this case like is a simple\nabstraction on top of an llm the large"
      },
      {
        "start_time": 663320,
        "end_time": 671560,
        "duration": 8240,
        "text": "language model provided by either\nanthropic or open"
      },
      {
        "start_time": 668519,
        "end_time": 676600,
        "duration": 8081,
        "text": "Ai and these uh providers like entropic\nand open AI they are very uh"
      },
      {
        "start_time": 674040,
        "end_time": 680880,
        "duration": 6840,
        "text": "interchangeable so use the one that you\nuh feel"
      },
      {
        "start_time": 677959,
        "end_time": 685920,
        "duration": 7961,
        "text": "best um in this situation we're going to\nhave a simple chat chatting application"
      },
      {
        "start_time": 683560,
        "end_time": 691240,
        "duration": 7680,
        "text": "such as CH that we can ask a question it\ncan answer us back nothing more than"
      },
      {
        "start_time": 688560,
        "end_time": 696360,
        "duration": 7800,
        "text": "that it not doesn't yet have context\nabout YouTube videos but we need our"
      },
      {
        "start_time": 694000,
        "end_time": 702160,
        "duration": 8160,
        "text": "chat interface to know and to talk about\nthe YouTube videos that we want to talk"
      },
      {
        "start_time": 698639,
        "end_time": 710079,
        "duration": 11440,
        "text": "about for that we're going to have to\nindex our YouTube videos to build this"
      },
      {
        "start_time": 704959,
        "end_time": 715360,
        "duration": 10401,
        "text": "rag system so if we look at the uh flow\nwe have to load the data"
      },
      {
        "start_time": 712519,
        "end_time": 719800,
        "duration": 7281,
        "text": "first how we're going to load the data\nwell the data we're going to get it from"
      },
      {
        "start_time": 717160,
        "end_time": 725360,
        "duration": 8200,
        "text": "YouTube uh and we're going to do that\nusing the web scraper provided by bright"
      },
      {
        "start_time": 722800,
        "end_time": 731959,
        "duration": 9159,
        "text": "data if you don't know about bright data\nthis is the best uh tool to scrape and"
      },
      {
        "start_time": 729399,
        "end_time": 738399,
        "duration": 9000,
        "text": "get access to public data uh on the\ninternet uh they run on a very powerful"
      },
      {
        "start_time": 735720,
        "end_time": 744320,
        "duration": 8600,
        "text": "proxy Network and are implementing a lot\nof features of unblocking the web for"
      },
      {
        "start_time": 741600,
        "end_time": 750120,
        "duration": 8520,
        "text": "you like solving capturas or rotating\nIPS and basically you can think about"
      },
      {
        "start_time": 747839,
        "end_time": 754279,
        "duration": 6440,
        "text": "like okay I need data I don't know and I\ndon't want to care about how to get it"
      },
      {
        "start_time": 752480,
        "end_time": 760000,
        "duration": 7520,
        "text": "just going to go on bright data and\nthere you're most probably will find an"
      },
      {
        "start_time": 756639,
        "end_time": 765440,
        "duration": 8801,
        "text": "API pre-build for scraping this data for\nyou if not you can use the scraping"
      },
      {
        "start_time": 762639,
        "end_time": 770839,
        "duration": 8200,
        "text": "browser and implement this yourself and\nin the world of AI with bright data you"
      },
      {
        "start_time": 768000,
        "end_time": 777680,
        "duration": 9680,
        "text": "can give basically access to any data on\nthe web to your AI because the power of"
      },
      {
        "start_time": 774000,
        "end_time": 782360,
        "duration": 8360,
        "text": "our AI models is depends on the power of\nthe data that we provide or give it"
      },
      {
        "start_time": 779519,
        "end_time": 787560,
        "duration": 8041,
        "text": "access to so with combining bright data\nwith AI models I think this is a very"
      },
      {
        "start_time": 784880,
        "end_time": 793399,
        "duration": 8519,
        "text": "good combination and Powerful one to\nthat unlocks you so much"
      },
      {
        "start_time": 790360,
        "end_time": 799000,
        "duration": 8640,
        "text": "possibilities so we're going to use Bri\ndata to scrape YouTube videos"
      },
      {
        "start_time": 796399,
        "end_time": 804440,
        "duration": 8041,
        "text": "specifically the transcriptions the\ncaptions and then we're going to need to"
      },
      {
        "start_time": 802199,
        "end_time": 810839,
        "duration": 8640,
        "text": "uh if we looking back into this one we\nneed to split and embed it for that"
      },
      {
        "start_time": 807360,
        "end_time": 818320,
        "duration": 10960,
        "text": "we're going to use an l M such as open\nAI that is uh and specifically an"
      },
      {
        "start_time": 814800,
        "end_time": 824079,
        "duration": 9279,
        "text": "embedding model not a generation model\nembedding means we give you text you"
      },
      {
        "start_time": 820800,
        "end_time": 829160,
        "duration": 8360,
        "text": "give me back a vector after we have a\nvector we need to store it somewhere we"
      },
      {
        "start_time": 826480,
        "end_time": 834440,
        "duration": 7960,
        "text": "will store it in a vector database so it\nshould be a database that can do these"
      },
      {
        "start_time": 831560,
        "end_time": 843639,
        "duration": 12079,
        "text": "queries on vectors like similarity\nqueries and pogress has a PG vector that"
      },
      {
        "start_time": 839639,
        "end_time": 849600,
        "duration": 9961,
        "text": "is an extension uh allowing to do this\nkind of uh similarity search on"
      },
      {
        "start_time": 846519,
        "end_time": 853639,
        "duration": 7120,
        "text": "postgress data so we're going to do that\nas well we're going to create a database"
      },
      {
        "start_time": 851279,
        "end_time": 859839,
        "duration": 8560,
        "text": "we're going to store the data\nthere and that is the first step done"
      },
      {
        "start_time": 857480,
        "end_time": 865079,
        "duration": 7599,
        "text": "for the next step when the user ask a\nquestion we need to retrieve this data"
      },
      {
        "start_time": 862000,
        "end_time": 870000,
        "duration": 8000,
        "text": "and generate it so that's where our AI\nagent we're going to have to give it"
      },
      {
        "start_time": 867360,
        "end_time": 875800,
        "duration": 8440,
        "text": "access to our vector database to\nretrieve the information that it needs"
      },
      {
        "start_time": 872800,
        "end_time": 875800,
        "duration": 3000,
        "text": "to generate the"
      },
      {
        "start_time": 877600,
        "end_time": 886959,
        "duration": 9359,
        "text": "answer so finally we're going to deploy\neverything to jio both the front end and"
      },
      {
        "start_time": 883720,
        "end_time": 892440,
        "duration": 8720,
        "text": "our back end for the AI agent and the\nAPI and if you don't know about genesio"
      },
      {
        "start_time": 889399,
        "end_time": 897639,
        "duration": 8240,
        "text": "this is the best way to deploy web\napplications they support a lot of"
      },
      {
        "start_time": 894360,
        "end_time": 901560,
        "duration": 7200,
        "text": "Frameworks both front end and backend\nand that's what I like about it because"
      },
      {
        "start_time": 899639,
        "end_time": 905720,
        "duration": 6081,
        "text": "I can use jio to deploy both the front\nend and the back end of our application"
      },
      {
        "start_time": 903959,
        "end_time": 911079,
        "duration": 7120,
        "text": "and we're going to have it everything up\nand running very very fast and I would"
      },
      {
        "start_time": 908600,
        "end_time": 917040,
        "duration": 8440,
        "text": "like to say thank you to janio and to\nBri data for making this video possible"
      },
      {
        "start_time": 914320,
        "end_time": 921160,
        "duration": 6840,
        "text": "very excited uh if you are also excited\nI think we can get started let's roll"
      },
      {
        "start_time": 918920,
        "end_time": 921160,
        "duration": 2240,
        "text": "the"
      },
      {
        "start_time": 923740,
        "end_time": 926840,
        "duration": 3100,
        "text": "[Music]"
      },
      {
        "start_time": 927639,
        "end_time": 936959,
        "duration": 9320,
        "text": "intro all all right\nso I want to mention that the"
      },
      {
        "start_time": 934240,
        "end_time": 942800,
        "duration": 8560,
        "text": "step-by-step guide as usually is in the\nlink in the description below so if you"
      },
      {
        "start_time": 939120,
        "end_time": 950839,
        "duration": 11719,
        "text": "go ahead on the under the video where is\nit uh and open it here you're going to"
      },
      {
        "start_time": 945920,
        "end_time": 955360,
        "duration": 9440,
        "text": "see the guide so go ahead open it up uh\ngo to site leave your name email and"
      },
      {
        "start_time": 953880,
        "end_time": 961959,
        "duration": 8079,
        "text": "you're going to\nreceive access to the"
      },
      {
        "start_time": 959399,
        "end_time": 966759,
        "duration": 7360,
        "text": "uh to the guide to the notion guide so\nlet me copy the URL as well to open it"
      },
      {
        "start_time": 964920,
        "end_time": 970959,
        "duration": 6039,
        "text": "up here with\nyou and here you're going to have like"
      },
      {
        "start_time": 969000,
        "end_time": 974600,
        "duration": 5600,
        "text": "more step by step and I left here a\nlittle bit more resources where you can"
      },
      {
        "start_time": 973279,
        "end_time": 983279,
        "duration": 10000,
        "text": "learn\nmore um so we're going to use a lot the"
      },
      {
        "start_time": 981120,
        "end_time": 989639,
        "duration": 8519,
        "text": "blog from linkchain because we're going\nto use l chain to build our AI agent and"
      },
      {
        "start_time": 987240,
        "end_time": 995319,
        "duration": 8079,
        "text": "we have here a two-part block log\nhowever not everything from here is"
      },
      {
        "start_time": 992399,
        "end_time": 1001240,
        "duration": 8841,
        "text": "super applicable to our case so I would\nrecommend you read here to know more or"
      },
      {
        "start_time": 999199,
        "end_time": 1007759,
        "duration": 8560,
        "text": "follow what we are going to do and we're\ngoing to do everything step by step for"
      },
      {
        "start_time": 1005120,
        "end_time": 1015000,
        "duration": 9880,
        "text": "that let's go ahead and open a terminal\nand get started I cannot wait to to get"
      },
      {
        "start_time": 1010920,
        "end_time": 1020839,
        "duration": 9919,
        "text": "started I'm going to zoom in here let's\nnavigate to our"
      },
      {
        "start_time": 1016839,
        "end_time": 1020839,
        "duration": 4000,
        "text": "project YouTube"
      },
      {
        "start_time": 1021920,
        "end_time": 1033480,
        "duration": 11560,
        "text": "0320 like this and let's create a\ndirectory let's call it chat with"
      },
      {
        "start_time": 1031839,
        "end_time": 1038000,
        "duration": 6161,
        "text": "YouTube\nuh let's call it AI chat with"
      },
      {
        "start_time": 1039160,
        "end_time": 1047559,
        "duration": 8399,
        "text": "YouTube let's go ahead and open this\nfolder in our editor of choice I'm going"
      },
      {
        "start_time": 1044959,
        "end_time": 1052960,
        "duration": 8001,
        "text": "to open it with cursor you can open it\nwith Visual Studio code"
      },
      {
        "start_time": 1049640,
        "end_time": 1058440,
        "duration": 8800,
        "text": "uh or any other editor of your choice in\nmy case using cursor is going to speed"
      },
      {
        "start_time": 1056320,
        "end_time": 1065000,
        "duration": 8680,
        "text": "up a little bit the the development\nprocess because nowadays I feel more and"
      },
      {
        "start_time": 1061360,
        "end_time": 1070919,
        "duration": 9559,
        "text": "more often using um AI Co code\ngeneration to to speed up my my process"
      },
      {
        "start_time": 1068600,
        "end_time": 1076200,
        "duration": 7600,
        "text": "today I'm going to use it only in\nspecific cases where it's going to save"
      },
      {
        "start_time": 1073480,
        "end_time": 1080679,
        "duration": 7199,
        "text": "us time but when it comes to learning\nthe AI agent we're going to try to write"
      },
      {
        "start_time": 1078360,
        "end_time": 1087760,
        "duration": 9400,
        "text": "everything\nourself um so being in this folder in"
      },
      {
        "start_time": 1084799,
        "end_time": 1094000,
        "duration": 9201,
        "text": "this project we're going to create uh\nfirst one folder called"
      },
      {
        "start_time": 1091120,
        "end_time": 1100400,
        "duration": 9280,
        "text": "server and this folder I open up\nterminal and did mkd server where you"
      },
      {
        "start_time": 1097600,
        "end_time": 1106919,
        "duration": 9319,
        "text": "can simply do new folder here and let's\ngo ahead and do CD server in our"
      },
      {
        "start_time": 1103120,
        "end_time": 1114280,
        "duration": 11160,
        "text": "terminal and initialize our noj project\nI'm going to do that with npm in need- Y"
      },
      {
        "start_time": 1111360,
        "end_time": 1119679,
        "duration": 8319,
        "text": "and in our server we have package.json\nwhile we are here maybe we can even do"
      },
      {
        "start_time": 1117159,
        "end_time": 1122880,
        "duration": 5721,
        "text": "here type\nmodule"
      },
      {
        "start_time": 1121240,
        "end_time": 1129080,
        "duration": 7840,
        "text": "um\nto be able to use like normal import"
      },
      {
        "start_time": 1126120,
        "end_time": 1132240,
        "duration": 6120,
        "text": "statements and for now that's it in a\nsecond we're going to install"
      },
      {
        "start_time": 1130159,
        "end_time": 1138600,
        "duration": 8441,
        "text": "dependencies here but for now let's go\nahead and simply create the agent. GS"
      },
      {
        "start_time": 1137080,
        "end_time": 1142480,
        "duration": 5400,
        "text": "here because the first step in our case\nis is going to build our"
      },
      {
        "start_time": 1142799,
        "end_time": 1152720,
        "duration": 9921,
        "text": "agent here let's just do console log\nhello"
      },
      {
        "start_time": 1147720,
        "end_time": 1157440,
        "duration": 9720,
        "text": "world in our package.json\nH maybe I don't need it I will just go"
      },
      {
        "start_time": 1156240,
        "end_time": 1162159,
        "duration": 5919,
        "text": "ahead in the\nterminal inside being inside the server"
      },
      {
        "start_time": 1160440,
        "end_time": 1168360,
        "duration": 7920,
        "text": "I'm going to do\nnode agent. GS and if I do that we're"
      },
      {
        "start_time": 1166280,
        "end_time": 1172320,
        "duration": 6040,
        "text": "going to see Hello World so that's how\nwe're going going to start initially"
      },
      {
        "start_time": 1170000,
        "end_time": 1179760,
        "duration": 9760,
        "text": "testing it we're going to Simply execute\nthis agent file later we're going to put"
      },
      {
        "start_time": 1174919,
        "end_time": 1184159,
        "duration": 9240,
        "text": "it inside um behind an API uh so we can\nfetch and integrate it from the client"
      },
      {
        "start_time": 1182159,
        "end_time": 1191159,
        "duration": 9000,
        "text": "side from the front\nend perfect let's go ahead and um there"
      },
      {
        "start_time": 1188600,
        "end_time": 1199320,
        "duration": 10720,
        "text": "is also a blog post which I did two\nweeks ago around building AI agents with"
      },
      {
        "start_time": 1194799,
        "end_time": 1204760,
        "duration": 9961,
        "text": "lra that one is really a step by step uh\nimplementation of how to build this kind"
      },
      {
        "start_time": 1201240,
        "end_time": 1209679,
        "duration": 8439,
        "text": "of agents and I will open it up because\nthere I showed you how to get started"
      },
      {
        "start_time": 1207440,
        "end_time": 1214880,
        "duration": 7440,
        "text": "with that what I want to do is I want to\nFirst install these dependencies I will"
      },
      {
        "start_time": 1212120,
        "end_time": 1221080,
        "duration": 8960,
        "text": "install Leng chain L graph length chain\nDas core and L chain entropic because"
      },
      {
        "start_time": 1218120,
        "end_time": 1227200,
        "duration": 9080,
        "text": "I'm going to use entropic for the llm\nfor the completion model and then also"
      },
      {
        "start_time": 1224840,
        "end_time": 1232360,
        "duration": 7520,
        "text": "Zod we're going to see why we need Zod\nin a moment so let's copy this command"
      },
      {
        "start_time": 1229600,
        "end_time": 1238840,
        "duration": 9240,
        "text": "from here I'm by the way also going to\nadd it uh here in the steps actually"
      },
      {
        "start_time": 1235159,
        "end_time": 1244120,
        "duration": 8961,
        "text": "it's you can go in the steps and take it\nfrom"
      },
      {
        "start_time": 1239799,
        "end_time": 1249360,
        "duration": 9561,
        "text": "there and being inside the server here\nlet's go ahead and install L chain"
      },
      {
        "start_time": 1246400,
        "end_time": 1256039,
        "duration": 9639,
        "text": "langra where is it\nlangra and"
      },
      {
        "start_time": 1251440,
        "end_time": 1262120,
        "duration": 10680,
        "text": "Zod now we need to create thatv file\nwhere we're going to write the um how is"
      },
      {
        "start_time": 1259919,
        "end_time": 1262120,
        "duration": 2201,
        "text": "it"
      },
      {
        "start_time": 1262960,
        "end_time": 1274720,
        "duration": 11760,
        "text": "called we need the environment variable\nwith entropic"
      },
      {
        "start_time": 1269360,
        "end_time": 1274720,
        "duration": 5360,
        "text": "key to get the entropic key go ahead on"
      },
      {
        "start_time": 1275000,
        "end_time": 1278919,
        "duration": 3919,
        "text": "entopic anthropic"
      },
      {
        "start_time": 1282880,
        "end_time": 1295600,
        "duration": 12720,
        "text": "doc go ahead and uh do build with CLA do\nlearn more start building and in your uh"
      },
      {
        "start_time": 1292880,
        "end_time": 1300600,
        "duration": 7720,
        "text": "after signing in in your account you're\ngoing to be able to generate an API Key"
      },
      {
        "start_time": 1298400,
        "end_time": 1306799,
        "duration": 8399,
        "text": "by the way entropic is not the only way\nto do that you can easily integrate with"
      },
      {
        "start_time": 1304360,
        "end_time": 1313039,
        "duration": 8679,
        "text": "open AI as well however I tried with\nopen Ai and I didn't really like the"
      },
      {
        "start_time": 1308960,
        "end_time": 1316919,
        "duration": 7959,
        "text": "performance like how it behaved there so\nI don't know maybe I didn't try the"
      },
      {
        "start_time": 1314480,
        "end_time": 1320840,
        "duration": 6360,
        "text": "right model from open AI but we're still\ngoing to use open AI in the next step"
      },
      {
        "start_time": 1319240,
        "end_time": 1330200,
        "duration": 10960,
        "text": "for something\nelse so in the embedding what we need to"
      },
      {
        "start_time": 1323799,
        "end_time": 1336720,
        "duration": 12921,
        "text": "do in the EnV we need to provide here\nthe API key actually let me go ahead and"
      },
      {
        "start_time": 1334120,
        "end_time": 1336720,
        "duration": 2600,
        "text": "uh"
      },
      {
        "start_time": 1337159,
        "end_time": 1340880,
        "duration": 3721,
        "text": "entropic console."
      },
      {
        "start_time": 1341039,
        "end_time": 1349000,
        "duration": 7961,
        "text": "entropic to generate a new key that we\ncan easily remove later"
      },
      {
        "start_time": 1350960,
        "end_time": 1358120,
        "duration": 7160,
        "text": "uh I need the de how is it\ncalled console"
      },
      {
        "start_time": 1361559,
        "end_time": 1367360,
        "duration": 5801,
        "text": "entropic do don't remember the the\naccount that I"
      },
      {
        "start_time": 1370840,
        "end_time": 1379440,
        "duration": 8600,
        "text": "used okay here it is so what I'm going\nto do is I'm going to go into the API"
      },
      {
        "start_time": 1377159,
        "end_time": 1387279,
        "duration": 10120,
        "text": "keys I'm going to click read key and I'm\ngoing to see say here chat with"
      },
      {
        "start_time": 1383760,
        "end_time": 1392159,
        "duration": 8399,
        "text": "YouTube Key let's do add I'm going to\ncopy it I'm going to also delete it"
      },
      {
        "start_time": 1389120,
        "end_time": 1395799,
        "duration": 6679,
        "text": "later don't worry and here let's put it\ninto an an"
      },
      {
        "start_time": 1396039,
        "end_time": 1410440,
        "duration": 14401,
        "text": "Tropic come on\nun Tropic API key and let's put the API"
      },
      {
        "start_time": 1407200,
        "end_time": 1410440,
        "duration": 3240,
        "text": "key here"
      },
      {
        "start_time": 1412039,
        "end_time": 1418400,
        "duration": 6361,
        "text": "let's also go ahead and add a new file\nhere"
      },
      {
        "start_time": 1415880,
        "end_time": 1425200,
        "duration": 9320,
        "text": "dogit\nignore with without dasg"
      },
      {
        "start_time": 1421320,
        "end_time": 1431520,
        "duration": 10200,
        "text": "ignore and add the. EnV file V because\nwe don't want to commit the uh private"
      },
      {
        "start_time": 1428000,
        "end_time": 1435679,
        "duration": 7679,
        "text": "key of our models to our git while we're\nve we can also put the node"
      },
      {
        "start_time": 1433679,
        "end_time": 1441159,
        "duration": 7480,
        "text": "modules perfect now that we have\nentropic key here uh we are going going"
      },
      {
        "start_time": 1438640,
        "end_time": 1450960,
        "duration": 12320,
        "text": "to have access to it through\nprocess.env but what we're going to do"
      },
      {
        "start_time": 1444960,
        "end_time": 1450960,
        "duration": 6000,
        "text": "is we are going to use it to create"
      },
      {
        "start_time": 1451120,
        "end_time": 1462640,
        "duration": 11520,
        "text": "the the entropic chat\nclient so in our agent what we need is"
      },
      {
        "start_time": 1458360,
        "end_time": 1462640,
        "duration": 4280,
        "text": "first we need to do to"
      },
      {
        "start_time": 1463440,
        "end_time": 1473000,
        "duration": 9560,
        "text": "import chat entropic from L chain\nentropic"
      },
      {
        "start_time": 1468960,
        "end_time": 1476520,
        "duration": 7560,
        "text": "then we need to say hey our llm is going\nto be a new chat"
      },
      {
        "start_time": 1477320,
        "end_time": 1487039,
        "duration": 9719,
        "text": "entropic where you can also specify here\nthe model that you want to use for"
      },
      {
        "start_time": 1483760,
        "end_time": 1492679,
        "duration": 8919,
        "text": "example 3.5 like this or maybe you can\neven do latest or now we can do 3.7 if"
      },
      {
        "start_time": 1491120,
        "end_time": 1498919,
        "duration": 7799,
        "text": "we\nwant you can also provide here the API"
      },
      {
        "start_time": 1496080,
        "end_time": 1505440,
        "duration": 9360,
        "text": "key but if you don't provide B\ninjected as entropic aior key with this"
      },
      {
        "start_time": 1503320,
        "end_time": 1510080,
        "duration": 6760,
        "text": "name it's going to automatically take it\nfrom there so we're going to see like if"
      },
      {
        "start_time": 1507399,
        "end_time": 1519440,
        "duration": 12041,
        "text": "it it if it has\nit next we will create a react"
      },
      {
        "start_time": 1515720,
        "end_time": 1526120,
        "duration": 10400,
        "text": "agent react not from react GS that we\nuse on to build uh"
      },
      {
        "start_time": 1521799,
        "end_time": 1531279,
        "duration": 9480,
        "text": "interfaces uh it's from uh it stands for\nuh reason and act"
      },
      {
        "start_time": 1529039,
        "end_time": 1537000,
        "duration": 7961,
        "text": "so it's going to be an agent that can\nreason and use tools for us uh we just"
      },
      {
        "start_time": 1535279,
        "end_time": 1543080,
        "duration": 7801,
        "text": "give it like what's possible and it's\ngoing to decide how to to uh execute"
      },
      {
        "start_time": 1540200,
        "end_time": 1546960,
        "duration": 6760,
        "text": "everything to provide the the answer\nwe're going to see in a second like what"
      },
      {
        "start_time": 1544520,
        "end_time": 1549159,
        "duration": 4639,
        "text": "I mean by that to create one we're going\nto"
      },
      {
        "start_time": 1549200,
        "end_time": 1560000,
        "duration": 10800,
        "text": "import uh create\nagent"
      },
      {
        "start_time": 1555520,
        "end_time": 1564600,
        "duration": 9080,
        "text": "from L chair uh L chain core let me see\nwhere"
      },
      {
        "start_time": 1561640,
        "end_time": 1573200,
        "duration": 11560,
        "text": "from length chain\nslash length graph slash prebuild if I'm"
      },
      {
        "start_time": 1569080,
        "end_time": 1578440,
        "duration": 9360,
        "text": "not mistaken now we can say that hey our\nagent is going to be this"
      },
      {
        "start_time": 1575760,
        "end_time": 1587120,
        "duration": 11360,
        "text": "agent and an agent needs first of all\nthe llm the llm which is going to be how"
      },
      {
        "start_time": 1582520,
        "end_time": 1592399,
        "duration": 9879,
        "text": "is going to complete stuff but it also\nneeds let's set of tools in our casee we"
      },
      {
        "start_time": 1590640,
        "end_time": 1598679,
        "duration": 8039,
        "text": "do not have tools yet so we're going to\ngive an empty array in this case this"
      },
      {
        "start_time": 1595720,
        "end_time": 1604840,
        "duration": 9120,
        "text": "agent is really dump it's a simple llm\nbut later we can add tools so it can do"
      },
      {
        "start_time": 1600919,
        "end_time": 1612039,
        "duration": 11120,
        "text": "more stuff let's go ahead and uh test it\nout by saying Hey I want to do an"
      },
      {
        "start_time": 1609080,
        "end_time": 1616000,
        "duration": 6920,
        "text": "invocation of this agent with was the\ncapital of the Moon that's very"
      },
      {
        "start_time": 1614360,
        "end_time": 1623000,
        "duration": 8640,
        "text": "interesting question let's see the\nresult and to test it out I'm going to"
      },
      {
        "start_time": 1618279,
        "end_time": 1628360,
        "duration": 10081,
        "text": "to Simply uh execute this agent. GS if I\ndo node agent. GS we're going to see an"
      },
      {
        "start_time": 1626080,
        "end_time": 1637080,
        "duration": 11000,
        "text": "error seeing\nthat uh What uh the create agent"
      },
      {
        "start_time": 1632960,
        "end_time": 1645000,
        "duration": 12040,
        "text": "right at Lang chain d l\ngraph D"
      },
      {
        "start_time": 1640240,
        "end_time": 1645000,
        "duration": 4760,
        "text": "prebuild isn't it from there"
      },
      {
        "start_time": 1649399,
        "end_time": 1660240,
        "duration": 10841,
        "text": "oh create react agent I forgot that so\nyeah create react agent so in this case"
      },
      {
        "start_time": 1656880,
        "end_time": 1665960,
        "duration": 9080,
        "text": "it's not input but it's what uh I think\nit should be messages"
      },
      {
        "start_time": 1662960,
        "end_time": 1665960,
        "duration": 3000,
        "text": "right"
      },
      {
        "start_time": 1667399,
        "end_time": 1673480,
        "duration": 6081,
        "text": "messages let's see how to invoke it\nproperly"
      },
      {
        "start_time": 1687240,
        "end_time": 1694240,
        "duration": 7000,
        "text": "what is the capital of a moon I don't\nknow it says uh it has a red warning"
      },
      {
        "start_time": 1692279,
        "end_time": 1701600,
        "duration": 9321,
        "text": "here but I think it's going to work\nmaybe we'll see we'll"
      },
      {
        "start_time": 1696720,
        "end_time": 1701600,
        "duration": 4880,
        "text": "see ah no I don't think it"
      },
      {
        "start_time": 1707120,
        "end_time": 1719240,
        "duration": 12120,
        "text": "will so it's actually should\nbe we need to give it an array of"
      },
      {
        "start_time": 1716440,
        "end_time": 1725000,
        "duration": 8560,
        "text": "messages and one message will be will\nhave role user and content what is the"
      },
      {
        "start_time": 1721200,
        "end_time": 1729200,
        "duration": 8000,
        "text": "capital of a moon very similar to how um\na chat interface will look like you have"
      },
      {
        "start_time": 1727000,
        "end_time": 1735039,
        "duration": 8039,
        "text": "an array of messages the last one is\nfrom the user and the result is going to"
      },
      {
        "start_time": 1732200,
        "end_time": 1740279,
        "duration": 8079,
        "text": "contain the list of messages and what we\nare interested in is actually the the"
      },
      {
        "start_time": 1737799,
        "end_time": 1746519,
        "duration": 8720,
        "text": "last message but let's see if it will\nwork like this if I do node agent what"
      },
      {
        "start_time": 1743960,
        "end_time": 1752840,
        "duration": 8880,
        "text": "we see is the API key entropic API key\nnot found that's because even though we"
      },
      {
        "start_time": 1748919,
        "end_time": 1760080,
        "duration": 11161,
        "text": "set it up here in the EnV when we\nexecuted node agent."
      },
      {
        "start_time": 1756320,
        "end_time": 1767480,
        "duration": 11160,
        "text": "GS uh we should also provide the\nEnV file equal EnV so we need to load"
      },
      {
        "start_time": 1765399,
        "end_time": 1775480,
        "duration": 10081,
        "text": "the environments from that file before\nexecuting the file the agent and just"
      },
      {
        "start_time": 1771880,
        "end_time": 1780600,
        "duration": 8720,
        "text": "like that we have the answer we have\nmessages we have a human message and we"
      },
      {
        "start_time": 1778039,
        "end_time": 1784919,
        "duration": 6880,
        "text": "have an AI\nmessage this is ID content the moon"
      },
      {
        "start_time": 1783440,
        "end_time": 1791640,
        "duration": 8200,
        "text": "doesn't have a capital city because it\ndoesn't have permanent and so on so cool"
      },
      {
        "start_time": 1789600,
        "end_time": 1797760,
        "duration": 8160,
        "text": "that's\nbasically uh our list of messages so to"
      },
      {
        "start_time": 1795039,
        "end_time": 1807080,
        "duration": 12041,
        "text": "get the last one usually what we do is\nwe say results at minus one to take the"
      },
      {
        "start_time": 1803320,
        "end_time": 1813600,
        "duration": 10280,
        "text": "last message from that array and then we\nlook at the message do content and if I"
      },
      {
        "start_time": 1810440,
        "end_time": 1816600,
        "duration": 6160,
        "text": "execute it again we should see just the\nanswer"
      },
      {
        "start_time": 1817840,
        "end_time": 1822600,
        "duration": 4760,
        "text": "no oh it's results."
      },
      {
        "start_time": 1823760,
        "end_time": 1832159,
        "duration": 8399,
        "text": "messages dot\ncontent so results. messages there's the"
      },
      {
        "start_time": 1830000,
        "end_time": 1836679,
        "duration": 6679,
        "text": "array we take the last one and we\ndisplay the content if I run the"
      },
      {
        "start_time": 1840399,
        "end_time": 1845760,
        "duration": 5361,
        "text": "file we see a simple answer like"
      },
      {
        "start_time": 1846000,
        "end_time": 1856399,
        "duration": 10399,
        "text": "this perfect let me know what do you\nthink we should do next do we connect"
      },
      {
        "start_time": 1854120,
        "end_time": 1861799,
        "duration": 7679,
        "text": "this simple llm because at the moment\nthis is a simple llm like like we called"
      },
      {
        "start_time": 1859159,
        "end_time": 1870720,
        "duration": 11561,
        "text": "it agent and we used like an agent but\nthis doesn't make it a true agent why"
      },
      {
        "start_time": 1866039,
        "end_time": 1877760,
        "duration": 11721,
        "text": "because an agent needs a set of\ntools and the agent is going to receive"
      },
      {
        "start_time": 1874960,
        "end_time": 1884039,
        "duration": 9079,
        "text": "an input for example a prompt and it's\ngoing to first create a plan for"
      },
      {
        "start_time": 1880720,
        "end_time": 1889799,
        "duration": 9079,
        "text": "itself by calling different tools by\ngovering different data it's going to"
      },
      {
        "start_time": 1886480,
        "end_time": 1894799,
        "duration": 8319,
        "text": "create a plan and it will do that over\nand over again until the llm is happy"
      },
      {
        "start_time": 1892559,
        "end_time": 1898880,
        "duration": 6321,
        "text": "and said said like okay this is answer\nthis is a good answer and it's going to"
      },
      {
        "start_time": 1896639,
        "end_time": 1904639,
        "duration": 8000,
        "text": "answer it\nso for that to happen it needs list"
      },
      {
        "start_time": 1902320,
        "end_time": 1909760,
        "duration": 7440,
        "text": "access to tools we're going to do that\nlater and one of the tools is going to"
      },
      {
        "start_time": 1906279,
        "end_time": 1916399,
        "duration": 10120,
        "text": "be to retrieve information about like\nvideos but for now our agent is a simple"
      },
      {
        "start_time": 1913279,
        "end_time": 1924880,
        "duration": 11601,
        "text": "llm we can give it a question it will\ngive us an answer using the cloud"
      },
      {
        "start_time": 1921039,
        "end_time": 1933760,
        "duration": 12721,
        "text": "3.7 from anthropic nothing too fancy now\nthe question is do you want us to build"
      },
      {
        "start_time": 1927639,
        "end_time": 1939120,
        "duration": 11481,
        "text": "first the rug system here in a server\nenvironment and test it with calling"
      },
      {
        "start_time": 1936279,
        "end_time": 1945679,
        "duration": 9400,
        "text": "this function or do you want us to build\nthe interface first and connect it with"
      },
      {
        "start_time": 1941960,
        "end_time": 1949840,
        "duration": 7880,
        "text": "our server so we can interact from the\nfrom the client side from the interface"
      },
      {
        "start_time": 1953080,
        "end_time": 1959000,
        "duration": 5920,
        "text": "what first maybe maybe maybe I know but\nlet's see what do you"
      },
      {
        "start_time": 1960840,
        "end_time": 1963840,
        "duration": 3000,
        "text": "think"
      },
      {
        "start_time": 1970639,
        "end_time": 1977639,
        "duration": 7000,
        "text": "uh and by the way hello everyone who is\njoining us live how are you doing guys"
      },
      {
        "start_time": 1981000,
        "end_time": 1989200,
        "duration": 8200,
        "text": "I'm using L chain in production want to\ntry yam index I haven't tried yam index"
      },
      {
        "start_time": 1986080,
        "end_time": 1993840,
        "duration": 7760,
        "text": "yet uh what's the benefit of uh of it\nover L chain or what's the"
      },
      {
        "start_time": 1991159,
        "end_time": 1999440,
        "duration": 8281,
        "text": "difference I'm also learning a lot like\nabout this AI lately and I'm so excited"
      },
      {
        "start_time": 1997480,
        "end_time": 2009000,
        "duration": 11520,
        "text": "what what the possibilities\nare hello um Joshy hello roio hello"
      },
      {
        "start_time": 2004279,
        "end_time": 2012880,
        "duration": 8601,
        "text": "blender music how are you guys\nuh Hey man you're doing a great job just"
      },
      {
        "start_time": 2010760,
        "end_time": 2017279,
        "duration": 6519,
        "text": "finished your react na8 hour videos what\na Content thank you so much thank you I"
      },
      {
        "start_time": 2015240,
        "end_time": 2024279,
        "duration": 9039,
        "text": "appreciate\nit is it possible to persist data"
      },
      {
        "start_time": 2019880,
        "end_time": 2033000,
        "duration": 13120,
        "text": "between each agent tool calls yes it's\npossible and"
      },
      {
        "start_time": 2025919,
        "end_time": 2033000,
        "duration": 7081,
        "text": "uh between uh agent tool calls yes"
      },
      {
        "start_time": 2034919,
        "end_time": 2046960,
        "duration": 12041,
        "text": "yes and we are going to do it\nwe're going to persist the the history"
      },
      {
        "start_time": 2042480,
        "end_time": 2050560,
        "duration": 8080,
        "text": "of the of the chat so that you you can\nask ask followup"
      },
      {
        "start_time": 2052359,
        "end_time": 2063399,
        "duration": 11040,
        "text": "questions okay let me see\num so I think we go rag first I also"
      },
      {
        "start_time": 2060359,
        "end_time": 2069919,
        "duration": 9560,
        "text": "believe so because rag is the topic the\nthe Hye part of this video and I want to"
      },
      {
        "start_time": 2065720,
        "end_time": 2075760,
        "duration": 10040,
        "text": "explain it well because client side um\nis just the interface so first we're"
      },
      {
        "start_time": 2072919,
        "end_time": 2080119,
        "duration": 7200,
        "text": "going to interact it with this like this\nlater we're going to put it into an API"
      },
      {
        "start_time": 2077800,
        "end_time": 2086000,
        "duration": 8200,
        "text": "and connect it to the client side so\nwe're going to do both of them but"
      },
      {
        "start_time": 2082359,
        "end_time": 2088399,
        "duration": 6040,
        "text": "first let's go ahead and build the the\nrag"
      },
      {
        "start_time": 2094520,
        "end_time": 2102760,
        "duration": 8240,
        "text": "system oky dokie\nso again"
      },
      {
        "start_time": 2103839,
        "end_time": 2115720,
        "duration": 11881,
        "text": "um uh if you go into the where is\nit well first of all uh in our"
      },
      {
        "start_time": 2113720,
        "end_time": 2122040,
        "duration": 8320,
        "text": "presentation if we look at the steps the\nfirst one is going to be loading again"
      },
      {
        "start_time": 2119040,
        "end_time": 2127839,
        "duration": 8799,
        "text": "our plan for loading the data was to use\nbright data to scrape the transcript of"
      },
      {
        "start_time": 2125359,
        "end_time": 2134160,
        "duration": 8801,
        "text": "YouTube videos from YouTube let's go\nahead and manually do that together with"
      },
      {
        "start_time": 2130000,
        "end_time": 2139079,
        "duration": 9079,
        "text": "PR data and uh get some very specific\ndata of how this is going to look in the"
      },
      {
        "start_time": 2136000,
        "end_time": 2144440,
        "duration": 8440,
        "text": "next step for that uh and by the way\nthis part of the video of scraping is"
      },
      {
        "start_time": 2141839,
        "end_time": 2150560,
        "duration": 8721,
        "text": "sponsoring by Bri data so thank you very\nmuch our partners from Bri data for um"
      },
      {
        "start_time": 2148119,
        "end_time": 2155720,
        "duration": 7601,
        "text": "enabling us to build such amazing\napplications and to unlock any data on"
      },
      {
        "start_time": 2153200,
        "end_time": 2162839,
        "duration": 9639,
        "text": "the web so go to follow the link in the\ndescription below or go to bata.com com"
      },
      {
        "start_time": 2158960,
        "end_time": 2169680,
        "duration": 10720,
        "text": "uh and if you go to your\ndashboard we're going to use their web"
      },
      {
        "start_time": 2166800,
        "end_time": 2176680,
        "duration": 9880,
        "text": "data U where is\nit the web"
      },
      {
        "start_time": 2172960,
        "end_time": 2181720,
        "duration": 8760,
        "text": "scrapers so go ahead open web scrapers\nand if we go into the web scraper"
      },
      {
        "start_time": 2178720,
        "end_time": 2189000,
        "duration": 10280,
        "text": "Library these are pre-built webs\nscrapers that give you access to data in"
      },
      {
        "start_time": 2185599,
        "end_time": 2194920,
        "duration": 9321,
        "text": "a similar way as you would fetch an API\nbut actually that data is uh scraped in"
      },
      {
        "start_time": 2192359,
        "end_time": 2199280,
        "duration": 6921,
        "text": "real time from the websites in a very\nsecure and scalable way so you can you"
      },
      {
        "start_time": 2197880,
        "end_time": 2205400,
        "duration": 7520,
        "text": "can scale your\nproject without any limitations there"
      },
      {
        "start_time": 2202760,
        "end_time": 2213400,
        "duration": 10640,
        "text": "are a lot of sources data sources like\nLinkedIn Instagram Facebook uh and so on"
      },
      {
        "start_time": 2209560,
        "end_time": 2218960,
        "duration": 9400,
        "text": "uh even like Ecommerce like from Amazon\nand so on what I'm interested in is"
      },
      {
        "start_time": 2215920,
        "end_time": 2224040,
        "duration": 8120,
        "text": "YouTube data so so if I search Here\nYouTube we're going to see that there"
      },
      {
        "start_time": 2220920,
        "end_time": 2232000,
        "duration": 11080,
        "text": "are actually eight scrapers for YouTube\nand the one that I need is uh video"
      },
      {
        "start_time": 2228599,
        "end_time": 2239800,
        "duration": 11201,
        "text": "posts by URL so let's go ahead and click\non video posts by URL there is also a"
      },
      {
        "start_time": 2234960,
        "end_time": 2244800,
        "duration": 9840,
        "text": "link in our guide scraper API let's do\nnext in the documentation of this API we"
      },
      {
        "start_time": 2242280,
        "end_time": 2248480,
        "duration": 6200,
        "text": "say that we just give a YouTube url we\ncan give also a country where to look"
      },
      {
        "start_time": 2246880,
        "end_time": 2255119,
        "duration": 8239,
        "text": "from\nand in as a response we are going to get"
      },
      {
        "start_time": 2252839,
        "end_time": 2260520,
        "duration": 7681,
        "text": "the data about that YouTube such as the\ntitle the video"
      },
      {
        "start_time": 2256880,
        "end_time": 2268280,
        "duration": 11400,
        "text": "URL likes views date posted description\nand so on but what's cool is that we're"
      },
      {
        "start_time": 2263359,
        "end_time": 2274119,
        "duration": 10760,
        "text": "also going to um scrape the transcript\nthe transcript both in raw format like"
      },
      {
        "start_time": 2271040,
        "end_time": 2280119,
        "duration": 9079,
        "text": "the whole transcript like this and also\nif you scroll down below the transcript"
      },
      {
        "start_time": 2278040,
        "end_time": 2283280,
        "duration": 5240,
        "text": "formatted with a\nduration similar to how it appears on"
      },
      {
        "start_time": 2282560,
        "end_time": 2289800,
        "duration": 7240,
        "text": "the\nvideo so we're going to use this"
      },
      {
        "start_time": 2286040,
        "end_time": 2295319,
        "duration": 9279,
        "text": "transcript from Bri data in our system\nto provide information to our rag system"
      },
      {
        "start_time": 2292880,
        "end_time": 2300880,
        "duration": 8000,
        "text": "to be able to answer questions about\nthat video giving information to the llm"
      },
      {
        "start_time": 2298520,
        "end_time": 2306000,
        "duration": 7480,
        "text": "like what's happening in that video\nlet's go ahead in the API request"
      },
      {
        "start_time": 2303640,
        "end_time": 2312720,
        "duration": 9080,
        "text": "Builder and see how we would interact\nwith Bri data to give us this data for"
      },
      {
        "start_time": 2309599,
        "end_time": 2317280,
        "duration": 7681,
        "text": "example we're going to give inputs and\nwe can do batch request so we can do"
      },
      {
        "start_time": 2314640,
        "end_time": 2325880,
        "duration": 11240,
        "text": "multiple inputs per\nrequest and here it's a simple URL of a"
      },
      {
        "start_time": 2320359,
        "end_time": 2334800,
        "duration": 14441,
        "text": "YouTube video for example uh let me do\ntwo YouTube videos that I'm interested"
      },
      {
        "start_time": 2330359,
        "end_time": 2338200,
        "duration": 7841,
        "text": "in I'm going to do one short one and one\na bit bigger"
      },
      {
        "start_time": 2338760,
        "end_time": 2342640,
        "duration": 3880,
        "text": "let's do where is"
      },
      {
        "start_time": 2343359,
        "end_time": 2352000,
        "duration": 8641,
        "text": "it I'm going to do a short video to be\nable to to see like what's happening and"
      },
      {
        "start_time": 2349400,
        "end_time": 2356400,
        "duration": 7000,
        "text": "later I'm going to also do a bigger one\ngive me one"
      },
      {
        "start_time": 2353280,
        "end_time": 2361800,
        "duration": 8520,
        "text": "second or maybe we should actually do my\nvideo like some some some of my videos"
      },
      {
        "start_time": 2359119,
        "end_time": 2365000,
        "duration": 5881,
        "text": "yeah let's do\nthat for"
      },
      {
        "start_time": 2366119,
        "end_time": 2372079,
        "duration": 5960,
        "text": "example h\nwhich one I'm going to do a live"
      },
      {
        "start_time": 2381000,
        "end_time": 2386440,
        "duration": 5440,
        "text": "stream that one is going to be like"
      },
      {
        "start_time": 2386720,
        "end_time": 2398480,
        "duration": 11760,
        "text": "huge but maybe yeah we're we're going to\ntest it with a huge video as well let me"
      },
      {
        "start_time": 2393040,
        "end_time": 2398480,
        "duration": 5440,
        "text": "just grab for example"
      },
      {
        "start_time": 2405640,
        "end_time": 2414400,
        "duration": 8760,
        "text": "this one so I'm going to give a 7\nMinutes video from Formula 1 about"
      },
      {
        "start_time": 2412440,
        "end_time": 2418160,
        "duration": 5720,
        "text": "today's Sprint col\nification I haven't watched it yet"
      },
      {
        "start_time": 2416440,
        "end_time": 2424000,
        "duration": 7560,
        "text": "because I'm preparing but I'm very\ninterested I'm going to go into the Bri"
      },
      {
        "start_time": 2420160,
        "end_time": 2428359,
        "duration": 8199,
        "text": "data API where it is here and the first\ninput is going to be this one and the"
      },
      {
        "start_time": 2426240,
        "end_time": 2432800,
        "duration": 6560,
        "text": "second one is going to be a longer video\nlike a 4our videos from our Channel"
      },
      {
        "start_time": 2430720,
        "end_time": 2437040,
        "duration": 6320,
        "text": "about building with react native and\nreanimated let's copy this URL as well"
      },
      {
        "start_time": 2435319,
        "end_time": 2443079,
        "duration": 7760,
        "text": "send it as the second\none and what do we see here are some"
      },
      {
        "start_time": 2440280,
        "end_time": 2446359,
        "duration": 6079,
        "text": "configurations to include errors if they\nhappen we can provide a URL where to"
      },
      {
        "start_time": 2445520,
        "end_time": 2451800,
        "duration": 6280,
        "text": "send\nnotifications and I'm going to exclude"
      },
      {
        "start_time": 2449119,
        "end_time": 2460079,
        "duration": 10960,
        "text": "this delivery to external\nstorages if I do that and copy this Cur"
      },
      {
        "start_time": 2456240,
        "end_time": 2460079,
        "duration": 3839,
        "text": "command and go into a"
      },
      {
        "start_time": 2461240,
        "end_time": 2471240,
        "duration": 10000,
        "text": "terminal and open it up like this and\npaste the command"
      },
      {
        "start_time": 2468040,
        "end_time": 2476560,
        "duration": 8520,
        "text": "here also make sure to add the API token\nhere from your account like go ahead and"
      },
      {
        "start_time": 2473720,
        "end_time": 2480760,
        "duration": 7040,
        "text": "first create an API token and added here\nand it's going to automatically be added"
      },
      {
        "start_time": 2478240,
        "end_time": 2486160,
        "duration": 7920,
        "text": "to the command what we're going to see\nback is a snapshot ID a snapshot ID"
      },
      {
        "start_time": 2483440,
        "end_time": 2490119,
        "duration": 6679,
        "text": "basically means that a job for scraping\nthe data started"
      },
      {
        "start_time": 2487800,
        "end_time": 2495560,
        "duration": 7760,
        "text": "usually scraping data takes some time\nit's not instant because it has to"
      },
      {
        "start_time": 2492640,
        "end_time": 2501200,
        "duration": 8560,
        "text": "actually simulate opening a browser and\nnavigating to that page and interacting"
      },
      {
        "start_time": 2498160,
        "end_time": 2507920,
        "duration": 9760,
        "text": "like a user would do so if we look in\nthe logs here we see that a new job with"
      },
      {
        "start_time": 2504800,
        "end_time": 2515119,
        "duration": 10319,
        "text": "this snapshot that we just copy from the\nconsole log we see it here what we can"
      },
      {
        "start_time": 2510960,
        "end_time": 2521800,
        "duration": 10840,
        "text": "do is we can click download to Json and\nwe're going to have a Json file"
      },
      {
        "start_time": 2518119,
        "end_time": 2528200,
        "duration": 10081,
        "text": "let me take the Json file\nand bring it in our"
      },
      {
        "start_time": 2525640,
        "end_time": 2531319,
        "duration": 5679,
        "text": "server\nas come"
      },
      {
        "start_time": 2533000,
        "end_time": 2540240,
        "duration": 7240,
        "text": "on I'm going to bring it here and I'm\ngoing to call"
      },
      {
        "start_time": 2538160,
        "end_time": 2548880,
        "duration": 10720,
        "text": "it\ndata let's call itgs to easier import it"
      },
      {
        "start_time": 2545640,
        "end_time": 2555200,
        "duration": 9560,
        "text": "I'm going to click save to format it and\nI'm going to add at the top export"
      },
      {
        "start_time": 2552720,
        "end_time": 2562160,
        "duration": 9440,
        "text": "default so what we see inde the is an\narray with two objects the first one and"
      },
      {
        "start_time": 2558480,
        "end_time": 2569680,
        "duration": 11200,
        "text": "then the second one we see that this is\nthe title of the video Sprint"
      },
      {
        "start_time": 2565480,
        "end_time": 2569680,
        "duration": 4200,
        "text": "qualifying we see this is the"
      },
      {
        "start_time": 2570440,
        "end_time": 2577920,
        "duration": 7480,
        "text": "transcript and then we see if we scroll\ndown through this transcript formatted"
      },
      {
        "start_time": 2576800,
        "end_time": 2582920,
        "duration": 6120,
        "text": "we're going going to see the second\nvideo as"
      },
      {
        "start_time": 2580200,
        "end_time": 2590960,
        "duration": 10760,
        "text": "well oh come\non the second video is this"
      },
      {
        "start_time": 2587480,
        "end_time": 2594800,
        "duration": 7320,
        "text": "one and the transcript is what'sapp not\njust"
      },
      {
        "start_time": 2592240,
        "end_time": 2600160,
        "duration": 7920,
        "text": "developers so now that we have this data\nlater we're going to automate how we uh"
      },
      {
        "start_time": 2597880,
        "end_time": 2606160,
        "duration": 8280,
        "text": "start and how we get this data for now\nlet's just import it from data.js let's"
      },
      {
        "start_time": 2602880,
        "end_time": 2612319,
        "duration": 9439,
        "text": "import it in our agent GS and say hey\nimport data"
      },
      {
        "start_time": 2609040,
        "end_time": 2620920,
        "duration": 11880,
        "text": "from data GS and let's\nsay video one equal to data at position"
      },
      {
        "start_time": 2616520,
        "end_time": 2626240,
        "duration": 9720,
        "text": "zero or video yeah let's do video\none because this is an array we're going"
      },
      {
        "start_time": 2623720,
        "end_time": 2631559,
        "duration": 7839,
        "text": "to look at the first\nvideo Perfect here is the data The Next"
      },
      {
        "start_time": 2630000,
        "end_time": 2638720,
        "duration": 8720,
        "text": "Step that we have to\ndo is we loaded the data now we have to"
      },
      {
        "start_time": 2635280,
        "end_time": 2638720,
        "duration": 3440,
        "text": "split it"
      },
      {
        "start_time": 2640640,
        "end_time": 2644359,
        "duration": 3719,
        "text": "let me"
      },
      {
        "start_time": 2650520,
        "end_time": 2664160,
        "duration": 13640,
        "text": "uh splitting we can do that in a\nvery ourself by simply looking at the"
      },
      {
        "start_time": 2661359,
        "end_time": 2670160,
        "duration": 8801,
        "text": "transcript of that video and splitting\nit into chunks of 1,000 characters"
      },
      {
        "start_time": 2667400,
        "end_time": 2675599,
        "duration": 8199,
        "text": "however L chain provides some pre-build\nSplitters that are a little bit more"
      },
      {
        "start_time": 2672720,
        "end_time": 2683800,
        "duration": 11080,
        "text": "sophisticated that is improving how this\nsplitting Works to not lose some context"
      },
      {
        "start_time": 2679280,
        "end_time": 2689559,
        "duration": 10279,
        "text": "one of these Splitters is called re\nrecursive character text Splitter from"
      },
      {
        "start_time": 2686920,
        "end_time": 2694960,
        "duration": 8040,
        "text": "length chain\ntext is it at L chain"
      },
      {
        "start_time": 2698599,
        "end_time": 2701359,
        "duration": 2760,
        "text": "isn't it like"
      },
      {
        "start_time": 2707800,
        "end_time": 2718040,
        "duration": 10240,
        "text": "this uh like this and probably I need to\ninstall it right"
      },
      {
        "start_time": 2714800,
        "end_time": 2722640,
        "duration": 7840,
        "text": "npm install yes let's install length\nchain SL text splitters"
      },
      {
        "start_time": 2727200,
        "end_time": 2736000,
        "duration": 8800,
        "text": "so here we're going to\ndo split the video into chunks for that"
      },
      {
        "start_time": 2733640,
        "end_time": 2741280,
        "duration": 7640,
        "text": "we're going to have to define a splitter\nusing"
      },
      {
        "start_time": 2737839,
        "end_time": 2746559,
        "duration": 8720,
        "text": "new recursive character splitter and\nprovide here some options as we can see"
      },
      {
        "start_time": 2744440,
        "end_time": 2751960,
        "duration": 7520,
        "text": "the default ones that are recommended\nhere for me is chunk size and chunk"
      },
      {
        "start_time": 2749520,
        "end_time": 2757920,
        "duration": 8400,
        "text": "overlap so what does it mean chunk size\nmeans how large should the chunks of"
      },
      {
        "start_time": 2754880,
        "end_time": 2765200,
        "duration": 10320,
        "text": "data be here we say it should be 1,000\ncharacters and chck overlap is going to"
      },
      {
        "start_time": 2760920,
        "end_time": 2771599,
        "duration": 10679,
        "text": "Simply uh repeat the last 200 characters\nfrom this Chunk in the next one as well"
      },
      {
        "start_time": 2767920,
        "end_time": 2776480,
        "duration": 8560,
        "text": "in this way if there is important\ncontext between these splits we're not"
      },
      {
        "start_time": 2774040,
        "end_time": 2781200,
        "duration": 7160,
        "text": "going to lose it so even vaa is going to\nlead to a little bit more data because"
      },
      {
        "start_time": 2778720,
        "end_time": 2788720,
        "duration": 10000,
        "text": "it repeats 200 characters at the\nbeginning at end it's going to allow to"
      },
      {
        "start_time": 2783760,
        "end_time": 2788720,
        "duration": 4960,
        "text": "give enough context and not lose it"
      },
      {
        "start_time": 2791960,
        "end_time": 2803800,
        "duration": 11840,
        "text": "now um splitter like this at yeah uh is\ngoing to"
      },
      {
        "start_time": 2798720,
        "end_time": 2808720,
        "duration": 10000,
        "text": "work oh wait splitter by calling split\nuh not text we can do split text as"
      },
      {
        "start_time": 2808760,
        "end_time": 2813240,
        "duration": 4480,
        "text": "well yeah I think we can do split"
      },
      {
        "start_time": 2813960,
        "end_time": 2823240,
        "duration": 9280,
        "text": "text but we should actually work a\nbetter way would be to work with"
      },
      {
        "start_time": 2820880,
        "end_time": 2828280,
        "duration": 7400,
        "text": "documents um so we're going to call\nsplit"
      },
      {
        "start_time": 2825240,
        "end_time": 2834040,
        "duration": 8800,
        "text": "documents for that we need to have a\nlist of documents let's call them"
      },
      {
        "start_time": 2831880,
        "end_time": 2839800,
        "duration": 7920,
        "text": "docs I'm going to Define them a little\nbit here to the top saying that the docs"
      },
      {
        "start_time": 2837480,
        "end_time": 2846960,
        "duration": 9480,
        "text": "is going to be an\narray an array where we create one of"
      },
      {
        "start_time": 2843359,
        "end_time": 2852720,
        "duration": 9361,
        "text": "these documents with our video one\nlet's say that the document needs page"
      },
      {
        "start_time": 2850119,
        "end_time": 2856240,
        "duration": 6121,
        "text": "content and the page content is what is\ninside that document inside that"
      },
      {
        "start_time": 2854640,
        "end_time": 2861880,
        "duration": 7240,
        "text": "document we're going to use the video\none. transcript which if we look into"
      },
      {
        "start_time": 2858920,
        "end_time": 2865920,
        "duration": 7000,
        "text": "the data video one is this object and\nthe"
      },
      {
        "start_time": 2862920,
        "end_time": 2870480,
        "duration": 7560,
        "text": "transcript is this long\ntext so this is going to be the page"
      },
      {
        "start_time": 2874720,
        "end_time": 2883559,
        "duration": 8839,
        "text": "content the new document that document\nshould be"
      },
      {
        "start_time": 2880079,
        "end_time": 2888200,
        "duration": 8121,
        "text": "imported from L chain core\ndocuments now if we take the documents"
      },
      {
        "start_time": 2886280,
        "end_time": 2896920,
        "duration": 10640,
        "text": "and split the documents here we have\nchunks let's see what are these chunks"
      },
      {
        "start_time": 2892359,
        "end_time": 2899319,
        "duration": 6960,
        "text": "console.log chunks if I open it up and\nrun"
      },
      {
        "start_time": 2900319,
        "end_time": 2907680,
        "duration": 7361,
        "text": "the do node agent we're going to see\nwhat entropic key not found yeah because"
      },
      {
        "start_time": 2905800,
        "end_time": 2915200,
        "duration": 9400,
        "text": "we need to\ndo withv file so what we see here is"
      },
      {
        "start_time": 2911720,
        "end_time": 2919440,
        "duration": 7720,
        "text": "that this chunks is an array with bunch\nof"
      },
      {
        "start_time": 2916119,
        "end_time": 2925200,
        "duration": 9081,
        "text": "texts the first 1,000 characters then\nthe next one and these all are documents"
      },
      {
        "start_time": 2922760,
        "end_time": 2929680,
        "duration": 6920,
        "text": "documents documents documents if we look\nat the last part I'm going to even copy"
      },
      {
        "start_time": 2927480,
        "end_time": 2936880,
        "duration": 9400,
        "text": "it and search for it we're going to see\nthat it's both here and both here"
      },
      {
        "start_time": 2933240,
        "end_time": 2943559,
        "duration": 10319,
        "text": "because the text overlaps and that works\nwith v end as well if I'm going to copy"
      },
      {
        "start_time": 2939839,
        "end_time": 2948640,
        "duration": 8801,
        "text": "it it's going to be both here and both\nhere because the last part might be"
      },
      {
        "start_time": 2946359,
        "end_time": 2951760,
        "duration": 5401,
        "text": "important information for this chunk but\nit also can be important information for"
      },
      {
        "start_time": 2950359,
        "end_time": 2957680,
        "duration": 7321,
        "text": "for this\nchunk now we see that these uh documents"
      },
      {
        "start_time": 2954760,
        "end_time": 2963480,
        "duration": 8720,
        "text": "also have this metadata this is a great\nplace to write additional data about"
      },
      {
        "start_time": 2960440,
        "end_time": 2969920,
        "duration": 9480,
        "text": "those documents so if I look into where\nwe Define this document here we can def"
      },
      {
        "start_time": 2966880,
        "end_time": 2977559,
        "duration": 10679,
        "text": "find the metadata here as well and one\nof the important metadata Parts here is"
      },
      {
        "start_time": 2974440,
        "end_time": 2981839,
        "duration": 7399,
        "text": "what video is this content transcripts\nabout because later we're going to have"
      },
      {
        "start_time": 2979280,
        "end_time": 2986720,
        "duration": 7440,
        "text": "a lot of videos so we need to know like\nwhat where is it coming from we can call"
      },
      {
        "start_time": 2984319,
        "end_time": 2993400,
        "duration": 9081,
        "text": "it video ID and say that the video ID is\ncoming from video one. uh video ID"
      },
      {
        "start_time": 2990799,
        "end_time": 3001000,
        "duration": 10201,
        "text": "because if we look into the data there\nis a video ID property here"
      },
      {
        "start_time": 2998040,
        "end_time": 3007040,
        "duration": 9000,
        "text": "now if I will execute this one again\nwe're going to see that in metadata we"
      },
      {
        "start_time": 3003040,
        "end_time": 3011240,
        "duration": 8200,
        "text": "have video ID later we can also filter\nonly the documents that are related to"
      },
      {
        "start_time": 3010200,
        "end_time": 3014240,
        "duration": 4040,
        "text": "this\nvideo"
      },
      {
        "start_time": 3017559,
        "end_time": 3027400,
        "duration": 9841,
        "text": "perfect so the splitting Parts is done\nthe next step is"
      },
      {
        "start_time": 3023079,
        "end_time": 3033960,
        "duration": 10881,
        "text": "embedding and embedding\nif we look into the length chain"
      },
      {
        "start_time": 3030960,
        "end_time": 3033960,
        "duration": 3000,
        "text": "here"
      },
      {
        "start_time": 3034240,
        "end_time": 3043440,
        "duration": 9200,
        "text": "um this is what L graph I'm going to\nfind this"
      },
      {
        "start_time": 3048599,
        "end_time": 3059400,
        "duration": 10801,
        "text": "one uh as you can see for the chat model\nbasically the model that will generate"
      },
      {
        "start_time": 3054880,
        "end_time": 3067440,
        "duration": 12560,
        "text": "text we can use these kind of available\nmodels uh grop open Ai entropic and so"
      },
      {
        "start_time": 3062480,
        "end_time": 3072520,
        "duration": 10040,
        "text": "on and actually more but for the\nembedding we need to use a model that is"
      },
      {
        "start_time": 3070440,
        "end_time": 3077000,
        "duration": 6560,
        "text": "specific for\nembeddings uh as I see entropic doesn't"
      },
      {
        "start_time": 3075079,
        "end_time": 3084480,
        "duration": 9401,
        "text": "have an embedding model so that's why\nit's not here for that we can use open"
      },
      {
        "start_time": 3079760,
        "end_time": 3084480,
        "duration": 4720,
        "text": "AI you can see that open AI"
      },
      {
        "start_time": 3084799,
        "end_time": 3092079,
        "duration": 7280,
        "text": "embeddings you're going to see that that\nmaybe on their site or the"
      },
      {
        "start_time": 3089280,
        "end_time": 3099400,
        "duration": 10120,
        "text": "documentation is that they have this\nkind of models where you give as we"
      },
      {
        "start_time": 3095119,
        "end_time": 3105400,
        "duration": 10281,
        "text": "input some text and it get back the\nembedding as an array of numbers the"
      },
      {
        "start_time": 3102960,
        "end_time": 3110160,
        "duration": 7200,
        "text": "vector of that\ntext so let's go ahead and say that we"
      },
      {
        "start_time": 3108440,
        "end_time": 3116240,
        "duration": 7800,
        "text": "are going to\nuse um open AI as our embedding model so"
      },
      {
        "start_time": 3114000,
        "end_time": 3122960,
        "duration": 8960,
        "text": "let's go ahead and first install length\nchain - open"
      },
      {
        "start_time": 3118040,
        "end_time": 3127520,
        "duration": 9480,
        "text": "AI in our application let's do make sure\nyou are inside the server and install"
      },
      {
        "start_time": 3125640,
        "end_time": 3134920,
        "duration": 9280,
        "text": "the open\nAi and what we're going to need to do is"
      },
      {
        "start_time": 3131119,
        "end_time": 3141920,
        "duration": 10801,
        "text": "we're going to import the first we need\nthe open AI key inside"
      },
      {
        "start_time": 3138640,
        "end_time": 3147520,
        "duration": 8880,
        "text": "ourv go ahead sign up for open AI get to\na key"
      },
      {
        "start_time": 3144119,
        "end_time": 3152799,
        "duration": 8680,
        "text": "and I'm going to get it here\nhere let me do it like"
      },
      {
        "start_time": 3151079,
        "end_time": 3159720,
        "duration": 8641,
        "text": "this\nand I added it to the"
      },
      {
        "start_time": 3155640,
        "end_time": 3168920,
        "duration": 13280,
        "text": "EnV now we are ready to use open AI what\nwe need is to import open AI"
      },
      {
        "start_time": 3163920,
        "end_time": 3174760,
        "duration": 10840,
        "text": "embeddings in our agent open AI\nembeddings from L chain open"
      },
      {
        "start_time": 3172599,
        "end_time": 3181119,
        "duration": 8520,
        "text": "AI after\nsplitting what we are going to do let's"
      },
      {
        "start_time": 3177200,
        "end_time": 3181119,
        "duration": 3919,
        "text": "do here embed"
      },
      {
        "start_time": 3181640,
        "end_time": 3194000,
        "duration": 12360,
        "text": "chunks to embed chunks we\nneed the embeddings using the new create"
      },
      {
        "start_time": 3189760,
        "end_time": 3194000,
        "duration": 4240,
        "text": "or how is it open Ai"
      },
      {
        "start_time": 3200799,
        "end_time": 3208520,
        "duration": 7721,
        "text": "embeddings and you can also specify the\nmodel"
      },
      {
        "start_time": 3205000,
        "end_time": 3212839,
        "duration": 7839,
        "text": "here I'm pretty sure is like uh default\none if you don't specify but know that"
      },
      {
        "start_time": 3210640,
        "end_time": 3219119,
        "duration": 8479,
        "text": "you can specify what exact model we're\ngoing to use the embedding free large"
      },
      {
        "start_time": 3215520,
        "end_time": 3225160,
        "duration": 9640,
        "text": "that is going to produce a specific like\nthe"
      },
      {
        "start_time": 3220440,
        "end_time": 3231960,
        "duration": 11520,
        "text": "model uh produces a specific amount of\num the size of a vector so a large model"
      },
      {
        "start_time": 3228960,
        "end_time": 3238079,
        "duration": 9119,
        "text": "not mistaken should be around I don't\nknow 2,000 or something like that um"
      },
      {
        "start_time": 3239760,
        "end_time": 3248440,
        "duration": 8680,
        "text": "dimensions of that Vector so the more\nDimensions the more nuances it can"
      },
      {
        "start_time": 3245359,
        "end_time": 3248440,
        "duration": 3081,
        "text": "detect in the"
      },
      {
        "start_time": 3250319,
        "end_time": 3259520,
        "duration": 9201,
        "text": "text but at the same time it's more data\nto store larger it's more"
      },
      {
        "start_time": 3257119,
        "end_time": 3265680,
        "duration": 8561,
        "text": "consuming okay so the thing is that now\nthat we have this model that can"
      },
      {
        "start_time": 3261599,
        "end_time": 3272799,
        "duration": 11200,
        "text": "generate embeddings we need a store\nsomewhere"
      },
      {
        "start_time": 3267240,
        "end_time": 3277359,
        "duration": 10119,
        "text": "to store that embedding that data with\nembeddings what we can do if we look in"
      },
      {
        "start_time": 3275400,
        "end_time": 3284079,
        "duration": 8679,
        "text": "the documentation we need to pick a\nvector store we need a storage solution"
      },
      {
        "start_time": 3280839,
        "end_time": 3288839,
        "duration": 8000,
        "text": "that can store these vectors not only\nthey can store it but they can optimally"
      },
      {
        "start_time": 3287200,
        "end_time": 3292920,
        "duration": 5720,
        "text": "query based on\nsimilarity I'm going to start with"
      },
      {
        "start_time": 3291240,
        "end_time": 3297160,
        "duration": 5920,
        "text": "memory because this is going to be the\neasiest one it simply stores them in"
      },
      {
        "start_time": 3294880,
        "end_time": 3303640,
        "duration": 8760,
        "text": "memory and to get started that's totally\nfine for us let's go ahead and import"
      },
      {
        "start_time": 3300640,
        "end_time": 3308599,
        "duration": 7959,
        "text": "memory Vector store from Vector store\nmemory at the"
      },
      {
        "start_time": 3306640,
        "end_time": 3316000,
        "duration": 9360,
        "text": "top\num and let's create the vector"
      },
      {
        "start_time": 3311720,
        "end_time": 3322960,
        "duration": 11240,
        "text": "store where we have our embeddings so\nthis is the vector store new memory"
      },
      {
        "start_time": 3318960,
        "end_time": 3322960,
        "duration": 4000,
        "text": "Vector store and we send this embedding"
      },
      {
        "start_time": 3324799,
        "end_time": 3328319,
        "duration": 3520,
        "text": "model finally"
      },
      {
        "start_time": 3329440,
        "end_time": 3335520,
        "duration": 6080,
        "text": "finally what we need to do give me one\nsecond is"
      },
      {
        "start_time": 3342200,
        "end_time": 3350839,
        "duration": 8639,
        "text": "to um Let me let me think like how to to\nintroduce this one slowly"
      },
      {
        "start_time": 3367599,
        "end_time": 3375280,
        "duration": 7681,
        "text": "okay so what we need to do is say hey\nawait Vector store add documents and"
      },
      {
        "start_time": 3373559,
        "end_time": 3377960,
        "duration": 4401,
        "text": "we're going to add the chunks that we\ngenerated"
      },
      {
        "start_time": 3378000,
        "end_time": 3383000,
        "duration": 5000,
        "text": "here as simple as that"
      },
      {
        "start_time": 3387119,
        "end_time": 3395440,
        "duration": 8321,
        "text": "um how to visualize it that's another\nquestion because yeah let's try right"
      },
      {
        "start_time": 3394000,
        "end_time": 3399039,
        "duration": 5039,
        "text": "now\nlike vector"
      },
      {
        "start_time": 3401680,
        "end_time": 3410440,
        "duration": 8760,
        "text": "store let's try to Simply run our\nproject with no DMV file we see a"
      },
      {
        "start_time": 3410960,
        "end_time": 3421119,
        "duration": 10159,
        "text": "problem package Json\nreader cannot find L chain input"
      },
      {
        "start_time": 3417880,
        "end_time": 3429200,
        "duration": 11320,
        "text": "imported I think uh we also need to\ninstall length chain like this without"
      },
      {
        "start_time": 3424319,
        "end_time": 3429200,
        "duration": 4881,
        "text": "ad npmi length"
      },
      {
        "start_time": 3432760,
        "end_time": 3442680,
        "duration": 9920,
        "text": "chain okay perfect let's now try to\ninvoke the agent"
      },
      {
        "start_time": 3440079,
        "end_time": 3448319,
        "duration": 8240,
        "text": "again and we don't see any errors that\nmeans that everything went fine uh which"
      },
      {
        "start_time": 3446200,
        "end_time": 3455760,
        "duration": 9560,
        "text": "chunks should be should have been\nembedded and wrote to the database"
      },
      {
        "start_time": 3452480,
        "end_time": 3460720,
        "duration": 8240,
        "text": "but we do not have like we do not see it\nlike how can we visualize what's"
      },
      {
        "start_time": 3457640,
        "end_time": 3465680,
        "duration": 8040,
        "text": "happening there\nwell that's because we have simply done"
      },
      {
        "start_time": 3463440,
        "end_time": 3472480,
        "duration": 9040,
        "text": "the first step of indexing loading the\ndata splitting generating embeddings and"
      },
      {
        "start_time": 3468039,
        "end_time": 3477480,
        "duration": 9441,
        "text": "storing the data the next part is the\nretrieving and generating let's go ahead"
      },
      {
        "start_time": 3475160,
        "end_time": 3484240,
        "duration": 9080,
        "text": "and see how we can\nretrieve documents from our database"
      },
      {
        "start_time": 3480640,
        "end_time": 3489839,
        "duration": 9199,
        "text": "that are similar to a question to do\nthat let's go ahead and say"
      },
      {
        "start_time": 3486839,
        "end_time": 3494960,
        "duration": 8121,
        "text": "here uh\nretrieve the most relevant"
      },
      {
        "start_time": 3502039,
        "end_time": 3510880,
        "duration": 8841,
        "text": "chunks so what we are going to do is\nwe're going to say a docs equal a wait"
      },
      {
        "start_time": 3509119,
        "end_time": 3515400,
        "duration": 6281,
        "text": "Vector store we're going to work with\nthis Vector store we're going to do a"
      },
      {
        "start_time": 3513319,
        "end_time": 3521799,
        "duration": 8480,
        "text": "similarity\nsearch a similarity search uh because we"
      },
      {
        "start_time": 3519799,
        "end_time": 3525079,
        "duration": 5280,
        "text": "index the table\nthe the"
      },
      {
        "start_time": 3525119,
        "end_time": 3529960,
        "duration": 4841,
        "text": "data from qualifying let's"
      },
      {
        "start_time": 3533240,
        "end_time": 3544760,
        "duration": 11520,
        "text": "do what season is this\nSprint"
      },
      {
        "start_time": 3539760,
        "end_time": 3549760,
        "duration": 10000,
        "text": "in I'm going to ask send a\nquestion"
      },
      {
        "start_time": 3547480,
        "end_time": 3555720,
        "duration": 8240,
        "text": "relative similar to the context of a\nvideo and I'm going to do a similarity"
      },
      {
        "start_time": 3553160,
        "end_time": 3561799,
        "duration": 8639,
        "text": "search meaning that I'm going to find\nthe chunks that are more similar to this"
      },
      {
        "start_time": 3559440,
        "end_time": 3567000,
        "duration": 7560,
        "text": "question so let's see what is going to\nbe the"
      },
      {
        "start_time": 3563440,
        "end_time": 3572920,
        "duration": 9480,
        "text": "answer uh dogs we already have it right\nso retrieved"
      },
      {
        "start_time": 3570319,
        "end_time": 3579920,
        "duration": 9601,
        "text": "docs let's do it like this and we say\ngive me five docs if I run"
      },
      {
        "start_time": 3577760,
        "end_time": 3583880,
        "duration": 6120,
        "text": "the agent\nagain what we're going to"
      },
      {
        "start_time": 3584119,
        "end_time": 3589160,
        "duration": 5041,
        "text": "see\nis"
      },
      {
        "start_time": 3590039,
        "end_time": 3593039,
        "duration": 3000,
        "text": "the"
      },
      {
        "start_time": 3593599,
        "end_time": 3600720,
        "duration": 7121,
        "text": "documents where at the top is the most\nmost similar one I was expecting to see"
      },
      {
        "start_time": 3598680,
        "end_time": 3607160,
        "duration": 8480,
        "text": "also the actual\nsimilarity because"
      },
      {
        "start_time": 3603240,
        "end_time": 3611000,
        "duration": 7760,
        "text": "here how do I prove you that it's\nworking what if"
      },
      {
        "start_time": 3619480,
        "end_time": 3624599,
        "duration": 5119,
        "text": "I something from the end"
      },
      {
        "start_time": 3628270,
        "end_time": 3631400,
        "duration": 3130,
        "text": "[Music]"
      },
      {
        "start_time": 3637359,
        "end_time": 3645240,
        "duration": 7881,
        "text": "what was the finish time of"
      },
      {
        "start_time": 3645839,
        "end_time": 3654640,
        "duration": 8801,
        "text": "Norris uh and I'm going to select\none and before that I'm going to console"
      },
      {
        "start_time": 3653480,
        "end_time": 3662039,
        "duration": 8559,
        "text": "log the\nchunks and here I'm going to console log"
      },
      {
        "start_time": 3657640,
        "end_time": 3662039,
        "duration": 4399,
        "text": "this one but I'm also going to have"
      },
      {
        "start_time": 3663520,
        "end_time": 3673319,
        "duration": 9799,
        "text": "like so that we see let's go ahead and\ntry to run it"
      },
      {
        "start_time": 3669039,
        "end_time": 3678440,
        "duration": 9401,
        "text": "again initially the documents are in\nchronological order from the"
      },
      {
        "start_time": 3675480,
        "end_time": 3684720,
        "duration": 9240,
        "text": "beginning uh the first one is personal\nbest through the sector and so"
      },
      {
        "start_time": 3681039,
        "end_time": 3690520,
        "duration": 9481,
        "text": "one and at the end we do a similarity\nsearch for for the question what is the"
      },
      {
        "start_time": 3687720,
        "end_time": 3696440,
        "duration": 8720,
        "text": "Norris end time and we see that here\nit's the document that is most related"
      },
      {
        "start_time": 3693240,
        "end_time": 3702680,
        "duration": 9440,
        "text": "to the the the finish time of Norris so\nwe can use this text to try to answer"
      },
      {
        "start_time": 3699960,
        "end_time": 3704920,
        "duration": 4960,
        "text": "that question by move putting it through\nan"
      },
      {
        "start_time": 3705400,
        "end_time": 3716599,
        "duration": 11199,
        "text": "llm uh again this is the similarity\nsearch uh let me see if I can actually"
      },
      {
        "start_time": 3710559,
        "end_time": 3716599,
        "duration": 6040,
        "text": "get query filter call backs"
      },
      {
        "start_time": 3726279,
        "end_time": 3735079,
        "duration": 8800,
        "text": "yeah it doesn't give us the exact like\nuh similarity"
      },
      {
        "start_time": 3731079,
        "end_time": 3738839,
        "duration": 7760,
        "text": "value but that's good it at least does\nthe similarity search"
      },
      {
        "start_time": 3747599,
        "end_time": 3757920,
        "duration": 10321,
        "text": "so what can we do\nhere now that we"
      },
      {
        "start_time": 3753920,
        "end_time": 3765760,
        "duration": 11840,
        "text": "can having a query a question if we can\nfind similar part similar"
      },
      {
        "start_time": 3762520,
        "end_time": 3772640,
        "duration": 10120,
        "text": "transcripts from the video we can use\nthem put them through uh the llm here in"
      },
      {
        "start_time": 3769960,
        "end_time": 3779000,
        "duration": 9040,
        "text": "the agent so that it's going to use it\nto create the answer for example if my"
      },
      {
        "start_time": 3775880,
        "end_time": 3783440,
        "duration": 7560,
        "text": "my question here is going to be what was\nthe finished time of"
      },
      {
        "start_time": 3780920,
        "end_time": 3791319,
        "duration": 10399,
        "text": "Norris it's not going to be able to to\ngive me a proper result uh"
      },
      {
        "start_time": 3787079,
        "end_time": 3795799,
        "duration": 8720,
        "text": "answer because this llm the agent does\nnot yet have access to our Vector"
      },
      {
        "start_time": 3796039,
        "end_time": 3801640,
        "duration": 5601,
        "text": "database or not provide the information\nI have"
      },
      {
        "start_time": 3807359,
        "end_time": 3816079,
        "duration": 8720,
        "text": "so let's go ahead and build a\ntool that"
      },
      {
        "start_time": 3812480,
        "end_time": 3819680,
        "duration": 7200,
        "text": "can use the vector store to retrieve the\nright"
      },
      {
        "start_time": 3816880,
        "end_time": 3824720,
        "duration": 7840,
        "text": "information building a tool is also\ngreatly documented and explained in our"
      },
      {
        "start_time": 3821960,
        "end_time": 3830440,
        "duration": 8480,
        "text": "previous tutorial build and deploy your\nfirst AI agent with"
      },
      {
        "start_time": 3827440,
        "end_time": 3830440,
        "duration": 3000,
        "text": "langra"
      },
      {
        "start_time": 3830760,
        "end_time": 3840880,
        "duration": 10120,
        "text": "um yeah this is the tool so what we need\nto do is import this"
      },
      {
        "start_time": 3837240,
        "end_time": 3844599,
        "duration": 7359,
        "text": "tool at the top let's import the tool\nand we are going to create"
      },
      {
        "start_time": 3844839,
        "end_time": 3848799,
        "duration": 3960,
        "text": "it maybe"
      },
      {
        "start_time": 3848960,
        "end_time": 3855200,
        "duration": 6240,
        "text": "here\nretrieval"
      },
      {
        "start_time": 3852880,
        "end_time": 3862359,
        "duration": 9479,
        "text": "tool const\nretrieve tool is equal to"
      },
      {
        "start_time": 3858440,
        "end_time": 3867559,
        "duration": 9119,
        "text": "Tool and we create it like this we're\ngoing to have an"
      },
      {
        "start_time": 3864440,
        "end_time": 3872279,
        "duration": 7839,
        "text": "async and it should return\nsomething a"
      },
      {
        "start_time": 3869279,
        "end_time": 3877720,
        "duration": 8441,
        "text": "tool has two two parameters the first\none is the actual function that is going"
      },
      {
        "start_time": 3874279,
        "end_time": 3883839,
        "duration": 9560,
        "text": "to run the second one is going to be\nsome metadata about the to Tool let's"
      },
      {
        "start_time": 3880640,
        "end_time": 3887920,
        "duration": 7280,
        "text": "call give it a name retrieve and we need\nto also give it a description"
      },
      {
        "start_time": 3885760,
        "end_time": 3893319,
        "duration": 7559,
        "text": "description is very important because\nthat's how the llm will know what is"
      },
      {
        "start_time": 3890760,
        "end_time": 3898000,
        "duration": 7240,
        "text": "this tool supposed to do and when should\nit be"
      },
      {
        "start_time": 3894440,
        "end_time": 3903119,
        "duration": 8679,
        "text": "used uh here retrieve most relevant uh\nrelevant chunks of"
      },
      {
        "start_time": 3899720,
        "end_time": 3909279,
        "duration": 9559,
        "text": "text from the\ntranscript of a"
      },
      {
        "start_time": 3905839,
        "end_time": 3913160,
        "duration": 7321,
        "text": "YouTube video something like\nthat it's also important to provide here"
      },
      {
        "start_time": 3912319,
        "end_time": 3917760,
        "duration": 5441,
        "text": "a\nschema a"
      },
      {
        "start_time": 3915079,
        "end_time": 3922160,
        "duration": 7081,
        "text": "schema we are going to Define it with\nZod so let's go at the top and import Z"
      },
      {
        "start_time": 3921319,
        "end_time": 3929480,
        "duration": 8161,
        "text": "from\nZod and Zod is a tool that can create"
      },
      {
        "start_time": 3925920,
        "end_time": 3935240,
        "duration": 9320,
        "text": "help us create schemas of how object\nshould look like and a tool needs a"
      },
      {
        "start_time": 3932079,
        "end_time": 3941079,
        "duration": 9000,
        "text": "schema so that the llm knows what inputs\nwhat data to send there let's say that"
      },
      {
        "start_time": 3937799,
        "end_time": 3941079,
        "duration": 3280,
        "text": "the schema is going to be an"
      },
      {
        "start_time": 3941160,
        "end_time": 3951839,
        "duration": 10679,
        "text": "object and there will be a\nquery and the query is going to be a"
      },
      {
        "start_time": 3948920,
        "end_time": 3956200,
        "duration": 7280,
        "text": "string this query now that we added it\nhere is going to be accessible through"
      },
      {
        "start_time": 3953799,
        "end_time": 3962119,
        "duration": 8320,
        "text": "the tool execution function so we can\nhave query and here we can say hey"
      },
      {
        "start_time": 3960400,
        "end_time": 3968880,
        "duration": 8480,
        "text": "console\nconsole oh come on"
      },
      {
        "start_time": 3965920,
        "end_time": 3976520,
        "duration": 10600,
        "text": "console.log retrieve dogs for the query\nconsole log query I'm not going to do a"
      },
      {
        "start_time": 3971920,
        "end_time": 3982000,
        "duration": 10080,
        "text": "similarity search yet let's just return\nan empty"
      },
      {
        "start_time": 3978319,
        "end_time": 3990079,
        "duration": 11760,
        "text": "string noris was\nfirst finishing in"
      },
      {
        "start_time": 3985920,
        "end_time": 3993920,
        "duration": 8000,
        "text": "uh 33 seconds which is impossible but\nit's a way for us to test if this tool"
      },
      {
        "start_time": 3992000,
        "end_time": 4001079,
        "duration": 9079,
        "text": "was invoked or\nnot now if we take this tool and we give"
      },
      {
        "start_time": 3997440,
        "end_time": 4007000,
        "duration": 9560,
        "text": "it to our agent inside the tools\nhere the agent will know that hey I have"
      },
      {
        "start_time": 4004680,
        "end_time": 4011359,
        "duration": 6679,
        "text": "a tool that has this description it can\nretrieve the most relevant chunks of"
      },
      {
        "start_time": 4008640,
        "end_time": 4017640,
        "duration": 9000,
        "text": "text from the video transcript it will\nsay that it's a question that might"
      },
      {
        "start_time": 4014799,
        "end_time": 4021680,
        "duration": 6881,
        "text": "benefit from this information it's going\nto look at the schema and it's going to"
      },
      {
        "start_time": 4019480,
        "end_time": 4026200,
        "duration": 6720,
        "text": "create a query and it's going to call\nthis tool then is going to get back"
      },
      {
        "start_time": 4024039,
        "end_time": 4033440,
        "duration": 9401,
        "text": "result and we'll analyze and see what to\ndo next let's go ahead and see what"
      },
      {
        "start_time": 4028680,
        "end_time": 4038680,
        "duration": 10000,
        "text": "actually is happening now I'm going to\nmaybe comment out the logs that we did"
      },
      {
        "start_time": 4038799,
        "end_time": 4045359,
        "duration": 6560,
        "text": "before and I'm going to invoke our agent"
      },
      {
        "start_time": 4048160,
        "end_time": 4050559,
        "duration": 2399,
        "text": "that was"
      },
      {
        "start_time": 4054319,
        "end_time": 4062160,
        "duration": 7841,
        "text": "bad so what do we see based on the\ntranscript information I found noris"
      },
      {
        "start_time": 4058799,
        "end_time": 4069599,
        "duration": 10800,
        "text": "finished in 33 seconds and was first\nplace that's exactly what we kind of"
      },
      {
        "start_time": 4065799,
        "end_time": 4075799,
        "duration": 10000,
        "text": "said like it's not the right information\nbut where is"
      },
      {
        "start_time": 4072599,
        "end_time": 4082160,
        "duration": 9561,
        "text": "it our question to our agent was what\nwas the finish time of"
      },
      {
        "start_time": 4078920,
        "end_time": 4089279,
        "duration": 10359,
        "text": "Norris you see this is what we are\nasking then LM analyze this question and"
      },
      {
        "start_time": 4085960,
        "end_time": 4093839,
        "duration": 7879,
        "text": "is invoking the retrieve tool and in the\nretrieve tool we are doing here console"
      },
      {
        "start_time": 4091319,
        "end_time": 4099120,
        "duration": 7801,
        "text": "log query the query is already different\nbecause the llm was smart enough to"
      },
      {
        "start_time": 4096520,
        "end_time": 4102600,
        "duration": 6080,
        "text": "change it in a way to get the data that\nit needs so it simply changed it to"
      },
      {
        "start_time": 4101000,
        "end_time": 4109719,
        "duration": 8719,
        "text": "noris finished\ntime that's what an"
      },
      {
        "start_time": 4106600,
        "end_time": 4114759,
        "duration": 8159,
        "text": "agent that's how an agent improves a rag\nsystem because the question is can you"
      },
      {
        "start_time": 4112319,
        "end_time": 4119880,
        "duration": 7561,
        "text": "build an rag system without an agent\ninvance is totally yes you can build a"
      },
      {
        "start_time": 4118000,
        "end_time": 4128000,
        "duration": 10000,
        "text": "normal\num uh flow AI flow for an Rec system"
      },
      {
        "start_time": 4124239,
        "end_time": 4132679,
        "duration": 8440,
        "text": "without this agent inside it's simply\ndoing it step by step in a sequence"
      },
      {
        "start_time": 4130239,
        "end_time": 4137480,
        "duration": 7241,
        "text": "first get data when generate embeddings\nthen get similarities then create the"
      },
      {
        "start_time": 4134960,
        "end_time": 4143120,
        "duration": 8160,
        "text": "prompt and then send it to the llm a lot\nof things can be done manually and in"
      },
      {
        "start_time": 4139480,
        "end_time": 4148759,
        "duration": 9279,
        "text": "sequence but having an llm here we see\nthe first benefit is that the"
      },
      {
        "start_time": 4146319,
        "end_time": 4152359,
        "duration": 6040,
        "text": "question that we ask is going to\nactually be transformed to something"
      },
      {
        "start_time": 4150560,
        "end_time": 4158640,
        "duration": 8080,
        "text": "that is going to make a lot more sense\nfor the AI to get the"
      },
      {
        "start_time": 4154400,
        "end_time": 4162440,
        "duration": 8040,
        "text": "data and we see that we faked some data\nhere so in the retrieval tool we just"
      },
      {
        "start_time": 4160279,
        "end_time": 4167759,
        "duration": 7480,
        "text": "said no resource first and finish in 33\nseconds and then having this information"
      },
      {
        "start_time": 4164880,
        "end_time": 4173560,
        "duration": 8680,
        "text": "llm generated the final answer that we\nsee here in their"
      },
      {
        "start_time": 4170040,
        "end_time": 4178120,
        "duration": 8080,
        "text": "response perfect but let's go ahead and\nhaving this"
      },
      {
        "start_time": 4174719,
        "end_time": 4185120,
        "duration": 10401,
        "text": "query let's do this retrieval of\ndocs because we have a query we have a"
      },
      {
        "start_time": 4180920,
        "end_time": 4185120,
        "duration": 4200,
        "text": "vector store we can"
      },
      {
        "start_time": 4185400,
        "end_time": 4196239,
        "duration": 10839,
        "text": "use the query inside a similarity search\nwe can search how many chunks are do you"
      },
      {
        "start_time": 4194560,
        "end_time": 4202800,
        "duration": 8240,
        "text": "think would be Rel\nlet's do three chunks maybe it's going"
      },
      {
        "start_time": 4200000,
        "end_time": 4207840,
        "duration": 7840,
        "text": "to to be in three different places at\nthe same time the llm can call this over"
      },
      {
        "start_time": 4205480,
        "end_time": 4214199,
        "duration": 8719,
        "text": "and over again for to get all the\nresponse so F3 or maybe F5 probably is"
      },
      {
        "start_time": 4211760,
        "end_time": 4217719,
        "duration": 5959,
        "text": "going to be enough so now that we\nretrieve the docks"
      },
      {
        "start_time": 4227840,
        "end_time": 4242400,
        "duration": 14560,
        "text": "um let's put the them in a Ser alized\ndogs meaning let's merge them together"
      },
      {
        "start_time": 4239000,
        "end_time": 4246239,
        "duration": 7239,
        "text": "and what I'm going to do is I'm going to\ndo retrieve dock so for every"
      },
      {
        "start_time": 4246960,
        "end_time": 4253120,
        "duration": 6160,
        "text": "doc\nlet's return"
      },
      {
        "start_time": 4258840,
        "end_time": 4261560,
        "duration": 2720,
        "text": "I don't know"
      },
      {
        "start_time": 4262320,
        "end_time": 4267520,
        "duration": 5200,
        "text": "content doc. page"
      },
      {
        "start_time": 4270040,
        "end_time": 4281239,
        "duration": 11199,
        "text": "content do Doc Page content and at the\nend I'm going to put up dashn to say"
      },
      {
        "start_time": 4276560,
        "end_time": 4281239,
        "duration": 4679,
        "text": "that it's the end"
      },
      {
        "start_time": 4290600,
        "end_time": 4297920,
        "duration": 7320,
        "text": "or maybe I'll simply do let's let's\nsimplify"
      },
      {
        "start_time": 4295320,
        "end_time": 4304159,
        "duration": 8839,
        "text": "it so I'm going to map for the documents\nI'm going to leave an array of Simply"
      },
      {
        "start_time": 4300520,
        "end_time": 4309760,
        "duration": 9240,
        "text": "the content and I'm going to do a DOT\njoin with a"
      },
      {
        "start_time": 4306239,
        "end_time": 4315760,
        "duration": 9521,
        "text": "dashn basically what I'm doing here is\nI'm taking five or three docs that we"
      },
      {
        "start_time": 4312520,
        "end_time": 4319159,
        "duration": 6639,
        "text": "get and put them in one single text\nand I can take the serialized docs and"
      },
      {
        "start_time": 4317960,
        "end_time": 4325400,
        "duration": 7440,
        "text": "return it\nhere uh to back to the llm now if I'm"
      },
      {
        "start_time": 4323480,
        "end_time": 4331280,
        "duration": 7800,
        "text": "going to go ahead and execute the same\nquery again it's supposed to base its"
      },
      {
        "start_time": 4328800,
        "end_time": 4336760,
        "duration": 7960,
        "text": "answer from the transcript that we\nactually"
      },
      {
        "start_time": 4333360,
        "end_time": 4341400,
        "duration": 8040,
        "text": "fetched so this is the query that our\ntool received and we see based on the"
      },
      {
        "start_time": 4340080,
        "end_time": 4346360,
        "duration": 6280,
        "text": "information retrieve from the video\ntranscript L is finish in six position"
      },
      {
        "start_time": 4344120,
        "end_time": 4350800,
        "duration": 6680,
        "text": "in what appears to be a Sprint\nqualifying session the transcript"
      },
      {
        "start_time": 4348280,
        "end_time": 4356600,
        "duration": 8320,
        "text": "mentions Hamilton versus upb cler\nRussell Norris in six we listening the"
      },
      {
        "start_time": 4353400,
        "end_time": 4365800,
        "duration": 12400,
        "text": "order of drivers so you see it generated\nan answer based on the transcript so"
      },
      {
        "start_time": 4359440,
        "end_time": 4372280,
        "duration": 12840,
        "text": "that's in a way our whole rag AI agent\ncomplete uh if we look at this we"
      },
      {
        "start_time": 4369560,
        "end_time": 4377520,
        "duration": 7960,
        "text": "started with indexing first and now we\nhave this retrieval and generation"
      },
      {
        "start_time": 4375199,
        "end_time": 4383080,
        "duration": 7881,
        "text": "having a question from a\nuser we provide a tool that can retrieve"
      },
      {
        "start_time": 4381000,
        "end_time": 4389400,
        "duration": 8400,
        "text": "relevant information from\ntranscripts from our Vector database and"
      },
      {
        "start_time": 4386440,
        "end_time": 4392920,
        "duration": 6480,
        "text": "then using an llm like entropic we are\ngenerating the answer"
      },
      {
        "start_time": 4393600,
        "end_time": 4397080,
        "duration": 3480,
        "text": "here perfect"
      },
      {
        "start_time": 4401000,
        "end_time": 4410760,
        "duration": 9760,
        "text": "now let me go ahead um\nand initialize a"
      },
      {
        "start_time": 4407719,
        "end_time": 4416480,
        "duration": 8761,
        "text": "git so you're going to have access\nbecause this is the base but we are just"
      },
      {
        "start_time": 4412520,
        "end_time": 4420440,
        "duration": 7920,
        "text": "getting started guys let's do get add\ngit"
      },
      {
        "start_time": 4417719,
        "end_time": 4425360,
        "duration": 7641,
        "text": "commit uh\nbasic AI agent with"
      },
      {
        "start_time": 4433239,
        "end_time": 4437040,
        "duration": 3801,
        "text": "rag um"
      },
      {
        "start_time": 4437920,
        "end_time": 4440360,
        "duration": 2440,
        "text": "what's"
      },
      {
        "start_time": 4443679,
        "end_time": 4450320,
        "duration": 6641,
        "text": "happening let me check the the live chat\nif you have any questions feel free to"
      },
      {
        "start_time": 4448480,
        "end_time": 4454440,
        "duration": 5960,
        "text": "to ask them I'm going to stop from time\nto time to answer"
      },
      {
        "start_time": 4456880,
        "end_time": 4464560,
        "duration": 7680,
        "text": "them I'm already building a project like\nthis amazing I had not started to do the"
      },
      {
        "start_time": 4462560,
        "end_time": 4469480,
        "duration": 6920,
        "text": "video file pipeline yet so this is\nperfect this is a video file uh we are"
      },
      {
        "start_time": 4467679,
        "end_time": 4473600,
        "duration": 5921,
        "text": "not working with video files we're\nworking with transcripts of the"
      },
      {
        "start_time": 4476000,
        "end_time": 4480320,
        "duration": 4320,
        "text": "videos Sprint but you said"
      },
      {
        "start_time": 4480440,
        "end_time": 4489480,
        "duration": 9040,
        "text": "spring not sure\nwhen oh it uses transcript that's how my"
      },
      {
        "start_time": 4487400,
        "end_time": 4495920,
        "duration": 8520,
        "text": "project currently works yeah perfect\nwhat is rag rag as I was explaining"
      },
      {
        "start_time": 4493000,
        "end_time": 4503360,
        "duration": 10360,
        "text": "earlier is\nso we have an llm an llm is great at"
      },
      {
        "start_time": 4499320,
        "end_time": 4508239,
        "duration": 8919,
        "text": "generating text that's how it answers\nquestions you give it some text which"
      },
      {
        "start_time": 4505719,
        "end_time": 4515159,
        "duration": 9440,
        "text": "can be a question and it tries to\npredict what should be the next part of"
      },
      {
        "start_time": 4510840,
        "end_time": 4519400,
        "duration": 8560,
        "text": "a text meaning an answer it's very good\nat understanding language and at"
      },
      {
        "start_time": 4516719,
        "end_time": 4523840,
        "duration": 7121,
        "text": "predicting what comes next and it's very\ngood at general information but it's not"
      },
      {
        "start_time": 4521560,
        "end_time": 4529880,
        "duration": 8320,
        "text": "very good at very specific information\nthat either my not be public or it can"
      },
      {
        "start_time": 4527520,
        "end_time": 4535800,
        "duration": 8280,
        "text": "be information that is super up to date\nlike what is today's we in AI llm will"
      },
      {
        "start_time": 4533920,
        "end_time": 4545679,
        "duration": 11759,
        "text": "not have that\ninformation so what we are doing is we"
      },
      {
        "start_time": 4539639,
        "end_time": 4552600,
        "duration": 12961,
        "text": "are giving AI access to a data source\nthat we"
      },
      {
        "start_time": 4549080,
        "end_time": 4559120,
        "duration": 10040,
        "text": "can uh index on the similarity based on\na search term for example"
      },
      {
        "start_time": 4556080,
        "end_time": 4564120,
        "duration": 8040,
        "text": "you have a documentation\nwebsite and you want to build a chatbot"
      },
      {
        "start_time": 4561840,
        "end_time": 4571280,
        "duration": 9440,
        "text": "that users can write how to initialize a\nnew project the chatbot will first look"
      },
      {
        "start_time": 4567960,
        "end_time": 4576480,
        "duration": 8520,
        "text": "through all the the documentation pages\nand will find the documentation pages"
      },
      {
        "start_time": 4574280,
        "end_time": 4581000,
        "duration": 6720,
        "text": "that are more relevant to the question\nhow to initialize a project it might"
      },
      {
        "start_time": 4578679,
        "end_time": 4585360,
        "duration": 6681,
        "text": "find two to three very relevant\ndocumentations it's going to use the"
      },
      {
        "start_time": 4583000,
        "end_time": 4590960,
        "duration": 7960,
        "text": "information from V it's going to put it\nthrough the llm back saying hey this is"
      },
      {
        "start_time": 4587800,
        "end_time": 4596199,
        "duration": 8399,
        "text": "what user is asking this is what\ndocumentations we have provide an answer"
      },
      {
        "start_time": 4593560,
        "end_time": 4603760,
        "duration": 10200,
        "text": "to that question so this part of\ninjecting this data retrieving the data"
      },
      {
        "start_time": 4599520,
        "end_time": 4610880,
        "duration": 11360,
        "text": "is the what makes it a rag\nsystem and allows it to be powerful in"
      },
      {
        "start_time": 4607600,
        "end_time": 4616840,
        "duration": 9240,
        "text": "order to know like more data more\nrelevant data that you that you might"
      },
      {
        "start_time": 4612920,
        "end_time": 4616840,
        "duration": 3920,
        "text": "need for specific use cases"
      },
      {
        "start_time": 4619600,
        "end_time": 4625480,
        "duration": 5880,
        "text": "so llm we access to additional data"
      },
      {
        "start_time": 4649159,
        "end_time": 4659040,
        "duration": 9881,
        "text": "have you figure out how to prompt\ncash how to prompt cash with transcripts"
      },
      {
        "start_time": 4657120,
        "end_time": 4662880,
        "duration": 5760,
        "text": "in this setup what do you mean by that\nprompt prompt C"
      },
      {
        "start_time": 4663320,
        "end_time": 4666679,
        "duration": 3359,
        "text": "cash let me"
      },
      {
        "start_time": 4666840,
        "end_time": 4676480,
        "duration": 9640,
        "text": "know okay so we have our agent that\nwhere is"
      },
      {
        "start_time": 4673320,
        "end_time": 4686960,
        "duration": 13640,
        "text": "it at current is doing a lot of\nstuff it's loading data from from our"
      },
      {
        "start_time": 4681120,
        "end_time": 4691760,
        "duration": 10640,
        "text": "dam data there it's splitting it it's uh\nadding it to a vector database by"
      },
      {
        "start_time": 4690120,
        "end_time": 4696760,
        "duration": 6640,
        "text": "embedding so a lot of things are\nhappening here behind the scene behind"
      },
      {
        "start_time": 4693440,
        "end_time": 4701520,
        "duration": 8080,
        "text": "this line documents it's not simply\ninserting it to the database but it's"
      },
      {
        "start_time": 4698440,
        "end_time": 4708760,
        "duration": 10320,
        "text": "first generating these embeddings using\nthe open AI model"
      },
      {
        "start_time": 4705560,
        "end_time": 4715600,
        "duration": 10040,
        "text": "uh because having them inside a vector\nstore we can later retrieve them based"
      },
      {
        "start_time": 4712440,
        "end_time": 4720440,
        "duration": 8000,
        "text": "on a similarity search basically hey\nhaving this text what is the most"
      },
      {
        "start_time": 4717199,
        "end_time": 4724199,
        "duration": 7000,
        "text": "similar document for for for that text\nand similar in in terms of"
      },
      {
        "start_time": 4724560,
        "end_time": 4735840,
        "duration": 11280,
        "text": "context so we build a tool and we build\nan agent we give that agent V tool that"
      },
      {
        "start_time": 4732080,
        "end_time": 4739800,
        "duration": 7720,
        "text": "can retrieve documents perfect\nin The Next Step we're going to clean it"
      },
      {
        "start_time": 4737520,
        "end_time": 4745320,
        "duration": 7800,
        "text": "up a bit and start thinking about like\nhow to move it closer to a production R"
      },
      {
        "start_time": 4742480,
        "end_time": 4750480,
        "duration": 8000,
        "text": "application and system that that can run\non autopilot with"
      },
      {
        "start_time": 4747080,
        "end_time": 4756040,
        "duration": 8960,
        "text": "multiple um with multiple videos with a\nproper database because right now we are"
      },
      {
        "start_time": 4753280,
        "end_time": 4762960,
        "duration": 9680,
        "text": "using the memory Vector store in memory\nVector store storing this data in memory"
      },
      {
        "start_time": 4759480,
        "end_time": 4766199,
        "duration": 6719,
        "text": "and as soon as I stop the the server\nit's lost"
      },
      {
        "start_time": 4766719,
        "end_time": 4775080,
        "duration": 8361,
        "text": "so for AI there is prom caching where\nthe llm will cache your input so it can"
      },
      {
        "start_time": 4772120,
        "end_time": 4781000,
        "duration": 8880,
        "text": "be can be reused so like with Claude\nyour cached input is like if the input"
      },
      {
        "start_time": 4777560,
        "end_time": 4790480,
        "duration": 12920,
        "text": "is $1 the cached input will\nbe 115 but then you send the same thing"
      },
      {
        "start_time": 4785520,
        "end_time": 4790480,
        "duration": 4960,
        "text": "again into cash so the input is like 20"
      },
      {
        "start_time": 4792920,
        "end_time": 4801719,
        "duration": 8799,
        "text": "cents yeah not sure not sure how this is\ngoing to work"
      },
      {
        "start_time": 4797679,
        "end_time": 4801719,
        "duration": 4040,
        "text": "here I would have to look into"
      },
      {
        "start_time": 4810760,
        "end_time": 4816360,
        "duration": 5600,
        "text": "that okayy dokie okay"
      },
      {
        "start_time": 4838360,
        "end_time": 4844120,
        "duration": 5760,
        "text": "uh one second guys let me think about\nsomething"
      },
      {
        "start_time": 4872159,
        "end_time": 4879480,
        "duration": 7321,
        "text": "um next let me show you a small problem\nand fix it together with you for example"
      },
      {
        "start_time": 4877320,
        "end_time": 4886560,
        "duration": 9240,
        "text": "we are asking the first question let's\ndo it like this uh"
      },
      {
        "start_time": 4882560,
        "end_time": 4886560,
        "duration": 4000,
        "text": "console log"
      },
      {
        "start_time": 4886600,
        "end_time": 4896840,
        "duration": 10240,
        "text": "q1 is going to be this one and what if\nwe go ahead and"
      },
      {
        "start_time": 4893679,
        "end_time": 4902760,
        "duration": 9081,
        "text": "ask the question two which is going to\nbe what is the finish time"
      },
      {
        "start_time": 4899600,
        "end_time": 4912120,
        "duration": 12520,
        "text": "of very stop and I don't know finish\ntime or position or no let's do it in"
      },
      {
        "start_time": 4907199,
        "end_time": 4920560,
        "duration": 13361,
        "text": "another way let's do what about ver\nstopen and here what was"
      },
      {
        "start_time": 4916000,
        "end_time": 4920560,
        "duration": 4560,
        "text": "the uh finish"
      },
      {
        "start_time": 4920760,
        "end_time": 4930040,
        "duration": 9280,
        "text": "position and time what I'm trying to do\nhere and let's do results two and here"
      },
      {
        "start_time": 4926480,
        "end_time": 4936239,
        "duration": 9759,
        "text": "results two is I'm trying to simulate\nasking a follow-up question a followup"
      },
      {
        "start_time": 4932800,
        "end_time": 4943880,
        "duration": 11080,
        "text": "question might not have all the context\nI mean a good chat AI agent will REM"
      },
      {
        "start_time": 4941880,
        "end_time": 4951199,
        "duration": 9319,
        "text": "will understand that a question like\nthis what about stopen is not"
      },
      {
        "start_time": 4948000,
        "end_time": 4955920,
        "duration": 7920,
        "text": "is is connected with a previous question\nso it should be something like finish"
      },
      {
        "start_time": 4952920,
        "end_time": 4961159,
        "duration": 8239,
        "text": "position over stoen in order for that to\nhappen our agent should have short-term"
      },
      {
        "start_time": 4958120,
        "end_time": 4967920,
        "duration": 9800,
        "text": "memory knowing uh or actually long-term\nmemory uh having context about like"
      },
      {
        "start_time": 4964639,
        "end_time": 4976440,
        "duration": 11801,
        "text": "previous messages in the Fred because if\nI do that right now if I'm not"
      },
      {
        "start_time": 4971800,
        "end_time": 4976440,
        "duration": 4640,
        "text": "mistaken uh let me do CD ser"
      },
      {
        "start_time": 4978639,
        "end_time": 4987600,
        "duration": 8961,
        "text": "server let's do\nnode and invoke it it should answer"
      },
      {
        "start_time": 4984360,
        "end_time": 4990400,
        "duration": 6040,
        "text": "correctly the first the question one\nwhat is the finished"
      },
      {
        "start_time": 4997320,
        "end_time": 5003639,
        "duration": 6319,
        "text": "position it failed to actually invoke\nthe tool there"
      },
      {
        "start_time": 5009440,
        "end_time": 5017120,
        "duration": 7680,
        "text": "and in the cute question two about your\nstomping why did it ask about Norris"
      },
      {
        "start_time": 5014800,
        "end_time": 5017120,
        "duration": 2320,
        "text": "wait a"
      },
      {
        "start_time": 5028800,
        "end_time": 5036320,
        "duration": 7520,
        "text": "second that's a bit weird because when I\nasked about ver St and it started doing"
      },
      {
        "start_time": 5033719,
        "end_time": 5043000,
        "duration": 9281,
        "text": "about noris\nuh oh oh oh oh oh oh oh because I'm"
      },
      {
        "start_time": 5040239,
        "end_time": 5048880,
        "duration": 8641,
        "text": "stupid let's do what about we're\nstopping"
      },
      {
        "start_time": 5044360,
        "end_time": 5048880,
        "duration": 4520,
        "text": "here I left literally the same"
      },
      {
        "start_time": 5050679,
        "end_time": 5056440,
        "duration": 5761,
        "text": "question based on video"
      },
      {
        "start_time": 5058800,
        "end_time": 5063360,
        "duration": 4560,
        "text": "transcript let's try again"
      },
      {
        "start_time": 5068560,
        "end_time": 5075920,
        "duration": 7360,
        "text": "so for this question it invokes the tool\nit asks for noris finish"
      },
      {
        "start_time": 5078119,
        "end_time": 5085880,
        "duration": 7761,
        "text": "time it doesn't like the response it\ninvokes it again nor is final time"
      },
      {
        "start_time": 5083960,
        "end_time": 5091880,
        "duration": 7920,
        "text": "position oh no no no it understand that\nit this question finish position and"
      },
      {
        "start_time": 5089280,
        "end_time": 5096840,
        "duration": 7560,
        "text": "time it split automatically in two\nrequests one is noris finish time and"
      },
      {
        "start_time": 5094440,
        "end_time": 5103320,
        "duration": 8880,
        "text": "another one noris final time position\nresult amazing and"
      },
      {
        "start_time": 5099639,
        "end_time": 5111440,
        "duration": 11801,
        "text": "then by invoking by by retrieving two\nsets of data it was able to say"
      },
      {
        "start_time": 5108719,
        "end_time": 5114520,
        "duration": 5801,
        "text": "that yeah there is no specific time\nthere in numerical"
      },
      {
        "start_time": 5118440,
        "end_time": 5125040,
        "duration": 6600,
        "text": "format and here what about verstappen\nand what it says I'd be happy to help"
      },
      {
        "start_time": 5122880,
        "end_time": 5128520,
        "duration": 5640,
        "text": "you find information about m versten\nhowever I need to search for YouTube"
      },
      {
        "start_time": 5126480,
        "end_time": 5133679,
        "duration": 7199,
        "text": "video transfer for could you please\nclarify what specific aspect about ma"
      },
      {
        "start_time": 5130800,
        "end_time": 5137239,
        "duration": 6439,
        "text": "Sten you're interested in so here we\nunderstand that when we asked second"
      },
      {
        "start_time": 5135840,
        "end_time": 5142080,
        "duration": 6240,
        "text": "time a follow-up question what about\nresten it did not connect it with a"
      },
      {
        "start_time": 5139880,
        "end_time": 5147400,
        "duration": 7520,
        "text": "first question and he did not understand\nthat we mean like finish position in"
      },
      {
        "start_time": 5144119,
        "end_time": 5151400,
        "duration": 7281,
        "text": "time it's not clear here it's for us\nit's clear that the AI doesn't connect"
      },
      {
        "start_time": 5149639,
        "end_time": 5157400,
        "duration": 7761,
        "text": "the two questions together that it's the\nsame interaction for that to happen we"
      },
      {
        "start_time": 5154679,
        "end_time": 5163320,
        "duration": 8641,
        "text": "need to provide here to the agent a\nlong-term memory a"
      },
      {
        "start_time": 5160320,
        "end_time": 5169000,
        "duration": 8680,
        "text": "checkpoint so again in the previous\ntutorial I have here adding memory to"
      },
      {
        "start_time": 5165199,
        "end_time": 5174320,
        "duration": 9121,
        "text": "our agent and we can do that by\nimporting memory from linkchain L graph"
      },
      {
        "start_time": 5171840,
        "end_time": 5174320,
        "duration": 2480,
        "text": "at the"
      },
      {
        "start_time": 5176440,
        "end_time": 5185520,
        "duration": 9080,
        "text": "top\nand somewhere here where we create the"
      },
      {
        "start_time": 5181239,
        "end_time": 5189800,
        "duration": 8561,
        "text": "agent we can say a memory saver and\nwe're going to give it here as if I'm"
      },
      {
        "start_time": 5187960,
        "end_time": 5194360,
        "duration": 6400,
        "text": "not mistaken is check\npointer memory saver check"
      },
      {
        "start_time": 5194679,
        "end_time": 5203560,
        "duration": 8881,
        "text": "pointer memory saver or if you want to\nsave on"
      },
      {
        "start_time": 5199480,
        "end_time": 5209639,
        "duration": 10159,
        "text": "some characters you can call it here\ncheckpoint and remove a duplicated"
      },
      {
        "start_time": 5206840,
        "end_time": 5213880,
        "duration": 7040,
        "text": "because it's the same name now because\nit has a checkpoint we are not going to"
      },
      {
        "start_time": 5211920,
        "end_time": 5217960,
        "duration": 6040,
        "text": "be able to invoke it like this and if we\ndo if I'm not mistaken we're going to"
      },
      {
        "start_time": 5215560,
        "end_time": 5225119,
        "duration": 9559,
        "text": "have an error saying that now you have a\ncheckpoint we need to provide them um a"
      },
      {
        "start_time": 5221639,
        "end_time": 5230159,
        "duration": 8520,
        "text": "configuration with a Fred ID so using a\nFred ID we're going to know like what"
      },
      {
        "start_time": 5228040,
        "end_time": 5235360,
        "duration": 7320,
        "text": "other previous messages to connect it\nwith and that is going to happen when we"
      },
      {
        "start_time": 5232800,
        "end_time": 5244320,
        "duration": 11520,
        "text": "call agent.\ninvoke uh after the whole invocation we"
      },
      {
        "start_time": 5241840,
        "end_time": 5250360,
        "duration": 8520,
        "text": "are going to have here a conf\nconfigurable options with configurable"
      },
      {
        "start_time": 5246760,
        "end_time": 5256360,
        "duration": 9600,
        "text": "and here we're going to have Fred ID\nlet's say like I don't know Fred number"
      },
      {
        "start_time": 5253119,
        "end_time": 5261480,
        "duration": 8361,
        "text": "one I'm going to take this options and\nI'm going to add it to the second"
      },
      {
        "start_time": 5258520,
        "end_time": 5266280,
        "duration": 7760,
        "text": "invocation as well that way connecting\nthem together and pay attention where I"
      },
      {
        "start_time": 5263480,
        "end_time": 5274360,
        "duration": 10880,
        "text": "am adding them this is actually after\nthe object that has a messages it's not"
      },
      {
        "start_time": 5269639,
        "end_time": 5278920,
        "duration": 9281,
        "text": "besides it so it's two different objects\nnow if I'm going to send the same"
      },
      {
        "start_time": 5276159,
        "end_time": 5283960,
        "duration": 7801,
        "text": "request here what I expect is that the\nsecond question will understand that"
      },
      {
        "start_time": 5281520,
        "end_time": 5288080,
        "duration": 6560,
        "text": "it's a follow up for the first one so it\nwill understand that I'm asking about"
      },
      {
        "start_time": 5286239,
        "end_time": 5293880,
        "duration": 7641,
        "text": "finish time and position for where\nstoping and we see that indeed it"
      },
      {
        "start_time": 5290159,
        "end_time": 5298760,
        "duration": 8601,
        "text": "understood so it's doing a search query\nin our tool forward stop and finish time"
      },
      {
        "start_time": 5296119,
        "end_time": 5298760,
        "duration": 2641,
        "text": "and position"
      },
      {
        "start_time": 5299040,
        "end_time": 5308920,
        "duration": 9880,
        "text": "results uh finished second place right\nbehind Lou Hamilton amazing so that's uh"
      },
      {
        "start_time": 5306560,
        "end_time": 5313719,
        "duration": 7159,
        "text": "not amazing that he finished second uh\nnot a big fan but amazing that it's"
      },
      {
        "start_time": 5311520,
        "end_time": 5319800,
        "duration": 8280,
        "text": "working so just by simply adding this\ncheckpoint that's what we managed to do"
      },
      {
        "start_time": 5316199,
        "end_time": 5319800,
        "duration": 3601,
        "text": "adding like more configuration"
      },
      {
        "start_time": 5320480,
        "end_time": 5323480,
        "duration": 3000,
        "text": "here"
      },
      {
        "start_time": 5325520,
        "end_time": 5335239,
        "duration": 9719,
        "text": "um another thing that we can do\nhere uh when we invoke in the"
      },
      {
        "start_time": 5332320,
        "end_time": 5343280,
        "duration": 10960,
        "text": "configurable we can send more\nmetadata things like let's say the video"
      },
      {
        "start_time": 5338800,
        "end_time": 5350600,
        "duration": 11800,
        "text": "ID that we are querying for video uncore\nID is going to be equal to let's go into"
      },
      {
        "start_time": 5346639,
        "end_time": 5355960,
        "duration": 9321,
        "text": "the data and say that we are working\nwith with this video ID the first one"
      },
      {
        "start_time": 5354520,
        "end_time": 5360159,
        "duration": 5639,
        "text": "Sprint\nqualifying we can take this video ID and"
      },
      {
        "start_time": 5358280,
        "end_time": 5364119,
        "duration": 5839,
        "text": "in the configure we say that in this\nthread hey we are talking about this"
      },
      {
        "start_time": 5361920,
        "end_time": 5370679,
        "duration": 8759,
        "text": "video again it depends on how you want\nto uh architect the the experience but"
      },
      {
        "start_time": 5367520,
        "end_time": 5374760,
        "duration": 7240,
        "text": "if you want one thread to be specific to\none video that would be a good"
      },
      {
        "start_time": 5372679,
        "end_time": 5379880,
        "duration": 7201,
        "text": "configuration later we can think about\nlike how maybe we can send a channel ID"
      },
      {
        "start_time": 5376760,
        "end_time": 5385280,
        "duration": 8520,
        "text": "here or we can let the AI agent\nunderstand magically how what video we"
      },
      {
        "start_time": 5382840,
        "end_time": 5389719,
        "duration": 6879,
        "text": "are talking about but this is a good way\nto send data so I'm going to send it"
      },
      {
        "start_time": 5387000,
        "end_time": 5395719,
        "duration": 8719,
        "text": "through configurable here I will remove\na second one"
      },
      {
        "start_time": 5391040,
        "end_time": 5404119,
        "duration": 13079,
        "text": "because we we had it just for testing\nthing and I'm going to take this video"
      },
      {
        "start_time": 5400320,
        "end_time": 5409199,
        "duration": 8879,
        "text": "ID and what where we going to receive it\nI need to receive it somehow here in the"
      },
      {
        "start_time": 5406600,
        "end_time": 5415320,
        "duration": 8720,
        "text": "retrieve tool to receive it in the\nretrieve"
      },
      {
        "start_time": 5410719,
        "end_time": 5424119,
        "duration": 13400,
        "text": "tool this is the input of the\ntool but here we get the options of the"
      },
      {
        "start_time": 5420440,
        "end_time": 5429320,
        "duration": 8880,
        "text": "invocation and we can go ahead and get\naccess to the Fred ID where in this case"
      },
      {
        "start_time": 5426719,
        "end_time": 5434199,
        "duration": 7480,
        "text": "I need the video uncore\nID so if I do"
      },
      {
        "start_time": 5432280,
        "end_time": 5442080,
        "duration": 9800,
        "text": "here uh\nquery console log video ID let's see if"
      },
      {
        "start_time": 5439000,
        "end_time": 5449520,
        "duration": 10520,
        "text": "in our tool we get access to the video\nID from our"
      },
      {
        "start_time": 5445040,
        "end_time": 5449520,
        "duration": 4480,
        "text": "invocation if I call this one"
      },
      {
        "start_time": 5452159,
        "end_time": 5456600,
        "duration": 4441,
        "text": "here we see that ID"
      },
      {
        "start_time": 5458119,
        "end_time": 5466800,
        "duration": 8681,
        "text": "here it's still going to work the same\nbecause we just simply do this but what"
      },
      {
        "start_time": 5463800,
        "end_time": 5471639,
        "duration": 7839,
        "text": "we can do here is we can use the video\nID for the similarity search I'm going"
      },
      {
        "start_time": 5470239,
        "end_time": 5480920,
        "duration": 10681,
        "text": "to show you the documentation where you\ncan find it just Google L"
      },
      {
        "start_time": 5475000,
        "end_time": 5484520,
        "duration": 9520,
        "text": "graph uh Vector store and the\nJavaScript for example if I'm not"
      },
      {
        "start_time": 5483400,
        "end_time": 5489119,
        "duration": 5719,
        "text": "mistaken\nhere and you're going to see"
      },
      {
        "start_time": 5494159,
        "end_time": 5505119,
        "duration": 10960,
        "text": "that L graph Vector l l chain Vector\nstore"
      },
      {
        "start_time": 5502440,
        "end_time": 5509119,
        "duration": 6679,
        "text": "GS so in the documentation you're going\nto see some options that you can"
      },
      {
        "start_time": 5511520,
        "end_time": 5515840,
        "duration": 4320,
        "text": "use I need options"
      },
      {
        "start_time": 5517080,
        "end_time": 5524080,
        "duration": 7000,
        "text": "yeah I'm pretty sure like you can you\nyou'll find here like maybe I'm going to"
      },
      {
        "start_time": 5520719,
        "end_time": 5528440,
        "duration": 7721,
        "text": "leave a link in the guide here so you\ncan have access to it but what I mean"
      },
      {
        "start_time": 5525920,
        "end_time": 5532520,
        "duration": 6600,
        "text": "there is that when we do Vector store.\nsimilarity search the first one is query"
      },
      {
        "start_time": 5530440,
        "end_time": 5540880,
        "duration": 10440,
        "text": "the second one is how many items we want\nto receive but the next one is the"
      },
      {
        "start_time": 5536880,
        "end_time": 5548159,
        "duration": 11279,
        "text": "filtering in the filter can be uh a\nfilter on the metadata so so we can say"
      },
      {
        "start_time": 5544800,
        "end_time": 5548159,
        "duration": 3359,
        "text": "that I want"
      },
      {
        "start_time": 5548400,
        "end_time": 5557480,
        "duration": 9080,
        "text": "only the dog dogs or maybe I need filter\nhere let me double check"
      },
      {
        "start_time": 5565600,
        "end_time": 5573920,
        "duration": 8320,
        "text": "that no it shouldn't be filter it should\nbe simply video"
      },
      {
        "start_time": 5569920,
        "end_time": 5580760,
        "duration": 10840,
        "text": "ID so this is the filter that is being\napplied and is being applied on the"
      },
      {
        "start_time": 5577679,
        "end_time": 5586360,
        "duration": 8681,
        "text": "metadata of our documents and if we look\nin the metadata of our documents we"
      },
      {
        "start_time": 5583040,
        "end_time": 5590840,
        "duration": 7800,
        "text": "store the video ID here later when we\nadd the database we're going to be able"
      },
      {
        "start_time": 5587960,
        "end_time": 5598080,
        "duration": 10120,
        "text": "to see visually what I mean there and\nnow let's go ahead and"
      },
      {
        "start_time": 5592520,
        "end_time": 5602440,
        "duration": 9920,
        "text": "see maybe um console log retrieve docs\nto see what document docs did it receive"
      },
      {
        "start_time": 5600719,
        "end_time": 5609719,
        "duration": 9000,
        "text": "for that\nquery I'm going to go ahead and ask"
      },
      {
        "start_time": 5606280,
        "end_time": 5613760,
        "duration": 7480,
        "text": "the invoke the this one with a question\nwhat is the finished position of Nores"
      },
      {
        "start_time": 5611880,
        "end_time": 5619639,
        "duration": 7759,
        "text": "it knows that is this video ID because\nwe specified"
      },
      {
        "start_time": 5616440,
        "end_time": 5624159,
        "duration": 7719,
        "text": "it it's going to ask norish finish\ntime and it will say the apolog but it"
      },
      {
        "start_time": 5622600,
        "end_time": 5627960,
        "duration": 5360,
        "text": "seems there is a technical issue with\nthe retrieval function in order to"
      },
      {
        "start_time": 5625719,
        "end_time": 5631159,
        "duration": 5440,
        "text": "provide more with accurate information\nbasically it says that there is no items"
      },
      {
        "start_time": 5630119,
        "end_time": 5635719,
        "duration": 5600,
        "text": "with this\nID and why is that happening"
      },
      {
        "start_time": 5635760,
        "end_time": 5646960,
        "duration": 11200,
        "text": "something wrong with here with a video\nID video ID did I call it video uncore"
      },
      {
        "start_time": 5642719,
        "end_time": 5655040,
        "duration": 12321,
        "text": "ID here metadata video ID and let me\nlook in the database video uncore ID"
      },
      {
        "start_time": 5651040,
        "end_time": 5655040,
        "duration": 4000,
        "text": "Vore ID"
      },
      {
        "start_time": 5678600,
        "end_time": 5686159,
        "duration": 7559,
        "text": "filter this is Vector store similarity\nsearch"
      },
      {
        "start_time": 5700360,
        "end_time": 5709719,
        "duration": 9359,
        "text": "I'm wondering if this uh is not going to\nwork for the inmemory vector databases"
      },
      {
        "start_time": 5706520,
        "end_time": 5709719,
        "duration": 3199,
        "text": "but only for"
      },
      {
        "start_time": 5709800,
        "end_time": 5714480,
        "duration": 4680,
        "text": "the for the postgress"
      },
      {
        "start_time": 5720560,
        "end_time": 5728880,
        "duration": 8320,
        "text": "databases uh\nbecause as I"
      },
      {
        "start_time": 5724679,
        "end_time": 5735679,
        "duration": 11000,
        "text": "see the retrieve docks\nright retrieve docks for"
      },
      {
        "start_time": 5731960,
        "end_time": 5741520,
        "duration": 9560,
        "text": "query it doesn't even get here so it\nmust fail completely it doesn't get"
      },
      {
        "start_time": 5739080,
        "end_time": 5741520,
        "duration": 2440,
        "text": "retrieve"
      },
      {
        "start_time": 5743920,
        "end_time": 5756080,
        "duration": 12160,
        "text": "docks so let's try to do a try catch\njust"
      },
      {
        "start_time": 5749679,
        "end_time": 5756080,
        "duration": 6401,
        "text": "to to see why it's not"
      },
      {
        "start_time": 5759159,
        "end_time": 5764280,
        "duration": 5121,
        "text": "working it's it's hopefully it's going"
      },
      {
        "start_time": 5764719,
        "end_time": 5774239,
        "duration": 9520,
        "text": "to to show\nme but yeah as I'm saying maybe uh this"
      },
      {
        "start_time": 5770920,
        "end_time": 5781440,
        "duration": 10520,
        "text": "kind of filtering doesn't work on the\ninmemory filter is not a"
      },
      {
        "start_time": 5777800,
        "end_time": 5787920,
        "duration": 10120,
        "text": "function okay so for the in memory maybe\nfilter should be a function let's try"
      },
      {
        "start_time": 5784560,
        "end_time": 5795320,
        "duration": 10760,
        "text": "let's try saying that hey\nDoc is a function and we're going to"
      },
      {
        "start_time": 5791040,
        "end_time": 5801000,
        "duration": 9960,
        "text": "return true if doc\ndo"
      },
      {
        "start_time": 5796840,
        "end_time": 5805679,
        "duration": 8839,
        "text": "metadata. video ID is equal to\nvideo uh video video ID that you're"
      },
      {
        "start_time": 5804440,
        "end_time": 5812520,
        "duration": 8080,
        "text": "looking\nfor again uh this is going to be a bit"
      },
      {
        "start_time": 5808800,
        "end_time": 5816000,
        "duration": 7200,
        "text": "different later but now for in memory\ndatabase I think it expects a function"
      },
      {
        "start_time": 5815000,
        "end_time": 5822920,
        "duration": 7920,
        "text": "for\nfiltering and let's uh let's try"
      },
      {
        "start_time": 5820080,
        "end_time": 5826719,
        "duration": 6639,
        "text": "to maybe remove a TR\ncatch and invoke it"
      },
      {
        "start_time": 5829320,
        "end_time": 5841000,
        "duration": 11680,
        "text": "again okay we see that and we\nsee retrieve documents V"
      },
      {
        "start_time": 5837040,
        "end_time": 5848199,
        "duration": 11159,
        "text": "documents cool if for example I'm going\nto make a mistake and say give me"
      },
      {
        "start_time": 5845480,
        "end_time": 5854199,
        "duration": 8719,
        "text": "we are working with video ID one 2 three\nthis video ID is not in our database and"
      },
      {
        "start_time": 5851199,
        "end_time": 5857679,
        "duration": 6480,
        "text": "it's supposed to filter out like other\ndocuments in the database we see"
      },
      {
        "start_time": 5855719,
        "end_time": 5862760,
        "duration": 7041,
        "text": "retrieve docs as an\nempty um"
      },
      {
        "start_time": 5860040,
        "end_time": 5866000,
        "duration": 5960,
        "text": "array saying that meaning that our\nfiltering is working"
      },
      {
        "start_time": 5867239,
        "end_time": 5877719,
        "duration": 10480,
        "text": "correctly now what we can do is we can\nload the other video as well"
      },
      {
        "start_time": 5875360,
        "end_time": 5885000,
        "duration": 9640,
        "text": "let me go ahead and maybe split up a\nlittle bit the logic of of generating"
      },
      {
        "start_time": 5881639,
        "end_time": 5888760,
        "duration": 7121,
        "text": "this embeddings because I would like to\nalready clean up a little bit here this"
      },
      {
        "start_time": 5886880,
        "end_time": 5895080,
        "duration": 8200,
        "text": "file is getting a little bit out of hand\nand it um is responsible for different"
      },
      {
        "start_time": 5892080,
        "end_time": 5900159,
        "duration": 8079,
        "text": "pipelines different layers uh it's both\nfor indexing and adding to the database"
      },
      {
        "start_time": 5897800,
        "end_time": 5905159,
        "duration": 7359,
        "text": "and it's also about the agent I want\nagent to be only specific to agent"
      },
      {
        "start_time": 5911010,
        "end_time": 5914109,
        "duration": 3099,
        "text": "[Music]"
      },
      {
        "start_time": 5915199,
        "end_time": 5925080,
        "duration": 9881,
        "text": "um so let's go ahead and create here in\nthe server a new file"
      },
      {
        "start_time": 5923119,
        "end_time": 5930560,
        "duration": 7441,
        "text": "called\nembeddings"
      },
      {
        "start_time": 5927520,
        "end_time": 5935400,
        "duration": 7880,
        "text": "edings hopefully I wrote it correctly\nmaybe"
      },
      {
        "start_time": 5931520,
        "end_time": 5941360,
        "duration": 9840,
        "text": "not is it with double d\nembeddings maybe and from the agent move"
      },
      {
        "start_time": 5939360,
        "end_time": 5949199,
        "duration": 9839,
        "text": "stuff related to embeddings\nwhere what stuff do I"
      },
      {
        "start_time": 5943760,
        "end_time": 5953639,
        "duration": 9879,
        "text": "mean well first of all I want to move\nthe gener uh creating the open Ai"
      },
      {
        "start_time": 5951960,
        "end_time": 5960119,
        "duration": 8159,
        "text": "embeddings and the vector\nstore I will copy them from here I will"
      },
      {
        "start_time": 5957199,
        "end_time": 5966719,
        "duration": 9520,
        "text": "cut them actually and move them\nhere I want to import"
      },
      {
        "start_time": 5964040,
        "end_time": 5966719,
        "duration": 2679,
        "text": "what we need"
      },
      {
        "start_time": 5966880,
        "end_time": 5976400,
        "duration": 9520,
        "text": "here and we have here what export Vector\nstore maybe I'm going to do export const"
      },
      {
        "start_time": 5974040,
        "end_time": 5982280,
        "duration": 8240,
        "text": "Vector store so that other files can\nimport this"
      },
      {
        "start_time": 5978040,
        "end_time": 5989480,
        "duration": 11440,
        "text": "storage I'll also do export\nconst add documents to Vector store"
      },
      {
        "start_time": 5986679,
        "end_time": 5995119,
        "duration": 8440,
        "text": "function uh or not documents but let's\ndo"
      },
      {
        "start_time": 5991320,
        "end_time": 5998400,
        "duration": 7080,
        "text": "add YouTube video\nto Vector"
      },
      {
        "start_time": 6003760,
        "end_time": 6014119,
        "duration": 10359,
        "text": "store let's say we're going to get video\ndata and we need to do something with"
      },
      {
        "start_time": 6010560,
        "end_time": 6017960,
        "duration": 7400,
        "text": "it what do we need to do in order to add\nit to to the vector store well we"
      },
      {
        "start_time": 6016400,
        "end_time": 6023920,
        "duration": 7520,
        "text": "already have it in the logic in the\nagent AI if we look here well first we"
      },
      {
        "start_time": 6022040,
        "end_time": 6029280,
        "duration": 7240,
        "text": "have to Define the split\nor actually with"
      },
      {
        "start_time": 6026080,
        "end_time": 6034599,
        "duration": 8519,
        "text": "docs so I'm going to copy creating with\ndocuments creating with splitter"
      },
      {
        "start_time": 6031920,
        "end_time": 6039639,
        "duration": 7719,
        "text": "generating the chunks and finally doing\nVector store at"
      },
      {
        "start_time": 6036679,
        "end_time": 6043719,
        "duration": 7040,
        "text": "documents I'm going to copy all of this\ninto"
      },
      {
        "start_time": 6041080,
        "end_time": 6051639,
        "duration": 10559,
        "text": "embeddings because this is part of\nadding a YouTube video data to Vector"
      },
      {
        "start_time": 6048520,
        "end_time": 6056560,
        "duration": 8040,
        "text": "store so for the document we need to\nimport"
      },
      {
        "start_time": 6054000,
        "end_time": 6062520,
        "duration": 8520,
        "text": "uh document from linkchain core\ndocuments page content is going to be"
      },
      {
        "start_time": 6059000,
        "end_time": 6067599,
        "duration": 8599,
        "text": "video data. transcript metadata is going\nto be video data video ID or we can do"
      },
      {
        "start_time": 6066199,
        "end_time": 6070599,
        "duration": 4400,
        "text": "it easily\nhere"
      },
      {
        "start_time": 6071400,
        "end_time": 6077320,
        "duration": 5920,
        "text": "destructuring and video ID is going to\nbe like this because it has the same"
      },
      {
        "start_time": 6075920,
        "end_time": 6084119,
        "duration": 8199,
        "text": "name and\ntitle we need to import the recursive"
      },
      {
        "start_time": 6080719,
        "end_time": 6089119,
        "duration": 8400,
        "text": "character text splitter from L chain\ntext splitter here we're going to leave"
      },
      {
        "start_time": 6086840,
        "end_time": 6095880,
        "duration": 9040,
        "text": "the same configuration we're going to\nremove this console log and we are"
      },
      {
        "start_time": 6092880,
        "end_time": 6102560,
        "duration": 9680,
        "text": "adding it to the vector store that we\ncreated at the"
      },
      {
        "start_time": 6097480,
        "end_time": 6102560,
        "duration": 5080,
        "text": "top Vector store add documents"
      },
      {
        "start_time": 6103119,
        "end_time": 6112119,
        "duration": 9000,
        "text": "chunks perfect so now this file is\nresponsible for setting up the vector"
      },
      {
        "start_time": 6108920,
        "end_time": 6115239,
        "duration": 6319,
        "text": "store and adding for example YouTube\nvideos to Vector store"
      },
      {
        "start_time": 6116119,
        "end_time": 6124920,
        "duration": 8801,
        "text": "let's go ahead back and clean up a\nlittle bit"
      },
      {
        "start_time": 6120800,
        "end_time": 6130679,
        "duration": 9879,
        "text": "here uh we'll leave a retrieve tool\nhere I don't know I don't need the video"
      },
      {
        "start_time": 6127800,
        "end_time": 6137960,
        "duration": 10160,
        "text": "one or maybe I need do I need\nit I think I don't yeah I need it"
      },
      {
        "start_time": 6135000,
        "end_time": 6144639,
        "duration": 9639,
        "text": "because it's still going to be here that\nI want to add this video to our database"
      },
      {
        "start_time": 6142360,
        "end_time": 6149880,
        "duration": 7520,
        "text": "so for that we need to\nimport Vector store and add YouTube"
      },
      {
        "start_time": 6147480,
        "end_time": 6154840,
        "duration": 7360,
        "text": "video to Vector store from embeddings\nand I want to call here a wait add"
      },
      {
        "start_time": 6152639,
        "end_time": 6159199,
        "duration": 6560,
        "text": "YouTube video to Vector store so I still\nwant to add it here later we're going to"
      },
      {
        "start_time": 6156639,
        "end_time": 6164000,
        "duration": 7361,
        "text": "think where to do it for now I just want\nto I move a code in another file and"
      },
      {
        "start_time": 6161960,
        "end_time": 6168840,
        "duration": 6880,
        "text": "call it from\nhere I'm still going to have a retrieve"
      },
      {
        "start_time": 6166440,
        "end_time": 6173480,
        "duration": 7040,
        "text": "tool that needs access to the vector\nstore so that's why we exported and we"
      },
      {
        "start_time": 6171040,
        "end_time": 6177639,
        "duration": 6599,
        "text": "import it here the same access to the\nsame"
      },
      {
        "start_time": 6174760,
        "end_time": 6184560,
        "duration": 9800,
        "text": "database and everything else is related\nto this one I can clean up a little bit"
      },
      {
        "start_time": 6180800,
        "end_time": 6190199,
        "duration": 9399,
        "text": "here the Imports of what we do not need\nanymore leaving only things that we need"
      },
      {
        "start_time": 6188639,
        "end_time": 6197800,
        "duration": 9161,
        "text": "like\nthis and what else cleaning up a little"
      },
      {
        "start_time": 6194159,
        "end_time": 6197800,
        "duration": 3641,
        "text": "bit the console logs here as"
      },
      {
        "start_time": 6200080,
        "end_time": 6205119,
        "duration": 5039,
        "text": "well checkpoint or video ID"
      },
      {
        "start_time": 6210080,
        "end_time": 6216760,
        "duration": 6680,
        "text": "okay this one is also going to go away\nin a second but"
      },
      {
        "start_time": 6214960,
        "end_time": 6223280,
        "duration": 8320,
        "text": "it's\ntesting the"
      },
      {
        "start_time": 6220119,
        "end_time": 6226520,
        "duration": 6401,
        "text": "agent perfect so let's double check if\nit still works I'm going to invoke the"
      },
      {
        "start_time": 6225199,
        "end_time": 6232520,
        "duration": 7321,
        "text": "agent.\nGS uh question was the position of"
      },
      {
        "start_time": 6229520,
        "end_time": 6232520,
        "duration": 3000,
        "text": "Norris"
      },
      {
        "start_time": 6245040,
        "end_time": 6252920,
        "duration": 7880,
        "text": "come on uh based on I can provide with\nmore details Hamilton vers yeah like it"
      },
      {
        "start_time": 6251199,
        "end_time": 6258719,
        "duration": 7520,
        "text": "we we understand that it's working it's\nusing the transcript data uh what I want"
      },
      {
        "start_time": 6256000,
        "end_time": 6263840,
        "duration": 7840,
        "text": "you to do now is let's try to add two\nvideos to the store and see that in that"
      },
      {
        "start_time": 6262000,
        "end_time": 6269520,
        "duration": 7520,
        "text": "case it can f filter out with\ntranscripts related to one specific"
      },
      {
        "start_time": 6266080,
        "end_time": 6275440,
        "duration": 9360,
        "text": "video for example I'm going to do a same\nawait video add YouTube video to Vector"
      },
      {
        "start_time": 6272760,
        "end_time": 6281280,
        "duration": 8520,
        "text": "store and I'm going to say that we want\nto add the data at position one here I"
      },
      {
        "start_time": 6278639,
        "end_time": 6288159,
        "duration": 9520,
        "text": "can do data position zero and data\nposition"
      },
      {
        "start_time": 6283199,
        "end_time": 6295960,
        "duration": 12761,
        "text": "one if I'm going to go ahead and\num ask the question about this video ID"
      },
      {
        "start_time": 6292560,
        "end_time": 6301159,
        "duration": 8599,
        "text": "about Norris I think it's going to be\nfine because it's going to look only at"
      },
      {
        "start_time": 6298199,
        "end_time": 6306080,
        "duration": 7881,
        "text": "the transcripts for that user at the\nsame time it took a little bit of time"
      },
      {
        "start_time": 6303119,
        "end_time": 6312760,
        "duration": 9641,
        "text": "to to add the embeddings but it's very\nfast like it's super"
      },
      {
        "start_time": 6309040,
        "end_time": 6316440,
        "duration": 7400,
        "text": "fast let's see what's happening now uh I\ndon't see a specific time for Norris"
      },
      {
        "start_time": 6314760,
        "end_time": 6323320,
        "duration": 8560,
        "text": "mentioned that Norris racing that is\ngoing quickly through the middle part of"
      },
      {
        "start_time": 6318679,
        "end_time": 6328000,
        "duration": 9321,
        "text": "a lap by 800 milliseconds however if I'm\ngoing to go into the data and take the"
      },
      {
        "start_time": 6325320,
        "end_time": 6334920,
        "duration": 9600,
        "text": "idea of my second\nvideo let's find it with Vore ID and the"
      },
      {
        "start_time": 6333320,
        "end_time": 6341239,
        "duration": 7919,
        "text": "second one is this\none if I'm going to say it hey now this"
      },
      {
        "start_time": 6338440,
        "end_time": 6347400,
        "duration": 8960,
        "text": "same question what is the finish time of\nNorris is going to be on a different"
      },
      {
        "start_time": 6344480,
        "end_time": 6351560,
        "duration": 7080,
        "text": "video what I expect to see is I expect\nthe model not to know how to answer"
      },
      {
        "start_time": 6349719,
        "end_time": 6358400,
        "duration": 8681,
        "text": "because it doesn't have that information\nwe gave it information from a different"
      },
      {
        "start_time": 6355159,
        "end_time": 6358400,
        "duration": 3241,
        "text": "video let's"
      },
      {
        "start_time": 6371239,
        "end_time": 6379960,
        "duration": 8721,
        "text": "see um based on the transcript I don't\nsee any information about nor is the"
      },
      {
        "start_time": 6378199,
        "end_time": 6387159,
        "duration": 8960,
        "text": "transcript appear to be discussing\nprogramming Concepts so that's exactly"
      },
      {
        "start_time": 6383480,
        "end_time": 6392360,
        "duration": 8880,
        "text": "true because we are filtering out only\ndata from our Vector store for this"
      },
      {
        "start_time": 6389960,
        "end_time": 6402719,
        "duration": 12759,
        "text": "video ID if I will go ahead and\ntransform change the question to what uh"
      },
      {
        "start_time": 6398520,
        "end_time": 6409599,
        "duration": 11079,
        "text": "will people learn from this\nvideo Let's see what that answer is"
      },
      {
        "start_time": 6406360,
        "end_time": 6414800,
        "duration": 8440,
        "text": "going to to look like because remember\nthis video with this ID is a tutorial"
      },
      {
        "start_time": 6413360,
        "end_time": 6422599,
        "duration": 9239,
        "text": "from my\nchannel uh about Apple invite"
      },
      {
        "start_time": 6418239,
        "end_time": 6422599,
        "duration": 4360,
        "text": "application so if we look at the"
      },
      {
        "start_time": 6423440,
        "end_time": 6434239,
        "duration": 10799,
        "text": "response it doesn't understand that it\nneeds to call the tool so let's see what"
      },
      {
        "start_time": 6429119,
        "end_time": 6440880,
        "duration": 11761,
        "text": "will people learn from uh the video\nbased"
      },
      {
        "start_time": 6435679,
        "end_time": 6440880,
        "duration": 5201,
        "text": "on it's it's"
      },
      {
        "start_time": 6441320,
        "end_time": 6449280,
        "duration": 7960,
        "text": "transcript it's still sometimes doesn't\nknow that but it has this capabilities"
      },
      {
        "start_time": 6446560,
        "end_time": 6453679,
        "duration": 7119,
        "text": "so maybe I need to inform it like hey at\nany moment you have information about"
      },
      {
        "start_time": 6451480,
        "end_time": 6458560,
        "duration": 7080,
        "text": "video you just need to call the\nTool uh but with a better question I"
      },
      {
        "start_time": 6456719,
        "end_time": 6463840,
        "duration": 7121,
        "text": "think it's going to work better now as\nwe can see it's thinking and we see"
      },
      {
        "start_time": 6461119,
        "end_time": 6468520,
        "duration": 7401,
        "text": "based on the the video tutorial about\nbuilding a mobile"
      },
      {
        "start_time": 6466280,
        "end_time": 6472840,
        "duration": 6560,
        "text": "application how to create custom auto\nscrolling component Marquee building and"
      },
      {
        "start_time": 6471080,
        "end_time": 6478760,
        "duration": 7680,
        "text": "boarding screens with animation\nimplementing UI react development"
      },
      {
        "start_time": 6474400,
        "end_time": 6483639,
        "duration": 9239,
        "text": "Concepts and so on so perfect now our AA\nagent can work with multiple videos it"
      },
      {
        "start_time": 6481679,
        "end_time": 6489639,
        "duration": 7960,
        "text": "can store his data in a database but\nwhen asked it's going to look at only"
      },
      {
        "start_time": 6486080,
        "end_time": 6495239,
        "duration": 9159,
        "text": "specific information for a specific\nvideo"
      },
      {
        "start_time": 6491280,
        "end_time": 6497639,
        "duration": 6359,
        "text": "Perfect let me go ahead and do a git add\ngit"
      },
      {
        "start_time": 6498520,
        "end_time": 6510280,
        "duration": 11760,
        "text": "CIT agent with rag\nI'm going to bring some water and the"
      },
      {
        "start_time": 6506840,
        "end_time": 6514599,
        "duration": 7759,
        "text": "next step for us is going to be to\nchange from a memory Vector store to an"
      },
      {
        "start_time": 6513480,
        "end_time": 6519119,
        "duration": 5639,
        "text": "actual\ndatabase so that this data is not going"
      },
      {
        "start_time": 6517320,
        "end_time": 6524840,
        "duration": 7520,
        "text": "to be lost and we're not going to have\nto generate the embeddings always we're"
      },
      {
        "start_time": 6522239,
        "end_time": 6529599,
        "duration": 7360,
        "text": "going to store and cash them so that\nnext time when we ask the same question"
      },
      {
        "start_time": 6526639,
        "end_time": 6534760,
        "duration": 8121,
        "text": "about the same video we don't have to\nget the data again and again so that's"
      },
      {
        "start_time": 6532880,
        "end_time": 6538000,
        "duration": 5120,
        "text": "our going to be our next step give me\none second"
      },
      {
        "start_time": 6587599,
        "end_time": 6592080,
        "duration": 4481,
        "text": "hello uh perfect"
      },
      {
        "start_time": 6601800,
        "end_time": 6610920,
        "duration": 9120,
        "text": "so as I was saying the next step is\ngoing to be to transform to a proper"
      },
      {
        "start_time": 6606840,
        "end_time": 6616719,
        "duration": 9879,
        "text": "database for our Vector store and that's\none thing that I like about Lang chain"
      },
      {
        "start_time": 6612760,
        "end_time": 6621400,
        "duration": 8640,
        "text": "is how everything um is abstract in\ndifferent layers and you're going to see"
      },
      {
        "start_time": 6619159,
        "end_time": 6627199,
        "duration": 8040,
        "text": "how easy is going to be to swap from a\nmemory to we postgress database we just"
      },
      {
        "start_time": 6624760,
        "end_time": 6632159,
        "duration": 7399,
        "text": "have to create it and change here how we\nconnect it and everything else is going"
      },
      {
        "start_time": 6629159,
        "end_time": 6637360,
        "duration": 8201,
        "text": "to remain the same without us having to\ndo much"
      },
      {
        "start_time": 6633840,
        "end_time": 6645480,
        "duration": 11640,
        "text": "changes for the database uh we need a\npostgress database with pogress SQL We"
      },
      {
        "start_time": 6641440,
        "end_time": 6651639,
        "duration": 10199,
        "text": "There is a PG Vector extension that\nenables us to do similarity searches and"
      },
      {
        "start_time": 6648119,
        "end_time": 6657079,
        "duration": 8960,
        "text": "index database based on vectors perfect\nfor our in"
      },
      {
        "start_time": 6653440,
        "end_time": 6662400,
        "duration": 8960,
        "text": "Bings so we need a pogress database you\ncan run it locally you can use pogress"
      },
      {
        "start_time": 6660360,
        "end_time": 6666800,
        "duration": 6440,
        "text": "with a Docker to run it locally that's\ntotally fine but I think it's a little"
      },
      {
        "start_time": 6664239,
        "end_time": 6672040,
        "duration": 7801,
        "text": "bit more technical uh and maybe not\neveryone has the environment set up to"
      },
      {
        "start_time": 6668719,
        "end_time": 6677000,
        "duration": 8281,
        "text": "run postgress locally what you can do is\nyou can use for example ne."
      },
      {
        "start_time": 6675079,
        "end_time": 6683159,
        "duration": 8080,
        "text": "Tech\nuh and with neon tack it's it's actually"
      },
      {
        "start_time": 6680400,
        "end_time": 6686760,
        "duration": 6360,
        "text": "super fast and easy to to get a post\ndatabase up and"
      },
      {
        "start_time": 6684440,
        "end_time": 6693560,
        "duration": 9120,
        "text": "running uh and I think they also have a\ngood free tier for up to 10 projects"
      },
      {
        "start_time": 6690040,
        "end_time": 6701119,
        "duration": 11079,
        "text": "let's go ahead sign up and in your\nprofile go ahead and do a new project"
      },
      {
        "start_time": 6695880,
        "end_time": 6704920,
        "duration": 9040,
        "text": "I'm going to call it you AI YouTube\nchat and let's do"
      },
      {
        "start_time": 6707440,
        "end_time": 6716679,
        "duration": 9239,
        "text": "create here uh we need to enable\npostgress uh database so what we have to"
      },
      {
        "start_time": 6714480,
        "end_time": 6723199,
        "duration": 8719,
        "text": "do is we are going to enable it by\nrunning a query in the SQL editor the"
      },
      {
        "start_time": 6720159,
        "end_time": 6729199,
        "duration": 9040,
        "text": "query I don't remember how it was but\nlet's do enable PG Vector"
      },
      {
        "start_time": 6729639,
        "end_time": 6741040,
        "duration": 11401,
        "text": "neon and that is going to be a query\ncalled create extension"
      },
      {
        "start_time": 6737119,
        "end_time": 6748360,
        "duration": 11241,
        "text": "Vector so if I go into the SQL editor of\nmy database on new one and write this"
      },
      {
        "start_time": 6743679,
        "end_time": 6748360,
        "duration": 4681,
        "text": "command create extensions vector and do"
      },
      {
        "start_time": 6749920,
        "end_time": 6753440,
        "duration": 3520,
        "text": "run it didn't"
      },
      {
        "start_time": 6764000,
        "end_time": 6767639,
        "duration": 3639,
        "text": "like why it didn't"
      },
      {
        "start_time": 6767880,
        "end_time": 6775719,
        "duration": 7839,
        "text": "like second time statement executed\nsuccessfully so maybe it was not ready"
      },
      {
        "start_time": 6772320,
        "end_time": 6783000,
        "duration": 10680,
        "text": "yet yet now it executed successfully so\nI enable this Vector uh extension on our"
      },
      {
        "start_time": 6780199,
        "end_time": 6788599,
        "duration": 8400,
        "text": "database so our tables here will be able\nto have like"
      },
      {
        "start_time": 6784280,
        "end_time": 6794520,
        "duration": 10240,
        "text": "vector um columns columns and index and\nsearch based on their similarity the"
      },
      {
        "start_time": 6791320,
        "end_time": 6800800,
        "duration": 9480,
        "text": "next step is to Simply connect to this\nproject from our uh application I'm"
      },
      {
        "start_time": 6798960,
        "end_time": 6807480,
        "duration": 8520,
        "text": "going to go here and I'm going to copy\nthe connection string let's go ahead and"
      },
      {
        "start_time": 6803400,
        "end_time": 6815079,
        "duration": 11679,
        "text": "put it into that EnV file and let's\ncall um"
      },
      {
        "start_time": 6810119,
        "end_time": 6820040,
        "duration": 9921,
        "text": "DB URL and let's space\nthe the connection string that we got"
      },
      {
        "start_time": 6818119,
        "end_time": 6825480,
        "duration": 7361,
        "text": "from here make sure connection pooling\nis"
      },
      {
        "start_time": 6820920,
        "end_time": 6834280,
        "duration": 13360,
        "text": "enabled and the next step is to go and\ndouble check"
      },
      {
        "start_time": 6828440,
        "end_time": 6834280,
        "duration": 5840,
        "text": "with with where with uh"
      },
      {
        "start_time": 6834360,
        "end_time": 6843960,
        "duration": 9600,
        "text": "with length chain under P your vector\nstore I'm going to select PG Vector what"
      },
      {
        "start_time": 6840199,
        "end_time": 6849920,
        "duration": 9721,
        "text": "I need to do is do npm install at L\nchain"
      },
      {
        "start_time": 6845880,
        "end_time": 6849920,
        "duration": 4040,
        "text": "Community let's do that"
      },
      {
        "start_time": 6851760,
        "end_time": 6859760,
        "duration": 8000,
        "text": "first and then we can create this Vector\nSC"
      },
      {
        "start_time": 6857800,
        "end_time": 6868280,
        "duration": 10480,
        "text": "store like\nthis so from our Bings"
      },
      {
        "start_time": 6864040,
        "end_time": 6873960,
        "duration": 9920,
        "text": "files at the top we import PG\nvector and we create it instead of using"
      },
      {
        "start_time": 6871520,
        "end_time": 6878719,
        "duration": 7199,
        "text": "memory Vector we create it using PG\nVector store. initialize we give the"
      },
      {
        "start_time": 6876560,
        "end_time": 6885560,
        "duration": 9000,
        "text": "same embeddings model\nthere but we need to provide here some"
      },
      {
        "start_time": 6882560,
        "end_time": 6885560,
        "duration": 3000,
        "text": "configuration"
      },
      {
        "start_time": 6886159,
        "end_time": 6895960,
        "duration": 9801,
        "text": "configuration uh such as postgress\nconnection options and the connection"
      },
      {
        "start_time": 6893440,
        "end_time": 6903679,
        "duration": 10239,
        "text": "options you can either use a connection\nstring the easiest way or you can have"
      },
      {
        "start_time": 6899760,
        "end_time": 6909520,
        "duration": 9760,
        "text": "like Port host database name and so on\nbut the easiest one is just to provide"
      },
      {
        "start_time": 6905199,
        "end_time": 6915560,
        "duration": 10361,
        "text": "connection string as process. EnV DB URL\nthat we added here in"
      },
      {
        "start_time": 6912599,
        "end_time": 6920880,
        "duration": 8281,
        "text": "our environment\nvariables and then we are not done yet"
      },
      {
        "start_time": 6918800,
        "end_time": 6925840,
        "duration": 7040,
        "text": "with the configuration we need to give a\ntable name the table"
      },
      {
        "start_time": 6923599,
        "end_time": 6933800,
        "duration": 10201,
        "text": "name what is going to be the table name\nfor this tour let's do"
      },
      {
        "start_time": 6929280,
        "end_time": 6933800,
        "duration": 4520,
        "text": "transcript transcripts let's do"
      },
      {
        "start_time": 6934360,
        "end_time": 6938480,
        "duration": 4120,
        "text": "transcripts um"
      },
      {
        "start_time": 6939800,
        "end_time": 6948280,
        "duration": 8480,
        "text": "columns we can have\nID"
      },
      {
        "start_time": 6944480,
        "end_time": 6955440,
        "duration": 10960,
        "text": "column name come on\ncolumns the ID column name let's do it"
      },
      {
        "start_time": 6951280,
        "end_time": 6960560,
        "duration": 9280,
        "text": "ID let's do the embedding column name\nyou can specify what should be the name"
      },
      {
        "start_time": 6957040,
        "end_time": 6963280,
        "duration": 6240,
        "text": "of the embedding you can do embedding or\nvector for"
      },
      {
        "start_time": 6964599,
        "end_time": 6967599,
        "duration": 3000,
        "text": "example"
      },
      {
        "start_time": 6969480,
        "end_time": 6977599,
        "duration": 8119,
        "text": "what I don't have text column\nname"
      },
      {
        "start_time": 6974040,
        "end_time": 6984079,
        "duration": 10039,
        "text": "content column name this is the content\nof that embedding and there is also"
      },
      {
        "start_time": 6980679,
        "end_time": 6988560,
        "duration": 7881,
        "text": "metadata column name name metadata I\nthink you can leave them out as well but"
      },
      {
        "start_time": 6986840,
        "end_time": 6995000,
        "duration": 8160,
        "text": "because it's going to be default but\nknow that you can adjust them is it"
      },
      {
        "start_time": 6991719,
        "end_time": 7002719,
        "duration": 11000,
        "text": "embeddings or vector oh it's Vector\ncolumn name sorry Vector column name"
      },
      {
        "start_time": 6999520,
        "end_time": 7008000,
        "duration": 8480,
        "text": "vector and besides columns you can also\nhave a distance"
      },
      {
        "start_time": 7005599,
        "end_time": 7014040,
        "duration": 8441,
        "text": "strategy and this is a little bit more\ntechnical basically meaning what uh"
      },
      {
        "start_time": 7010920,
        "end_time": 7020520,
        "duration": 9600,
        "text": "function to use to calculate uh the\nsimilarity there is cosine uh there is"
      },
      {
        "start_time": 7018159,
        "end_time": 7020520,
        "duration": 2361,
        "text": "uh"
      },
      {
        "start_time": 7022000,
        "end_time": 7031679,
        "duration": 9679,
        "text": "whatever yeah there are other methods as\nwell like inner product or Ean as well"
      },
      {
        "start_time": 7029719,
        "end_time": 7038719,
        "duration": 9000,
        "text": "but cosine is default so you can leave\nit like this or you can even leave it"
      },
      {
        "start_time": 7033119,
        "end_time": 7043440,
        "duration": 10321,
        "text": "out as well anyway now if I restart my\napplication the vector store should"
      },
      {
        "start_time": 7040719,
        "end_time": 7047800,
        "duration": 7081,
        "text": "automatically connect with this\nuh database with this configuration I"
      },
      {
        "start_time": 7045560,
        "end_time": 7052599,
        "duration": 7039,
        "text": "don't need to change anything else the\nvector store will have the same ad"
      },
      {
        "start_time": 7049920,
        "end_time": 7058560,
        "duration": 8640,
        "text": "documents and stuff like that and it\nshould automatically handle the database"
      },
      {
        "start_time": 7055639,
        "end_time": 7063199,
        "duration": 7560,
        "text": "creation for me if I go into new one\nunder tables we don't have any tables"
      },
      {
        "start_time": 7060599,
        "end_time": 7069679,
        "duration": 9080,
        "text": "yet but if I'm going to go ahead and\nrestart or run our"
      },
      {
        "start_time": 7066840,
        "end_time": 7076440,
        "duration": 9600,
        "text": "agent uh if everything is successful\nit's going to connect and"
      },
      {
        "start_time": 7073800,
        "end_time": 7082440,
        "duration": 8640,
        "text": "store information in postgress we see\nthat we cannot find the PG uh package"
      },
      {
        "start_time": 7080159,
        "end_time": 7088119,
        "duration": 7960,
        "text": "because for that we need to do npm\ninstall PG this is for postgress so it's"
      },
      {
        "start_time": 7086320,
        "end_time": 7095679,
        "duration": 9359,
        "text": "a pure\ndependency uh let's try to run it again"
      },
      {
        "start_time": 7091880,
        "end_time": 7102679,
        "duration": 10799,
        "text": "we see Vector store from embeddings\ndogs does not provide an export"
      },
      {
        "start_time": 7098880,
        "end_time": 7105119,
        "duration": 6239,
        "text": "member I forgot to do export\nVector"
      },
      {
        "start_time": 7107079,
        "end_time": 7110760,
        "duration": 3681,
        "text": "store if I do it"
      },
      {
        "start_time": 7113639,
        "end_time": 7121400,
        "duration": 7761,
        "text": "again how many tabs open in that browser\nI don't know a lot and that's not even"
      },
      {
        "start_time": 7119079,
        "end_time": 7127639,
        "duration": 8560,
        "text": "enough uh what will people learn from\nthe video like now at this point if I go"
      },
      {
        "start_time": 7124840,
        "end_time": 7132360,
        "duration": 7520,
        "text": "to the tables we see a new table called\ntranscripts if you go into the options"
      },
      {
        "start_time": 7129719,
        "end_time": 7139000,
        "duration": 9281,
        "text": "here and enable table RW count we see\nthat we have around"
      },
      {
        "start_time": 7134360,
        "end_time": 7145560,
        "duration": 11200,
        "text": "167 chunks of data so this is not 167\nvideos but because my video one of them"
      },
      {
        "start_time": 7141760,
        "end_time": 7148920,
        "duration": 7160,
        "text": "is 4 hours long it divided in in that\nmany"
      },
      {
        "start_time": 7146360,
        "end_time": 7156119,
        "duration": 9759,
        "text": "chunks so we see that the first ones is\nabout L stroll and so one fastest ahead"
      },
      {
        "start_time": 7152159,
        "end_time": 7163360,
        "duration": 11201,
        "text": "Louis Hamilton definitely uh transcript\nfrom uh Formula 1 videos but if you"
      },
      {
        "start_time": 7159000,
        "end_time": 7171159,
        "duration": 12159,
        "text": "scroll down a bit we see that what\ninformation about the Bol text and react"
      },
      {
        "start_time": 7167719,
        "end_time": 7176800,
        "duration": 9081,
        "text": "native and so on so this is the second\nvideo in the"
      },
      {
        "start_time": 7173400,
        "end_time": 7182079,
        "duration": 8679,
        "text": "metadata there is the metadata about\nvideo ID so this is how the filtering is"
      },
      {
        "start_time": 7180199,
        "end_time": 7188159,
        "duration": 7960,
        "text": "supposed to work and let's double check\nif filtering is working in a second and"
      },
      {
        "start_time": 7185000,
        "end_time": 7194880,
        "duration": 9880,
        "text": "there is this Vector which as you can\nsee is a bunch of"
      },
      {
        "start_time": 7191040,
        "end_time": 7198880,
        "duration": 7840,
        "text": "numbers if I will I don't know I can\ncopy it maybe I"
      },
      {
        "start_time": 7196800,
        "end_time": 7204320,
        "duration": 7520,
        "text": "don't but you're going to see that it's\nsimply a bunch of"
      },
      {
        "start_time": 7201280,
        "end_time": 7209800,
        "duration": 8520,
        "text": "numbers so this is a better way because\nnow it is stored in the database so we"
      },
      {
        "start_time": 7206960,
        "end_time": 7215679,
        "duration": 8719,
        "text": "can we don't have to embed and generate\nthem every time we can build a huge"
      },
      {
        "start_time": 7212280,
        "end_time": 7221320,
        "duration": 9040,
        "text": "cache of this data to later interact\nwith this is the"
      },
      {
        "start_time": 7218599,
        "end_time": 7226960,
        "duration": 8361,
        "text": "information and again let me double\ncheck in the agent in that tool for"
      },
      {
        "start_time": 7224320,
        "end_time": 7231480,
        "duration": 7160,
        "text": "retrieval we have\nhere the"
      },
      {
        "start_time": 7228760,
        "end_time": 7237199,
        "duration": 8439,
        "text": "function but as we can see now that our\nVector store is a database it would be"
      },
      {
        "start_time": 7234440,
        "end_time": 7241440,
        "duration": 7000,
        "text": "better to provide here a filter\nobject and that filter object if I'm not"
      },
      {
        "start_time": 7239679,
        "end_time": 7245400,
        "duration": 5721,
        "text": "mistaken is going to be added on the\ndatabase layer so it's going to"
      },
      {
        "start_time": 7243360,
        "end_time": 7251760,
        "duration": 8400,
        "text": "completely ignore those items when it\ndoes we SQL query so this is the filter"
      },
      {
        "start_time": 7249639,
        "end_time": 7255670,
        "duration": 6031,
        "text": "to retrieve documents based on the video\nIDE"
      },
      {
        "start_time": 7253560,
        "end_time": 7261560,
        "duration": 8000,
        "text": "perfect now I will\n[Music]"
      },
      {
        "start_time": 7258280,
        "end_time": 7261560,
        "duration": 3280,
        "text": "do like"
      },
      {
        "start_time": 7263360,
        "end_time": 7270800,
        "duration": 7440,
        "text": "this and at this moment we are still\nadding like that those items in the"
      },
      {
        "start_time": 7268960,
        "end_time": 7276679,
        "duration": 7719,
        "text": "database so most probably we're going to\nhave duplicated items we had 150 now we"
      },
      {
        "start_time": 7274599,
        "end_time": 7282679,
        "duration": 8080,
        "text": "have\n334 uh but it works here like"
      },
      {
        "start_time": 7283480,
        "end_time": 7291520,
        "duration": 8040,
        "text": "this time it didn't call the tool but\nanyway or maybe it's a problem maybe it"
      },
      {
        "start_time": 7290239,
        "end_time": 7296480,
        "duration": 6241,
        "text": "call the\ntool I'm going to comment out this wait"
      },
      {
        "start_time": 7294239,
        "end_time": 7301679,
        "duration": 7440,
        "text": "add YouTube videos to the vector store\nbecause we're already"
      },
      {
        "start_time": 7298119,
        "end_time": 7305480,
        "duration": 7361,
        "text": "there and I'm going to run it again to\nsee if the filtering is working"
      },
      {
        "start_time": 7309440,
        "end_time": 7315920,
        "duration": 6480,
        "text": "correctly because it's I not calling\ntool where the tool is not doing yeah I"
      },
      {
        "start_time": 7313960,
        "end_time": 7318280,
        "duration": 4320,
        "text": "see information so that means that it's\nworking"
      },
      {
        "start_time": 7318360,
        "end_time": 7321360,
        "duration": 3000,
        "text": "correctly"
      },
      {
        "start_time": 7323719,
        "end_time": 7326719,
        "duration": 3000,
        "text": "Perfecto"
      },
      {
        "start_time": 7340560,
        "end_time": 7346520,
        "duration": 5960,
        "text": "amazing so this is our G"
      },
      {
        "start_time": 7346560,
        "end_time": 7354400,
        "duration": 7840,
        "text": "ad\ndatabase"
      },
      {
        "start_time": 7351400,
        "end_time": 7359719,
        "duration": 8319,
        "text": "uh\npogress for the vector"
      },
      {
        "start_time": 7366920,
        "end_time": 7374679,
        "duration": 7759,
        "text": "database I think in the next step we are\nkind of ready to integrate"
      },
      {
        "start_time": 7372400,
        "end_time": 7384679,
        "duration": 12279,
        "text": "the the chat\ninterface and before we do that I want"
      },
      {
        "start_time": 7378679,
        "end_time": 7391000,
        "duration": 12321,
        "text": "our server to be an restful API so that\nwe later can interact with it by sending"
      },
      {
        "start_time": 7387159,
        "end_time": 7395920,
        "duration": 8761,
        "text": "HTTP requests at the moment our agent we\ninteract with it by literally calling"
      },
      {
        "start_time": 7394280,
        "end_time": 7402360,
        "duration": 8080,
        "text": "agent. invoke\nand invoking that um executing this"
      },
      {
        "start_time": 7400239,
        "end_time": 7409920,
        "duration": 9681,
        "text": "file but what I want want to do is I\nwant to create an API that I can send"
      },
      {
        "start_time": 7405880,
        "end_time": 7415000,
        "duration": 9120,
        "text": "this question as a post request and I\ncan invoke this agent and get back the"
      },
      {
        "start_time": 7412800,
        "end_time": 7424040,
        "duration": 11240,
        "text": "answer for that let's go ahead in the\nserver and create the index"
      },
      {
        "start_time": 7418440,
        "end_time": 7432000,
        "duration": 13560,
        "text": "do GS file and our server is going to be\nan HTTP server we're going to create"
      },
      {
        "start_time": 7426159,
        "end_time": 7437880,
        "duration": 11721,
        "text": "using Express so let's install Express\nmaybe course and"
      },
      {
        "start_time": 7434239,
        "end_time": 7437880,
        "duration": 3641,
        "text": "types SL"
      },
      {
        "start_time": 7438599,
        "end_time": 7447599,
        "duration": 9000,
        "text": "Express and let's start by creating a\nsimple uh import Express from Express"
      },
      {
        "start_time": 7445599,
        "end_time": 7455040,
        "duration": 9441,
        "text": "import course from\ncourse we create the express application"
      },
      {
        "start_time": 7451800,
        "end_time": 7459000,
        "duration": 7200,
        "text": "we add course which is you don't have if\nyou don't know like it's not a big deal"
      },
      {
        "start_time": 7456880,
        "end_time": 7464639,
        "duration": 7759,
        "text": "here just add it because it's going to\nlater help us send requests from"
      },
      {
        "start_time": 7461840,
        "end_time": 7471199,
        "duration": 9359,
        "text": "different from our front end to our back\nend when we will be deployed and what I"
      },
      {
        "start_time": 7467119,
        "end_time": 7476639,
        "duration": 9520,
        "text": "can do is I can say simply add a get\nrequest to the slash that will return"
      },
      {
        "start_time": 7473079,
        "end_time": 7483320,
        "duration": 10241,
        "text": "hello world and start listening at P\n3,000 for"
      },
      {
        "start_time": 7479000,
        "end_time": 7483320,
        "duration": 4320,
        "text": "example or maybe we can do"
      },
      {
        "start_time": 7484159,
        "end_time": 7493639,
        "duration": 9480,
        "text": "here const Port equal process. env. port\nor 3,000 if it's not provided I'll take"
      },
      {
        "start_time": 7492480,
        "end_time": 7498800,
        "duration": 6320,
        "text": "Port\nhere and the call back is going to be"
      },
      {
        "start_time": 7496119,
        "end_time": 7505440,
        "duration": 9321,
        "text": "executed when we the server started\nlistening this is a very basic barebone"
      },
      {
        "start_time": 7502800,
        "end_time": 7513040,
        "duration": 10240,
        "text": "uh HTTP server what I can do with it is\nI can do node maybe with EnV file and"
      },
      {
        "start_time": 7509760,
        "end_time": 7517719,
        "duration": 7959,
        "text": "I'm going to execute not agent but\nindex.js if I do that we see Server is"
      },
      {
        "start_time": 7515440,
        "end_time": 7522239,
        "duration": 6799,
        "text": "listening on Port\n3,000 because this is a get request I"
      },
      {
        "start_time": 7520639,
        "end_time": 7529719,
        "duration": 9080,
        "text": "can simply go to\nuh in the browser and do Local Host"
      },
      {
        "start_time": 7525199,
        "end_time": 7537880,
        "duration": 12681,
        "text": "3,000 and we see the hello\nworld the hello world that was sent from"
      },
      {
        "start_time": 7533920,
        "end_time": 7543360,
        "duration": 9440,
        "text": "here usually we are going to send this\nrequests maybe we're going to be Coral"
      },
      {
        "start_time": 7540320,
        "end_time": 7548040,
        "duration": 7720,
        "text": "request uh post request so we can also\nuse the coral command in the in the"
      },
      {
        "start_time": 7545320,
        "end_time": 7554760,
        "duration": 9440,
        "text": "terminal to send these\nrequests okay good um what what I'm"
      },
      {
        "start_time": 7551960,
        "end_time": 7564360,
        "duration": 12400,
        "text": "going to add now is not a get request\nbut a post request to the endpoint maybe"
      },
      {
        "start_time": 7560000,
        "end_time": 7569159,
        "duration": 9159,
        "text": "generator query or yeah let's do\ngenerate my generate is going to be like"
      },
      {
        "start_time": 7566760,
        "end_time": 7572320,
        "duration": 5560,
        "text": "question and answer I send a question\nand I expect back an"
      },
      {
        "start_time": 7572719,
        "end_time": 7587480,
        "duration": 14761,
        "text": "answer the query itself I expect it from\nthe body and let's do console log"
      },
      {
        "start_time": 7582880,
        "end_time": 7592800,
        "duration": 9920,
        "text": "query and return send like this now\nbecause this is a post requ actually I"
      },
      {
        "start_time": 7590599,
        "end_time": 7599800,
        "duration": 9201,
        "text": "did some changes so I need to stop the\nserver and run it again or I can do I"
      },
      {
        "start_time": 7597440,
        "end_time": 7599800,
        "duration": 2360,
        "text": "can"
      },
      {
        "start_time": 7600480,
        "end_time": 7611719,
        "duration": 11239,
        "text": "add come\non to my node I can add here at d-w"
      },
      {
        "start_time": 7609199,
        "end_time": 7616760,
        "duration": 7561,
        "text": "watch so that is going to watch any\nchanges if I'm going to change something"
      },
      {
        "start_time": 7613960,
        "end_time": 7621400,
        "duration": 7440,
        "text": "here it's going to restart so I don't\nhave to think about restarting it"
      },
      {
        "start_time": 7618920,
        "end_time": 7626000,
        "duration": 7080,
        "text": "always perfect now that our server has\nrestarted we can send a post request to/"
      },
      {
        "start_time": 7623800,
        "end_time": 7633960,
        "duration": 10160,
        "text": "generate to do that in a new terminal\nI'm going to do coral Dash"
      },
      {
        "start_time": 7630280,
        "end_time": 7633960,
        "duration": 3680,
        "text": "um that is a"
      },
      {
        "start_time": 7639679,
        "end_time": 7649079,
        "duration": 9400,
        "text": "header let me try\nuh send a post request"
      },
      {
        "start_time": 7647360,
        "end_time": 7659480,
        "duration": 12120,
        "text": "using\ncurl to slash generate with a query"
      },
      {
        "start_time": 7656119,
        "end_time": 7663320,
        "duration": 7201,
        "text": "data uh let's see what the AI will tell\nme yeah it's the dash X that I was"
      },
      {
        "start_time": 7661880,
        "end_time": 7666920,
        "duration": 5040,
        "text": "looking\nfor it should be"
      },
      {
        "start_time": 7667360,
        "end_time": 7678440,
        "duration": 11080,
        "text": "here so I'm trying to send a post\nrequest to Local H Local Host 3000 SL"
      },
      {
        "start_time": 7674800,
        "end_time": 7681559,
        "duration": 6759,
        "text": "generate with the data this query what\nwill people learn from this video and"
      },
      {
        "start_time": 7680159,
        "end_time": 7689119,
        "duration": 8960,
        "text": "this video\nID maybe I will take video ID as"
      },
      {
        "start_time": 7685199,
        "end_time": 7694639,
        "duration": 9440,
        "text": "well if I send this query we see\nsomething we don't know what exactly but"
      },
      {
        "start_time": 7692040,
        "end_time": 7699159,
        "duration": 7119,
        "text": "we see some errors and an error here as\nwell canot distract your property query"
      },
      {
        "start_time": 7696920,
        "end_time": 7705079,
        "duration": 8159,
        "text": "from requestbody that's because we\ndidn't um add quite important part which"
      },
      {
        "start_time": 7705480,
        "end_time": 7715679,
        "duration": 10199,
        "text": "is the\nhere as a middleware we can add a"
      },
      {
        "start_time": 7714040,
        "end_time": 7722320,
        "duration": 8280,
        "text": "express.\nJson that will automatically transform"
      },
      {
        "start_time": 7718800,
        "end_time": 7728119,
        "duration": 9319,
        "text": "our request body to Json because without\nthat the request body is not a Json"
      },
      {
        "start_time": 7725000,
        "end_time": 7732639,
        "duration": 7639,
        "text": "format if I simply add that one I can\nuse it as adjacent and D structure the"
      },
      {
        "start_time": 7730400,
        "end_time": 7738159,
        "duration": 7759,
        "text": "inputs like this\nnow if making sure that the server is"
      },
      {
        "start_time": 7735000,
        "end_time": 7742920,
        "duration": 7920,
        "text": "running if I send the same request again\nwe see hello world because that's what"
      },
      {
        "start_time": 7739960,
        "end_time": 7748880,
        "duration": 8920,
        "text": "we send but in the server we see that\nthe query is this one and the video ID"
      },
      {
        "start_time": 7744880,
        "end_time": 7754679,
        "duration": 9799,
        "text": "is this one meaning that I can go ahead\nand"
      },
      {
        "start_time": 7750639,
        "end_time": 7759559,
        "duration": 8920,
        "text": "import the agent here from our agent. JS\nlet's make sure that in our agent. GS we"
      },
      {
        "start_time": 7758199,
        "end_time": 7765920,
        "duration": 7721,
        "text": "do\nexport const a agent we no longer"
      },
      {
        "start_time": 7763440,
        "end_time": 7771719,
        "duration": 8279,
        "text": "interact with it directly so I can\nremove this part all together or maybe"
      },
      {
        "start_time": 7768679,
        "end_time": 7774719,
        "duration": 6040,
        "text": "I'm not going to remove it let me\nactually copy paste"
      },
      {
        "start_time": 7775040,
        "end_time": 7785119,
        "duration": 10079,
        "text": "it in our index inside the\ngenerate I'm going to put it here I'm"
      },
      {
        "start_time": 7782639,
        "end_time": 7790119,
        "duration": 7480,
        "text": "going to come to it in a second but I\nneed to change how we import the agent"
      },
      {
        "start_time": 7787800,
        "end_time": 7796840,
        "duration": 9040,
        "text": "we need to destructure it when importing\nbecause we are expor in it as a constant"
      },
      {
        "start_time": 7793480,
        "end_time": 7801920,
        "duration": 8440,
        "text": "so we have agent here from agent. JS and\nwhen there is a request to SL generate"
      },
      {
        "start_time": 7799679,
        "end_time": 7808639,
        "duration": 8960,
        "text": "we get the query we get the video\nID uh and we have the interaction with"
      },
      {
        "start_time": 7806239,
        "end_time": 7811719,
        "duration": 5480,
        "text": "agent as we had before I'm going to do\nsome changes we no longer need this"
      },
      {
        "start_time": 7810159,
        "end_time": 7816199,
        "duration": 6040,
        "text": "video ID because it's going to come from\nthe request"
      },
      {
        "start_time": 7813920,
        "end_time": 7822760,
        "duration": 8840,
        "text": "body I'm not going to have his console\nlog I'm going to have agent. invoke and"
      },
      {
        "start_time": 7820119,
        "end_time": 7827639,
        "duration": 7520,
        "text": "roll user and the content is going to be\nquery not this hardcoded one but the"
      },
      {
        "start_time": 7826159,
        "end_time": 7831800,
        "duration": 5641,
        "text": "query that we\nreceive for configuration we have Fred"
      },
      {
        "start_time": 7830320,
        "end_time": 7836599,
        "duration": 6279,
        "text": "ID so\nmaybe we're also going to send the Fred"
      },
      {
        "start_time": 7834760,
        "end_time": 7842000,
        "duration": 7240,
        "text": "ID\nhere so let's do Fred"
      },
      {
        "start_time": 7839520,
        "end_time": 7851480,
        "duration": 11960,
        "text": "ID and video\nID then we take the result and we return"
      },
      {
        "start_time": 7846440,
        "end_time": 7855840,
        "duration": 9400,
        "text": "it back as results\nmaybe I can do it like this let's"
      },
      {
        "start_time": 7856520,
        "end_time": 7865000,
        "duration": 8480,
        "text": "see return that\nJson to send it as a"
      },
      {
        "start_time": 7862360,
        "end_time": 7869119,
        "duration": 6759,
        "text": "Json and I'm going to send the last\nmessage maybe it's going to be too much"
      },
      {
        "start_time": 7867000,
        "end_time": 7876360,
        "duration": 9360,
        "text": "information but let's see what's going\nto happen now our server has restarted"
      },
      {
        "start_time": 7873280,
        "end_time": 7881679,
        "duration": 8399,
        "text": "and we can send the same\nrequest but we need to change it"
      },
      {
        "start_time": 7878840,
        "end_time": 7888679,
        "duration": 9839,
        "text": "slightly\nto add in this"
      },
      {
        "start_time": 7884559,
        "end_time": 7891599,
        "duration": 7040,
        "text": "um- D I'm going to add a comma here I'm\ngoing to do"
      },
      {
        "start_time": 7891760,
        "end_time": 7901559,
        "duration": 9799,
        "text": "a is it an enter come on it's a bit hard\nto to edit them but I can I'll do it"
      },
      {
        "start_time": 7899320,
        "end_time": 7901559,
        "duration": 2239,
        "text": "like"
      },
      {
        "start_time": 7904480,
        "end_time": 7914079,
        "duration": 9599,
        "text": "this I'm going to add it here I'm going\nto comment it"
      },
      {
        "start_time": 7909280,
        "end_time": 7918679,
        "duration": 9399,
        "text": "out PR ID one I'm going to uncomment it\ncopy it and comment it back and I'm"
      },
      {
        "start_time": 7917159,
        "end_time": 7924719,
        "duration": 7560,
        "text": "going to leave it here for you to also\nbe able to test this endpoint easily I'm"
      },
      {
        "start_time": 7921400,
        "end_time": 7931079,
        "duration": 9679,
        "text": "going to go into\nthe terminal and I'm going to send this"
      },
      {
        "start_time": 7932320,
        "end_time": 7939400,
        "duration": 7080,
        "text": "request it's going to already work with\nthis query and with this video ID"
      },
      {
        "start_time": 7944480,
        "end_time": 7951079,
        "duration": 6599,
        "text": "and we see a lot of things but we also\nsee the"
      },
      {
        "start_time": 7948239,
        "end_time": 7953520,
        "duration": 5281,
        "text": "content and I'm thinking should I just\nreturn the"
      },
      {
        "start_time": 7953679,
        "end_time": 7963320,
        "duration": 9641,
        "text": "content is anything else important here\nfor the front"
      },
      {
        "start_time": 7958719,
        "end_time": 7963320,
        "duration": 4601,
        "text": "end where is cash and so"
      },
      {
        "start_time": 7964960,
        "end_time": 7971559,
        "duration": 6599,
        "text": "on in response metadata ID model"
      },
      {
        "start_time": 7980320,
        "end_time": 7989679,
        "duration": 9359,
        "text": "let me simplify\nit and just"
      },
      {
        "start_time": 7985320,
        "end_time": 7989679,
        "duration": 4359,
        "text": "say rest."
      },
      {
        "start_time": 7989840,
        "end_time": 7996400,
        "duration": 6560,
        "text": "send Das content so I'm simply going to\nsend the content"
      },
      {
        "start_time": 7997159,
        "end_time": 8004920,
        "duration": 7761,
        "text": "there and if I send it again it's going\njust to give me the content"
      },
      {
        "start_time": 8002960,
        "end_time": 8008880,
        "duration": 5920,
        "text": "you can adjust it like depending on what\ninformation you want to send to the to"
      },
      {
        "start_time": 8006440,
        "end_time": 8008880,
        "duration": 2440,
        "text": "the front"
      },
      {
        "start_time": 8016880,
        "end_time": 8021360,
        "duration": 4480,
        "text": "end perfect it"
      },
      {
        "start_time": 8024719,
        "end_time": 8036400,
        "duration": 11681,
        "text": "works and I think that is it for our\nfirst step into creating a"
      },
      {
        "start_time": 8031559,
        "end_time": 8040159,
        "duration": 8600,
        "text": "restful and a server for our AI agent so\nthat in the next step our front end is"
      },
      {
        "start_time": 8038599,
        "end_time": 8044800,
        "duration": 6201,
        "text": "going to be able to interact with this\nserver when the user write something in"
      },
      {
        "start_time": 8041840,
        "end_time": 8049719,
        "duration": 7879,
        "text": "an input box for now let's do go ahead\nand do G status git"
      },
      {
        "start_time": 8047520,
        "end_time": 8055239,
        "duration": 7719,
        "text": "add get\ncommit um"
      },
      {
        "start_time": 8053199,
        "end_time": 8064400,
        "duration": 11201,
        "text": "add\nrest API for our"
      },
      {
        "start_time": 8059719,
        "end_time": 8064400,
        "duration": 4681,
        "text": "backend and for the"
      },
      {
        "start_time": 8065559,
        "end_time": 8068559,
        "duration": 3000,
        "text": "agent"
      },
      {
        "start_time": 8069400,
        "end_time": 8076800,
        "duration": 7400,
        "text": "perfect now it is time to already\ninstead"
      },
      {
        "start_time": 8077920,
        "end_time": 8088599,
        "duration": 10679,
        "text": "of instead of doing it for C request it\nis time to integrate the the frontend"
      },
      {
        "start_time": 8085880,
        "end_time": 8092440,
        "duration": 6560,
        "text": "the client side application from which\nwe're going to be able to interact with"
      },
      {
        "start_time": 8090800,
        "end_time": 8096119,
        "duration": 5319,
        "text": "our our AI\nagent I don't want to spend a lot of"
      },
      {
        "start_time": 8094800,
        "end_time": 8102719,
        "duration": 7919,
        "text": "time building\nit uh and for that reason I'm going to"
      },
      {
        "start_time": 8099000,
        "end_time": 8105040,
        "duration": 6040,
        "text": "show you I'm going to leave in the in\nthe"
      },
      {
        "start_time": 8105719,
        "end_time": 8114239,
        "duration": 8520,
        "text": "guide let me\nthink yeah if we look into the tutorial"
      },
      {
        "start_time": 8111840,
        "end_time": 8122079,
        "duration": 10239,
        "text": "build AI agent with\nlra for the front end what I did is I"
      },
      {
        "start_time": 8119079,
        "end_time": 8122079,
        "duration": 3000,
        "text": "simply"
      },
      {
        "start_time": 8122199,
        "end_time": 8130599,
        "duration": 8400,
        "text": "created this prompt and I use entropic\nto build the front end for me so I told"
      },
      {
        "start_time": 8128199,
        "end_time": 8135920,
        "duration": 7721,
        "text": "it build a simple UI interface for an AI\nchat up with this structure with this"
      },
      {
        "start_time": 8133320,
        "end_time": 8140679,
        "duration": 7359,
        "text": "styling with this and that and that and\nin then we got like this AI chat"
      },
      {
        "start_time": 8138000,
        "end_time": 8146320,
        "duration": 8320,
        "text": "interface and I think it's pretty good\nfor us uh and because I don't want to"
      },
      {
        "start_time": 8143320,
        "end_time": 8151880,
        "duration": 8560,
        "text": "focus on building the uh the front end\nwe can reuse the same code here where we"
      },
      {
        "start_time": 8148520,
        "end_time": 8157199,
        "duration": 8679,
        "text": "can try to reuse the same uh\num uh llm generation as well I'm not"
      },
      {
        "start_time": 8155360,
        "end_time": 8162480,
        "duration": 7120,
        "text": "sure what is going to be the result so\nit's better to use it together with me"
      },
      {
        "start_time": 8159599,
        "end_time": 8168440,
        "duration": 8841,
        "text": "so first let's go ahead and run npm\ncreate V at latest to generate a new"
      },
      {
        "start_time": 8165639,
        "end_time": 8174800,
        "duration": 9161,
        "text": "react project but this time make sure\nthat you are not inside the server so if"
      },
      {
        "start_time": 8171159,
        "end_time": 8182239,
        "duration": 11080,
        "text": "you are in server you can do PFD to look\nwhere you are make sure to go one layer"
      },
      {
        "start_time": 8178199,
        "end_time": 8190199,
        "duration": 12000,
        "text": "up to be if you do us to see the server\nhere and now let's go ahead and do npm"
      },
      {
        "start_time": 8185760,
        "end_time": 8197000,
        "duration": 11240,
        "text": "create V latest let's give a project\nname let's do chat with YouTube or let's"
      },
      {
        "start_time": 8194040,
        "end_time": 8197000,
        "duration": 2960,
        "text": "do here"
      },
      {
        "start_time": 8197800,
        "end_time": 8204200,
        "duration": 6400,
        "text": "client let's call let's use uh a\nframework and the framework is going to"
      },
      {
        "start_time": 8202920,
        "end_time": 8211679,
        "duration": 8759,
        "text": "be\nreact I'm going to use um should I use"
      },
      {
        "start_time": 8208280,
        "end_time": 8218920,
        "duration": 10640,
        "text": "typescript let's use typescript\nrpt and that's it now we have a client"
      },
      {
        "start_time": 8215920,
        "end_time": 8227760,
        "duration": 11840,
        "text": "side project if I'm going to go into CD\nclient and do npm start or npm"
      },
      {
        "start_time": 8224120,
        "end_time": 8227760,
        "duration": 3640,
        "text": "install to install the"
      },
      {
        "start_time": 8232840,
        "end_time": 8242080,
        "duration": 9240,
        "text": "dependencies in van npm run\nDev we're going to see a local host here"
      },
      {
        "start_time": 8240160,
        "end_time": 8250080,
        "duration": 9920,
        "text": "and if I open open it up we're going to\nsee the starting point for a react"
      },
      {
        "start_time": 8246319,
        "end_time": 8255559,
        "duration": 9240,
        "text": "application perfect let's go ahead and\nas as I was saying"
      },
      {
        "start_time": 8252000,
        "end_time": 8265200,
        "duration": 13200,
        "text": "either uh use this llm to\ngenerate uh this prompt in an llm like"
      },
      {
        "start_time": 8260040,
        "end_time": 8272880,
        "duration": 12840,
        "text": "entropic or in the CLA or um\nchbt and generate the Cod is like that"
      },
      {
        "start_time": 8269120,
        "end_time": 8277359,
        "duration": 8239,
        "text": "or come here I'm going to leave it in\nthe comments so you have access to"
      },
      {
        "start_time": 8277679,
        "end_time": 8287679,
        "duration": 10000,
        "text": "it uh and press the source code\nhere we're going to have the same client"
      },
      {
        "start_time": 8284880,
        "end_time": 8294960,
        "duration": 10080,
        "text": "here in the source I'm going to look at\nthe up. TSX I'm going to copy everything"
      },
      {
        "start_time": 8292599,
        "end_time": 8299439,
        "duration": 6840,
        "text": "here and I'm going to come into the\nclient source"
      },
      {
        "start_time": 8296840,
        "end_time": 8308280,
        "duration": 11440,
        "text": "application based everything\nhere and this same thing"
      },
      {
        "start_time": 8302040,
        "end_time": 8316960,
        "duration": 14920,
        "text": "for uh is it index. CSS I think so let's\ncopy everything from index. CSX and add"
      },
      {
        "start_time": 8312080,
        "end_time": 8316960,
        "duration": 4880,
        "text": "it here by replacing everything like"
      },
      {
        "start_time": 8321639,
        "end_time": 8332760,
        "duration": 11121,
        "text": "this uh the only thing is that if you\nlook into up. TSX it tries to connect to"
      },
      {
        "start_time": 8329000,
        "end_time": 8338639,
        "duration": 9639,
        "text": "Local Host 3000 so let's change it to 3\n3,001 let's change it to 3,000 because"
      },
      {
        "start_time": 8335359,
        "end_time": 8346120,
        "duration": 10761,
        "text": "now our back end is running on\n3,000 and let's try to"
      },
      {
        "start_time": 8343000,
        "end_time": 8355200,
        "duration": 12200,
        "text": "what to restart it by running npm run\nDev again this is"
      },
      {
        "start_time": 8349880,
        "end_time": 8361719,
        "duration": 11839,
        "text": "the API if I open it up here boom here\nwe have a chat interface if I'm going to"
      },
      {
        "start_time": 8359160,
        "end_time": 8368280,
        "duration": 9120,
        "text": "say what's going to happen what's going\nto happen in the client if I if I'll say"
      },
      {
        "start_time": 8368399,
        "end_time": 8376200,
        "duration": 7801,
        "text": "hello there was an error because\nprobably we're going to have to change a"
      },
      {
        "start_time": 8373840,
        "end_time": 8382479,
        "duration": 8639,
        "text": "little bit how we do\nthat uh if we look into app."
      },
      {
        "start_time": 8379359,
        "end_time": 8390760,
        "duration": 11401,
        "text": "TSX and are looking\nhere around line"
      },
      {
        "start_time": 8385080,
        "end_time": 8396600,
        "duration": 11520,
        "text": "50 we have API generate and the data\nhere is a little bit different it does"
      },
      {
        "start_time": 8393080,
        "end_time": 8405560,
        "duration": 12480,
        "text": "prompt it does Fred ID and it does video\nID let's try to do video ID like this in"
      },
      {
        "start_time": 8401280,
        "end_time": 8410680,
        "duration": 9400,
        "text": "the server in the index what do we have\nit should be the same SL"
      },
      {
        "start_time": 8407600,
        "end_time": 8417160,
        "duration": 9560,
        "text": "generate slash\ngenerate instead of prompt I'm using"
      },
      {
        "start_time": 8413920,
        "end_time": 8424520,
        "duration": 10600,
        "text": "query it was easier if I use the same so\nlet's just change query here Friday is"
      },
      {
        "start_time": 8420399,
        "end_time": 8433479,
        "duration": 13080,
        "text": "good video ID hardcoded video\nID"
      },
      {
        "start_time": 8427280,
        "end_time": 8440680,
        "duration": 13400,
        "text": "hardcoded and now if I go here and say\nhello if I reload say"
      },
      {
        "start_time": 8438000,
        "end_time": 8445479,
        "duration": 7479,
        "text": "hello what's going on here if I look in\nthe console into the network Tab and say"
      },
      {
        "start_time": 8443600,
        "end_time": 8452640,
        "duration": 9040,
        "text": "again\nhello send we see that it failed why"
      },
      {
        "start_time": 8454040,
        "end_time": 8457280,
        "duration": 3240,
        "text": "it's because of"
      },
      {
        "start_time": 8465040,
        "end_time": 8477479,
        "duration": 12439,
        "text": "a what uh response request what's going\non maybe our API is not running server"
      },
      {
        "start_time": 8475080,
        "end_time": 8484600,
        "duration": 9520,
        "text": "yes fail to run\nindex I'm going to go ahead and restart"
      },
      {
        "start_time": 8480600,
        "end_time": 8489520,
        "duration": 8920,
        "text": "start my API my server and it still\nfails to run no now it says server"
      },
      {
        "start_time": 8487040,
        "end_time": 8492319,
        "duration": 5279,
        "text": "running on this port if I come back here\nand say"
      },
      {
        "start_time": 8492560,
        "end_time": 8500319,
        "duration": 7759,
        "text": "hello okay now it gets to the\nAPI hello I'm here to help you find"
      },
      {
        "start_time": 8499280,
        "end_time": 8504040,
        "duration": 4760,
        "text": "information from YouTube video\ntranscripts is there a specific YouTube"
      },
      {
        "start_time": 8502600,
        "end_time": 8508319,
        "duration": 5719,
        "text": "video or topic you would like me to\nsearch for information about I can"
      },
      {
        "start_time": 8506359,
        "end_time": 8513560,
        "duration": 7201,
        "text": "retrieve relevant parts of a video\ntranscript based on a query perfect what"
      },
      {
        "start_time": 8510960,
        "end_time": 8519640,
        "duration": 8680,
        "text": "we're going to do is let's go ahead and\ndouble check like we hardcoded vi video"
      },
      {
        "start_time": 8516800,
        "end_time": 8525880,
        "duration": 9080,
        "text": "ID that video ID I'm just going to\ndouble check in the"
      },
      {
        "start_time": 8522080,
        "end_time": 8533960,
        "duration": 11880,
        "text": "data if we have such a video ID yeah we\ndo have and this one"
      },
      {
        "start_time": 8529359,
        "end_time": 8541160,
        "duration": 11801,
        "text": "is is this apple style video let's\ncheck"
      },
      {
        "start_time": 8535800,
        "end_time": 8548000,
        "duration": 12200,
        "text": "what um will the viewer\nlearn by following this"
      },
      {
        "start_time": 8545240,
        "end_time": 8550520,
        "duration": 5280,
        "text": "tutorial this is a question about a\nspecific"
      },
      {
        "start_time": 8556760,
        "end_time": 8566200,
        "duration": 9440,
        "text": "video use\nthe tool to"
      },
      {
        "start_time": 8562520,
        "end_time": 8571840,
        "duration": 9320,
        "text": "get to get to get to get to get how is\nit called to get"
      },
      {
        "start_time": 8567840,
        "end_time": 8571840,
        "duration": 4000,
        "text": "uh relevant"
      },
      {
        "start_time": 8577319,
        "end_time": 8587399,
        "duration": 10080,
        "text": "transcript okay it's very insistent\nokay what is the topic of the"
      },
      {
        "start_time": 8587720,
        "end_time": 8599520,
        "duration": 11800,
        "text": "video you see like the\nthe one benefit of an AI agent is that"
      },
      {
        "start_time": 8596240,
        "end_time": 8605160,
        "duration": 8920,
        "text": "it can decide like how often and how to\ninteract with the tool in this case a"
      },
      {
        "start_time": 8601760,
        "end_time": 8609560,
        "duration": 7800,
        "text": "retrieval tool for the rag system the\ndownside is that you lose a little bit"
      },
      {
        "start_time": 8607080,
        "end_time": 8615880,
        "duration": 8800,
        "text": "of control and as you can see here some\nquestions the tool didn't realize that"
      },
      {
        "start_time": 8611880,
        "end_time": 8622760,
        "duration": 10880,
        "text": "it has to inter integrate with that um\nit has to call that tool so sometimes an"
      },
      {
        "start_time": 8619439,
        "end_time": 8628200,
        "duration": 8761,
        "text": "old school chain of calls might be\nbetter but with write prompt engineering"
      },
      {
        "start_time": 8625600,
        "end_time": 8631960,
        "duration": 6360,
        "text": "with WR descriptions of a tool uh I\nthink you can get like where actual"
      },
      {
        "start_time": 8629960,
        "end_time": 8639040,
        "duration": 9080,
        "text": "results and keep the benefits of having\nthis AI agent that decides like um what"
      },
      {
        "start_time": 8635600,
        "end_time": 8642880,
        "duration": 7280,
        "text": "to to call how often to call and so on\nso we see that based on the transcript"
      },
      {
        "start_time": 8641080,
        "end_time": 8649720,
        "duration": 8640,
        "text": "this video appears to be aor about\ncreating a mobile application perfect"
      },
      {
        "start_time": 8646399,
        "end_time": 8654040,
        "duration": 7641,
        "text": "amazing so we have our front end as well\nwe have our client side as well let me"
      },
      {
        "start_time": 8652479,
        "end_time": 8663640,
        "duration": 11161,
        "text": "go ahead\nand do the following um I'm going to do"
      },
      {
        "start_time": 8659640,
        "end_time": 8670960,
        "duration": 11320,
        "text": "a git add G commit minus\nM front"
      },
      {
        "start_time": 8666920,
        "end_time": 8670960,
        "duration": 4040,
        "text": "and chat"
      },
      {
        "start_time": 8676720,
        "end_time": 8684920,
        "duration": 8200,
        "text": "interface another issue is the agent\nwill call a tool when you don't want it"
      },
      {
        "start_time": 8681319,
        "end_time": 8691600,
        "duration": 10281,
        "text": "to yeah that that's also true like\nhaving like an agent as we have here we"
      },
      {
        "start_time": 8688160,
        "end_time": 8697560,
        "duration": 9400,
        "text": "don't say like the word or how to do the\nthings we just give it a bunch of tools"
      },
      {
        "start_time": 8694920,
        "end_time": 8702040,
        "duration": 7120,
        "text": "and we let it decide like when to call\nit how to call it and so on so yeah"
      },
      {
        "start_time": 8700240,
        "end_time": 8708000,
        "duration": 7760,
        "text": "sometimes it's going to do things that\nyou might not do but that's it's That's"
      },
      {
        "start_time": 8704279,
        "end_time": 8708000,
        "duration": 3721,
        "text": "The Power of an autonomous"
      },
      {
        "start_time": 8708399,
        "end_time": 8718000,
        "duration": 9601,
        "text": "agent mine likes to use the generate\nimage tool anytime it writes an image"
      },
      {
        "start_time": 8714399,
        "end_time": 8718000,
        "duration": 3601,
        "text": "generation prompt"
      },
      {
        "start_time": 8723120,
        "end_time": 8729080,
        "duration": 5960,
        "text": "I highly doubt you're comfortable\nspeaking like that when you are not"
      },
      {
        "start_time": 8726640,
        "end_time": 8731240,
        "duration": 4600,
        "text": "behind the safety of the screen what do\nyou"
      },
      {
        "start_time": 8737240,
        "end_time": 8743200,
        "duration": 5960,
        "text": "mean oh you you have some beef chill\nguys it's"
      },
      {
        "start_time": 8745399,
        "end_time": 8754439,
        "duration": 9040,
        "text": "okay okay so what do we want to do next\nguys"
      },
      {
        "start_time": 8757600,
        "end_time": 8769520,
        "duration": 11920,
        "text": "um what do I want to do next I know what\nI want to do"
      },
      {
        "start_time": 8763640,
        "end_time": 8775080,
        "duration": 11440,
        "text": "next um the next step is being able to\nstart conversation about new videos"
      },
      {
        "start_time": 8772040,
        "end_time": 8780319,
        "duration": 8279,
        "text": "because right now in our neon database\nwe prefilled it with some transcripts"
      },
      {
        "start_time": 8777920,
        "end_time": 8785439,
        "duration": 7519,
        "text": "from two different videos and we can\ntalk about those videos by hardcoding"
      },
      {
        "start_time": 8782640,
        "end_time": 8789880,
        "duration": 7240,
        "text": "some data what I want to do next is to\nbe able"
      },
      {
        "start_time": 8786680,
        "end_time": 8796600,
        "duration": 9920,
        "text": "to embed an index any kind of video that\nthe user wants to talk about for that we"
      },
      {
        "start_time": 8793200,
        "end_time": 8801880,
        "duration": 8680,
        "text": "need to allow that to happen and one\nstep before reaching that because we're"
      },
      {
        "start_time": 8798160,
        "end_time": 8809120,
        "duration": 10960,
        "text": "going to do that with Bri data uh before\nwe do that I want to host our both"
      },
      {
        "start_time": 8805600,
        "end_time": 8813640,
        "duration": 8040,
        "text": "client side and server side so that we\nlater we're going to see see like how we"
      },
      {
        "start_time": 8810960,
        "end_time": 8820640,
        "duration": 9680,
        "text": "can connect bright data back to our\nsystem to get this data about the video"
      },
      {
        "start_time": 8818240,
        "end_time": 8826600,
        "duration": 8360,
        "text": "transcripts so what we're going to do is\nwe now are going to host our server with"
      },
      {
        "start_time": 8823600,
        "end_time": 8830560,
        "duration": 6960,
        "text": "jio go ahead jio.com where you can\nfollow the link in the description by"
      },
      {
        "start_time": 8828680,
        "end_time": 8836080,
        "duration": 7400,
        "text": "the way uh this part of the video is\nsponsored by jio so thank you very much"
      },
      {
        "start_time": 8833040,
        "end_time": 8841120,
        "duration": 8080,
        "text": "jio for making this possible and you can\ngo uh on janio you're going to go into"
      },
      {
        "start_time": 8838920,
        "end_time": 8847279,
        "duration": 8359,
        "text": "products deployment\nplatform and you can uh go ahead in the"
      },
      {
        "start_time": 8845200,
        "end_time": 8854600,
        "duration": 9400,
        "text": "documentation create an\naccount and you can see different"
      },
      {
        "start_time": 8849760,
        "end_time": 8857080,
        "duration": 7320,
        "text": "Frameworks and tutorials how to um\ndeploy"
      },
      {
        "start_time": 8864279,
        "end_time": 8872920,
        "duration": 8641,
        "text": "them in the genesio CLI let's go ahead\nand install genesio first by doing npm"
      },
      {
        "start_time": 8870920,
        "end_time": 8878359,
        "duration": 7439,
        "text": "install genesio\nDG in the terminal I'm going to do that"
      },
      {
        "start_time": 8876160,
        "end_time": 8885960,
        "duration": 9800,
        "text": "here I already have it installed but it\nthat is not bad to update it as well uh"
      },
      {
        "start_time": 8882080,
        "end_time": 8890000,
        "duration": 7920,
        "text": "and then we have to run genesio\nlogin let me double check"
      },
      {
        "start_time": 8892520,
        "end_time": 8898240,
        "duration": 5720,
        "text": "that yeah need this one but"
      },
      {
        "start_time": 8909160,
        "end_time": 8917720,
        "duration": 8560,
        "text": "make sure to create a genesio\naccount and then you're going to need"
      },
      {
        "start_time": 8914880,
        "end_time": 8921840,
        "duration": 6960,
        "text": "the deployment the the API key from\nthere and you're going to run"
      },
      {
        "start_time": 8924200,
        "end_time": 8932040,
        "duration": 7840,
        "text": "genesio is it login I forgot like how to\nto connect it with our"
      },
      {
        "start_time": 8935359,
        "end_time": 8941359,
        "duration": 6000,
        "text": "yes jio login to the platform so if you\nrun jio"
      },
      {
        "start_time": 8941399,
        "end_time": 8948920,
        "duration": 7521,
        "text": "login you're going to connect it with\nyour account after that we can start"
      },
      {
        "start_time": 8946680,
        "end_time": 8957600,
        "duration": 10920,
        "text": "deploying our application but before\ndeploying I'm going to create um genesio"
      },
      {
        "start_time": 8953960,
        "end_time": 8966560,
        "duration": 12600,
        "text": "do yaml file that will specify how do we\nwant to deploy our po server and the"
      },
      {
        "start_time": 8962600,
        "end_time": 8970640,
        "duration": 8040,
        "text": "client um VL uh I'll will also provide\nit in the guide so you don't have to"
      },
      {
        "start_time": 8967960,
        "end_time": 8976359,
        "duration": 8399,
        "text": "write it but I will write it quickly so\nuh I will comment like what everything"
      },
      {
        "start_time": 8972680,
        "end_time": 8976359,
        "duration": 3679,
        "text": "means so first we"
      },
      {
        "start_time": 8976560,
        "end_time": 8987800,
        "duration": 11240,
        "text": "have let me do it like this so I have a\nreference so the name is going to be the"
      },
      {
        "start_time": 8983840,
        "end_time": 8994359,
        "duration": 10519,
        "text": "name of our project let's call\nit YouTube chat"
      },
      {
        "start_time": 8991640,
        "end_time": 9002160,
        "duration": 10520,
        "text": "application you can specify the region\nwhere you want to deploy it for example"
      },
      {
        "start_time": 8996040,
        "end_time": 9008520,
        "duration": 12480,
        "text": "Us East one and let's do yaml version\ntwo next we we have two things one of"
      },
      {
        "start_time": 9005640,
        "end_time": 9013000,
        "duration": 7360,
        "text": "them is the back end and another one\nlater is going to be the front end but"
      },
      {
        "start_time": 9010880,
        "end_time": 9018760,
        "duration": 7880,
        "text": "first let's focus on the back end the\nback end you specify the puff to it so"
      },
      {
        "start_time": 9015479,
        "end_time": 9025000,
        "duration": 9521,
        "text": "the puff is This Server so let's say\nserver then"
      },
      {
        "start_time": 9020840,
        "end_time": 9031920,
        "duration": 11080,
        "text": "language uh we're going to say name is\nuh GS and you can also specify the"
      },
      {
        "start_time": 9028720,
        "end_time": 9038040,
        "duration": 9320,
        "text": "package package manager in my case I\nwill specify"
      },
      {
        "start_time": 9033399,
        "end_time": 9043279,
        "duration": 9880,
        "text": "npm now back in this line with language\nwe're going to also have a"
      },
      {
        "start_time": 9040279,
        "end_time": 9043279,
        "duration": 3000,
        "text": "environment"
      },
      {
        "start_time": 9043359,
        "end_time": 9052040,
        "duration": 8681,
        "text": "that I don't know we'll have for example\nthe API URL which is going to be the"
      },
      {
        "start_time": 9048279,
        "end_time": 9056720,
        "duration": 8441,
        "text": "actual URL of uh our\nAPI let's"
      },
      {
        "start_time": 9053960,
        "end_time": 9061479,
        "duration": 7519,
        "text": "say ABC for a\nsecond after that in our back end we're"
      },
      {
        "start_time": 9059200,
        "end_time": 9066560,
        "duration": 7360,
        "text": "going to have some functions the\nfunction that we're going to have let's"
      },
      {
        "start_time": 9064640,
        "end_time": 9072120,
        "duration": 7480,
        "text": "say that it's going to be\nname"
      },
      {
        "start_time": 9068680,
        "end_time": 9072120,
        "duration": 3440,
        "text": "API simply"
      },
      {
        "start_time": 9072439,
        "end_time": 9080479,
        "duration": 8040,
        "text": "API the puff to that function is going\nto be because relative to the back and"
      },
      {
        "start_time": 9079680,
        "end_time": 9088319,
        "duration": 8639,
        "text": "puff\nserver our function is going to be this"
      },
      {
        "start_time": 9083560,
        "end_time": 9093560,
        "duration": 10000,
        "text": "puff so it's going to be dot slash the\nHandler or the entry"
      },
      {
        "start_time": 9090960,
        "end_time": 9097319,
        "duration": 6359,
        "text": "actually the entry is going to be index\nfile so"
      },
      {
        "start_time": 9095640,
        "end_time": 9103359,
        "duration": 7719,
        "text": "index\ndogs and the"
      },
      {
        "start_time": 9099560,
        "end_time": 9110279,
        "duration": 10719,
        "text": "type is going to be HTTP\nserver so Jano is going to run a"
      },
      {
        "start_time": 9106040,
        "end_time": 9114680,
        "duration": 8640,
        "text": "function that is going to serve our\nexpress"
      },
      {
        "start_time": 9111960,
        "end_time": 9121040,
        "duration": 9080,
        "text": "application now in this environment API\nURL I want the whole backend to have"
      },
      {
        "start_time": 9118160,
        "end_time": 9127640,
        "duration": 9480,
        "text": "access to the URL of where is our\nbackend deployed so we can access it"
      },
      {
        "start_time": 9123960,
        "end_time": 9133120,
        "duration": 9160,
        "text": "dynamically like this by saying that I\nwill look into the backend so"
      },
      {
        "start_time": 9131080,
        "end_time": 9140800,
        "duration": 9720,
        "text": "backend\ndot"
      },
      {
        "start_time": 9135520,
        "end_time": 9145960,
        "duration": 10440,
        "text": "functions functions. name API do URL and\nthis is going to be uh provided as a"
      },
      {
        "start_time": 9143439,
        "end_time": 9149720,
        "duration": 6281,
        "text": "environment variable API URL everywhere\nin our"
      },
      {
        "start_time": 9147279,
        "end_time": 9154359,
        "duration": 7080,
        "text": "backend we're going to see why we need\nit later now that we have our back end"
      },
      {
        "start_time": 9152439,
        "end_time": 9158319,
        "duration": 5880,
        "text": "done let's go ahead and focus on the\nfront end in case of a front"
      },
      {
        "start_time": 9156720,
        "end_time": 9165680,
        "duration": 8960,
        "text": "end\num the path is going to be"
      },
      {
        "start_time": 9163319,
        "end_time": 9169840,
        "duration": 6521,
        "text": "client we are going to say what do we\nwant to publish and we're going to"
      },
      {
        "start_time": 9167439,
        "end_time": 9177720,
        "duration": 10281,
        "text": "publish with this folder with this\nfolder is something that is going to be"
      },
      {
        "start_time": 9173200,
        "end_time": 9184240,
        "duration": 11040,
        "text": "generated uh if we run a script when we\nwant to"
      },
      {
        "start_time": 9180359,
        "end_time": 9189640,
        "duration": 9281,
        "text": "deploy npm run build so if we run npm\nrun build in the client is going to"
      },
      {
        "start_time": 9185960,
        "end_time": 9193920,
        "duration": 7960,
        "text": "generate um this dist folder and that\nthis folder is what we want to send and"
      },
      {
        "start_time": 9194399,
        "end_time": 9201240,
        "duration": 6841,
        "text": "publish uh finally we need some\nenvironment here as well as we have on"
      },
      {
        "start_time": 9199960,
        "end_time": 9209279,
        "duration": 9319,
        "text": "the back\nend something similar to"
      },
      {
        "start_time": 9204560,
        "end_time": 9209279,
        "duration": 4719,
        "text": "here where is it I need some"
      },
      {
        "start_time": 9209680,
        "end_time": 9219600,
        "duration": 9920,
        "text": "spaces but in this case it's a little\nbit differently uh it should be prefix"
      },
      {
        "start_time": 9215520,
        "end_time": 9223960,
        "duration": 8440,
        "text": "with vcore API URL if you do V it's\ngoing to be accessible in the client"
      },
      {
        "start_time": 9221399,
        "end_time": 9223960,
        "duration": 2561,
        "text": "side code"
      },
      {
        "start_time": 9224120,
        "end_time": 9234000,
        "duration": 9880,
        "text": "there that's it now let's go ahead open\nthe terminal and try to uh you can also"
      },
      {
        "start_time": 9230000,
        "end_time": 9241000,
        "duration": 11000,
        "text": "do genio local to run it locally or you\ncan do jio deploy to deploy it to jio"
      },
      {
        "start_time": 9238800,
        "end_time": 9245399,
        "duration": 6599,
        "text": "hosting it says that we detect that\nentropic and open Ai and DB URL are not"
      },
      {
        "start_time": 9243640,
        "end_time": 9249520,
        "duration": 5880,
        "text": "set remotely do you want us to set them\nfor you let's do yes and I think it's"
      },
      {
        "start_time": 9247720,
        "end_time": 9253120,
        "duration": 5400,
        "text": "going to look for this configuration and\nset them remotely"
      },
      {
        "start_time": 9268680,
        "end_time": 9275319,
        "duration": 6639,
        "text": "uh everything on the back end work\ncorrectly the front end this does not"
      },
      {
        "start_time": 9272880,
        "end_time": 9281479,
        "duration": 8599,
        "text": "exist uh I was expecting it to run\nautomatically npm run build oh I think"
      },
      {
        "start_time": 9279120,
        "end_time": 9286000,
        "duration": 6880,
        "text": "the problem is here it should be scripts\nnot"
      },
      {
        "start_time": 9282279,
        "end_time": 9290920,
        "duration": 8641,
        "text": "script because I can run it myself but\nit should run automatically when the"
      },
      {
        "start_time": 9287880,
        "end_time": 9293760,
        "duration": 5880,
        "text": "engine are deployed so let's try again\nby changing it to"
      },
      {
        "start_time": 9310640,
        "end_time": 9319120,
        "duration": 8480,
        "text": "scripts and what do we see we see that\nthe function is deployed we see that is"
      },
      {
        "start_time": 9315720,
        "end_time": 9323120,
        "duration": 7400,
        "text": "building the back the front end we see\nthat because we didn't provide any"
      },
      {
        "start_time": 9320840,
        "end_time": 9329760,
        "duration": 8920,
        "text": "subdomain it automatically addited it\nfor us in Vis jio yaml like this"
      },
      {
        "start_time": 9326680,
        "end_time": 9333920,
        "duration": 7240,
        "text": "automatically generated we see the link\nto the application dashboard and the"
      },
      {
        "start_time": 9331760,
        "end_time": 9341920,
        "duration": 10160,
        "text": "link to the front end if I open front\nend what's going to"
      },
      {
        "start_time": 9337399,
        "end_time": 9347240,
        "duration": 9841,
        "text": "happen we see that our AI chat has been\nhosted and we can say hello and if it"
      },
      {
        "start_time": 9344800,
        "end_time": 9351920,
        "duration": 7120,
        "text": "can connect with our backend as well\nthat means that everything is perfect"
      },
      {
        "start_time": 9349640,
        "end_time": 9358399,
        "duration": 8759,
        "text": "perly configured and as we can see it\nactually is and we can ask things about"
      },
      {
        "start_time": 9354920,
        "end_time": 9364240,
        "duration": 9320,
        "text": "the video what is the video\nabout and it's going to interact with"
      },
      {
        "start_time": 9361560,
        "end_time": 9371760,
        "duration": 10200,
        "text": "our neon\ndatabase it didn't know it didn't call"
      },
      {
        "start_time": 9367319,
        "end_time": 9384000,
        "duration": 16681,
        "text": "the tool but later it it will everything\nworks or maybe not let me actually try"
      },
      {
        "start_time": 9376920,
        "end_time": 9384000,
        "duration": 7080,
        "text": "um what is the video topic based on"
      },
      {
        "start_time": 9384319,
        "end_time": 9391720,
        "duration": 7401,
        "text": "the\nretrieved"
      },
      {
        "start_time": 9389479,
        "end_time": 9396840,
        "duration": 7361,
        "text": "transcript being more specific like what\nit should do like you know like I don't"
      },
      {
        "start_time": 9394600,
        "end_time": 9402000,
        "duration": 7400,
        "text": "have any retrieve transcript yet to\nsearch no you actually"
      },
      {
        "start_time": 9399359,
        "end_time": 9411520,
        "duration": 12161,
        "text": "have\num you actually have just try it trust"
      },
      {
        "start_time": 9407720,
        "end_time": 9411520,
        "duration": 3800,
        "text": "me you have transcript"
      },
      {
        "start_time": 9416560,
        "end_time": 9422680,
        "duration": 6120,
        "text": "will it believe me I think it does\nbecause it's yeah based on the retrieve"
      },
      {
        "start_time": 9421200,
        "end_time": 9426000,
        "duration": 4800,
        "text": "transcript the video appears to be about\nup"
      },
      {
        "start_time": 9423760,
        "end_time": 9433399,
        "duration": 9639,
        "text": "development uh blah blah blah and so on\nand so on perfect"
      },
      {
        "start_time": 9429800,
        "end_time": 9440439,
        "duration": 10639,
        "text": "amazing so this URL now is publicly\naccessible because we use jio to to host"
      },
      {
        "start_time": 9436600,
        "end_time": 9444720,
        "duration": 8120,
        "text": "it very easily I will\ngive it to you but I don't know if I"
      },
      {
        "start_time": 9442000,
        "end_time": 9446880,
        "duration": 4880,
        "text": "should give it to you but you saw it so\nit"
      },
      {
        "start_time": 9447399,
        "end_time": 9455479,
        "duration": 8080,
        "text": "depends uh if we open here janio in the\ndashboard we see that we have a function"
      },
      {
        "start_time": 9453160,
        "end_time": 9460160,
        "duration": 7000,
        "text": "and we have a front end if you want to\ndebug the functions you're going to go"
      },
      {
        "start_time": 9457720,
        "end_time": 9464760,
        "duration": 7040,
        "text": "into the\nmonitoring or into the logs and you're"
      },
      {
        "start_time": 9462920,
        "end_time": 9471319,
        "duration": 8399,
        "text": "going to see different logs from your\nfunction calls you actually here just"
      },
      {
        "start_time": 9468080,
        "end_time": 9478760,
        "duration": 10680,
        "text": "try it this is very um\ninput so yeah this is how easy it is to"
      },
      {
        "start_time": 9475960,
        "end_time": 9483840,
        "duration": 7880,
        "text": "deploy uh full stack applications both\nfront end and back end with"
      },
      {
        "start_time": 9480680,
        "end_time": 9489000,
        "duration": 8320,
        "text": "genesio perfect now in The Next Step let\nme actually go ahead and do get"
      },
      {
        "start_time": 9487279,
        "end_time": 9495600,
        "duration": 8321,
        "text": "add\ndeploy to"
      },
      {
        "start_time": 9491800,
        "end_time": 9501439,
        "duration": 9639,
        "text": "genesio in the next step we are going to\num add functionalities to interact with"
      },
      {
        "start_time": 9498040,
        "end_time": 9501439,
        "duration": 3399,
        "text": "bright data and to"
      },
      {
        "start_time": 9501600,
        "end_time": 9506760,
        "duration": 5160,
        "text": "scrape the transcripts of the videos\nthat the user"
      },
      {
        "start_time": 9511000,
        "end_time": 9518600,
        "duration": 7600,
        "text": "needs seems like convex would be a\nbetter option for the"
      },
      {
        "start_time": 9515439,
        "end_time": 9523000,
        "duration": 7561,
        "text": "database how did you settle on new one\nuh I just wanted something simple like"
      },
      {
        "start_time": 9520920,
        "end_time": 9529520,
        "duration": 8600,
        "text": "postgress and that's\nwhy like when I need just a simple"
      },
      {
        "start_time": 9525760,
        "end_time": 9534279,
        "duration": 8519,
        "text": "barebone pogress I go to to new one but\nbut um I haven't worked with convex yet"
      },
      {
        "start_time": 9532040,
        "end_time": 9540279,
        "duration": 8239,
        "text": "actually and I'm pretty sure like if\nit's build like exactly for for for that"
      },
      {
        "start_time": 9538160,
        "end_time": 9545000,
        "duration": 6840,
        "text": "one it would be better but it's super\nsimple to change the only thing that you"
      },
      {
        "start_time": 9542840,
        "end_time": 9551600,
        "duration": 8760,
        "text": "would have to change is in the\nserver in our embedding here in the"
      },
      {
        "start_time": 9549240,
        "end_time": 9557640,
        "duration": 8400,
        "text": "vector store you're going to initialize\na different Vector store and L chain"
      },
      {
        "start_time": 9555160,
        "end_time": 9562760,
        "duration": 7600,
        "text": "integrates with convex HS it's possible\nlike that as well give me one second I'm"
      },
      {
        "start_time": 9560520,
        "end_time": 9566680,
        "duration": 6160,
        "text": "going to take a very very short break\nand I come back and we continue with our"
      },
      {
        "start_time": 9588319,
        "end_time": 9592359,
        "duration": 4040,
        "text": "implementation for"
      },
      {
        "start_time": 9647200,
        "end_time": 9651200,
        "duration": 4000,
        "text": "hello so"
      },
      {
        "start_time": 9653560,
        "end_time": 9657439,
        "duration": 3879,
        "text": "let me just double check"
      },
      {
        "start_time": 9666800,
        "end_time": 9679800,
        "duration": 13000,
        "text": "something\num I'm thinking how to design the user"
      },
      {
        "start_time": 9675800,
        "end_time": 9679800,
        "duration": 4000,
        "text": "experience of"
      },
      {
        "start_time": 9680920,
        "end_time": 9684720,
        "duration": 3800,
        "text": "of starting"
      },
      {
        "start_time": 9684880,
        "end_time": 9694560,
        "duration": 9680,
        "text": "of of indexing a video that's that's\nwhat I wanted to"
      },
      {
        "start_time": 9690240,
        "end_time": 9700880,
        "duration": 10640,
        "text": "say my initial idea was before we\nstart and actually I had it before we"
      },
      {
        "start_time": 9697800,
        "end_time": 9707640,
        "duration": 9840,
        "text": "start an AI chat we have to we have an\ninput we have a um an input where we put"
      },
      {
        "start_time": 9704640,
        "end_time": 9712800,
        "duration": 8160,
        "text": "the video ID not the video ID the video\nURL and then we take take the URL we"
      },
      {
        "start_time": 9710160,
        "end_time": 9715200,
        "duration": 5040,
        "text": "scrape it we index it and only then we\nopen up the chat and we can talk with"
      },
      {
        "start_time": 9714439,
        "end_time": 9721399,
        "duration": 6960,
        "text": "that\nvideo now that now that I'm thinking"
      },
      {
        "start_time": 9718800,
        "end_time": 9728279,
        "duration": 9479,
        "text": "wouldn't it be better if we just have a\nchat interface and we paste a YouTube"
      },
      {
        "start_time": 9725520,
        "end_time": 9733760,
        "duration": 8240,
        "text": "video here and we start talking about it\nthen we paste another video here and we"
      },
      {
        "start_time": 9730640,
        "end_time": 9744520,
        "duration": 13880,
        "text": "talk about it and so on what do you\nthink um how should we index videos"
      },
      {
        "start_time": 9740000,
        "end_time": 9751720,
        "duration": 11720,
        "text": "more free flow in a chat way where our\nAI agent is going to have a tool that"
      },
      {
        "start_time": 9748160,
        "end_time": 9757040,
        "duration": 8880,
        "text": "knows how to index videos or a more\nstructured way where we have like an"
      },
      {
        "start_time": 9754160,
        "end_time": 9760560,
        "duration": 6400,
        "text": "input give me the video ID I'm going to\nindex it and then we open a chart with"
      },
      {
        "start_time": 9759080,
        "end_time": 9765000,
        "duration": 5920,
        "text": "that\nvideo let me know in the comments like"
      },
      {
        "start_time": 9763160,
        "end_time": 9771080,
        "duration": 7920,
        "text": "in the in the chat what what do you\nthink would be better what you would"
      },
      {
        "start_time": 9767720,
        "end_time": 9773200,
        "duration": 5480,
        "text": "like to see for example\ncome"
      },
      {
        "start_time": 9779319,
        "end_time": 9788560,
        "duration": 9241,
        "text": "on because there let me close some of\nthe stuff"
      },
      {
        "start_time": 9785040,
        "end_time": 9793640,
        "duration": 8600,
        "text": "down this is we need\nit I don't need this ones"
      },
      {
        "start_time": 9814439,
        "end_time": 9827439,
        "duration": 13000,
        "text": "because in any way we're going to use\nBri data to uh to fetch or to scrape the"
      },
      {
        "start_time": 9824359,
        "end_time": 9834359,
        "duration": 10000,
        "text": "video data from YouTube we already saw\nhow to do that uh uh and what we did is"
      },
      {
        "start_time": 9831080,
        "end_time": 9839920,
        "duration": 8840,
        "text": "we want to Bright data we created an\naccount then under web scrapers we go to"
      },
      {
        "start_time": 9837439,
        "end_time": 9845960,
        "duration": 8521,
        "text": "web scrapers Library we are searching\nfor YouTube and we see that there are"
      },
      {
        "start_time": 9843479,
        "end_time": 9851439,
        "duration": 7960,
        "text": "eight different scrapers for YouTube\nwhile we are interested in this collect"
      },
      {
        "start_time": 9848319,
        "end_time": 9859479,
        "duration": 11160,
        "text": "videos by URL so I'm going to click on\nit scrape our API let's do next and here"
      },
      {
        "start_time": 9855240,
        "end_time": 9859479,
        "duration": 4239,
        "text": "in the API request Builder"
      },
      {
        "start_time": 9861319,
        "end_time": 9868040,
        "duration": 6721,
        "text": "in the API request Builder we add the\nAPI token we add some inputs and we see"
      },
      {
        "start_time": 9866600,
        "end_time": 9875560,
        "duration": 8960,
        "text": "a c\ncommand in this part we can also see how"
      },
      {
        "start_time": 9871600,
        "end_time": 9881920,
        "duration": 10320,
        "text": "we can do that from node using fetch if\nI do that I"
      },
      {
        "start_time": 9878560,
        "end_time": 9886279,
        "duration": 7719,
        "text": "can and also if I'm going to do a couple\nof"
      },
      {
        "start_time": 9882680,
        "end_time": 9891200,
        "duration": 8520,
        "text": "things I need to include the errors\nthat's good and I don't need to delete"
      },
      {
        "start_time": 9889040,
        "end_time": 9895960,
        "duration": 6920,
        "text": "deliver results to S free storage I'm\ngoing to unselect that one but I want to"
      },
      {
        "start_time": 9893800,
        "end_time": 9900640,
        "duration": 6840,
        "text": "send it to a web hook sending the\nresponse to a web"
      },
      {
        "start_time": 9897399,
        "end_time": 9906560,
        "duration": 9161,
        "text": "hook uh the way it's going to work is oh\nI didn't show the the"
      },
      {
        "start_time": 9902920,
        "end_time": 9906560,
        "duration": 3640,
        "text": "parts let me do it"
      },
      {
        "start_time": 9906920,
        "end_time": 9915399,
        "duration": 8479,
        "text": "again so the thing is that uh we are\nstill going to use bright data so going"
      },
      {
        "start_time": 9913120,
        "end_time": 9922880,
        "duration": 9760,
        "text": "on bright data\num dashboard we're going to go under web"
      },
      {
        "start_time": 9919000,
        "end_time": 9929319,
        "duration": 10319,
        "text": "scrapers come on why it's not changing\nhere so bright data dashboard web"
      },
      {
        "start_time": 9925960,
        "end_time": 9933520,
        "duration": 7560,
        "text": "scrapers web scrapers library and we are\nsearching for"
      },
      {
        "start_time": 9931160,
        "end_time": 9941439,
        "duration": 10279,
        "text": "YouTube we're looking at the YouTube\nvideos post and we select scraper"
      },
      {
        "start_time": 9938279,
        "end_time": 9947399,
        "duration": 9120,
        "text": "API here we see\nthat we already saw in the API request"
      },
      {
        "start_time": 9944960,
        "end_time": 9953520,
        "duration": 8560,
        "text": "Builder but we just send the URL of a\nvideo and as a result we're going to get"
      },
      {
        "start_time": 9950000,
        "end_time": 9958319,
        "duration": 8319,
        "text": "the scrape data including the\ntranscript we're going to configure it a"
      },
      {
        "start_time": 9956880,
        "end_time": 9963000,
        "duration": 6120,
        "text": "little\nbit for example I'm going to delete and"
      },
      {
        "start_time": 9961040,
        "end_time": 9968160,
        "duration": 7120,
        "text": "leave only one input it's going to be\neasier for me to see there eror I'm"
      },
      {
        "start_time": 9965359,
        "end_time": 9972439,
        "duration": 7080,
        "text": "going to deselect deliver results to\nexternal"
      },
      {
        "start_time": 9969800,
        "end_time": 9980120,
        "duration": 10320,
        "text": "storage and I'm going to send send to\nweb hook that means"
      },
      {
        "start_time": 9974840,
        "end_time": 9985640,
        "duration": 10800,
        "text": "that when we send this request to to Bri\ndat data set trigger we are sending a"
      },
      {
        "start_time": 9983200,
        "end_time": 9991399,
        "duration": 8199,
        "text": "request to start the scraping job but\nbecause scraping jobs can be it's a long"
      },
      {
        "start_time": 9988880,
        "end_time": 9997800,
        "duration": 8920,
        "text": "time task it can be a couple of seconds\nbut if there is lots of data it can be"
      },
      {
        "start_time": 9994600,
        "end_time": 10003439,
        "duration": 8839,
        "text": "minutes um depending on the collection\nthis one we see that on average is 7"
      },
      {
        "start_time": 9999960,
        "end_time": 10010640,
        "duration": 10680,
        "text": "Seconds anyway instead of waiting for\nthe result we just trigger the request"
      },
      {
        "start_time": 10007000,
        "end_time": 10016120,
        "duration": 9120,
        "text": "and then we can either re send another\nrequest to check the status where we can"
      },
      {
        "start_time": 10013520,
        "end_time": 10023160,
        "duration": 9640,
        "text": "give Bri data a\nURL that bright data is going to call"
      },
      {
        "start_time": 10020000,
        "end_time": 10028240,
        "duration": 8240,
        "text": "when it finishes the scraping job that's\nwhat we're going to do we're going to do"
      },
      {
        "start_time": 10025279,
        "end_time": 10028240,
        "duration": 2961,
        "text": "here let's do"
      },
      {
        "start_time": 10029399,
        "end_time": 10037319,
        "duration": 7920,
        "text": "HTTP\nexample.com"
      },
      {
        "start_time": 10034120,
        "end_time": 10042640,
        "duration": 8520,
        "text": "and later we're going to fetch it change\nit let's do example"
      },
      {
        "start_time": 10039840,
        "end_time": 10049359,
        "duration": 9519,
        "text": "com/\nwebhook this means that hey bright data"
      },
      {
        "start_time": 10046399,
        "end_time": 10053800,
        "duration": 7401,
        "text": "when you finish scraping this job send\nthis data"
      },
      {
        "start_time": 10051439,
        "end_time": 10061040,
        "duration": 9601,
        "text": "here and the file format I'm going to\nleave it to Json and in"
      },
      {
        "start_time": 10057720,
        "end_time": 10066520,
        "duration": 8800,
        "text": "the example request instead of Linux\nbash I'm going to do node fetch here is"
      },
      {
        "start_time": 10064240,
        "end_time": 10074200,
        "duration": 9960,
        "text": "a good example of how we can send this\nrequest let me copy it let's go in our"
      },
      {
        "start_time": 10070359,
        "end_time": 10082399,
        "duration": 12040,
        "text": "server and I'm going to call create a\nnew uh new file let's call it bright"
      },
      {
        "start_time": 10080760,
        "end_time": 10088319,
        "duration": 7559,
        "text": "dat.\nGS and let's export"
      },
      {
        "start_time": 10086560,
        "end_time": 10092840,
        "duration": 6280,
        "text": "const\nuh"
      },
      {
        "start_time": 10091160,
        "end_time": 10099399,
        "duration": 8239,
        "text": "start\nor Trigger YouTube video"
      },
      {
        "start_time": 10103319,
        "end_time": 10113760,
        "duration": 10441,
        "text": "scrape we have the URL of a video and\nwhat we have to do is we're going to"
      },
      {
        "start_time": 10110160,
        "end_time": 10117279,
        "duration": 7119,
        "text": "paste the code that bright data gave us\nso we're going to change it a little bit"
      },
      {
        "start_time": 10115600,
        "end_time": 10122520,
        "duration": 6920,
        "text": "for example we do not need to import\nfetch from anywhere I'm going to remove"
      },
      {
        "start_time": 10119760,
        "end_time": 10127200,
        "duration": 7440,
        "text": "it because it's going to be there in the\ndata this is the input so this is the"
      },
      {
        "start_time": 10125040,
        "end_time": 10135200,
        "duration": 10160,
        "text": "URL that is going to\nbe um s here so what I'm going to do is"
      },
      {
        "start_time": 10131240,
        "end_time": 10138560,
        "duration": 7320,
        "text": "maybe I'm going to call this trigger\nscrape input with this"
      },
      {
        "start_time": 10138840,
        "end_time": 10149840,
        "duration": 11000,
        "text": "URL not with this URL with this\nURL and here I'm going to Simply take"
      },
      {
        "start_time": 10146720,
        "end_time": 10154479,
        "duration": 7759,
        "text": "the URL from the parameters and send it\nto Bright data like"
      },
      {
        "start_time": 10151960,
        "end_time": 10159279,
        "duration": 7319,
        "text": "this maybe we can adjust it to send\nmultiple uh videos as well but for now"
      },
      {
        "start_time": 10157000,
        "end_time": 10168000,
        "duration": 11000,
        "text": "it's good like this\nthen what we do here is we send a fetch"
      },
      {
        "start_time": 10162840,
        "end_time": 10172160,
        "duration": 9320,
        "text": "to this long URL but let's break it down\nfor example I'm going to break it down"
      },
      {
        "start_time": 10174279,
        "end_time": 10183479,
        "duration": 9200,
        "text": "into maybe like this everything until\nslash"
      },
      {
        "start_time": 10180200,
        "end_time": 10192200,
        "duration": 12000,
        "text": "trigger let's do here\nconst bright data trigger URL is going"
      },
      {
        "start_time": 10189160,
        "end_time": 10192200,
        "duration": 3040,
        "text": "to be equal to this"
      },
      {
        "start_time": 10192800,
        "end_time": 10201560,
        "duration": 8760,
        "text": "one let's take it and let's transform\nthis URL into a template string with"
      },
      {
        "start_time": 10199120,
        "end_time": 10201560,
        "duration": 2440,
        "text": "your back"
      },
      {
        "start_time": 10201800,
        "end_time": 10213399,
        "duration": 11599,
        "text": "ticks come\non back tick here so that we can replace"
      },
      {
        "start_time": 10210479,
        "end_time": 10221080,
        "duration": 10601,
        "text": "this URL with simply\nsaying bright data trigger URL then we"
      },
      {
        "start_time": 10216720,
        "end_time": 10226520,
        "duration": 9800,
        "text": "have data set ID data set ID identifies\nthis YouTube video post data set it can"
      },
      {
        "start_time": 10224120,
        "end_time": 10232880,
        "duration": 8760,
        "text": "also be dynamic if you want I leave it\nlike this endp point is where do we want"
      },
      {
        "start_time": 10230600,
        "end_time": 10239120,
        "duration": 8520,
        "text": "to send the results\nto where do we want to send the results"
      },
      {
        "start_time": 10235600,
        "end_time": 10247080,
        "duration": 11480,
        "text": "to well we want to send it back to our\nAPI back to our server so in our index"
      },
      {
        "start_time": 10243399,
        "end_time": 10254120,
        "duration": 10721,
        "text": "here let's go ahead and\ncreate a post post request called Web"
      },
      {
        "start_time": 10255880,
        "end_time": 10264720,
        "duration": 8840,
        "text": "hook request response and let's simply\ngo conso log request."
      },
      {
        "start_time": 10261800,
        "end_time": 10269880,
        "duration": 8080,
        "text": "body to see what data we're going to\nreceive"
      },
      {
        "start_time": 10265840,
        "end_time": 10279760,
        "duration": 13920,
        "text": "here now we have to say hey Bri data\nsimply call back the server here at SL"
      },
      {
        "start_time": 10275880,
        "end_time": 10289200,
        "duration": 13320,
        "text": "web hook but the URL we don't know we\ncan hardcode it from uh from genisio"
      },
      {
        "start_time": 10285560,
        "end_time": 10293439,
        "duration": 7879,
        "text": "platform but remember in jio yaml we\nsaid that we're going to give a"
      },
      {
        "start_time": 10290800,
        "end_time": 10299640,
        "duration": 8840,
        "text": "environment variable called API URL\nthat's what we why we need it we need it"
      },
      {
        "start_time": 10296160,
        "end_time": 10299640,
        "duration": 3480,
        "text": "to dynamically say"
      },
      {
        "start_time": 10300239,
        "end_time": 10313800,
        "duration": 13561,
        "text": "hey the const call\nback or web hook URL is going to be this"
      },
      {
        "start_time": 10309840,
        "end_time": 10323680,
        "duration": 13840,
        "text": "one but actually it's going to\nbe I'm going to change here"
      },
      {
        "start_time": 10317960,
        "end_time": 10330960,
        "duration": 13000,
        "text": "to process. env. API URL SL\nwebhook b/ web Hook is important because"
      },
      {
        "start_time": 10326960,
        "end_time": 10337399,
        "duration": 10439,
        "text": "it's our endpoint implemented\nhere okay so let's change the endpoint"
      },
      {
        "start_time": 10334840,
        "end_time": 10344319,
        "duration": 9479,
        "text": "here pay attention of how we're going to\ndo it this HTTP example.com webhook"
      },
      {
        "start_time": 10341200,
        "end_time": 10351439,
        "duration": 10239,
        "text": "Until the End we're going to delete and\nreplace it with the web hook URL then we"
      },
      {
        "start_time": 10348920,
        "end_time": 10356680,
        "duration": 7760,
        "text": "have format Json is good uncompressed\nweb hook true and include errors true"
      },
      {
        "start_time": 10353720,
        "end_time": 10365439,
        "duration": 11719,
        "text": "everything is good here now the method\nis post authorization uh headers this is"
      },
      {
        "start_time": 10360319,
        "end_time": 10372359,
        "duration": 12040,
        "text": "the bright data uh your API key so it's\nbetter to take it from here and add it"
      },
      {
        "start_time": 10369000,
        "end_time": 10375080,
        "duration": 6080,
        "text": "to the environment variables as bright\ndata API"
      },
      {
        "start_time": 10381840,
        "end_time": 10393960,
        "duration": 12120,
        "text": "key and back here we're going to replace\nit again with"
      },
      {
        "start_time": 10389080,
        "end_time": 10393960,
        "duration": 4880,
        "text": "a with process.env"
      },
      {
        "start_time": 10394479,
        "end_time": 10403880,
        "duration": 9401,
        "text": "do bright come on should be bright data\nAPI"
      },
      {
        "start_time": 10400640,
        "end_time": 10408600,
        "duration": 7960,
        "text": "key then content type Json and for the\nbody we give this"
      },
      {
        "start_time": 10405800,
        "end_time": 10412479,
        "duration": 6679,
        "text": "data I don't like the dot van so what\nI'm going to do I'm going to before"
      },
      {
        "start_time": 10410520,
        "end_time": 10420080,
        "duration": 9560,
        "text": "fetch I'm going to say\nconst response equal a"
      },
      {
        "start_time": 10417319,
        "end_time": 10427920,
        "duration": 10601,
        "text": "weight then I'm going to put here I'm\ngoing to stop and what we have then we"
      },
      {
        "start_time": 10423520,
        "end_time": 10432520,
        "duration": 9000,
        "text": "have data so const data equal a weit\nresponse"
      },
      {
        "start_time": 10429160,
        "end_time": 10439239,
        "duration": 10079,
        "text": "Json and that's it and maybe you can\nalso do a try"
      },
      {
        "start_time": 10435080,
        "end_time": 10439239,
        "duration": 4159,
        "text": "catch maybe we can do"
      },
      {
        "start_time": 10439840,
        "end_time": 10444200,
        "duration": 4360,
        "text": "result and we can do console log"
      },
      {
        "start_time": 10444680,
        "end_time": 10452000,
        "duration": 7320,
        "text": "result and this is our function that is\ngoing to trigger a scraping job for a"
      },
      {
        "start_time": 10450520,
        "end_time": 10460560,
        "duration": 10040,
        "text": "video\nURL we can do that"
      },
      {
        "start_time": 10455520,
        "end_time": 10465120,
        "duration": 9600,
        "text": "by again we simply call it here maybe we\ncan we should call it at the end right"
      },
      {
        "start_time": 10462720,
        "end_time": 10470279,
        "duration": 7559,
        "text": "not at the\ntop so we can give here a YouTube url"
      },
      {
        "start_time": 10468640,
        "end_time": 10476720,
        "duration": 8080,
        "text": "like this\none and we can"
      },
      {
        "start_time": 10473040,
        "end_time": 10484880,
        "duration": 11840,
        "text": "do let's do CD\nserver clear and I'm going to do"
      },
      {
        "start_time": 10480640,
        "end_time": 10491239,
        "duration": 10599,
        "text": "node EnV file and\nlet's run the BR"
      },
      {
        "start_time": 10488920,
        "end_time": 10497160,
        "duration": 8240,
        "text": "data GS this\nfunction so we see that as a result we"
      },
      {
        "start_time": 10493640,
        "end_time": 10504279,
        "duration": 10639,
        "text": "get the snapshot ID if we look into the\nBri data"
      },
      {
        "start_time": 10499479,
        "end_time": 10509920,
        "duration": 10441,
        "text": "logs we should have a new job here and\nif we look at this snapshot ID ending"
      },
      {
        "start_time": 10506439,
        "end_time": 10518080,
        "duration": 11641,
        "text": "with 9 Q this is the last one here it\ntook 5 Seconds to complete we can"
      },
      {
        "start_time": 10513760,
        "end_time": 10521479,
        "duration": 7719,
        "text": "download or we can check what happened\nthere with the"
      },
      {
        "start_time": 10523439,
        "end_time": 10530319,
        "duration": 6880,
        "text": "endpoint um we haven't deployed it yet\nso give me a"
      },
      {
        "start_time": 10528640,
        "end_time": 10538720,
        "duration": 10080,
        "text": "second\nbut if we look here back in our API"
      },
      {
        "start_time": 10534319,
        "end_time": 10543239,
        "duration": 8920,
        "text": "request Builder and you put here the URL\nof our genesio let's"
      },
      {
        "start_time": 10543760,
        "end_time": 10554160,
        "duration": 10400,
        "text": "see uh let's first stop this one and\nlet's deploy"
      },
      {
        "start_time": 10548920,
        "end_time": 10556359,
        "duration": 7439,
        "text": "our update our update has this SL web\nhook"
      },
      {
        "start_time": 10558160,
        "end_time": 10566479,
        "duration": 8319,
        "text": "endpoint yeah because we need to go one\nabove to be in the"
      },
      {
        "start_time": 10563720,
        "end_time": 10571479,
        "duration": 7759,
        "text": "root we detected a new bright data let's\nset it remotely automatically for us"
      },
      {
        "start_time": 10592680,
        "end_time": 10603880,
        "duration": 11200,
        "text": "um so we see that the function API is\nthis URL so I can copy it and basically"
      },
      {
        "start_time": 10601479,
        "end_time": 10612160,
        "duration": 10681,
        "text": "use this one in the notify\nURL or no in the send web hook so send"
      },
      {
        "start_time": 10607040,
        "end_time": 10616880,
        "duration": 9840,
        "text": "to web hook web hook URL this URL of my\nfunction you can also open it in the"
      },
      {
        "start_time": 10622279,
        "end_time": 10628479,
        "duration": 6200,
        "text": "dashboard and here you're going to see a\nfunction"
      },
      {
        "start_time": 10626439,
        "end_time": 10635600,
        "duration": 9161,
        "text": "URL\nand we need to also do slash"
      },
      {
        "start_time": 10631760,
        "end_time": 10640279,
        "duration": 8519,
        "text": "web hook you can also press test web\nhook and this is going to test send a"
      },
      {
        "start_time": 10637840,
        "end_time": 10644359,
        "duration": 6519,
        "text": "test result and we see test sent\nsuccessfully if we go into the jio into"
      },
      {
        "start_time": 10643640,
        "end_time": 10650960,
        "duration": 7320,
        "text": "the\nlogs we're going to see a"
      },
      {
        "start_time": 10647479,
        "end_time": 10656279,
        "duration": 8800,
        "text": "test a request body this was the test\nthat was sent for us and we received it"
      },
      {
        "start_time": 10653720,
        "end_time": 10656279,
        "duration": 2559,
        "text": "in our"
      },
      {
        "start_time": 10656680,
        "end_time": 10668399,
        "duration": 11719,
        "text": "backend uh in our backend invest SL web\nhook that means that now if I am going"
      },
      {
        "start_time": 10665399,
        "end_time": 10668399,
        "duration": 3000,
        "text": "to"
      },
      {
        "start_time": 10669439,
        "end_time": 10678520,
        "duration": 9081,
        "text": "invoke the same function again for\nexample Trigger YouTube video with this"
      },
      {
        "start_time": 10674560,
        "end_time": 10681560,
        "duration": 7000,
        "text": "URL by this is a little bit hacky right\nnow but in a second we're going to"
      },
      {
        "start_time": 10679800,
        "end_time": 10686200,
        "duration": 6400,
        "text": "connect it with our API and it's going\nto make a lot more sense but I want to"
      },
      {
        "start_time": 10683800,
        "end_time": 10690600,
        "duration": 6800,
        "text": "trigger a new scraping job and I want it\nto automatically call our web hook so if"
      },
      {
        "start_time": 10689200,
        "end_time": 10698680,
        "duration": 9480,
        "text": "I go into the\nserver and do node bright data GS that"
      },
      {
        "start_time": 10695319,
        "end_time": 10705279,
        "duration": 9960,
        "text": "is calling this function\nwe see this snapshot and this"
      },
      {
        "start_time": 10702040,
        "end_time": 10709760,
        "duration": 7720,
        "text": "snapshot if I look into the logs it's\nready and it's supposed to call our"
      },
      {
        "start_time": 10707920,
        "end_time": 10715439,
        "duration": 7519,
        "text": "backend and if I\nreload we see yes we did um actually no"
      },
      {
        "start_time": 10714279,
        "end_time": 10720399,
        "duration": 6120,
        "text": "it\ndidn't you know"
      },
      {
        "start_time": 10717760,
        "end_time": 10724560,
        "duration": 6800,
        "text": "why I know why because I'm running it\nlocally and"
      },
      {
        "start_time": 10722840,
        "end_time": 10733040,
        "duration": 10200,
        "text": "locally\nthe web hook URL is not setting is not"
      },
      {
        "start_time": 10728439,
        "end_time": 10733040,
        "duration": 4601,
        "text": "correct so that's why we need to do it"
      },
      {
        "start_time": 10733120,
        "end_time": 10740680,
        "duration": 7560,
        "text": "remotely uh but yeah the next question\nis uh should I when should I call this"
      },
      {
        "start_time": 10738439,
        "end_time": 10748760,
        "duration": 10321,
        "text": "Trigger YouTube video scrape should I\ncreate a tool out of"
      },
      {
        "start_time": 10743319,
        "end_time": 10751479,
        "duration": 8160,
        "text": "it and give it to my uh let's try to\ncreate it as a"
      },
      {
        "start_time": 10751560,
        "end_time": 10757399,
        "duration": 5839,
        "text": "tool let's try to create it as a tool"
      },
      {
        "start_time": 10759080,
        "end_time": 10767760,
        "duration": 8680,
        "text": "I haven't tried it creating it as a tool\num make sure to to remove it from"
      },
      {
        "start_time": 10764640,
        "end_time": 10774279,
        "duration": 9639,
        "text": "here as a tool in our agent uh When I\nWas preparing I did it like with uh a"
      },
      {
        "start_time": 10771200,
        "end_time": 10779160,
        "duration": 7960,
        "text": "input here so you input the YouTube\nvideo URL and then you talk with it but"
      },
      {
        "start_time": 10776680,
        "end_time": 10785920,
        "duration": 9240,
        "text": "I think it would make more sense to see\nat least how we can do it with a tool in"
      },
      {
        "start_time": 10781760,
        "end_time": 10792520,
        "duration": 10760,
        "text": "our agent so let's go ahead in our\nagent and create here a tool"
      },
      {
        "start_time": 10789800,
        "end_time": 10796040,
        "duration": 6240,
        "text": "const um\nTrigger YouTube"
      },
      {
        "start_time": 10796399,
        "end_time": 10800040,
        "duration": 3641,
        "text": "scrape scrape"
      },
      {
        "start_time": 10804319,
        "end_time": 10812399,
        "duration": 8080,
        "text": "tool now it has a\nfunction that does something and some"
      },
      {
        "start_time": 10809640,
        "end_time": 10818680,
        "duration": 9040,
        "text": "configuration for example name it can be\nTrigger YouTube scrape tool and"
      },
      {
        "start_time": 10816040,
        "end_time": 10829120,
        "duration": 13080,
        "text": "description description\ntrigger the scraping of a YouTube"
      },
      {
        "start_time": 10821880,
        "end_time": 10829120,
        "duration": 7240,
        "text": "video using it using the"
      },
      {
        "start_time": 10829279,
        "end_time": 10839359,
        "duration": 10080,
        "text": "URL the tool\nwill"
      },
      {
        "start_time": 10834880,
        "end_time": 10846359,
        "duration": 11479,
        "text": "not will uh start a\nscraping job that usually I will give it"
      },
      {
        "start_time": 10843920,
        "end_time": 10851560,
        "duration": 7640,
        "text": "more context to know how to use it maybe\nI can do it even in in new"
      },
      {
        "start_time": 10849359,
        "end_time": 10860000,
        "duration": 10641,
        "text": "lines like\nthis The Tool uh that usually"
      },
      {
        "start_time": 10855439,
        "end_time": 10866120,
        "duration": 10681,
        "text": "takes around 7 seconds maybe later we\ncan give it a tool to also ask for um"
      },
      {
        "start_time": 10863520,
        "end_time": 10871960,
        "duration": 8440,
        "text": "the status of\njobs the tool will return the job ID"
      },
      {
        "start_time": 10870279,
        "end_time": 10878680,
        "duration": 8401,
        "text": "that can be used to check the status of\na scraping job this is a bit the tool"
      },
      {
        "start_time": 10874920,
        "end_time": 10882479,
        "duration": 7559,
        "text": "will return the job ID\nshould I just from Bright data"
      },
      {
        "start_time": 10882600,
        "end_time": 10890800,
        "duration": 8200,
        "text": "here because it returns an object with\nsnapshot ID should I just return"
      },
      {
        "start_time": 10887640,
        "end_time": 10893680,
        "duration": 6040,
        "text": "snapshot ID I think so let's just do\nreturn"
      },
      {
        "start_time": 10893840,
        "end_time": 10899720,
        "duration": 5880,
        "text": "results dot\nsnapshot"
      },
      {
        "start_time": 10903720,
        "end_time": 10915560,
        "duration": 11840,
        "text": "ID the tool will return the snap\nshot slash job ID that can be use"
      },
      {
        "start_time": 10918479,
        "end_time": 10929319,
        "duration": 10840,
        "text": "okay use the tool only if a video is not\nin the vector store"
      },
      {
        "start_time": 10925319,
        "end_time": 10933880,
        "duration": 8561,
        "text": "already in the schema we need the URL\nand we are going to get it here as"
      },
      {
        "start_time": 10934920,
        "end_time": 10946279,
        "duration": 11359,
        "text": "URL what we need to do with it is we\nneed to say hey snapshot ID return"
      },
      {
        "start_time": 10942399,
        "end_time": 10946279,
        "duration": 3880,
        "text": "Trigger YouTube video from Bright"
      },
      {
        "start_time": 10947399,
        "end_time": 10954520,
        "duration": 7121,
        "text": "data let's do console.log triggering\nYouTube video scrape and this"
      },
      {
        "start_time": 10956560,
        "end_time": 10964760,
        "duration": 8200,
        "text": "one that's cool that because now if I'm\ngoing to make sure to run the server and"
      },
      {
        "start_time": 10961720,
        "end_time": 10970479,
        "duration": 8759,
        "text": "run the front end\nlocally and if I'm going to go to local"
      },
      {
        "start_time": 10967880,
        "end_time": 10973840,
        "duration": 5960,
        "text": "call host\nuh what's"
      },
      {
        "start_time": 10974200,
        "end_time": 10979640,
        "duration": 5440,
        "text": "the the API for the Local Host it's this"
      },
      {
        "start_time": 10982279,
        "end_time": 10993160,
        "duration": 10881,
        "text": "one if I will say uh I will go ahead and\ntake a YouTube"
      },
      {
        "start_time": 10989560,
        "end_time": 10997000,
        "duration": 7440,
        "text": "url but wait a second I forgot one thing\nI forgot to take the trigger YouTube"
      },
      {
        "start_time": 10994680,
        "end_time": 10999760,
        "duration": 5080,
        "text": "video scrape tool and give it to my\nagent"
      },
      {
        "start_time": 11003479,
        "end_time": 11012120,
        "duration": 8641,
        "text": "now if I'm going to go ahead and take a\nvideo for let me see what exactly I want"
      },
      {
        "start_time": 11014160,
        "end_time": 11020879,
        "duration": 6719,
        "text": "here I don't know what to\n[Music]"
      },
      {
        "start_time": 11026319,
        "end_time": 11037160,
        "duration": 10841,
        "text": "say I'm going to do also\nF1"
      },
      {
        "start_time": 11032160,
        "end_time": 11044960,
        "duration": 12800,
        "text": "so if I take this URL and send it here\ncan we talk"
      },
      {
        "start_time": 11039720,
        "end_time": 11050359,
        "duration": 10639,
        "text": "about this and if I send this is a very\ninteresting this is a very specific"
      },
      {
        "start_time": 11047479,
        "end_time": 11054720,
        "duration": 7241,
        "text": "prompt saying that hey I want to scrape\nthis"
      },
      {
        "start_time": 11052359,
        "end_time": 11060040,
        "duration": 7681,
        "text": "video let's see what's going to do\nwhat's going to happen if I look in the"
      },
      {
        "start_time": 11056720,
        "end_time": 11065640,
        "duration": 8920,
        "text": "logs for our server we see the\ntriggering YouTube scrape job for this"
      },
      {
        "start_time": 11062319,
        "end_time": 11070439,
        "duration": 8120,
        "text": "video ID for this video\nID and it's not finished"
      },
      {
        "start_time": 11070520,
        "end_time": 11076040,
        "duration": 5520,
        "text": "yet YouTube video scrip scrape"
      },
      {
        "start_time": 11080160,
        "end_time": 11087880,
        "duration": 7720,
        "text": "triggered so it has a snap snapshot\nID and what it does based on the"
      },
      {
        "start_time": 11086319,
        "end_time": 11091720,
        "duration": 5401,
        "text": "information covered from the video\ntranscript I can provide you with a"
      },
      {
        "start_time": 11089160,
        "end_time": 11095560,
        "duration": 6400,
        "text": "summary of a YouTube YouTube video\nsummary building a custom scrolling"
      },
      {
        "start_time": 11093279,
        "end_time": 11100640,
        "duration": 7361,
        "text": "component in react native no that's not\nreally"
      },
      {
        "start_time": 11096680,
        "end_time": 11107080,
        "duration": 10400,
        "text": "true that's not really true and we are\ngoing to have to adjust it a little"
      },
      {
        "start_time": 11103560,
        "end_time": 11115520,
        "duration": 11960,
        "text": "bit that's because now that we are\nworking with URLs and video IDs like"
      },
      {
        "start_time": 11111600,
        "end_time": 11122080,
        "duration": 10480,
        "text": "this it's not longer going to\nbe part like in the retrieve tool it's"
      },
      {
        "start_time": 11119640,
        "end_time": 11128000,
        "duration": 8360,
        "text": "no longer going to be the video ID\nhere so I'm going to remove this"
      },
      {
        "start_time": 11124279,
        "end_time": 11128000,
        "duration": 3721,
        "text": "configurable video ID or"
      },
      {
        "start_time": 11129600,
        "end_time": 11140800,
        "duration": 11200,
        "text": "maybe let me do it like this and I'm\ngoing to take it from here from the"
      },
      {
        "start_time": 11138439,
        "end_time": 11145600,
        "duration": 7161,
        "text": "parameters that our tool is going to\nreceive and it's going to be the llm"
      },
      {
        "start_time": 11143560,
        "end_time": 11151880,
        "duration": 8320,
        "text": "that is going to decide what the video\nID is so again giving more control to"
      },
      {
        "start_time": 11148800,
        "end_time": 11159200,
        "duration": 10400,
        "text": "the llm in here we're going to say in\nthe schema that we have"
      },
      {
        "start_time": 11154600,
        "end_time": 11162479,
        "duration": 7879,
        "text": "the video ID but we can also describe\nthe ID of a video to"
      },
      {
        "start_time": 11163399,
        "end_time": 11166399,
        "duration": 3000,
        "text": "retrieve"
      },
      {
        "start_time": 11167399,
        "end_time": 11179840,
        "duration": 12441,
        "text": "yeah for a\nspecific YouTube"
      },
      {
        "start_time": 11175479,
        "end_time": 11185960,
        "duration": 10481,
        "text": "video now if I'm going to go ahead and\nsay the same"
      },
      {
        "start_time": 11181840,
        "end_time": 11185960,
        "duration": 4120,
        "text": "thing can we talk about"
      },
      {
        "start_time": 11192560,
        "end_time": 11196520,
        "duration": 3960,
        "text": "this it's going to do that"
      },
      {
        "start_time": 11197920,
        "end_time": 11205479,
        "duration": 7559,
        "text": "trigger and then is going to try to use\nthe data from newon the thing is that"
      },
      {
        "start_time": 11202720,
        "end_time": 11211439,
        "duration": 8719,
        "text": "it's not ready yet like our trigger even\nthough we are triggering it the data is"
      },
      {
        "start_time": 11208880,
        "end_time": 11216520,
        "duration": 7640,
        "text": "not stored in\nthe in the database yet we didn't"
      },
      {
        "start_time": 11214200,
        "end_time": 11219640,
        "duration": 5440,
        "text": "complete the loop yet so that's why we\nsay I apology but it looks like the"
      },
      {
        "start_time": 11218239,
        "end_time": 11223279,
        "duration": 5040,
        "text": "video content is still being processed\nand is available for me to retrieve"
      },
      {
        "start_time": 11221040,
        "end_time": 11227439,
        "duration": 6399,
        "text": "information yet this typically takes\naround 7 seconds but sometimes it can"
      },
      {
        "start_time": 11225000,
        "end_time": 11233279,
        "duration": 8279,
        "text": "take a bit longer that means that even\nthough scraping job was correctly"
      },
      {
        "start_time": 11230760,
        "end_time": 11239160,
        "duration": 8400,
        "text": "triggered as we can see\nhere it's correctly triggered by our"
      },
      {
        "start_time": 11236960,
        "end_time": 11246760,
        "duration": 9800,
        "text": "agent\nuh we need"
      },
      {
        "start_time": 11241439,
        "end_time": 11250160,
        "duration": 8721,
        "text": "to deploy it and make sure that our SL\nweb hook receives the"
      },
      {
        "start_time": 11250359,
        "end_time": 11259359,
        "duration": 9000,
        "text": "requestbody but not only do we need to\nreceive a request. body we need to index"
      },
      {
        "start_time": 11257000,
        "end_time": 11267720,
        "duration": 10720,
        "text": "them how do we do\nthat well request. body is basically"
      },
      {
        "start_time": 11263239,
        "end_time": 11272560,
        "duration": 9321,
        "text": "similar to this data. GS it's an array\nwith videos it can be one video it can"
      },
      {
        "start_time": 11270120,
        "end_time": 11278200,
        "duration": 8080,
        "text": "be multiple video at the same\ntime we have embeddings which has a"
      },
      {
        "start_time": 11276120,
        "end_time": 11286200,
        "duration": 10080,
        "text": "function add video to Vector\nstore which expects a video data so in"
      },
      {
        "start_time": 11282160,
        "end_time": 11289319,
        "duration": 7159,
        "text": "our server index in the web hook what we\nneed to do is we need"
      },
      {
        "start_time": 11289920,
        "end_time": 11299920,
        "duration": 10000,
        "text": "to in a simple way we need to do a\nweight making it a sync first add video"
      },
      {
        "start_time": 11296960,
        "end_time": 11306160,
        "duration": 9200,
        "text": "to vector store\nrequestbody sl0 because the body is"
      },
      {
        "start_time": 11303479,
        "end_time": 11312000,
        "duration": 8521,
        "text": "going to be an array and I can show you\nthat by looking into the logs of genesio"
      },
      {
        "start_time": 11309000,
        "end_time": 11316680,
        "duration": 7680,
        "text": "logs we see bodies and\narray but if you want to store all of"
      },
      {
        "start_time": 11314840,
        "end_time": 11328200,
        "duration": 13360,
        "text": "them what we have to do is we have to\nsay request. body. map for every single"
      },
      {
        "start_time": 11322319,
        "end_time": 11328200,
        "duration": 5881,
        "text": "video data there we want to addit"
      },
      {
        "start_time": 11328840,
        "end_time": 11339160,
        "duration": 10320,
        "text": "to um to the vector store and because\nthis is an array of promises we're going"
      },
      {
        "start_time": 11335399,
        "end_time": 11348120,
        "duration": 12721,
        "text": "to put it into a weit promise.\nall and say that hey a wait storing all"
      },
      {
        "start_time": 11343840,
        "end_time": 11348120,
        "duration": 4280,
        "text": "the data and only then finish"
      },
      {
        "start_time": 11348960,
        "end_time": 11358040,
        "duration": 9080,
        "text": "it return\nokay so now if we"
      },
      {
        "start_time": 11355080,
        "end_time": 11361800,
        "duration": 6720,
        "text": "deploy uh I will probably\ndo"
      },
      {
        "start_time": 11359880,
        "end_time": 11368760,
        "duration": 8880,
        "text": "that\num there is one more small thing that we"
      },
      {
        "start_time": 11365479,
        "end_time": 11372399,
        "duration": 6920,
        "text": "need to take care of and instead of\nshowing you the problem first let me"
      },
      {
        "start_time": 11371080,
        "end_time": 11381359,
        "duration": 10279,
        "text": "explain\nit usually the express are going to"
      },
      {
        "start_time": 11377640,
        "end_time": 11387800,
        "duration": 10160,
        "text": "limit how big the body of the post\nrequest can be however in our case if we"
      },
      {
        "start_time": 11385160,
        "end_time": 11391880,
        "duration": 6720,
        "text": "are fetching the if we are scraping a\npodcast of 4 hours that's going to have"
      },
      {
        "start_time": 11389640,
        "end_time": 11397439,
        "duration": 7799,
        "text": "a lot of data so it can be a couple of\nkilobytes couple of hundred kilobytes so"
      },
      {
        "start_time": 11394640,
        "end_time": 11406600,
        "duration": 11960,
        "text": "in V express. Json we can give a option\nhere to increase the limit of that data"
      },
      {
        "start_time": 11401680,
        "end_time": 11411040,
        "duration": 9360,
        "text": "I can even do 200 megabytes I'm just\njust to make sure that it's going to"
      },
      {
        "start_time": 11408160,
        "end_time": 11415000,
        "duration": 6840,
        "text": "work now that I have this one here let\nme go ahead and deploy everything to"
      },
      {
        "start_time": 11413279,
        "end_time": 11420880,
        "duration": 7601,
        "text": "production\nusing um"
      },
      {
        "start_time": 11417880,
        "end_time": 11420880,
        "duration": 3000,
        "text": "jio"
      },
      {
        "start_time": 11436680,
        "end_time": 11444920,
        "duration": 8240,
        "text": "deploy and we're no longer going to test\nit locally we're going to test it the"
      },
      {
        "start_time": 11442279,
        "end_time": 11444920,
        "duration": 2641,
        "text": "deployed"
      },
      {
        "start_time": 11445160,
        "end_time": 11455760,
        "duration": 10600,
        "text": "one so we see front and URL you can copy\nit we can go"
      },
      {
        "start_time": 11450880,
        "end_time": 11462120,
        "duration": 11240,
        "text": "here and we can start by copying a URL\nlet's go back to our application"
      },
      {
        "start_time": 11458000,
        "end_time": 11466200,
        "duration": 8200,
        "text": "and let's talk about and let's do the\nvideo"
      },
      {
        "start_time": 11463200,
        "end_time": 11472359,
        "duration": 9159,
        "text": "URL now if we look really quickly here\non uh bright data I think it's supposed"
      },
      {
        "start_time": 11470080,
        "end_time": 11479520,
        "duration": 9440,
        "text": "to to trigger a new job\nhere yes it's running and this bright"
      },
      {
        "start_time": 11475680,
        "end_time": 11484720,
        "duration": 9040,
        "text": "data job should call back back our API\nat/ web hook we're going to see that in"
      },
      {
        "start_time": 11482120,
        "end_time": 11493960,
        "duration": 11840,
        "text": "the logs here I don't think we logged\nanything but we see that the function"
      },
      {
        "start_time": 11489239,
        "end_time": 11499760,
        "duration": 10521,
        "text": "call at 51 just now which means that in\nnewon if everything work correctly in"
      },
      {
        "start_time": 11495800,
        "end_time": 11504359,
        "duration": 8559,
        "text": "neon database we should already\nhave information about a"
      },
      {
        "start_time": 11504439,
        "end_time": 11514000,
        "duration": 9561,
        "text": "video from a new from a new video I\nthat is this four L at the end so if I"
      },
      {
        "start_time": 11510760,
        "end_time": 11514000,
        "duration": 3240,
        "text": "look here in the new on"
      },
      {
        "start_time": 11514730,
        "end_time": 11517860,
        "duration": 3130,
        "text": "[Music]"
      },
      {
        "start_time": 11524160,
        "end_time": 11537319,
        "duration": 13159,
        "text": "database this is still that one and if I\nscroll there are a lot of them"
      },
      {
        "start_time": 11531560,
        "end_time": 11537319,
        "duration": 5759,
        "text": "so let's do like this"
      },
      {
        "start_time": 11545479,
        "end_time": 11552880,
        "duration": 7401,
        "text": "this is the last page if I look at the\nend it didn't work right I don't think"
      },
      {
        "start_time": 11550680,
        "end_time": 11552880,
        "duration": 2200,
        "text": "it"
      },
      {
        "start_time": 11565840,
        "end_time": 11569120,
        "duration": 3280,
        "text": "did uh"
      },
      {
        "start_time": 11574920,
        "end_time": 11581960,
        "duration": 7040,
        "text": "um I need to double check if it actually\nwas scraped"
      },
      {
        "start_time": 11582279,
        "end_time": 11595479,
        "duration": 13200,
        "text": "correctly so video this one can I do a\nfilter"
      },
      {
        "start_time": 11590800,
        "end_time": 11595479,
        "duration": 4679,
        "text": "here where metadata"
      },
      {
        "start_time": 11598080,
        "end_time": 11601000,
        "duration": 2920,
        "text": "but metadata is"
      },
      {
        "start_time": 11606200,
        "end_time": 11615600,
        "duration": 9400,
        "text": "it oh no yeah here it is Louis congrats\nyou see for it's a small video so it's"
      },
      {
        "start_time": 11613520,
        "end_time": 11621680,
        "duration": 8160,
        "text": "four chunks at the\nend uh if I search here you see that"
      },
      {
        "start_time": 11618840,
        "end_time": 11627880,
        "duration": 9040,
        "text": "these four chunks are about this video\nso what I can say here now is uh is it"
      },
      {
        "start_time": 11625359,
        "end_time": 11633120,
        "duration": 7761,
        "text": "ready yet\nand it's supposed to already look into"
      },
      {
        "start_time": 11630399,
        "end_time": 11636920,
        "duration": 6521,
        "text": "the neon database instead of triggering\na new one did it trigger a new"
      },
      {
        "start_time": 11637080,
        "end_time": 11648760,
        "duration": 11680,
        "text": "one uh this is now is 53 so I don't see\na new job being triggered which is very"
      },
      {
        "start_time": 11646080,
        "end_time": 11653239,
        "duration": 7159,
        "text": "good and the answer is great news the\nvideo content is now available based on"
      },
      {
        "start_time": 11650680,
        "end_time": 11657319,
        "duration": 6639,
        "text": "what uh I've retrieved this appear to be\na video about Formula 1 racing"
      },
      {
        "start_time": 11654720,
        "end_time": 11662200,
        "duration": 7480,
        "text": "specifically featuring Louis Hamilton\nhere is what I can tell you from the"
      },
      {
        "start_time": 11660080,
        "end_time": 11668439,
        "duration": 8359,
        "text": "content\nuh how did"
      },
      {
        "start_time": 11665040,
        "end_time": 11673160,
        "duration": 8120,
        "text": "Louis what was\nLouis"
      },
      {
        "start_time": 11671000,
        "end_time": 11678040,
        "duration": 7040,
        "text": "last uh\nwords last words not not that bad like"
      },
      {
        "start_time": 11675560,
        "end_time": 11684840,
        "duration": 9280,
        "text": "last words in the\ninterview let's see if it will if it can"
      },
      {
        "start_time": 11681000,
        "end_time": 11684840,
        "duration": 3840,
        "text": "understand this kind of stuff"
      },
      {
        "start_time": 11688760,
        "end_time": 11696960,
        "duration": 8200,
        "text": "based on we'll stay positive we'll keep\nour hands high and keep pushing forward"
      },
      {
        "start_time": 11694520,
        "end_time": 11701279,
        "duration": 6759,
        "text": "perfect now I can go ahead and take a\nnew"
      },
      {
        "start_time": 11698120,
        "end_time": 11706720,
        "duration": 8600,
        "text": "video for example from our\nChannel and say hey come"
      },
      {
        "start_time": 11707319,
        "end_time": 11713720,
        "duration": 6401,
        "text": "on\nlive let's take this Lucas"
      },
      {
        "start_time": 11715279,
        "end_time": 11728960,
        "duration": 13681,
        "text": "video and we can continue here as well\ncan we talk about this video and provide"
      },
      {
        "start_time": 11726479,
        "end_time": 11735040,
        "duration": 8561,
        "text": "a video it's supposed to trigger a new\nscraping"
      },
      {
        "start_time": 11730920,
        "end_time": 11739960,
        "duration": 9040,
        "text": "jump let's see yes it's running so this\nis all done by the AI agent it's"
      },
      {
        "start_time": 11740960,
        "end_time": 11751920,
        "duration": 10960,
        "text": "crazy and after some time it's going to\nadd new stuff in our transcripts table"
      },
      {
        "start_time": 11750040,
        "end_time": 11758560,
        "duration": 8520,
        "text": "we're going to already have\n639 but this video is huge so that's why"
      },
      {
        "start_time": 11755560,
        "end_time": 11758560,
        "duration": 3000,
        "text": "it took a little bit of"
      },
      {
        "start_time": 11765359,
        "end_time": 11770160,
        "duration": 4801,
        "text": "time is it ready"
      },
      {
        "start_time": 11783480,
        "end_time": 11786730,
        "duration": 3250,
        "text": "[Music]"
      },
      {
        "start_time": 11788800,
        "end_time": 11797439,
        "duration": 8639,
        "text": "So based on a Content retrieve at around\n42 minutes Mark I'm not sure like why"
      },
      {
        "start_time": 11794399,
        "end_time": 11800960,
        "duration": 6561,
        "text": "it's say that at this point of a video\nLucas appears to be wrapping up a"
      },
      {
        "start_time": 11799520,
        "end_time": 11804319,
        "duration": 4799,
        "text": "tutorial live stream he's just finished\nimplementing some functionalities"
      },
      {
        "start_time": 11802199,
        "end_time": 11813720,
        "duration": 11521,
        "text": "related to making items pressible he\njust finished like that that that uh"
      },
      {
        "start_time": 11807479,
        "end_time": 11819040,
        "duration": 11561,
        "text": "what is the tutorial about so basically\nI can talk with this tutorial with this"
      },
      {
        "start_time": 11816439,
        "end_time": 11826359,
        "duration": 9920,
        "text": "YouTube video let me try to find\nsomething that lookas maybe do so"
      },
      {
        "start_time": 11822479,
        "end_time": 11831800,
        "duration": 9321,
        "text": "sad what kind of list let's do what kind\nof list is that tutorial teaching shall"
      },
      {
        "start_time": 11830640,
        "end_time": 11836800,
        "duration": 6160,
        "text": "we do\nthat that's going to be the next"
      },
      {
        "start_time": 11833800,
        "end_time": 11836800,
        "duration": 3000,
        "text": "question"
      },
      {
        "start_time": 11849120,
        "end_time": 11854680,
        "duration": 5560,
        "text": "so this beginner friendly tutorial where\nLucas is teaching the viewers how to"
      },
      {
        "start_time": 11851960,
        "end_time": 11863160,
        "duration": 11200,
        "text": "build Apple news cloning R native like\nthat like that like that what kind of"
      },
      {
        "start_time": 11858840,
        "end_time": 11869319,
        "duration": 10479,
        "text": "list is Lucas\nteaching so how it's going to work it's"
      },
      {
        "start_time": 11866239,
        "end_time": 11874359,
        "duration": 8120,
        "text": "going to look at it's going to find from\nall of the transcripts here from around"
      },
      {
        "start_time": 11871720,
        "end_time": 11878520,
        "duration": 6800,
        "text": "300 transcripts transcripts that are\nmore similar to that maybe this one"
      },
      {
        "start_time": 11876600,
        "end_time": 11885880,
        "duration": 9280,
        "text": "around here and based on that it's going\nto analyze and answer the"
      },
      {
        "start_time": 11882399,
        "end_time": 11885880,
        "duration": 3481,
        "text": "question so let's"
      },
      {
        "start_time": 11886960,
        "end_time": 11892279,
        "duration": 5319,
        "text": "see maybe something even more specific"
      },
      {
        "start_time": 11897680,
        "end_time": 11900819,
        "duration": 3139,
        "text": "[Music]"
      },
      {
        "start_time": 11901160,
        "end_time": 11905640,
        "duration": 4480,
        "text": "H how specific do we want to"
      },
      {
        "start_time": 11907560,
        "end_time": 11912279,
        "duration": 4719,
        "text": "get but yeah let's see what's the"
      },
      {
        "start_time": 11915800,
        "end_time": 11924800,
        "duration": 9000,
        "text": "answer and now because we are using\num the AI model we can even combine"
      },
      {
        "start_time": 11923199,
        "end_time": 11930880,
        "duration": 7681,
        "text": "multiple\nvideos error processing request that's"
      },
      {
        "start_time": 11927520,
        "end_time": 11930880,
        "duration": 3360,
        "text": "interesting I'm wondering"
      },
      {
        "start_time": 11932960,
        "end_time": 11936239,
        "duration": 3279,
        "text": "why I don't"
      },
      {
        "start_time": 11937319,
        "end_time": 11948840,
        "duration": 11521,
        "text": "know maybe time limit I don't know but\nwhat I wanted to try to do is go back to"
      },
      {
        "start_time": 11944800,
        "end_time": 11948840,
        "duration": 4040,
        "text": "a previous video for example the"
      },
      {
        "start_time": 11949080,
        "end_time": 11953800,
        "duration": 4720,
        "text": "Louis\num"
      },
      {
        "start_time": 11953960,
        "end_time": 11958720,
        "duration": 4760,
        "text": "what what was Louis"
      },
      {
        "start_time": 11958800,
        "end_time": 11967239,
        "duration": 8439,
        "text": "excited\nabout and I think it should link it to"
      },
      {
        "start_time": 11963199,
        "end_time": 11972239,
        "duration": 9040,
        "text": "the previous video without scraping new\ndata because it already has it in the"
      },
      {
        "start_time": 11979239,
        "end_time": 11988239,
        "duration": 9000,
        "text": "database mhm the video where is earlier\nwas about Formula One Would you like me"
      },
      {
        "start_time": 11989160,
        "end_time": 12002120,
        "duration": 12960,
        "text": "yeah the question was about the previous\nvideo with"
      },
      {
        "start_time": 11998520,
        "end_time": 12002120,
        "duration": 3600,
        "text": "ID maybe this"
      },
      {
        "start_time": 12014600,
        "end_time": 12025920,
        "duration": 11320,
        "text": "one now I can properly answer your\nquestion uh what kind of was discussing"
      },
      {
        "start_time": 12020800,
        "end_time": 12032840,
        "duration": 12040,
        "text": "okay key points about qualifying session\nperfect so I think this is better"
      },
      {
        "start_time": 12028399,
        "end_time": 12040479,
        "duration": 12080,
        "text": "because it's very flexible it can start\nscraping like different jobs and even if"
      },
      {
        "start_time": 12036040,
        "end_time": 12046720,
        "duration": 10680,
        "text": "we try to do that again I hope it's not\ngoing to add new items in the database"
      },
      {
        "start_time": 12044120,
        "end_time": 12051920,
        "duration": 7800,
        "text": "because if it's smart enough it should\nfirst check if it has information about"
      },
      {
        "start_time": 12048800,
        "end_time": 12059479,
        "duration": 10679,
        "text": "that so even if I remove and restart the\nchat from scratch and say can we talk"
      },
      {
        "start_time": 12056880,
        "end_time": 12064000,
        "duration": 7120,
        "text": "about and the video about\nLucas I I hope it's not going to start a"
      },
      {
        "start_time": 12062359,
        "end_time": 12069120,
        "duration": 6761,
        "text": "scraping job but it's not up to us it's\nup to the agent and it actually indeed"
      },
      {
        "start_time": 12066239,
        "end_time": 12079080,
        "duration": 12841,
        "text": "tried to to do\nthat uh maybe we can instruct it better"
      },
      {
        "start_time": 12074720,
        "end_time": 12079080,
        "duration": 4360,
        "text": "through the description of our"
      },
      {
        "start_time": 12082040,
        "end_time": 12088120,
        "duration": 6080,
        "text": "agents use the tool only if a video is\nnot in the vector store"
      },
      {
        "start_time": 12088760,
        "end_time": 12097840,
        "duration": 9080,
        "text": "already so we need to tell it like check\nthe vector store"
      },
      {
        "start_time": 12093840,
        "end_time": 12106720,
        "duration": 12880,
        "text": "first because it added more items here\nalso you can add a table with video IDs"
      },
      {
        "start_time": 12103520,
        "end_time": 12111760,
        "duration": 8240,
        "text": "where you're going to save a status so\nso that it easier understand if it has"
      },
      {
        "start_time": 12109960,
        "end_time": 12114760,
        "duration": 4800,
        "text": "videos or\nnot"
      },
      {
        "start_time": 12116640,
        "end_time": 12126760,
        "duration": 10120,
        "text": "um before calling this\ntool make"
      },
      {
        "start_time": 12123760,
        "end_time": 12126760,
        "duration": 3000,
        "text": "sure"
      },
      {
        "start_time": 12129840,
        "end_time": 12137080,
        "duration": 7240,
        "text": "that that it is not already in the\nvector store"
      },
      {
        "start_time": 12140960,
        "end_time": 12148319,
        "duration": 7359,
        "text": "so maybe like this maybe with an\nadditional tool to check the status of a"
      },
      {
        "start_time": 12144920,
        "end_time": 12154080,
        "duration": 9160,
        "text": "video it can also improve like how our\nAI is going to is going to work but well"
      },
      {
        "start_time": 12152160,
        "end_time": 12159479,
        "duration": 7319,
        "text": "let's change what I want to do here is\nthat now from the client we are no"
      },
      {
        "start_time": 12156760,
        "end_time": 12164000,
        "duration": 7240,
        "text": "longer having to send the video ID\nmanually because that is the agent is"
      },
      {
        "start_time": 12162199,
        "end_time": 12170160,
        "duration": 7961,
        "text": "going to understand from the context of\nwhat we are talking about um it's going"
      },
      {
        "start_time": 12166640,
        "end_time": 12176479,
        "duration": 9839,
        "text": "to understand like the the\nvideo"
      },
      {
        "start_time": 12172399,
        "end_time": 12183840,
        "duration": 11441,
        "text": "uh let's see and in the backend in the\nserver here in the"
      },
      {
        "start_time": 12179800,
        "end_time": 12190279,
        "duration": 10479,
        "text": "index we don't need in the generate the\nvideo ID again this is something that"
      },
      {
        "start_time": 12188640,
        "end_time": 12198800,
        "duration": 10160,
        "text": "the chat is going to understand through\nthe messages that it worked"
      },
      {
        "start_time": 12195160,
        "end_time": 12204160,
        "duration": 9000,
        "text": "with perfect so now I can deploy it\nagain and I"
      },
      {
        "start_time": 12201160,
        "end_time": 12213120,
        "duration": 11960,
        "text": "think with this we\nhave a pretty cool rag system that we"
      },
      {
        "start_time": 12207640,
        "end_time": 12213120,
        "duration": 5480,
        "text": "can use to talk with YouTube"
      },
      {
        "start_time": 12213840,
        "end_time": 12222720,
        "duration": 8880,
        "text": "videos Lucas filling in for Vadim who\nwill return next week he's a developer"
      },
      {
        "start_time": 12219040,
        "end_time": 12229279,
        "duration": 10239,
        "text": "video content and so\none um all right what will you guys guys"
      },
      {
        "start_time": 12226800,
        "end_time": 12237319,
        "duration": 10519,
        "text": "build with this one let me know in the\ncomments below because I believe this"
      },
      {
        "start_time": 12233520,
        "end_time": 12242520,
        "duration": 9000,
        "text": "system opens up so many opportunities\nand possibilities I'm thinking you can"
      },
      {
        "start_time": 12240120,
        "end_time": 12247760,
        "duration": 7640,
        "text": "um you can build like a Chrome extension\nwhere you go in a video and you can"
      },
      {
        "start_time": 12245120,
        "end_time": 12251920,
        "duration": 6800,
        "text": "already pop up here and chat with that\nvideo like give me the summary what did"
      },
      {
        "start_time": 12250160,
        "end_time": 12257439,
        "duration": 7279,
        "text": "he say at the beginning what did he say\nat the end like uh it can be a great"
      },
      {
        "start_time": 12254439,
        "end_time": 12264000,
        "duration": 9561,
        "text": "Learning Resource on top of you YouTube\nor other sources uh from the internet"
      },
      {
        "start_time": 12261080,
        "end_time": 12268560,
        "duration": 7480,
        "text": "that can change the way we are consuming\nuh"
      },
      {
        "start_time": 12264920,
        "end_time": 12273760,
        "duration": 8840,
        "text": "content um another idea that I have that\nuh this might serve as a core for"
      },
      {
        "start_time": 12271600,
        "end_time": 12281080,
        "duration": 9480,
        "text": "implementing uh can be\nsomething for example we as notes da"
      },
      {
        "start_time": 12277199,
        "end_time": 12285840,
        "duration": 8641,
        "text": "have a lot of content on uh um on our\nChannel"
      },
      {
        "start_time": 12283000,
        "end_time": 12290439,
        "duration": 7439,
        "text": "when but sometimes it's hard to remember\nwhere for a new students to know like"
      },
      {
        "start_time": 12287960,
        "end_time": 12294279,
        "duration": 6319,
        "text": "where did we use what so for example if\nyou're interested in"
      },
      {
        "start_time": 12291800,
        "end_time": 12302560,
        "duration": 10760,
        "text": "animation I would go into a tool into a\nchat box and say in what"
      },
      {
        "start_time": 12297880,
        "end_time": 12311239,
        "duration": 13359,
        "text": "video uh did they talk about or uh give\nme the video ID or better"
      },
      {
        "start_time": 12307359,
        "end_time": 12319399,
        "duration": 12040,
        "text": "URL for videos about\nF1 you have you know about"
      },
      {
        "start_time": 12317479,
        "end_time": 12324920,
        "duration": 7441,
        "text": "I think without even changing anything\nit might work because it will look at"
      },
      {
        "start_time": 12321479,
        "end_time": 12329760,
        "duration": 8281,
        "text": "the context it will check F1 and we'll\nfind like these videos and let's see I"
      },
      {
        "start_time": 12327760,
        "end_time": 12334439,
        "duration": 6679,
        "text": "don't have pre-existing list of\nvideos I would need to specific on tools"
      },
      {
        "start_time": 12332880,
        "end_time": 12338439,
        "duration": 5559,
        "text": "however tools I have designed R\ninformation from videos already know"
      },
      {
        "start_time": 12336840,
        "end_time": 12346359,
        "duration": 9519,
        "text": "already know about by providing a video\nID where to scrape new videos by"
      },
      {
        "start_time": 12341319,
        "end_time": 12351520,
        "duration": 10201,
        "text": "providing video URLs mhm okay so yeah it\ndoesn't have a tool to look at video"
      },
      {
        "start_time": 12349120,
        "end_time": 12351520,
        "duration": 2400,
        "text": "yeah yeah"
      },
      {
        "start_time": 12353080,
        "end_time": 12359000,
        "duration": 5920,
        "text": "yeah or to scrape new videos provide"
      },
      {
        "start_time": 12360000,
        "end_time": 12369880,
        "duration": 9880,
        "text": "videos what if it just uses the same\ntool it should work it should work we"
      },
      {
        "start_time": 12366000,
        "end_time": 12376439,
        "duration": 10439,
        "text": "generate in with the retrieve it needs a\nquery and a video ID yeah this video ID"
      },
      {
        "start_time": 12391399,
        "end_time": 12403160,
        "duration": 11761,
        "text": "yeah look I'm uh I was not sharing it\nbut I wanted to for it to give me a list"
      },
      {
        "start_time": 12400080,
        "end_time": 12403160,
        "duration": 3080,
        "text": "of videos about Formula"
      },
      {
        "start_time": 12403960,
        "end_time": 12413399,
        "duration": 9439,
        "text": "1 uh I think what but for that to work\nwe just need to create a new"
      },
      {
        "start_time": 12409840,
        "end_time": 12417160,
        "duration": 7320,
        "text": "tool let me try I'm really curious to\nsee I'll create a new"
      },
      {
        "start_time": 12417199,
        "end_time": 12423199,
        "duration": 6000,
        "text": "tool called retrieve similar"
      },
      {
        "start_time": 12423319,
        "end_time": 12429680,
        "duration": 6361,
        "text": "videos and it's not going to get a video\nID but it's going to get the query it's"
      },
      {
        "start_time": 12427479,
        "end_time": 12434800,
        "duration": 7321,
        "text": "not going to get\nconfiguration and it's going to find"
      },
      {
        "start_time": 12431840,
        "end_time": 12440239,
        "duration": 8399,
        "text": "like yeah top three videos about that\nand it's going not going to have any"
      },
      {
        "start_time": 12436239,
        "end_time": 12446680,
        "duration": 10441,
        "text": "filter looking at all the data in the\ndatabase it's not going to serialize the"
      },
      {
        "start_time": 12442840,
        "end_time": 12455920,
        "duration": 13080,
        "text": "content of a page but it's going\nto uh map over doc. metadata do video ID"
      },
      {
        "start_time": 12454439,
        "end_time": 12463600,
        "duration": 9161,
        "text": "so\nIDs and then we're going to return"
      },
      {
        "start_time": 12459239,
        "end_time": 12470920,
        "duration": 11681,
        "text": "IDs retrieve similar videos\ndescription retrieve the"
      },
      {
        "start_time": 12467880,
        "end_time": 12478120,
        "duration": 10240,
        "text": "IDs of the more similar videos to the\nquery and I don't have this video this"
      },
      {
        "start_time": 12474960,
        "end_time": 12483120,
        "duration": 8160,
        "text": "video ID so it's another tool that I can\ngive to my agent and I think with that"
      },
      {
        "start_time": 12481120,
        "end_time": 12488399,
        "duration": 7279,
        "text": "tool if I\ndeploy we should be able"
      },
      {
        "start_time": 12486760,
        "end_time": 12493160,
        "duration": 6400,
        "text": "to\nto talk with all the videos"
      },
      {
        "start_time": 12494279,
        "end_time": 12504040,
        "duration": 9761,
        "text": "there and by adding this kind of tools\nlike maybe you you are the tool to index"
      },
      {
        "start_time": 12500000,
        "end_time": 12512279,
        "duration": 12279,
        "text": "a channel in all of his videos and then\nuh get um a tutor based on a Creator so"
      },
      {
        "start_time": 12509199,
        "end_time": 12516319,
        "duration": 7120,
        "text": "you index the whole thing that he said\nand then you create a chatbot based on"
      },
      {
        "start_time": 12514880,
        "end_time": 12522600,
        "duration": 7720,
        "text": "that\nCreator that's actually a very good idea"
      },
      {
        "start_time": 12520080,
        "end_time": 12526760,
        "duration": 6680,
        "text": "let me see what's happening it deployed\nlet's"
      },
      {
        "start_time": 12524000,
        "end_time": 12533199,
        "duration": 9199,
        "text": "see uh the same\nthe same question again let's see if it"
      },
      {
        "start_time": 12528840,
        "end_time": 12533199,
        "duration": 4359,
        "text": "now can give me a list of uh video"
      },
      {
        "start_time": 12533840,
        "end_time": 12541560,
        "duration": 7720,
        "text": "URLs I found a Formula One related video\nin the database here is the details"
      },
      {
        "start_time": 12538160,
        "end_time": 12544560,
        "duration": 6400,
        "text": "video ID and this is the video\nlink"
      },
      {
        "start_time": 12544680,
        "end_time": 12549740,
        "duration": 5060,
        "text": "perfect is the highlights but there is\none more you can access the F1 video"
      },
      {
        "start_time": 12549000,
        "end_time": 12552879,
        "duration": 3879,
        "text": "direct\n[Music]"
      },
      {
        "start_time": 12553640,
        "end_time": 12561319,
        "duration": 7679,
        "text": "through um\nI know what I know what happened there"
      },
      {
        "start_time": 12559080,
        "end_time": 12567840,
        "duration": 8760,
        "text": "because even though um there are more\nitems there about"
      },
      {
        "start_time": 12563479,
        "end_time": 12567840,
        "duration": 4361,
        "text": "F1 the similarity search"
      },
      {
        "start_time": 12568000,
        "end_time": 12578199,
        "duration": 10199,
        "text": "here of similar videos only received\nfree top chunks and the fre top chunks"
      },
      {
        "start_time": 12575399,
        "end_time": 12583880,
        "duration": 8481,
        "text": "might be for the same video so that's\nwhy uh it only gave me one video instead"
      },
      {
        "start_time": 12581720,
        "end_time": 12589560,
        "duration": 7840,
        "text": "of more so maybe you can increase here\nfrom three chunks to 30"
      },
      {
        "start_time": 12586600,
        "end_time": 12596160,
        "duration": 9560,
        "text": "most similar chunks to that query H I\ndon't know or you can have another table"
      },
      {
        "start_time": 12592920,
        "end_time": 12601560,
        "duration": 8640,
        "text": "where you have videos and what are they\nabout with a little bit shorter"
      },
      {
        "start_time": 12598960,
        "end_time": 12607560,
        "duration": 8600,
        "text": "description with a shorter Vector based\non the description so that you can also"
      },
      {
        "start_time": 12604160,
        "end_time": 12614319,
        "duration": 10159,
        "text": "search like this for the videos as\nwell perfect love it and I hope you"
      },
      {
        "start_time": 12611080,
        "end_time": 12619920,
        "duration": 8840,
        "text": "enjoy this one as well uh all the links\nall the documentation and the are going"
      },
      {
        "start_time": 12616880,
        "end_time": 12624399,
        "duration": 7519,
        "text": "to be available through the guide link\nin the description below so just simply"
      },
      {
        "start_time": 12622120,
        "end_time": 12630600,
        "duration": 8480,
        "text": "go in the description and you'll find a\nlink to the step-by-step"
      },
      {
        "start_time": 12626920,
        "end_time": 12636279,
        "duration": 9359,
        "text": "guide um I'm going to put there also the\nsource code so you can look at it and"
      },
      {
        "start_time": 12633399,
        "end_time": 12641399,
        "duration": 8000,
        "text": "maybe Implement something of your own\nplay with it like I'm so excited with"
      },
      {
        "start_time": 12639239,
        "end_time": 12646680,
        "duration": 7441,
        "text": "with the possibilities of this one and\neverything related to AI"
      },
      {
        "start_time": 12643239,
        "end_time": 12652520,
        "duration": 9281,
        "text": "nowadays um it looks like magic like we\nput stuff together we put the tools"
      },
      {
        "start_time": 12649560,
        "end_time": 12657040,
        "duration": 7480,
        "text": "together and then it can do anything we\njust have to ask it the right question"
      },
      {
        "start_time": 12655080,
        "end_time": 12663120,
        "duration": 8040,
        "text": "so I hope you enjoy this one I hope you\nlearn something new uh learn new about a"
      },
      {
        "start_time": 12660239,
        "end_time": 12668520,
        "duration": 8281,
        "text": "agents about rag system thank you very\nmuch for our sponsors bright data that"
      },
      {
        "start_time": 12666279,
        "end_time": 12673520,
        "duration": 7241,
        "text": "allowed us to get access to any data on\nthe internet which is so important"
      },
      {
        "start_time": 12670439,
        "end_time": 12681239,
        "duration": 10800,
        "text": "nowadays in the AI age to have access to\ndata and also uh janio for helping us"
      },
      {
        "start_time": 12677680,
        "end_time": 12688840,
        "duration": 11160,
        "text": "host deploy our application in a very\nscalable environment in a in a in a"
      },
      {
        "start_time": 12685520,
        "end_time": 12693560,
        "duration": 8040,
        "text": "server that can scale with our uh\napplication thank you everyone who"
      },
      {
        "start_time": 12690880,
        "end_time": 12698120,
        "duration": 7240,
        "text": "joined uh if you have more ideas if\nyou'd like to learn more about AI or"
      },
      {
        "start_time": 12695960,
        "end_time": 12703239,
        "duration": 7279,
        "text": "mobile development or anything else let\nme know in the comments below I'm going"
      },
      {
        "start_time": 12699880,
        "end_time": 12707120,
        "duration": 7240,
        "text": "to to read them and note it down to to\nbuild something for you in the next week"
      },
      {
        "start_time": 12705520,
        "end_time": 12713239,
        "duration": 7719,
        "text": "if you enjoy this one make sure to\nsubscribe and I'll see you guys next"
      },
      {
        "start_time": 12709680,
        "end_time": 12713239,
        "duration": 3559,
        "text": "week bye-bye"
      }
    ],
    "hashtags": [
      {
        "hashtag": "#langchain",
        "link": "https://www.youtube.com/hashtag/langchain"
      },
      {
        "hashtag": "#react",
        "link": "https://www.youtube.com/hashtag/react"
      },
      {
        "hashtag": "#notjustdev",
        "link": "https://www.youtube.com/hashtag/notjustdev"
      }
    ],
    "tags": [
      "not just development",
      "notjust.dev",
      "live coding",
      "react native tutorial",
      "react native for beginners",
      "React Native",
      "step-by-step tutorial",
      "AI chatbot YouTube",
      "RAG system tutorial",
      "retrieval augmented generation",
      "YouTube captions AI",
      "scrape YouTube transcripts",
      "YouTube transcript scraper",
      "build AI chatbot with LLM",
      "AI video search",
      "scraping browser tutorial",
      "chat with YouTube videos",
      "natural language processing",
      "LLM chatbot tutorial",
      "AI-powered search",
      "AI search engine"
    ],
    "next_recommended_videos": null,
    "recommended_videos": [
      {
        "url": "https://www.youtube.com/watch?v=vT03ndfr_-w",
        "title": "FULL Authentication System in React Native with Clerk and Expo Router",
        "thumbnail": "https://i.ytimg.com/vi/vT03ndfr_-w/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC-Qpi3HsfR49cvtKYzGF3E4aMBGQ"
      },
      {
        "url": "https://www.youtube.com/watch?v=nNfi9H4mFFE&pp=ugUEEgJlbg%3D%3D",
        "title": "🔴 Build an Autonomous AI Agent with Javascript and LangGraph (tutorial for beginners)",
        "thumbnail": "https://i.ytimg.com/vi/nNfi9H4mFFE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCq0ki5Hdnt_Qj26ViKE7-NB_Tlbg"
      },
      {
        "url": "https://www.youtube.com/watch?v=aGCMVxs8980&pp=ugUEEgJlbg%3D%3D",
        "title": "Win a MacBook by Building a Real Mobile App | #notJustHack Kickstart",
        "thumbnail": "https://i.ytimg.com/vi/aGCMVxs8980/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCO7nhV2qiMF6_3LflaoES8YfwYog"
      },
      {
        "url": "https://www.youtube.com/watch?v=3E5OxozYuA8&pp=ugUEEgJlbg%3D%3D",
        "title": "Build a RAG Chatbot from Scratch | React, Next.js, AI SDK, AI Elements, Neon, Drizzle, Clerk",
        "thumbnail": "https://i.ytimg.com/vi/3E5OxozYuA8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCg8d_rH0uDpjfj75ocM_2N4hr0Og"
      },
      {
        "url": "https://www.youtube.com/watch?v=V6LYjX9Zlks&pp=ugUEEgJlbg%3D%3D",
        "title": "LangGraph & LangChain Full Tutorial: State, Nodes, Edges, Memory & Pydantic (2026)",
        "thumbnail": "https://i.ytimg.com/vi/V6LYjX9Zlks/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDfRBq1yOyDKYNHXe6qMHcoFJYdEA"
      },
      {
        "url": "https://www.youtube.com/watch?v=_1P0Uqk50Ps",
        "title": "The Ultimate FastAPI + React Full Stack Project (Deploy This and You’re Set)",
        "thumbnail": "https://i.ytimg.com/vi/_1P0Uqk50Ps/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAybpC4FEtqht4cy2zwqOVukCVevQ"
      },
      {
        "url": "https://www.youtube.com/watch?v=hIoCb0aVJ-Y",
        "title": "🔴 Vibe code a production ready LMS App (React Native, Expo, Clerk, Supabase)",
        "thumbnail": "https://i.ytimg.com/vi/hIoCb0aVJ-Y/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCQOgnx5c8E1F-Wv2V0URG8oUoKLQ"
      },
      {
        "url": "https://www.youtube.com/watch?v=5fZQ_-P6n5c",
        "title": "\"Build Full-Stack AI Apps with LangChain & Python – Generative AI Tutorial for Beginners",
        "thumbnail": "https://i.ytimg.com/vi/5fZQ_-P6n5c/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCjhZFBZv_zyNeJ_XJ8sBBHzTcdTw"
      },
      {
        "url": "https://www.youtube.com/watch?v=d-VKYF4Zow0&pp=ugUEEgJlbg%3D%3D",
        "title": "Build and Deploy a RAG Chatbot with JavaScript, LangChain.js, Next.js, Vercel, OpenAI",
        "thumbnail": "https://i.ytimg.com/vi/d-VKYF4Zow0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDEkuoWx4favMeiwXA6lqLjq2s9Cg"
      },
      {
        "url": "https://www.youtube.com/watch?v=sxYcjDrMyNc",
        "title": "Databricks Live Bootcamp | Day1: Introduction & Data Analytics",
        "thumbnail": "https://i.ytimg.com/vi/sxYcjDrMyNc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD5QvpHG0XMtBVx-OUhfhobifIxhQ"
      },
      {
        "url": "https://www.youtube.com/watch?v=sXRDL-EPtrM",
        "title": "✈️ Build & Deploy Full Stack AI Trip Planner NextJs App Using React, Typescript, Arcjet, Convex",
        "thumbnail": "https://i.ytimg.com/vi/sXRDL-EPtrM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDourfA2op17zTAcxjWI8WMxCGVjg"
      },
      {
        "url": "https://www.youtube.com/watch?v=a1B1jXXVzPQ",
        "title": "Jfrog | Jfrog Artifactory | Jfrog Artifactory Tutorial | Artifactory Tutorial | Intellipaat",
        "thumbnail": "https://i.ytimg.com/vi/a1B1jXXVzPQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDCNePOuFtlJed2fdpi4CSp8ZarnQ"
      }
    ],
    "transcript_language": [
      {
        "language": "English (auto-generated)",
        "auto_translate": true
      }
    ],
    "chapters": null,
    "transcription_language": null,
    "is_age_restricted": false,
    "channel_url_decoded": "https://www.youtube.com/@notjustdev",
    "category": "Science & Technology",
    "audio_tracks": [],
    "made_for_kids": false,
    "player_notification_text": null,
    "ai_content_label": true,
    "live_status": "was_live",
    "timestamp": "2026-08-14T10:05:51.388Z",
    "input": {
      "url": "https://www.youtube.com/watch?v=kEtGm75uBes&t=2536s",
      "country": "",
      "transcription_language": ""
    }
  }
]