import React, { useState } from "react";

const Task1 = () => {
  const [value, setValue] = useState("");
  const [inputs, setInputs] = useState([]);
  
  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    const array = [];
    for (let i = 1; i <= value; i++) {
      array.push({ id: i, value: "" });
    }

    setInputs(array);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log(inputs, "inputss");
  };

  const handleChange = (value, id) => {
    const mappedInputs = inputs?.map((input) => {
      if (input.id === id) {
        input.value = value;
      }
      return input;
    });

    setInputs(mappedInputs);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div>
          <h3>Dynamic Inputs</h3>
          <form onSubmit={handleSubmit1}>
            <div>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Generate Form</button>
            </div>
          </form>
        </div>

        {inputs?.length > 0 && (
          <div>
            <div>
              <form onSubmit={handleSubmit2}>
                {inputs?.map((input) => (
                  <div key={input.id}>
                    <div>
                      <label>Input {input.id}</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        value={input.value}
                        onChange={(e) => handleChange(e.target.value, input.id)}
                      />
                    </div>
                  </div>
                ))}
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task1;
