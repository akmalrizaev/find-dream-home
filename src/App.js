import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Forgot-Password" element={<ForgotPassword />} />
         <Route path="/Offers" element={<Offers />} />
         <Route path="/Profile" element={<Profile />} />
         <Route path="/Sign-In" element={<SignIn />} />
         <Route path="/Sign-Up" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
