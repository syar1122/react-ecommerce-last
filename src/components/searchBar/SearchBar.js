import React, { useState } from "react";
import "./searchBar.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <div className="search">
      <input value={search} onChange={() => setSearch(search)}></input>
      <button className="add-btn" type="button">
        <i className="material-icons">search</i>
      </button>
    </div>
  );
}
