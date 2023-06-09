import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuthCalls from "../hooks/useAuthCalls";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { logout } = useAuthCalls();
  return (
    <div className="flex justify-between">
      <div className="flex gap-[1rem]">
        <img
          src="https://i.cbc.ca/1.4262961.1503689323!/fileImage/httpImage/lady-justice.jpg"
          alt="justice"
          class="object-cover h-24 w-48"
        />
        <p>Emenir Hukuk</p>
        {currentUser ? <p>Merhaba {currentUser}</p> : <p>Merhaba ziyaretçi</p>}
      </div>
      <ul className="hidden lg:block lg:flex gap-[1rem]">
        <li>Ana Sayfa</li>
        <li>Hakkımızda</li>
        <li>Değer Kaybı Nedir</li>
        <li>İletişim</li>
        {currentUser ? (
          <li>
            <Link to="/records">Kayıtlar</Link>
          </li>
        ) : null}

        {!currentUser ? (
          <ul>
            <li>
              <Link to="/login">Giriş</Link>
            </li>
            <li>
              <Link to="/register">Kayıt</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/profile">Profilim</Link>
            </li>
            <li onClick={logout} className="cursor-pointer">
              <Link to="/">Çıkış</Link>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
