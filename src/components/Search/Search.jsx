import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Search.scss";

export function Search({ search, setSearch }) {
  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  return (
    <div className="search__container">
      <input
        type="text"
        name="search"
        placeholder="Search Podcast..."
        className="search__input"
        onChange={(evt) => handleChange(evt)}
        value={search}
      />
      <button className="search__button">
        <SearchOutlinedIcon />
      </button>
    </div>
  );
}
