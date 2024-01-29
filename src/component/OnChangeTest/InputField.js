import React, { useState } from 'react'

export const InputField = () => {
    const [data, setData] = useState("");
  return (
    <div className="App">
        <p>Enter the value of input field</p>
        <input type='text'disabled value={data} onChange={(e)=>setData(e.target.value)}/>
    </div>
  )
}
