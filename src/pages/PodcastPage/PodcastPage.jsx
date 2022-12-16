import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { Loading, Podcast } from "../../components";
import "./PodcastPage.scss";
import {
  getPodcasts,
  getPodcastsDetail,
} from "../../services/podcast/podcast.service";

export function PodcastPage() {
  const [podcastSelected, setPodcastSelected] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const { podcastId } = useParams();

  useEffect(() => {
    getPodcasts().then((podsList) => {
      const filteredPods = podsList.filter(
        (item) => item.id.attributes["im:id"] === podcastId,
      );
      setPodcastSelected(filteredPods[0]);
    });
  }, [podcastId]);

  useEffect(() => {
    getPodcastsDetail(podcastId).then((data) => {
      setEpisodes(data);
    });
  }, [podcastId]);

  return (
    <div className="PodcastPage__container">
      {podcastSelected.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Podcast podcastSelected={podcastSelected} />
          <Outlet context={[episodes]} />
        </>
      )}
    </div>
  );
}
