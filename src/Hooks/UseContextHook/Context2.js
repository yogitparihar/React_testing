import React from 'react'
import { UserContext } from '../../../App'

export const Context2 = () => {
  return (
     <UserContext.Consumer>
        {user=>{
            return(<div>Name:- {user}</div>)
        }}
     </UserContext.Consumer>
  )
}
