import { Homepage } from "./pages/Homepage"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { MenuPage } from "./pages/menuPage";
import { CartPage } from "./pages/cartpage";
import { ContactUsPage } from "./pages/contactuspage";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contactus" element={<ContactUsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
