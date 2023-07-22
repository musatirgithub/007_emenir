import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuthCalls from "../hooks/useAuthCalls";
import { FaBars } from "react-icons/fa";
import logo from "../pics/logo3.jpg";
import Sidebar from "./Sidebar";
import { openSidebar } from "../features/incidentSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { isSidebarOpen } = useSelector((state) => state.incident);
  const { logout } = useAuthCalls();
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  if (currentUser) {
    return (
      <nav>
        <Sidebar
          className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}
        />
        <div className="flex justify-between bg-zinc-900 text-[#C19461] px-4 nav-container lg:px-10">
          <div className="logo ">
            <Link to="/">
              <img src={logo} alt="justice" className="cursor-pointer"/>
            </Link>
            <p>Merhaba {currentUser}</p>
          </div>

          <div className="nav-menu-container ">
            <FaBars
              className="block lg:hidden sidebar-icon text-[#C19461] hover:text-[#C09C72]"
              onClick={handleOpenSidebar}
            />
            <ul className="hidden lg:block lg:flex lg:gap-[0.9rem]">
              <li className="cursor-pointer hover:text-[#C09C72]">
                <Link to="/">Ana Sayfa</Link>
              </li>
              <li className="cursor-pointer hover:text-[#C09C72]">
                <Link to="/damage">Değer Kaybı Nedir</Link>
              </li>
              <li className="cursor-pointer hover:text-[#C09C72]">
                <Link to="/contact">İletişim</Link>
              </li>
              <li className="cursor-pointer hover:text-[#C09C72]">
                <Link to="/records">Kayıtlar</Link>
              </li>
              <li className="cursor-pointer hover:text-[#C09C72]">
                <Link to="/profile">Profilim</Link>
              </li>
              <li
                onClick={logout}
                className="cursor-pointer hover:text-[#C09C72]"
              >
                <Link to="/">Çıkış</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <div className="flex justify-between bg-zinc-900 text-[#C19461] px-4 nav-container lg:px-10">
      <div className="logo ">
        <img src={logo} alt="justice" className="cursor-pointer" />
        <p>Merhaba ziyaretçi</p>
      </div>
      <Sidebar className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"} />
      <div className="nav-menu-container ">
        <FaBars
          className="block lg:hidden sidebar-icon text-[#C19461] hover:text-[#C09C72]"
          onClick={handleOpenSidebar}
        />
        <ul className="hidden lg:block lg:flex lg:gap-[0.9rem]">
          <li className="cursor-pointer hover:text-[#C09C72]">
            <Link to="/">Ana Sayfa</Link>
          </li>
          <li className="cursor-pointer hover:text-[#C09C72]">
            <Link to="/damage">Değer Kaybı Nedir</Link>
          </li>
          <li className="cursor-pointer hover:text-[#C09C72]">
            <Link to="/contact">İletişim</Link>
          </li>

          <li className="cursor-pointer hover:text-[#C09C72]">
            <Link to="/login">Giriş</Link>
          </li>
          <li className="cursor-pointer hover:text-[#FFF]">
            <Link to="/register">Kayıt ol</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
