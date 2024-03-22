import React from 'react';
import Navbar from '../../components/Navbar';
import TeamButton from '../../components/TeamButton';

function Team() {
  return (
    <div>
      <Navbar page="true" activePage="team" />
      <h1 className="dashboard-space font1 text-center">Team</h1>
      <div className="text-center mt-4">
        <TeamButton
          profileLink="https://github.com/JoaoMarcosPC"
          profileImage="https://avatars.githubusercontent.com/u/64026288?v=4"
          name="João Marcos"
          githubIcon="./src/assets/icons/github-icon.svg"
        />

        <TeamButton
          profileLink="https://github.com/oliveiralecca"
          profileImage="https://avatars.githubusercontent.com/u/65191407?v=4"
          name="Letícia Oliveira"
          githubIcon="./src/assets/icons/github-icon.svg"
        />

        <TeamButton
          profileLink="https://github.com/mpaullos"
          profileImage="https://avatars.githubusercontent.com/u/82289818?v=4"
          name="Marcos Paulo"
          githubIcon="./src/assets/icons/github-icon.svg"
        />

        <TeamButton
          profileLink="https://github.com/rodrigodesan"
          profileImage="https://avatars.githubusercontent.com/u/76262266?v=4"
          name="Rodrigo Nunes"
          githubIcon="./src/assets/icons/github-icon.svg"
        />
      </div>
    </div>
  );
}

export default Team;
