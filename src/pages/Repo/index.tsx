import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIRepo } from "../../@types/indext";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GitHubIcon,
  Erro,
} from "./styles";
import { Link } from "react-router-dom";

const Repo: React.FC = () => {
  const {
    username = "LuizCarlosVilela",
    reponame = "FlappyIA-JS",
  } = useParams();

  const [repo, setRepo] = useState<APIRepo>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/repos/${username}/${reponame}`),
    ]).then(async (response) => {
      const [repoResponse] = response;

      if (repoResponse.status === 404) {
        console.log("erro");
        return;
      }

      const repo = await repoResponse.json();

      setRepo(repo);
    });
  }, []);

  if (!repo) {
    return <Erro>Loading...</Erro>;
  }

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={"username"} to={`/${repo?.owner.login}`}>
          {repo?.owner.login}
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={`/${repo?.owner.login}/${repo?.name}`}>
          {repo?.name}
        </Link>
      </Breadcrumb>

      <p>{repo?.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{repo?.stargazers_count}</b>
          <span>starts</span>
        </li>

        <li>
          <ForkIcon />
          <b>{repo?.forks}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton
        href={`https://github.com/${repo?.owner.login}/${repo?.name}`}
      >
        <GitHubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
