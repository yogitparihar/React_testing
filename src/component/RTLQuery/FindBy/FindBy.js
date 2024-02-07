import React, { useEffect, useState } from "react";

export const FindBy = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
        setIsLoggedIn(true)
    },1000)
  },[])

  const handleSubmit = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      QueryByRole
      {isLoggedIn ? (
        <button>Start Login</button>
      ) : (
        <button onClick={handleSubmit}>Login</button>
      )}
    </div>
  );
};
