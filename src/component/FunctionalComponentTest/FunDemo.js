import React, { useState } from "react";
export const FunDemo = () => {
  const [data, setData] = useState("");
  const handleClick = () => {
    setData("hello");
  };
  return (
    <div role="form">
      <button data-testid="btn1" onClick={handleClick}>Click test</button>
      <p>{data}</p>
      <button>Click 1</button>
      <button>Click 2</button>
      <label htmlFor="input1">UserName</label>
      <input type="text" id="input1"/>
      <label htmlFor="input2">Age</label>
      <input type="text" id="input2"/>
      <div>
        <button>submit</button>
        <button>ok</button>
        <button>submit</button>
      </div>
      <div>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
      </div>
    </div>
  );
};
