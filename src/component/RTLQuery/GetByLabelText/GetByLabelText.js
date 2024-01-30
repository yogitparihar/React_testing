import React from 'react'

export const GetByLabelText = () => {
  return (
    <div>
        <label htmlFor='user_name'>User name</label>
        <input type='text' id='user_name'/>
        <br/>
        <label htmlFor='check_box'>CheckBox</label>
        <input type='checkbox' id='check_box' defaultChecked={true}/>
    </div>
  )
}
