import React from 'react'
import '../../App.css';


export default function AboutUs() {
    return (
        <>
            <h1 className='about-us'>ABOUT US</h1>
            <div className='about-us-info'>
                <h3>Located in the heart of Berkeley Springs, West Virginia, Mi Ranchito Mexican Restaurant serves up freshly made traditional Mexican foods!</h3>
                <h4>Our menu is compiled with a variety of appetizers, classic Mexican dishes, and delicious desserts. 
                    Not to mention, we also offer a great selection of margaritas and tequila! 
                    Come and relax in a comfortable and stylish restaurant or enjoy the nice weather and sit on the patio, either way, it will be an honor to serve you!</h4>
                <br></br><br></br>
                <h1>Hours of Operation</h1>
                <ul>
                    <li>Monday: 11am-8pm</li>
                    <li>Tuesday: Closed</li>
                    <li>Wednesday: 11am-8pm</li>
                    <li>Thursday: 11am-8pm</li>
                    <li>Friday: 11am-9pm</li>
                    <li>Saturday: 11am-9pm</li>
                    <li>Sunday: 12pm-8pm</li>
                </ul>
            </div>
        </>
    );
}