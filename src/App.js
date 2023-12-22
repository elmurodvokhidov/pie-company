import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import YummyPage from "./pages/yummyPage/yummyPage";
import GetTouch from "./pages/getInTouch/GetTouch";
import AbouT from "./pages/about page/about";
import ProvenansE from "./pages/provenanse/provenanse";

function App() {
  return(
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
  )
}
export default App;
