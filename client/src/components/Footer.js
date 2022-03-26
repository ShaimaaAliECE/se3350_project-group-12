import React from 'react'
import './Footer.css'

const Footer = ({handleRoute, route}) =>{ //footer for all pages to allow players to switch between levels

    return (
        <footer>
            <div className='footer'>
                Where do you want to go?
                <select onChange={handleRoute} value={route}>
                    <option value='Game'>Play</option>
                    <option value='Instructions'>Instructions</option>
                </select>
            </div>
            

        </footer>
    )
}

export default Footer;