import React from "react";
import { data } from "../../data/data";

export const GetAllByRole = () => {
  return (
    <div>
      <ul>
        {data.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
