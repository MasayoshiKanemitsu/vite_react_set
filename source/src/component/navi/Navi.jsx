import React from "react";
import { Link, useNavigate, useParams } from "../../router";
import gnavi from "../../global/js/navi/gnavi";
import "./Navi.scss";

const Navi = () => {
  return (
    <>
      <nav className='l-nav'>
        <ul className='l-nav__list'>
          {gnavi.map((item, key) => (
            <li className='l-nav__item' key={key}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navi;
