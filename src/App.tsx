import "./App.css";
import Footer from "./assets/components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar";
import HomePage from "./assets/Pages/home";
import Contact from "./assets/Pages/contact";
import CompanyProfile from "./assets/Pages/company";
import Fabrication from "./assets/Pages/fabrication";
import Cutting from "./assets/Pages/cutting";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        laser-cutting
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<CompanyProfile />} />
        <Route path="/fabrication" element={<Fabrication />} />
        <Route path="/laser-cutting" element={<Cutting />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
