import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);
  const [warning, setWarning] = useState<boolean>(false)

  const increaseCount = () => {
      setCount(prev => prev + 1)
      setWarning(false);
  }

  const decreaseCount = () => {
      if(count > 0) setCount(prev => prev - 1)
      else setWarning(true);
  }
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "567px"}}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "0.5px solid black", margin: "100px", width: "100%", height: "400px", borderRadius: "4px"}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", border: "0.5px dashed black", borderRadius: "4px", width: "80px", marginBottom: "30px"}}>
          <h2>{count}</h2>
        </div>
        <div style={{display: "fixed", gap: "10px", marginBottom: "20px"}}>
          <button onClick={decreaseCount} style={{border: "none", padding: "4px", background: "red", color: "white", borderRadius: "4px", width: "80px"}}>-</button>
          <button onClick={increaseCount} style={{border: "none", padding: "4px", background: "green", color: "white", borderRadius: "4px", width: "80px"}}>+</button>
          <button onClick={() => setCount(0)} style={{border: "none", padding: "4px", background: "yellow", color: "black", borderRadius: "4px", width: "80px"}}>Reset</button>
        </div>
        {warning && 
        <div style={{border: "0.1px solid red", color: "red", borderRadius: "4px", padding: "4px"}}>
          Please note that value can not be less then 0!!!
        </div>}
      </div>
    </div>
  )
}

export default App
