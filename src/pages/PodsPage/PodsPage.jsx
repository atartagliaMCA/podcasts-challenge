import { useState, useEffect } from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { PodcastListItem, Search, Loading } from "../../components";
import { getPodcasts, setStorageValue, getStorageValue } from "../../services";

import "./PodsPage.scss";

const defaultProducts = getStorageValue("storaged_podcasts");

export function PodsPage() {
  const [podcasts, setPodcasts] = useState(defaultProducts || []);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(!defaultProducts);
  const filterProducts = podcasts.filter((item) =>
    item.title.label.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    if (!defaultProducts) {
      getPodcasts().then((pods) => {
        setPodcasts(pods);
        setStorageValue("storaged_podcasts", pods, 3600);
        setIsLoading(false);
      });
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pods__container">
      <div className="pods__search">
        <div className="pods__search-results">{filterProducts.length}</div>
        <Search search={search} setSearch={setSearch} />
      </div>

      {filterProducts.length === 0 ? (
        <p>No se encontraron resultados para la búsqueda</p>
      ) : (
        <ul>
          {filterProducts.map((podcast) => {
            return (
              <PodcastListItem
                key={podcast.id.attributes["im:id"]}
                podcast={podcast}
              />
            );
          })}
        </ul>
      )}

      <button
        type="button"
        className="list__up"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <ArrowUpwardOutlinedIcon style={{ background: "none" }} />
      </button>
    </div>
  );
}
