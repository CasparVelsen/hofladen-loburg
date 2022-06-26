import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AssortmentPage from "./pages/AssortmentPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/Navigation/NavBar";

function App() {
  return (
    <>
      <header>
        <div>Logo</div>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assortment" element={<AssortmentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
