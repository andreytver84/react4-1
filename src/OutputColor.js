import "./OutputColor.css";

function OutputColor(props) {
    return (
        <div className="OutputColor" style={
            {
                background: props.divColorBg
            }
        }>{props.text}</div>            
    )
}

export default OutputColor;