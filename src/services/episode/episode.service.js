import axios from "axios";

export const getEpisodes = async (id) => {
  return axios
    .get(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=10`,
      )}`,
    )
    .then((resp) => resp.data)
    .then((data) => JSON.parse(data.contents))
    .then((contents) => contents.results.slice(1));
};
