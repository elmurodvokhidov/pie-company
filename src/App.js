import { Route, Router, RouterProvider, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import about from './pages/about page/about'
import Navbar from './navbar/navbar'
import yummyPage from './pages/yummyPage/yummyPage'
import provenanse from './pages/provenanse/provenanse'
import getInTouch from './pages/getInTouch/getInTouch'
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<about />} />
        <Route path="yummyPage" element={<yummyPage />}>
          <Route path="provenanse" element={<provenanse />} />
          <Route path="getInTouch" element={<getInTouch />} />
        </Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
