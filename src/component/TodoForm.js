import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,

};
TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [inputText, setInputText]
        = useState('')
    const handleChange = (e) => {
        setInputText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!onSubmit) return;
        
        onSubmit(inputText);
        setInputText("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={inputText}
                onChange={handleChange}
            >
            </input>
            <button type="submit">
                Add Todo
            </button>
        </form>
    );
}

export default TodoForm;