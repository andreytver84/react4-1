import './App.css';
import InputColor from './InputColor';
import OutputColor from './OutputColor';
import { useState } from 'react';

function App() {       
  
  const [color, setColor] = useState('#f0f0f0');
  const inputColorHandler = (inputColor) => {
    setColor(inputColor); 
  }

  return (
    <div className="App" style={
      {
        background: color
      }
    }>
      <div className='ColorEnter' >
        <InputColor onSaveColor={inputColorHandler} />
        <OutputColor color={color}/>
      </div>
    </div>
  );
}

export default App;
