import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealsItem from './MealsItem/MealsItem';
import { useEffect, useState } from 'react';
// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,
//     },
//     { 
//       id: 'm2',
//       name: 'Schnitzel',
//       description: 'A german specialty!',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
//     },
//     { 
//       id: 'm4',
//       name: 'Green Bowl',
//       description: 'Healthy...and green...',
//       price: 18.99,
//     },
//   ];

const AvailableMeals =()=>{
  useEffect(()=> {
    const fetchMeals = async() => {
      const response = await fetch('https://react-test-74361-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      const responseData = await response.json();
    
    }
  }, [])   
  fetch(input: "Meal_List" )
    const MealsList = DUMMY_MEALS.map((meal) =>(
        <MealsItem
            id = {meal.id} 
            key = {meal.id}
            name = {meal.name}
            description = {meal.description}
            price = {meal.price}
        />
    ));
return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
);
};

export default AvailableMeals
