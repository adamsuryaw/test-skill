import React from "react";
import logo from './logo.svg';
import './App.css';
import kotak from './kotak'
function App() {

  const [long, setLong] = React.useState("")
  const [color, setColor] = React.useState("")
  const [condition, setCondition] = React.useState("")
  const [show, setShow] = React.useState(false)

  const handleSubmit = () => {
    setShow(true)
    console.log(long, color, condition, show)
  }
  const kotak = () => {
    let result = "";
    for (let i = 1; i <= long; i++) {
      result += <div className="square1"></div>;
      
    }
    return result;
  }
  


  return (
    <div className="App">
      <h1>Masukkan data: </h1>
      <input type="text" value={long} onChange={(e) => setLong(e.target.value)} className="input"/>
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="input"/>
      <input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} className="input"/>
      <button type="submit" onClick={handleSubmit} >Submit</button>
      {show == true ?
        kotak()
        : 
        null
      }
    </div>
  );
}

export default App;
