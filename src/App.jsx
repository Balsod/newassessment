import react from 'react'
import Useroutput from './Component/Useroutput'
import Userinput from './Component/Userinput'
import { useState } from 'react'
import "../src/App.css"

function App() {
  const [username, setUsername] = useState("olawunmi")
  function changeName (e){
    setUsername(e.target.value)

  }

  return(
    <div className='App'>
    
    <Useroutput username= "Olawunmi" address="Ikorodu" />
    <Useroutput username= {username} address="Igbogbo" />
    <Userinput change={changeName}  />
    </div>
  )
}

export default App