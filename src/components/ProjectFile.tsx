interface Props {
  handleShowFile: () => void;
}

const ProjectFile = (props: Props) => {
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
        <span>Projects</span>
      </header>
      <div className="card-project">
        <div className="card-project-item">
          <img src="/assets/scarlett.png" alt="" />
          <div>
            <p>Scarlett Whitening</p>
            <div>
              <a
                href="https://github.com/vickyvaf/scarlett-whitening"
                target="_blank"
              >
                <img src="/assets/github.svg" alt="" />
              </a>
              <a href="https://scarlett-clone.vercel.app/" target="_blank">
                <img src="/assets/link.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="card-project-item">
          <img src="/assets/koenigsegg.png" alt="" />
          <div>
            <p>Koenigsegg</p>
            <div>
              <a href="https://github.com/vickyvaf/koenigsegg" target="_blank">
                <img src="/assets/github.svg" alt="" />
              </a>
              <a href="https://koenigsegg-steel.vercel.app/" target="_blank">
                <img src="/assets/link.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="card-project-item">
          <img src="/assets/quiz-awikwok.png" alt="" />
          <div>
            <p>Quiz Awikwok</p>
            <div>
              <a
                href="https://github.com/vickyvaf/quiz-awikwok"
                target="_blank"
              >
                <img src="/assets/github.svg" alt="" />
              </a>
              <a href="https://quiz-awikwok.vercel.app/" target="_blank">
                <img src="/assets/link.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="card-project-item">
          <img src="/assets/glints.png" alt="" />
          <div>
            <p>Glints</p>
            <div>
              <a href="https://github.com/vickyvaf/glints" target="_blank">
                <img src="/assets/github.svg" alt="" />
              </a>
              <a href="https://glints-clone.vercel.app/" target="_blank">
                <img src="/assets/link.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFile;
