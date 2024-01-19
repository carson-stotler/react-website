import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Card() {
  return (
    <div className='cards'>
        <h1>Check out our Daily Dinner Specials!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                <CardItem 
                      src='images/img-9.jpg' 
                      text='Carnitas De Pollo' 
                      label="Friday"
                      path='/menu'
                    />
                    <CardItem 
                      src='images/img-9.jpg' 
                      text='Carnitas De Res' 
                      label="Saturday"
                      path='/menu'
                    />
                    <CardItem 
                      src='images/steak_faj.jpg' 
                      text='Steak or Chicken Fajitas' 
                      label="Sunday"
                      path='/menu'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                      src='images/img-9.jpg' 
                      text='Arros Con Pollo' 
                      label="Monday"
                      path='/menu'
                    />
                    <CardItem 
                      src='images/pollo_a_la_cazuela.jpg' 
                      text='Pollo A La Cazuela' 
                      label="Wednesday"
                      path='/menu'
                    />
                    <CardItem 
                      src='images/pollo_a_la_crema.jpg' 
                      text='Pollo A La Crema' 
                      label="Thursday"
                      path='/menu'
                    />
                </ul>
            </div>
        </div>
        <h1>Check out our Daily Drink Specials!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                  <CardItem 
                      src='images/lime_marg.jpg' 
                      text='Lime Margarita' 
                      label="Friday and Saturday"
                      path='/menu'
                    />
                    <CardItem 
                      src='images/pina_colada.jpg' 
                      text='Pina Colada' 
                      label="Sunday"
                      path='/menu'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                      src='images/teq_sunset.jpg' 
                      text='Tequila Sunset' 
                      label="Monday"
                      path='/menu'
                    />
                    <CardItem 
                      src='images/teq_sunrise.jpg' 
                      text='Tequila Sunrise' 
                      label="Wednesday"
                      path='/menu'
                    />
                    <CardItem 
                      src='images/blue_hawaii.jpg' 
                      text='Blue Hawaii' 
                      label="Thursday"
                      path='/menu'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card