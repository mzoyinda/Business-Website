import React from "react";
import Header from "./Header";
import Partners from "./Partners";
import Team from "./Team";
import Values from "./Values";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Values />
        <Team />
        <Partners />
      </main>
    </>
  );
};

export default index;
