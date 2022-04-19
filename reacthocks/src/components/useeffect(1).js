import React, { useState, useEffect } from "react";

export function UseEffect1() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {
    if (count >= 1) {
      document.title = `chats cout(${count})`;
    } else {
      document.title = `chats`;
    }
  }, [count]);
  useEffect(() => {
    console.log("run only once");
  }, []);
  console.log("done");

  return (
    <div>
      <h1> {count} </h1>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        clcik
      </button>
    </div>
  );
}
