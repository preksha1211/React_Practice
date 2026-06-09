import { useState } from 'react'


function App() {
  const [isVisible, setVisible] = useState(false);

  return (
    <> 
     
     <input type={isVisible?"text":"password"} placeholder="Enter Password"></input>
     <button onClick={()=>setVisible(!isVisible)}>{ isVisible ? "Hide" : "Show" }</button>
      
    </>
  )
}

export default App
