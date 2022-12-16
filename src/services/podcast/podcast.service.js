import axios from "axios";

export const getPodcasts = async () =>
  axios
    .get(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
      )}`,
    )
    .then((resp) => resp.data)
    .then((data) => JSON.parse(data.contents))
    .then((contents) => contents.feed.entry);

export const getPodcastsDetail = async (id) =>
  axios
    .get(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${id}`,
      )}`,
    )
    .then((resp) => resp.data)
    .then((data) => JSON.parse(data.contents))
    .then((contents) => contents.results[0]);
