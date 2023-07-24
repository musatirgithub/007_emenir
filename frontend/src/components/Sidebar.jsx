import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../pics/logo3.jpg";
import useAuthCalls from "../hooks/useAuthCalls";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../features/incidentSlice";

const Sidebar = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { isSidebarOpen } = useSelector((state) => state.incident);
  const { logout } = useAuthCalls();
  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  const handleLogoutAndCloseSideBar = () => {
    logout();
    dispatch(closeSidebar());
  };
  if (currentUser) {
    return (
      <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header px-2 lg:px-8">
          <div className="sidebar-user">
            <img src={logo} className="logo" alt="logo" />
            {currentUser ? (
              <p>Merhaba {currentUser}</p>
            ) : (
              <p>Merhaba ziyaretçi</p>
            )}
          </div>
          <button
            className="close-btn"
            type="button"
            onClick={handleCloseSidebar}
          >
            <FaTimes onClick={handleCloseSidebar} />
          </button>
        </div>
        <ul className="links">
          <li>
            <Link to="/" onClick={handleCloseSidebar}>
              Anasayfa
            </Link>
          </li>
          <li>
            <Link to="/damage" onClick={handleCloseSidebar}>
              Değer Kaybı Nedir
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleCloseSidebar}>
            İletişim
            </Link>
          </li>
          <li>
            <Link to="/records" onClick={handleCloseSidebar}>
              Kayıtlar
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={handleCloseSidebar}>
              Profilim
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogoutAndCloseSideBar}>
              Çıkış
            </Link>
          </li>
        </ul>
      </aside>
    );
  }

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header px-8">
        <div className="sidebar-user">
          <img src={logo} className="logo" alt="logo" />
          {currentUser ? (
            <p>Merhaba {currentUser}</p>
          ) : (
            <p>Merhaba ziyaretçi</p>
          )}
        </div>
        <button
          className="close-btn"
          type="button"
          onClick={handleCloseSidebar}
        >
          <FaTimes onClick={handleCloseSidebar} />
        </button>
      </div>
      <ul className="links">
        <li>
          <Link to="/" onClick={handleCloseSidebar}>
            Anasayfa
          </Link>
        </li>
        <li>
          <Link to="/damage" onClick={handleCloseSidebar}>
            Deger Kaybi Nedir
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleCloseSidebar}>
            Iletisim
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={handleCloseSidebar}>
            Giris
          </Link>
        </li>
        <li>
          <Link to="/register" onClick={handleCloseSidebar}>
            Kayıt ol
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
