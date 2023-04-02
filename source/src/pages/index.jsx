import React from "react";
import Base from "../layout/base/Base";

//Page Status
const pageId = "top";

const Home = () => {
  return (
    <>
      <Base pageId={pageId}>
        <p>Hello React.</p>
      </Base>
    </>
  );
};

export default Home;
