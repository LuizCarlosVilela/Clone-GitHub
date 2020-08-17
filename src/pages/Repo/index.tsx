import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GitHubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={"username"} to={"/guilhermerodz"}>
          guilermerodz
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/guilhermerodz/youtube-content"}>
          youtube-content
        </Link>
      </Breadcrumb>

      <p>Contains all of my Youtube lessons code.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>starts</span>
        </li>

        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/LuizCarlosVilela/clone-github"}>
        <GitHubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
