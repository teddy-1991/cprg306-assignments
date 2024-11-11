"use client"
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';


export default function Page() {
    
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const [newItem, setNewItem] = useState("");

    const handleAddItem = async (newItem) => {
        if (!user) return;

        try {
            const itemId = await addItem(user.uid, newItem);
            const addedItem = { id: itemId, ...newItem };
            setItems([...items, addedItem]);
            setNewItem("");
        } catch (error) {
            console.error("Error adding item: ", error);
        }
    };

    const handleItemSelect = (item) => {
        const cleanItemName = item.split(',')[0].trim().replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
        setSelectedItemName(cleanItemName);
    };

    const loadItems = async () => {
        try {
            const items = await getItems(user.uid);
            setItems(items);
        } catch (error) {
            console.error("Error loading items: ", error);
        }
    };

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    if (!user) {
        return (
            <main>
                <p>Yon must be logged in to view the shopping list.</p>
            </main>
        );
    }
    return (
        <main>
            <div>
                <h1 className = "text-4xl font-bold my-5">Shopping List</h1>
                <div className = "flex">
                    <div className = "w-1/4">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <div className = "w-1/4 bg-sky-200 rounded-xl m-1 p-1 h-1/2">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            </div>
        </main>
    );
}