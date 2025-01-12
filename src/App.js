import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";
import LogIn from "./pages/logIn/LogIn";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Routes>
        {/* تغییر مسیر صفحه اصلی از /Home به / */}
        <Route path="/" element={<Home />} /> {/* مسیر اصلی به / */}
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
