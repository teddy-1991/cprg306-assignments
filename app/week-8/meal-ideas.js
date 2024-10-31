"use client";

import { useState, useEffect } from 'react';

const MealIdeas = ({ingredient}) => {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        let getData = await fetchMealIdeas(ingredient);
        
        setMeals(getData);
        
        
    }

    useEffect(() => {
       if (ingredient) {
        loadMealIdeas();
       } 
    }, [ingredient]);

    return (
        <div className = "m-5">
            <div className = "m-2">
                <h1 className = "font-bold text-2xl">Meal Ideas</h1>
                <ul>
                    {meals && meals.map((meal) => (
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

async function fetchMealIdeas (ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

export default MealIdeas;