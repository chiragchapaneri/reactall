import React from "react";
import { useState } from "react/cjs/react.development";

const UpdateState = () => {
  const [myobject, setMyobject] = useState({ name: "chiar", age: 23 });
  const changeObject = () => {
    setMyobject({ ...myobject, age: "ajay" });
  };

  return (
    <h1>
      hi {myobject.name} {myobject.age}
      <br />
      <button onClick={changeObject}>update</button>
    </h1>
  );
};
export default UpdateState;
