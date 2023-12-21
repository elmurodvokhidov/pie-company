import { Route, Router, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import about from './pages/about page/about';
import getInTouch from './pages/getInTouch/getInTouch'
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import provenanse from './pages/provenanse/provenanse'
import yummyPage from './pages/yummyPage/yummyPage'

function App() {
  return (
    <>
      const router = createBrowserRouter(createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="aboutPage" element={<about />} />
        <Route path="likes" element={<getInTouch />} />
        <Route path="basket" element={<provenanse />} />
        <Route path="profile" element={<yummyPage/>} />
      </Route>
      )); return (
      <div className="App">
        <RouterProvider router={Router} />
      </div>
      );
    </>
  );
}

export default App;
