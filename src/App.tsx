import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(() => {
    const savedCount = localStorage.getItem("count");
    const parsedSavedCount = Number(savedCount)
    //console.log(parsedSavedCount);
    return (parsedSavedCount > 0 || parsedSavedCount != null )? parsedSavedCount : 0; 
  });
  const [warning, setWarning] = useState<boolean>(false);
  const [stepSize, setStepSize] = useState<number>(1);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  } ,[count]);
  //const cnt = localStorage.getItem("count")
  //console.log(cnt);
  const increaseCount = () => {
      setCount(prev => prev + stepSize)
      setWarning(false);
  }

  const decreaseCount = () => {
      if(count > 0 && count-stepSize >= 0) setCount(prev => prev - stepSize)
      else setWarning(true);
  }

  const handleStepSize = (event) => {
      const inputValue = event?.target.value;
      setStepSize(Number(inputValue));
  }
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "567px"}}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "0.5px solid black", margin: "100px", width: "100%", height: "400px", borderRadius: "4px"}}>
        <div style={{marginBottom: "30px", display: "flex", gap: "10px", font: "bold"}}>
          <label htmlFor="different">Step-size Input:</label>
          <input style={{border: "0.3px solid black", borderRadius: "4px", padding: "4px"}} value={stepSize} onChange={(event) => handleStepSize(event)}/>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", border: "0.5px dashed black", borderRadius: "4px", width: "80px", marginBottom: "30px"}}>
          <h2>{count}</h2>
        </div>
        <div style={{display: "flex", gap: "30px", marginBottom: "20px"}}>
          <button onClick={decreaseCount} style={{border: "none", padding: "4px", background: "red", color: "white", borderRadius: "4px", width: "80px"}}>-</button>
          <button onClick={increaseCount} style={{border: "none", padding: "4px", background: "green", color: "white", borderRadius: "4px", width: "80px"}}>+</button>
          <button onClick={() => setCount(0)} style={{border: "none", padding: "4px", background: "yellow", color: "black", borderRadius: "4px", width: "80px"}}>Reset</button>
        </div>
        {warning && 
        <div style={{border: "0.1px solid red", color: "red", borderRadius: "4px", padding: "4px"}}>
          Please note that for step size {stepSize} value can not be less then {count}!!!
        </div>}
      </div>
    </div>
  )
}

export default App
