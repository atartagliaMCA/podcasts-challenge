import { NavLink } from "react-router-dom";
import "./Podcast.scss";

export function Podcast({ podcastSelected }) {
  const image = podcastSelected["im:image"][2].label;
  const [title, author] = podcastSelected.title.label.split("-");
  const desc = podcastSelected.summary.label;
  const postcadId = podcastSelected.id.attributes["im:id"];

  return (
    <div className="podcast__container">
      <NavLink
        to={`/podcast/${postcadId}`}
        style={{
          textDecoration: "none",
          color: "var(--darkBlue)",
          width: "100%",
        }}
      >
        <div className="podcast__image">
          <img src={image} alt="art work" />
        </div>
        <hr />
        <h2>{title}</h2>
        <h4>by {author}</h4>
        <hr />
      </NavLink>
      <span>Description:</span>
      <p>{desc}</p>
    </div>
  );
}
