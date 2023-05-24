import './App.css';
import InputColor from './InputColor';
import OutputColor from './OutputColor';
import { useState } from 'react';

function App() {
  
  const app = document.querySelector('.App');    
  const [newBgColor, setNewBgColor] = useState('#f0f0f0');
  const [newBgDiv, setNewBgDiv] = useState(''); // не сообразил как делать фон под вывод значения цвета чуть отличный от введённого цвета пока что
  const [color, setColor] = useState('#f0f0f0');
  const inputColorHandler = (inputColor) => {
    setColor(inputColor);
    if (app && /[0-9A-Fa-f]{6}/g.test(inputColor)) {
      setNewBgColor(app.style.background);
      console.log(newBgColor);
    } else {
      setNewBgColor('error');
    }
  }
  return (
    <div className="App" style={
      {
        background: color
      }
    }>
      <div className='ColorEnter' >
        <InputColor onSaveColor={inputColorHandler} />
        <OutputColor text={newBgColor} divColorBg={newBgDiv}/>
      </div>
    </div>
  );
}

export default App;
