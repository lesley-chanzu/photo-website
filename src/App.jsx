import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import PhotographtCategories from "./components/PhotographtCategories";
import PhotoGrid from "./components/PhotoGrid";
import Video from "./components/Video";
import Contact  from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function Home() {
  return (
    <div className="min-h-screen bg-slate-800 text-white dark:bg-slate-800 dark:text-slate-100">
      <Video />
      <PhotoGrid />
      <PhotographtCategories />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  })
  return (
    <>
    {loading && <Loader />}
    {!loading && (
      <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/About" element={ <About />}/>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
    )}
    </>
  )
}

export default App;
