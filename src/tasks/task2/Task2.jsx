import React, { useEffect, useState } from "react";
import Counter from "./counter/Counter";
import SumCard from "./sum-card/SumCard";
import ResetButton from "./reset-button/ResetButton";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/slices/counterSlice";

const Task2 = () => {
  const data = useSelector((state) => state.counter.counters);
  const [showTitle, setShowTitle] = useState(false);

  const dispatch = useDispatch();

  const getSum = () => {
    let sum = 0;

    data?.forEach((counter) => {
      sum = sum + counter.value;
    });
    return sum;
  };

  const sum = getSum();

  const handleReset = () => {
    dispatch(reset());
  };

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 3000);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "400px", borderStyle: "solid" }}>
        {showTitle && <h4 style={{ textAlign: "center" }}>Page Title</h4>}

        {data?.map((counter) => (
          <div key={counter?.id} style={{ margin: "4px" }}>
            <Counter
              name={counter.name}
              value={counter.value}
              id={counter.id}
            />
            {counter.value == 10 && (
              <p style={{ color: "red" }}>
                Counter {counter.name} has reached maximum value
              </p>
            )}
          </div>
        ))}

        <ResetButton handleReset={handleReset} />
        <SumCard sum={sum} />
      </div>
    </div>
  );
};

export default Task2;
