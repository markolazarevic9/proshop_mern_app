import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProductScreen from './screens/ProductSreen'
export default function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
            <Route element={<HomeScreen/>} path="/" exact />
            {/* <Route element={<AboutUs />} path="/about-us" exact />
            <Route element={<Contact />} path="/contact" exact /> */}
            <Route element={<ProductScreen />} path="/products/:id" exact />
            {/* <Route element={<NotFound />} path="*" /> */}
          </Routes>
     </BrowserRouter>
      </>
  );
}

