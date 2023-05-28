import "./InputColor.css";
import { useState } from "react";

function InputColor(props) {
    const [input, setInput] = useState('');
    const changeColorHandler = (e) => {
        setInput(e.target.value);
        if (input.length === 6) {
            props.onSaveColor(e.target.value);
        }
    }
    return (
        <div className="InputColor">
            <input type="text" maxLength="7" onChange={changeColorHandler} />
        </div>
    )
}

export default InputColor;