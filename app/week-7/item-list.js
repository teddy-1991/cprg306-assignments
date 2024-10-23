'use client';

import { useState } from 'react';
import Item from './item.js';


export default function ItemList({ items }) {
    
  const [sortBy, setSortBy] = useState("name");

  let copyItemsList = [...items];

  // still don't understand fully, need to practice.
  // const groupByCategory = copyItemsList.reduce((acc, item) => {
  //   if (!acc[item.category]) {
  //     acc[item.category] = [];
  //   }

  //   acc[item.category].push(item);

  //   return acc;
  // }, {});


  const sortedItemsList = copyItemsList.sort((a, b) => {

    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }

    return a.name.localeCompare(b.name);
  })

  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center items-center">
        <h2>Sort By:</h2>
        <button className={`rounded-xl ml-1 p-2 ${sortBy === "name" ? "bg-sky-700 text-white" : "bg-sky-300"}`} 
        onClick={() => setSortBy("name")}>NAME</button>
        <button className={`rounded-xl ml-1 p-2 ${sortBy === "category" ? "bg-sky-700 text-white" : "bg-sky-300"}`} 
        onClick={() => setSortBy("category")}>CATEGORY</button>
        <button className={`rounded-xl ml-1 p-2 ${sortBy === "group" ? "bg-sky-700 text-white" : "bg-sky-300"}`} 
        onClick={() => setSortBy("group")}>GROUP</button>
      </div>
      <div className = "flex justify-center mt-2">
        <ul>
  
{/* need to practice more, don't understand fully. 
        {sortBy === "group"
        ? Object.keys(groupByCategory)
        .sort((a, b) => a.localeCompare(b))
        .map((category) => (
          <div key={category}>
            <h3 className = "font-bold text-lg capitalize">{category}</h3>
            <ul>
            {groupByCategory[category]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <Item name={item.name} quantity={item.quantity} category={item.category} />
            ))}
            </ul>
          </div>
        )) */ }
        {sortedItemsList.map((items) => (
          <div key={items.id}>
          <Item name={items.name} quantity={items.quantity} category={items.category} />
          </div>
        ))}
        
        </ul>
      </div>
    </div>
  );
}