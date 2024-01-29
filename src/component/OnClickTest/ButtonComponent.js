import React, { useState } from 'react'

export const ButtonComponent = () => {
    const [data,setData] = useState("")
  return (
    <div className='App'>
        <p>{data}</p>
        <button disabled onClick={()=>setData("Testing")}>Click</button>
    </div>
  )
}
