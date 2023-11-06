import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import bgImage from "./assets/images/endless-constellation.svg";
import Header from "./components/app/Header";
import Add from "./pages/Add";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Manage from "./pages/Manage";

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div id="App" className="w-full h-screen">
      {/* <img className="fixed h-full object-cover -z-10 blur brightness-50" src={bgImage} alt="bg" /> */}
      <img className="fixed h-full w-full object-cover -z-10 blur" src={bgImage} alt='background' />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/manage" element={isLogin ? <Manage /> : <Navigate to='/login' replace />} />
        <Route path="/manage/add" element={isLogin ? <Add /> : <Navigate to='/login' replace />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
