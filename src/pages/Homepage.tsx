import { useState } from "react";
import Header from "../components/Header";
import Folder from "../components/Folder";
import Dock from "../components/Dock";
import ContactFile from "../components/ContactFile";

const Homepage = () => {
  const [isShowContactFile, setIsShowContactFile] = useState<boolean>(false);

  const handleShowFile = (): void => {
    setIsShowContactFile((prev) => !prev);
  };

  return (
    <main className="home-container">
      <Header />
      <div className="folder-container">
        <Folder />
      </div>
      <div className="dock">
        {isShowContactFile && <ContactFile handleShowFile={handleShowFile} />}
        <Dock handleShowFile={handleShowFile} />
      </div>
    </main>
  );
};

export default Homepage;
