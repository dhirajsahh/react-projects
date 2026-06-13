import { useState } from 'react'
import Index from './components/accrediation'
import RandomColor from './components/randomColor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <Index /> */}
      <RandomColor />

    </>
  )
}

export default App
