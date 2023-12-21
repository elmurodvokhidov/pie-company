import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";

import Navbar from "./navbar/navbar";

import Footer from "./footer/Footer";

import YummyPage from "./pages/yummyPage/YummyPage";

import GetTouch from "./pages/getInTouch/GetTouch";
import AbouT from "./pages/about page/AbouT";
import ProvenansE from "./pages/provenanse/ProvenansE";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/YummyPage" element={<YummyPage />}></Route>
        <Route path="/AbouT" element={<AbouT />}></Route>
        <Route path="/GetTouch" element={<GetTouch />}></Route>
        <Route path="/ProvenansE" element={<ProvenansE />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
