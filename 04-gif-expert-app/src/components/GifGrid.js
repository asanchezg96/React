import React from 'react'
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

    const getGif = async() =>{

        const url = "https://api.giphy.com/v1/gifs/search?q=Rick&limit=10&api_key=0HSsnrvpzUO00kFXsxVcM1yM2E4oxLpF"
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs=  data.map( img => {
            return{
                id:img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        
        console.log(gifs);
    }

    getGif();

    return (
        <div>
            <h3>  {category} </h3>
        </div>
    )
}

// GifGrid.propTypes = {

// }

export default GifGrid
