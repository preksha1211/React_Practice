import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <textarea row="5" col="30" onChange={(e)=>setCount(e.target.value.length)}></textarea>
      <h1>{count}</h1>
    </>
  )
}

export default App
