import React, { useContext } from "react";
import { UserContext } from "../../../App";
export const Context3 = () => {
  const name = useContext(UserContext);
  return <div>Name:- {name}</div>;
};



