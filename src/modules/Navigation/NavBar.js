import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="nav">
      <div>Logo</div>
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
