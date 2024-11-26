import React, { useState } from 'react';
// We will use an onChange synthetic event to capture into state 
//    each character as it is typed
// const [color, setColor] = useState("")
const btnStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
    color: '#fff',
    border: 'none'
};

const Box = (props) => {
    return(
        <div>
            <button style={btnStyle}>{ props.children }</button>
        </div>
    )
}

export default Box;