import { useOutletContext } from "react-router";
import { Episodes } from "../Episodes";
import "./PodcastDetails.scss";

export function PodcastDetails() {
  const [episodes] = useOutletContext();

  return (
    <section className="podcastDetails__container">
      <div className="podcastDetails__title">
        <h3> Episodes: {episodes.trackCount}</h3>
      </div>
      <div className="podcastDetails__episodes">
        <Episodes id={episodes.trackId} />
      </div>
    </section>
  );
}
