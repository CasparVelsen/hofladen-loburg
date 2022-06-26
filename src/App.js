import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AssortmentPage from "./pages/AssortmentPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./modules/Navigation/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
