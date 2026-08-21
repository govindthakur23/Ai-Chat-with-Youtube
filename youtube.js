import "dotenv/config";

const BASE_URL = "https://api.brightdata.com/datasets/v3";
const DATASET_ID = "gd_lk56epmy2i5g7lzu0k";

const headers = {
  Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
  "Content-Type": "application/json",
};

// Small helper to wait between progress checks
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Scrape one YouTube video using Bright Data
export const scrapeYouTubeVideo = async (url) => {
  // 1. Trigger scraping job
  const triggerResponse = await fetch(
    `${BASE_URL}/trigger?dataset_id=${DATASET_ID}&notify=false&include_errors=true`,
    {
      method: "POST",
      headers,
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

  if (!triggerResponse.ok) {
    const errorText = await triggerResponse.text();

    throw new Error(
      `Bright Data trigger error: ${triggerResponse.status} ${errorText}`
    );
  }

  const triggerData = await triggerResponse.json();

  const snapshotId = triggerData.snapshot_id;

  if (!snapshotId) {
    throw new Error("Bright Data did not return a snapshot_id");
  }

  console.log("Bright Data snapshot:", snapshotId);

  // 2. Wait until Bright Data finishes scraping
  let status = "starting";

  while (status === "starting" || status === "running") {
    await sleep(5000);

    const progressResponse = await fetch(
      `${BASE_URL}/progress/${snapshotId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
        },
      }
    );

    if (!progressResponse.ok) {
      const errorText = await progressResponse.text();

      throw new Error(
        `Bright Data progress error: ${progressResponse.status} ${errorText}`
      );
    }

    const progressData = await progressResponse.json();

    status = progressData.status;

    console.log("Bright Data status:", status);

    if (status === "failed") {
      throw new Error("Bright Data scraping job failed");
    }
  }

  // 3. Download completed snapshot
  const snapshotResponse = await fetch(
    `${BASE_URL}/snapshot/${snapshotId}?format=json`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
      },
    }
  );

  if (!snapshotResponse.ok) {
    const errorText = await snapshotResponse.text();

    throw new Error(
      `Bright Data snapshot error: ${snapshotResponse.status} ${errorText}`
    );
  }

  const data = await snapshotResponse.json();

  console.log("Bright Data result received");

  // Bright Data returns an array
  return data[0];
};