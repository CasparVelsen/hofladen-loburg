import "./Hamburger.css";

export default function Hamburger({ toggleMenu, active }) {
  console.log(active);
  return (
    <div className="burger" onClick={toggleMenu}>
      <div className={`${active ? "bar1" : ""} `}></div>
      <div className={`${active ? "bar2" : ""} `}></div>
      <div className={`${active ? "bar3" : ""} `}></div>
    </div>
  );
}
