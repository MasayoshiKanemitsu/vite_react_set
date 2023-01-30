import React from "react";
import "./Section.scss";

const Section = ({ children, container = true, rootClass = "", containerClass = "" }) => {
  //コンポーネントクラス定義
  const class_section = "l-section";
  const class_container = "l-section__container";

  if (container) {
    return (
      <>
        <section className={rootClass == "" ? class_section : class_section + " " + rootClass}>
          <div className={containerClass == "" ? class_container : class_container + " " + containerClass}>
            {children}
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className={class_section}>{children}</section>
      </>
    );
  }
};

export default Section;
