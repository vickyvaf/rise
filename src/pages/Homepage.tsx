import Dock from "../components/Dock";
import Folder from "../components/Folder";
import Header from "../components/Header";

export default function Homepage() {
  return (
    <main className="home-container">
      <Header />
      <div className="folder-container">
        <Folder />
      </div>
      <div className="dock">
        <Dock />
      </div>
    </main>
  );
}
