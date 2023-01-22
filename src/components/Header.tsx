import { Link } from "react-router-dom";

export default function Header() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getDay = new Date().getDay();
  const getMonth = new Date().getMonth();
  const getYear = new Date().getUTCFullYear().toString().slice(2, 4);
  const getHour = new Date().getHours();
  const getMinute = new Date().getMinutes();

  let date = new Date();
  let hours = date.getHours();
  let minutes: any = date.getMinutes();

  // Check whether AM or PM
  let newformat = hours >= 12 ? "PM" : "AM";

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return (
    <>
      <header className="header"></header>
      <div className="nav-container">
        <nav className="nav-left">
          <Link to="/" className="link">
            <img src="/assets/apple.svg" alt="apple" id="apple" />
          </Link>
          <Link to="/" className="link">
            Finder
          </Link>
          <Link to="/" className="link">
            File
          </Link>
          <Link to="/" className="link">
            Edit
          </Link>
          <Link to="/" className="link">
            View
          </Link>
          <Link to="/" className="link">
            Go
          </Link>
          <Link to="/" className="link">
            Window
          </Link>
          <Link to="/" className="link">
            Help
          </Link>
        </nav>
        <nav className="nav-right">
          <img src="/assets/battery.svg" alt="battery" id="battery" />
          <img src="/assets/switch.svg" alt="switch" id="switch" />
          <img src="/assets/search.svg" alt="search" id="search" />
          <img src="/assets/wifi.svg" alt="wifi" id="wifi" />
          <div className="date-left">
            <span>{days[getDay]}</span>
            <span>{months[getMonth]}</span>
            <span>{getYear}</span>
          </div>
          <div className="date-right">
            <span>
              {hours}:{minutes} {newformat}
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
