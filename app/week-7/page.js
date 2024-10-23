"use client"
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from 'react';

export default function Page() {
    
    const [items, setItems] = useState([...itemsData]);
    
    function handleAddItem(newItem) {
        setItems([newItem,...items]);
    }

    return (
        <main>
            <h1 className = "text-4xl font-bold text-center my-5">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}