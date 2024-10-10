"use client";

import {useState} from 'react';
import Item from './item.js';
import itemJson from './items.json'; 

export default function ItemList() {
  
  let copyItemJson = [...itemJson];
  const [sortBy, setSortBy] = useState("name");

  const sortedItem = copyItemJson.sort((a, b) => {
    
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }

    return a.name.localeCompare(b.name);
    
  });

  return (
    <div>
      <div className="flex justify-start align-middle mb-2">
        <h2 className="font-bold">Sort By: </h2>
        <button className={`ml-2 p-2 rounded-xl ${sortBy === "name" ? "bg-sky-950 text-white" : "bg-sky-200"}`} 
        onClick={() => setSortBy("name")}>NAME</button>
        
        <button className={`ml-2 p-2 rounded-xl ${sortBy === "category" ? "bg-sky-950 text-white" : "bg-sky-200"}`}
        onClick={() => setSortBy("category")}>CATEGORY</button>
      </div>
      <ul>
        
        {sortedItem.map((item) => (
          <div key={item.id}>
            <Item name={item.name} quantity={item.quantity} category={item.category} />    
          </div>
        ))
        }
        
      </ul>
    </div>
  );
}