import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Favourites from "./components/pages/favourite";
import Details from "./components/pages/details";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
