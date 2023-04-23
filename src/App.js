import React from "react";
import { useState, useEffect } from "react";

export default () => {
  const [val, setVal] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setVal("Hello World!");
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h2>Welcome to My Website</h2>
      {val} {count}
    </>
  );
};
