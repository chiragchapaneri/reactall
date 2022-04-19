//always write inside  the components or function
//
import React from "react";
import { useState } from "react/cjs/react.development";
const Rulebook = () => {
  const { myname, setmyname } = useState("chirag");

  return (
    <div>
      <h1>{myname}</h1>
    </div>
  );
};
export default Rulebook;
