import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div className="flex justify-between">
      <div className="flex gap-[1rem]">
        <img
          src="https://i.cbc.ca/1.4262961.1503689323!/fileImage/httpImage/lady-justice.jpg"
          alt="justice"
          class="object-cover h-24 w-48"
        />
        <p>Emenir Hukuk</p>
        {currentUser ? <p>Merhaba ${currentUser}</p> : <p>Merhaba ziyaretçi</p>}
      </div>
      <ul className="hidden lg:block lg:flex gap-[1rem]">
        <li>Home</li>
        <li>About</li>
        <li>Değer Kaybı</li>
        <li>İletişim</li>

        <li>
          <Link to="/login">Giriş</Link>
        </li>
        <li>Kayıt</li>
      </ul>
    </div>
  );
};

export default Navbar;
