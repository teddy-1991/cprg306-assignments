'use client';

import { useState } from 'react';
import Item from './item.js';
import items from './items.json';


export default function ItemList() {
    
  const [sortBy, setSortBy] = useState("name");

  let copyItemsList = [...items];

  const sortedItemsList = copyItemsList.sort((a, b) => {

    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return a.name.localeCompare(b.name);
  })

  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center">
        <h2>Sort By:</h2>
        <button className={`rounded-xl ml-1 p-2 ${sortBy === "name" ? "bg-sky-700 text-white" : "bg-sky-300"}`} 
        onClick={() => setSortBy("name")}>NAME</button>
        <button className={`rounded-xl ml-1 p-2 ${sortBy === "category" ? "bg-sky-700 text-white" : "bg-sky-300"}`} 
        onClick={() => setSortBy("category")}>CATEGORY</button>
      </div>
      <div className = "flex justify-center">
        <ul>
        
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