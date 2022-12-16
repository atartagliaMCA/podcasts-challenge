export const getEpisodes = async (id) => {
  return fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=10`,
    )}`,
  )
    .then((response) => response.json())
    .then((resp) => JSON.parse(resp.contents))
    .then((contents) => contents.results.slice(1));
};
