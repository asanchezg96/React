import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(["Anthony"]);
    
    // const handleAdd = ()=>{
    //         // setCategories( [...categories, "Nuevo mienbro"]);
    //         setCategories(categs => [...categs, "Nuevo miembro"] );      
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories}/>
            <br></br>
            <ol>
                {
                    categories.map( category =>
                    <GifGrid
                    key= { category }
                       category= { category }
                        
                    />
                    )
                }
            </ol>
        </>
    )
}


export default GifExpertApp
