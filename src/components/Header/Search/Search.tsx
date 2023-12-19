import React, { useState } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";
import "./Search.scss";

interface SearchProps {
  onsubmit: (title: string) => void;
}

const Search = ({ onsubmit }: SearchProps) => {
  const [value, setValue] = useState("");

  function submit(e: any) {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      onsubmit(e.currentTarget.value);
      setValue("");
    }
  }

  function handleChange(e: any) {
    setValue(e.target.value);
  }
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search a Movie..."
        className="search-box"
        onChange={handleChange}
        value={value}
        onKeyUp={submit}
      />
      <div className="search-icon">
        <SearchIcon size={27} className="icon" />
      </div>
    </div>
  );
};

export default Search;
