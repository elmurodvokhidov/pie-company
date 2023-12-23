import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/home/Home";
import RootLayout from "./RootLayouts/layout";
import About from "./pages/about page/about";
import GetTouch from "./pages/getInTouch/GetTouch";
import Provenanse from "./pages/provenanse/provenanse";
import YummyPage from "./pages/yummyPage/yummyPage";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="getTouch" element={<GetTouch />} />
      <Route path="provenanse" element={<Provenanse />} />
      <Route path="yummypage" element={<YummyPage />} />
    </Route>
  ));

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
