import React, { useEffect, useState } from "react";
import useTheme from "../../hooks/useTheme";

const Task2 = () => {
  const [searchInput, setSearchInput] = useState("firstInput");
  const [initial, setInitial] = useState(true);

  const fetchApi = (value) => {
    console.log(value, "searchinput");
  };

  const handleChange = (value) => {
    setSearchInput(value);
  };

  const { themes, onToggleTheme } = useTheme();

  //   useEffect(() => {
  //     // let interval;
  //     if (initial) {
  //       setInitial(false);
  //     }
  //     if (!initial) {
  //       setInterval(() => setCounter((prev) => prev + 1), 3000);
  //     }
  //     // setCounter(0);

  //     // return clearInterval(interval);
  //   }, [searchInput]);

  return (
    <div
      style={{
        backgroundColor: themes === "dark" ? "black" : "white",
        height: "400px",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="search text"
          value={searchInput}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onToggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default Task2;
