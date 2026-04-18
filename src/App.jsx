import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NeuralBackground from "./components/NeuralBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";

import Reviews from "./pages/Reviews";
import Testimonials from "./pages/Testimonials";


function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);
  });

  return (
    <Router>

      <NeuralBackground />
      <ScrollToTop />
      <Header  dark={dark} setDark={setDark} />
      <main className="relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/testimonials" element={<Testimonials />} />
          
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
