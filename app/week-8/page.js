"use client"
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import { useState } from 'react';

export default function Page() {
    
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items,newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanItemName = item.split(',')[0].trim().replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
        setSelectedItemName(cleanItemName);
    };

    return (
        <main>
            <div>
                <h1 className = "text-4xl font-bold my-5">Shopping List</h1>
                <div className = "flex">
                    <div className = "w-1/4 bg-sky-950">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <div className = "w-1/4 bg-black text-white">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            </div>
        </main>
    );
}