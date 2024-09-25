function Color(props){
    const {color, selectedColor, setSelectedColor} = props;
    if ("black" === selectedColor) {
        return <div className={(color === selectedColor) ? `${color} selected-black-only` : color} onClick={() => setSelectedColor(color)}></div>;
    } else {
        return <div className={(color === selectedColor) ? `${color} selected` : color} onClick={() => setSelectedColor(color)}></div>;
    }
} 
export default Color