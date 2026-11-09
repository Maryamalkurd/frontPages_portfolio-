import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { WhatIBring } from "./components/WhatIBring";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/pages/ProjectDetail";

const Home = () => {
  const { hash } = useLocation();

  // Scroll to a section when arriving from another page (e.g. "/#projects")
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      }, 50);
    }
  }, [hash]);

  return (
    <>
    <Banner />
   // <About />
   <Skills />
   <Experience />
   <Projects />
   <WhatIBring />
   <Contact />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
