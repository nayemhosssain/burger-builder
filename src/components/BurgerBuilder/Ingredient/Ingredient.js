import React from 'react';
import './Ingredient.css'
import Top from '../../../assets/images/top.png'
import Bottom from '../../../assets/images/bottom.png'
import Cheese from '../../../assets/images/cheese.png'
import Salad from '../../../assets/images/salad.png'
import Meat from '../../../assets/images/meat.png'

const Ingredient = props => {
    let ingredient = null;

    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div><img src={Bottom} alt="Bread Bottom" /></div>
            break;
        case 'bread-top':
            ingredient = <div><img src={Top} alt="Bread Top" /></div>
            break;   
        case 'salad':
            ingredient = <div><img src={Salad} alt="Salad" /></div>
            break;
        case 'cheese':
            ingredient = <div><img src={Cheese} alt="Cheese" /></div>   
            break;
        case 'meat':
            ingredient = <div><img src={Meat} alt="Meat" /></div>
            break;     
        default:
            ingredient =null;     
    }
    return(
        <div className="Ingredient">
            {ingredient}
        </div>
    )
}

export default Ingredient;