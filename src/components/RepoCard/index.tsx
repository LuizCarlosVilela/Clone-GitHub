import React from "react";

import {
  Container,
  Topside,
  RepoIcon,
  BotSide,
  StartIcon,
  ForkIcon,
} from "./styles";

import { Link } from "react-router-dom";

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  starts: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  starts,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : "other";

  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </Topside>

      <BotSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>

          <li>
            <StartIcon />
            <span>{starts}</span>
          </li>

          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BotSide>
    </Container>
  );
};

export default RepoCard;
