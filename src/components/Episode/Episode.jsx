import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getEpisodes } from "../../services/episode/episode.service";
import "./Episode.scss";

export function Episode() {
  const { podcastId, episodeId } = useParams();
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    getEpisodes(podcastId).then((data) => {
      const filteredEpisode = data.filter(
        (item) => item.trackId === Number(episodeId),
      );
      setEpisode(filteredEpisode[0]);
    });
  }, [podcastId]);

  return (
    <div className="episode__container">
      <h1>{episode.trackName}</h1>
      <p>{episode.description}</p>
      <audio src={episode.episodeUrl} type="audio/mp3" controls>
        <track default kind="captions" />
      </audio>
    </div>
  );
}
