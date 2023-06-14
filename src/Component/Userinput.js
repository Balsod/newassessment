import React from 'react'

function Userinput(props)  {
    return (
    <div>
  <input type="text" name='' id='' onChange={props.change} value={props.name}></input>
    </div>
  )
}


export default Userinput