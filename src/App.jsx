import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import PhotographtCategories from "./components/PhotographtCategories";
import PhotoGrid from "./components/PhotoGrid";
import Video from "./components/Video";
import Contact  from "./components/Contact";

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
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App;
