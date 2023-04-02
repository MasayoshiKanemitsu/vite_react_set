import React from "react";
import "./Header.scss";
import { Link, useNavigate, useParams } from "../../router";

const Header = () => {
  return (
    <>
      <header className='l-header'>
        <ul>
          <li>
            <Link to='/'>TOP</Link>
          </li>
          <li>
            <Link to='/sample'>Sample</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
