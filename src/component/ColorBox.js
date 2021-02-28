import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

const getNewColor = () => {
    const listColor = ['black', 'white', 'blue', 'green', 'red'];
    const randomIndex =Math.trunc(Math.random() * 5)
    return listColor[randomIndex];

}

function ColorBox(props) {
    const handleClick = () => {
        const newColer = getNewColor();
        setColor(newColer);
    }

    const [color, setColor] = useState('red');
    return (
        <div className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleClick}
        >
            ColorBox
        </div>
    );
}

export default ColorBox;