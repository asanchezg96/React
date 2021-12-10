import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(["Anthony", "Fernando", "Alexandra", "Richard", "Christofer"]);
    
    // const handleAdd = ()=>{
    //         // setCategories( [...categories, "Nuevo mienbro"]);
    //         setCategories(categs => [...categs, "Nuevo miembro"] );      
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory/>
            <br></br>
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
