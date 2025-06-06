import NavBar from "./components/NavBar";
import PhotographtCategories from "./components/PhotographtCategories";
import Video from "./components/Video";

function App() {
  return (
    <div className="min-h-screen bg-slate-800 text-white dark:bg-slate-800 dark:text-slate-100">
      <NavBar />
      <Video />
      <PhotographtCategories />
    </div>
  );
}

export default App;
