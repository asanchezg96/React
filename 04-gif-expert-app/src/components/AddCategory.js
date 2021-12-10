import React, { useState } from 'react'
import PropTypes from "prop-types"
export const AddCategory = ( { setCategories } ) => {

    /*Hooks que permite ingresar un valor por la
     caja de entrada y luego la renderiza en el h1
     <h1> { inputValue } </h1>
     const [inputValue, setInputValue] = useState("hola mundo");
     const handleInputChange = (e) => {
        setInputValue( e.target.value)
    }
     */

    const [inputValue, setInputValue] = useState(""); /*Si el usestate es vacio es undifene por eso sale error en la consola*/

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    /*trim() elimina los espacion espacios, tabulaciones etc
    la funcion handleSubmit valida que el input no contenga espacios vacios luego
    llama a la funcion del setCategories para que ingrese un nuevo campo puesto en el
    input por el usuario
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >2){
            setCategories( categ => [...categ, inputValue]);
            setInputValue("")
        }
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

/*Se crea una proiedad requerida por el parametro que recibe llamado setCategories*/
AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}
