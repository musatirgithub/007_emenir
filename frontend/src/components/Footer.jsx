import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="text-center bg-[#18181b] text-[#C19461] leading-[3rem]">
        <span>&#169;</span> Copyright {year} Emenir Hukuk Bürosu
      </p>
    </footer>
  );
};

export default Footer;
