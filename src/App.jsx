import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onClickPlus = () => {
    setCount(count +1)
  }
  const onClickMinus = () => {
    setCount(count -1)
  }

  return (
    <>
      <div>
        <h2>Counter</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus}>Minus</button>
        <button onClick={onClickPlus}>Plus</button>
     </div>
    </>
  )
}

export default App
