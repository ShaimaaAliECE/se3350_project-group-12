import React from 'react'
import './Footer.css'

const Footer = ({handleRoute, route}) =>{

    return (
        <footer>
            <div className='footer'>
                Sorting Algorithm Visualizer Demo
                <button className = 'items' onClick = ''>A Button</button>
                <select onChange={handleRoute} value={route}>
                    <option value='Home'>Home</option>
                    <option value='Game'>Play</option>
                    <option value='Login-sign-up'>Login/Sign-up</option>
                    <option value='Instructions'>Instructions</option>
                    <option value='Admin'>Admin</option>
                    
                </select>
            </div>
            

        </footer>
    )
}

export default Footer;