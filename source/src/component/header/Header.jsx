import React from "react";
import Navi from "../navi/Navi";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className='l-header'>
        <Navi />
      </header>
    </>
  );
};

export default Header;
