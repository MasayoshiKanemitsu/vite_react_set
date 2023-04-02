import React from "react";
import "./Base.scss";
import Header from "../../component/header/Header";

//全ページ共通のレイアウト
const Base = ({ children, pageId }) => {
  return (
    <>
      <div id={pageId} className='l-base'>
        <Header />

        {/* main content */}
        <main className='l-main'>{children}</main>
        {/* main content */}
      </div>
    </>
  );
};

export default Base;
