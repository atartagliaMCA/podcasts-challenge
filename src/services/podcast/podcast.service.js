export const getPodcasts = async () =>
  fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
    )}`,
  )
    .then((response) => response.json())
    .then((data) => JSON.parse(data.contents))
    .then((contents) => contents.feed.entry);

export const getPodcastsDetail = async (id) =>
  fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${id}`,
    )}`,
  )
    .then((response) => response.json())
    .then((resp) => JSON.parse(resp.contents))
    .then((contents) => contents.results[0]);
