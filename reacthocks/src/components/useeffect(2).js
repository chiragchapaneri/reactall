import react, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
export function UseEffect2() {
  const [widthcount, setwidht] = useState(window.screen.width);
  const actualwidth = () => {
    console.log(window.innerWidth);
    setwidht(window.innerWidth);
  };
  useEffect(() => {
    console.log("add event");
    window.addEventListener("resize", actualwidth);
    return () => {
      console.log("remve");
      window.removeEventListener("resize", actualwidth);
    };
  });

  return (
    <>
      <h1>the acctual size of the window</h1>
      {widthcount}
    </>
  );
}
