import "./OutputColor.css";

function OutputColor(props) {

    function hexToRgb(hex) {
        hex = hex.replace("#", "");      
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        return "rgb(" + r + ", " + g + ", " + b + ")";
      }
      
    return (
        <div className="OutputColor" style={
            {
                background: props.color
            }
        }>{/[0-9A-Fa-f]{6}/g.test(props.color) ? hexToRgb(props.color) : "error"}</div>            
    )
}

export default OutputColor;