import { FC } from "react";

interface ContactFileProps {
  handleShowFile: () => void;
}

const Dock: FC<ContactFileProps> = (props: ContactFileProps) => {
  return (
    <div className="dock-container">
      <img src="/assets/finder.svg" className="dock-icon" alt="dock-icon" />
      <img
        src="/assets/github-dock.png"
        className="dock-icon"
        alt="dock-icon"
      />
      <img
        onClick={props.handleShowFile}
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
