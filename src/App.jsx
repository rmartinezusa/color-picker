import { useState } from 'react'

function Color({color, selectedColor,setSelectedColor}){
  const getSelectedColorClass = (color === selectedColor) ? `${color} selected` : color;
  return <div className={getSelectedColorClass} onClick={() => setSelectedColor(color)}></div>;
} 

function App() {

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <>
    <header>
      <h2>Currently selected: <span className={selectedColor}>{selectedColor}</span></h2>
    </header>
    <main>
      <div id="colors-list">
        <Color color="red" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="orange" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="yellow" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        
        <Color color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="indigo" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>

        <Color color="violet" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>

        <Color color="black" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        <Color color="white" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      </div>
    </main>
    </>
  )
}

export default App
