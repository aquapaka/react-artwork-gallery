import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Manage from "./pages/Manage";
import Header from "./components/app/Header";
import bgImage from "./assets/images/cozy-room.jpg";

function App() {
  return (
    <div id="App" className="w-full h-screen">
      <img className="fixed h-full object-cover -z-10 blur brightness-50" src={bgImage} alt="bg" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </div>
  );
}

export default App;
