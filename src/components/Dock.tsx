interface ContactFileProps {
  handleShowProfileFile: () => void;
  handleShowContactFile: () => void;
  handleShowProjectFile: () => void;
}

const Dock = (props: ContactFileProps) => {
  return (
    <div className="dock-container">
      <img
        onClick={props.handleShowProfileFile}
        src="/assets/finder.svg"
        className="dock-icon"
        alt="dock-icon"
      />
      <img
        onClick={props.handleShowProjectFile}
        src="/assets/github-dock.png"
        className="dock-icon"
        alt="dock-icon"
      />
      <img
        onClick={props.handleShowContactFile}
        src="/assets/safari.svg"
        className="dock-icon"
        alt="dock-icon"
      />
      <img
        src="/assets/separator.svg"
        className="dock-icon-separator"
        alt="dock-icon"
      />
      <img src="/assets/trash.svg" className="dock-icon" alt="dock-icon" />
    </div>
  );
};

export default Dock;
