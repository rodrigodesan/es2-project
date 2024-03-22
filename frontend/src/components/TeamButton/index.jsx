function TeamButton({
  profileLink, profileImage, name, githubIcon,
}) {
  return (
    <button type="submit" className="team-btn">
      <a className="text-decoration-none" href={profileLink} target="_blank" rel="noreferrer">
        <img
          className="img-team"
          src={profileImage}
          alt=""
        />
        <p className="team-description">
          {name}
          <br />
          <img className="github" src={githubIcon} alt="github-icon" />
        </p>
      </a>
    </button>
  );
}
export default TeamButton;
