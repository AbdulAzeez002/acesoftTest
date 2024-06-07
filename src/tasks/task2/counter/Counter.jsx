import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/slices/counterSlice";

const Counter = ({ name, value, id }) => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment({ id }));
  };

  const handleDecrement = () => {
    dispatch(decrement({ id }));
  };

  console.log(id, "id ");
  return (
    <div
      style={{
        borderStyle: "solid",
        display: "flex",
        justifyContent: "space-between",
        widht: "200px",
        gap: "10px",
        margin: "20px",
        borderStyle: "solid",
        borderRadius: "5px",
        padding: "5px",
      }}
    >
      <div>{name}</div>
      <div>
        <span
          style={{ marginLeft: "15px", cursor: "pointer"  }}
          onClick={handleIncrement}
        >
          +
        </span>
        <span style={{ marginLeft: "15px" }}>{value}</span>
        <span
          style={{ marginLeft: "15px", cursor: "pointer" }}
          onClick={handleDecrement}
        >
          -
        </span>
      </div>
    </div>
  );
};

export default memo(Counter);
