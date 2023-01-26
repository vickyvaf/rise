import { useState } from "react";
import Header from "../components/Header";
import Folder from "../components/Folder";
import Dock from "../components/Dock";
import ContactFile from "../components/ContactFile";
import ProjectFile from "../components/ProjectFile";
import ProfileFile from "../components/ProfileFile";

const Homepage = () => {
  const [isShowContactFile, setIsShowContactFile] = useState<boolean>(false);
  const [isShowProjectFile, setIsShowProjectFile] = useState<boolean>(false);
  const [isShowProfileFile, setIsShowProfileFile] = useState<boolean>(false);

  const handleShowProfileFile = (): void => {
    setIsShowProfileFile((prev) => !prev);
    setIsShowProjectFile(false);
    setIsShowContactFile(false);
  };

  const handleShowContactFile = (): void => {
    setIsShowContactFile((prev) => !prev);
    setIsShowProjectFile(false);
    setIsShowProfileFile(false);
  };

  const handleShowProjectFile = (): void => {
    setIsShowProjectFile((prev) => !prev);
    setIsShowContactFile(false);
    setIsShowProfileFile(false);
  };

  return (
    <main className="home-container">
      <Header />
      <div className="folder-container">
        <Folder />
      </div>
      <div className="dock">
        {isShowProfileFile && (
          <ProfileFile handleShowFile={handleShowProfileFile} />
        )}
        {isShowContactFile && (
          <ContactFile handleShowFile={handleShowContactFile} />
        )}
        {isShowProjectFile && (
          <ProjectFile handleShowFile={handleShowProjectFile} />
        )}
        <Dock
          handleShowProfileFile={handleShowProfileFile}
          handleShowProjectFile={handleShowProjectFile}
          handleShowContactFile={handleShowContactFile}
        />
      </div>
    </main>
  );
};

export default Homepage;
