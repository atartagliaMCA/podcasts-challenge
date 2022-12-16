import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Search.scss";

export function Search({ search, setSearch }) {
  return (
    <div className="search__container">
      <input
        type="text"
        name="search"
        placeholder="Search Podcast..."
        className="search__input"
        onChange={(evt) => setSearch(evt.target.value)}
        value={search}
      />
      <button className="search__button">
        <SearchOutlinedIcon />
      </button>
    </div>
  );
}
