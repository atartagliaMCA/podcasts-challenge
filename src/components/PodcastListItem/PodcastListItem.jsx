import { NavLink } from "react-router-dom";
import "./PodcastListItem.scss";

export function PodcastListItem({ podcast }) {
  const podcastLink = `/podcast/${podcast.id.attributes["im:id"]}`;
  const image = podcast["im:image"][2].label;
  const [title, author] = podcast.title.label.split("-");

  return (
    <NavLink
      to={podcastLink}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <li className="li__item">
        <img src={image} alt="portrait" />
        <h3>{title}</h3>
        <p>Author: {author}</p>
      </li>
    </NavLink>
  );
}
