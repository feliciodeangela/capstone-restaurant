import React from 'react';
import Burguer from '../images/burguer.jpg';
import HotDog from '../images/hotDog.jpg';
import Pizza from '../images/pizza.jpg';
import SeaFood from '../images/seaFood.jpg';
import Shrimps from '../images/shrimps.jpg';
import Chicken from '../images/popcornChicken.jpg';
import '../App.css';

export default function Products() {
    const foods=[
        {id:1,foodName:'Burguer',image:Burguer,price:'$5'},
        {id:2,foodName:'HotDog',image:HotDog,price:'$4'},
        {id:3,foodName:'Pizza',image:Pizza,price:'$6'},
        {id:4,foodName:'SeaFood',image:SeaFood,price:'$9'},
        {id:5,foodName:'Shrimps',image:Shrimps,price:'$8'},
        {id:6,foodName:'Chicken',image:Chicken,price:'$6'}
    ];
    return(
        <>
            <h1>Products</h1>
            <div className='cards'>
                {
                    foods && foods.map((food)=>
                        <div className='card'>
                            <div className='cardImage'><img src={food.image} alt='product'></img></div>
                            <p>{food.foodName}</p>
                            <p>{food.price}</p>
                        </div>
                    )
                }
            </div>
        </>
    );
}