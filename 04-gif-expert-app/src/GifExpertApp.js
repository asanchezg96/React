import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GifExpertApp = props => {

    //const categories = ["Anthony", "Fernando","Alexandra","Richard", "Christofer"];
    const [categories, setCategories] = useState(["Anthony", "Fernando", "Alexandra", "Richard", "Christofer"]);
    
    const handleAdd = ()=>{
            // setCategories( [...categories, "Nuevo mienbro"]);
            setCategories(categs => [...categs, "Nuevo miembro"] );      
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <br></br>

            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>;
                    })
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
