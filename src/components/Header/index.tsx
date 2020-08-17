import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, GithubLogo, SearchForm } from "./styles";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function hadleSubmit(event: React.FormEvent) {
    // event.preventDefault();
    navigate("/" + search.toLocaleLowerCase().trim());
  }

  return (
    <Container>
      <GithubLogo />

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
