import { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState("")
  useEffect(() => {
  console.log("Name hai:", name)
}, [])

  return (
    <>
      <input 
        placeholder="naam likho"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  )
}

export default App