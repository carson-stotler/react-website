import React from 'react'
import '../../App.css';
import fullMenu from './full-mi-ranchito-menu.pdf';
// react-website\react-website\public\images\full-mi-ranchito-menu.pdf

export default function Menu() {
    return (
        <>
            {/* <h1 className='menu'>MENU</h1> */}
            <a href={fullMenu} target="_blank"
                    rel="noreferrer" className='menu'>
                    MENU
            </a>
            {/* <figure className='menu' data-category='Menu'>
                <img src='images/menu1.jpg' alt='' className='menu'/>
            </figure>

            <figure className='menu' data-category='Menu'>
                <img src='images/menu2.jpg' alt='' className='menu'/>
            </figure>

            <figure className='menu' data-category='Menu'>
                <img src='images/menu3.jpg' alt='' className='menu'/>
            </figure>

            <figure className='menu' data-category='Menu'>
                <img src='images/menu4.jpg' alt='' className='menu'/>
            </figure>

            <figure className='menu' data-category='Menu'>
                <img src='images/menu5.jpg' alt='' className='menu'/>
            </figure> */}
        </>
        
    );
}