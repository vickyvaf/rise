interface Props {
  handleShowFile: () => void;
}

const ContactFile = (props: Props) => {
  return (
    <div className="contact-file-container">
      <header>
        <div className="action">
          <button
            onClick={props.handleShowFile}
            className="button-one"
          ></button>
          <button className="button-two"></button>
          <button className="button-three"></button>
        </div>
        <span>Contact</span>
      </header>
      <div className="card">
        <img src="/assets/profile.png" className="profile" alt="profile"/>
        <h2>Vicky Adi Firmansyah</h2>
        <span>Lets connect 👋</span>
        <div className="socials">
          <img src="/assets/github.svg" alt="social-icon"/>
          <img src="/assets/instagram.svg" alt="social-icon"/>
          <img src="/assets/linkedin.svg" alt="social-icon"/>
          <img src="/assets/twitter.svg" alt="social-icon"/>
          <img src="/assets/youtube.svg" alt="social-icon"/>
        </div>
      </div>
    </div>
  );
};

export default ContactFile;
