import React from "react";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileDate from "../../components/ProfileDate";
import RepoCard from "../../components/RepoCard";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileDate
            username={"LuizCarlos"}
            name={"Luiz Carlos Vilela dos Santos"}
            avatarUrl={
              "https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4"
            }
            followers={100}
            following={10}
            company={"Rocketseat"}
            location={"Alagoas, Brazil"}
            email={"luizinho.com.br"}
            blog={undefined}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"luizcarlosvilela"}
                  reponame={"youtube-content"}
                  description={"Contains all of my YouTube lessons code"}
                  language={n % 3 === 0 ? "javaScript" : "TypeScript"}
                  starts={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
