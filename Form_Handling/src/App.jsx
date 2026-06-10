import { useState } from 'react'

function App() {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    function handleSubmit(e){
      e.preventDefault();
      console.log({
        name,email
      })
    }
  return (
    <>
       <form>
      
          <input 
           type="text"
           placeholder="enter name"
           value={name}
           onChange={(e)=>(setName(e.target.value))}>

           </input>
          <input type="email"
            placeholder="enter email"
            value={email}
            onChange={(e)=>(setEmail(e.target.value))}>

           </input>
          
          <button 
           onClick={handleSubmit}
          >submmit</button>
       </form>
    </>
  )
}

export default App
