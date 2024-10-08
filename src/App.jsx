import { Homepage } from "./pages/Homepage"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { MenuPage } from "./pages/menuPage";
import { CartPage } from "./pages/cartpage";
import { ContactUsPage } from "./pages/contactuspage";
import { SignupPage } from "./pages/signup";
import { SigninPage } from "./pages/signinpage";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
