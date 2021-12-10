import React, { useState } from 'react'

export const AddCategory = () => {

    /*Hooks que permite ingresar un valor por la
     caja de entrada y luego la renderiza en el h1
     <h1> { inputValue } </h1>
     const [inputValue, setInputValue] = useState("hola mundo");
     const handleInputChange = (e) => {
        setInputValue( e.target.value)
    }
     */

    const [inputValue, setInputValue] = useState("hola mundo");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submint hecho")

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
