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
        <div className = "m-1">
            <div>
                <h1 className = "font-bold text-2xl">Meal Ideas</h1>
                <p>{meals === null ? `No meal ideas found for ${ingredient}.` : 
                    meals.length > 0 ? `Here are some meal ideas using ${ingredient}:` :
                    "Select an item to see meal ideas."}</p>
                <ul>
                    {meals && meals.length > 0 ? (
                        meals.map((meal) => (
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                    </li>
                    )) 
                ) : null}
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