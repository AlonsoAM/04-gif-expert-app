import React, { useState } from "react";

export const AddCategory = () => {
    const [inputValue, setinputValue] = useState("");
    // Captura lo que hay en el input y lo pasa al nuevo state
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                // Coloca lo que esta en el nuevo state
                value={inputValue}
                // Cambia lo que esta en el imput con ayuda del evento
                onChange={handleInputChange}
            />
        </form>
    );
};
