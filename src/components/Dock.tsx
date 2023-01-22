import { FC } from "react";

const Dock: FC = () => {
  return (
    <div className="dock-container">
      <img src="/assets/finder.svg" className="dock-icon"/>
      <img src="/assets/calendar.svg" className="dock-icon"/>
      <img src="/assets/books.svg" className="dock-icon"/>
      <img src="/assets/separator.svg" className="dock-icon-separator"/>
      <img src="/assets/trash.svg" className="dock-icon"/>
    </div>
  );
};

export default Dock;
