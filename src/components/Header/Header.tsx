import React from "react";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import "./Header.scss";
import { Movie, MoviesAPI } from "../../App";

interface HeaderProps {
  updateCurrentMovie: (movie: Movie) => void;
}

const Header = ({ updateCurrentMovie }: HeaderProps) => {
  async function fetchByTitle(title: string) {
    const searchResponse = await MoviesAPI.fetchByTitle(title);
    if (searchResponse.length > 0) {
      updateCurrentMovie(searchResponse[0]);
      console.log(searchResponse[0]);
    }
  }
  return (
    <div className="header">
      <Logo />
      <Search onsubmit={fetchByTitle} />
    </div>
  );
};

export default Header;
