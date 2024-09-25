import { useState } from 'react'
import HeaderComponent from "./HeaderComponent";
import Color from './Colors';

function App() {

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <>
    <HeaderComponent selectedColor={selectedColor}/>


    <main id="colors-list">
      <Color color="red" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      <Color color="orange" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      <Color color="yellow" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      
      <Color color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      <Color color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      <Color color="indigo" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      
      <Color color="violet" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      <Color color="black" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      <Color color="white" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
    </main>
    </>
  )
}

export default App
