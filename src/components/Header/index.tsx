import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Container, GithubLogo, SearchForm, SunIcon, MoonIcon } from "./styles";
import { ThemeName } from "../../styles/themes";

import { FiMoon, FiSun } from "react-icons/fi";

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function hadleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate("/" + search.toLocaleLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <Container>
      <Link to="/">
        <GithubLogo />
      </Link>

      {themeName === "dark" ? (
        <SunIcon onClick={toggleTheme} />
      ) : (
        <MoonIcon onClick={toggleTheme} />
      )}

      <SearchForm onSubmit={hadleSubmit}>
        <input
          placeholder="Enter Username or Repoo"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
