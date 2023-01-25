import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const minLenght = 4;
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if (newInputValue.length < minLenght) return;

        onNewCategory(newInputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input type="text" placeholder="Buscar Gif" value={inputValue} onChange={onInputChange} autoFocus />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
