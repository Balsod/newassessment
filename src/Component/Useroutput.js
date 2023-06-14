import React from 'react'

function Useroutput(props) {
    return (
        <div className='body'>
       <p>{props.username}</p>
       <p>{props.address}</p>
        
        </div>
      )   
}



export default Useroutput