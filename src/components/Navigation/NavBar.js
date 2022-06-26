import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
