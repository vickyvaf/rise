import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<string>("");
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [format, setFormat] = useState<string>("");
  const [refreshTime, setRefreshTime] = useState<boolean>(false);

  const days: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  setInterval(() => {
    setRefreshTime((prev) => !prev);
  }, 5000);

  useEffect(() => {
    const getDay = new Date().getDay();
    setDay(getDay);
    const getMonth = new Date().getMonth();
    setMonth(getMonth);
    const getYear = new Date().getFullYear().toString().slice(2, 4);
    setYear(getYear);

    let getHour = new Date().getHours();
    let newFormat = getHour >= 12 ? "PM" : "AM";
    setFormat(newFormat);

    getHour = getHour % 12;
    getHour = getHour ? getHour : 12;
    setHour(getHour);
    
    let getMinute: any = new Date().getMinutes();
    getMinute = getMinute < 10 ? "0" + getMinute : getMinute;
    setMinute(getMinute);
  }, [refreshTime]);

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
            <span>{days[day]}</span>
            <span>{months[month]}</span>
            <span>{year}</span>
          </div>
          <div className="date-right">
            <span>
              {hour}:{minute} {format}
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header
