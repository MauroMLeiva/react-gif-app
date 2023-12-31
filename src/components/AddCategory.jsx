import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = inputValue.trim();

        if (newValue.length <= 1) return;

        onNewCategory(newValue);

        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Type to search gifs!'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};
