import { useState } from 'react';

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
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar Gif" value={inputValue} onChange={onInputChange} autoFocus />
        </form>
    );
};
