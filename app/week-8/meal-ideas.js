"use client";

import { useState, useEffect } from 'react';

const MealIdeas = (ingredient) => {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        let getData = await fetchMealIdeas(ingredient);
        setMeals(getData);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <div>
                <h1>Meal Ideas</h1>
            </div>
            <ul>
            {meals.map((meal) => (
                <div key={meals.idMeal}>
                </div>
            ))}
            </ul>
        </div>
    )
}

async function fetchMealIdeas (ingredient) {
    const response = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return (
        data.meals
    );
}