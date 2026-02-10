import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NeuralBackground from "./components/NeuralBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);
  });

  return (
    <Router>
      <Header dark={dark} setDark={setDark} />
      <main className="pt-22 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
