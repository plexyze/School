import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [expressText,setExpressText] = useState("...")

  const getExpress=async()=>{
    const response = await fetch("http://192.168.0.116:8000/test");
    if (response.ok) { 
      let text = await response.text();
      setExpressText(text)
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }


  return (
    <div className="App">
      <button onClick={getExpress}>Прибавить</button>
     express: {expressText}
    </div>
  );
}

export default App;
