import { useState } from "react";
import Header from "../components/Header";
import Folder from "../components/Folder";
import Dock from "../components/Dock";
import ContactFile from "../components/ContactFile";
import ProjectFile from "../components/ProjectFile";

const Homepage = () => {
  const [isShowContactFile, setIsShowContactFile] = useState<boolean>(false);
  const [isShowProjectFile, setIsShowProjectFile] = useState<boolean>(false);

  const handleShowContactFile = (): void => {
    setIsShowContactFile((prev) => !prev);
  };

  const handleShowProjectFile = (): void => {
    setIsShowProjectFile((prev) => !prev);
  };

  return (
    <main className="home-container">
      <Header />
      <div className="folder-container">
        <Folder />
      </div>
      <div className="dock">
        {isShowContactFile && (
          <ContactFile handleShowFile={handleShowContactFile} />
        )}
        {isShowProjectFile && (
          <ProjectFile handleShowFile={handleShowProjectFile} />
        )}
        <Dock
          handleShowProjectFile={handleShowProjectFile}
          handleShowContactFile={handleShowContactFile}
        />
      </div>
    </main>
  );
};

export default Homepage;
