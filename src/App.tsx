import "./App.css";
import Footer from "./assets/components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar";
import HomePage from "./assets/Pages/home";
import Contact from "./assets/Pages/contact";
import CompanyProfile from "./assets/Pages/company";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
