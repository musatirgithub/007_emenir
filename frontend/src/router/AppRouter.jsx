import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Damage from "../pages/Damage";
import AccidentRecords from "../pages/AccidentRecords";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="damage" element={<Damage />} />
        <Route path="records" element={<PrivateRouter />}>
          <Route path="" element={<AccidentRecords />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
