import React, { useState } from 'react'

export const QueryByRole = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSubmit =()=>{
        setIsLoggedIn(true)
    }
  return (
    <div>
        QueryByRole
        {isLoggedIn ? <button>Start Login</button>:
        <button onClick={handleSubmit}>Login</button>}
    </div>
  )
}
