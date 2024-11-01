"use client"
import {useState} from "react";

export default function NewItem({ onAddItem }) {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    function handleSubmit(event) {
        event.preventDefault();
        const item = { 
            id : Math.random().toString(36).substring(2,10),
            name, quantity, category };

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className = "flex justify-center">
            <form className="m-1 p-1 rounded-xl bg-sky-200 text-black max-w-sm w-full h-auto"onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input className="w-full mt-1 border-2 border-black p-2 rounded-lg" id="name" type="text" placeholder="Item Name" value={name} required onChange={(event) => setName(event.target.value)} />
                </label>

                <div className = "flex justify-evenly mt-2">
                    <div className="flex ml-1 border-2 border-black p-2 rounded-lg">
                        <p className = "w-7">{quantity}</p>
                        <button type="button" onClick={decrement} disabled={quantity <= 1}><img className = "w-7 h-5" src="https://img.icons8.com/?size=48&id=nEvcFXQg4vYw&format=png" alt="minus icon" /></button>
                        <button type="button" onClick={increment} disabled={quantity >= 20}><img className = "w-7 h-5" src="https://img.icons8.com/?size=48&id=nrj2gY9kMw2T&format=png" alt="plus icon" /></button>        
                    </div>
                    <select className="ml-1 border-2 border-black p-2 rounded-lg" name="category" id="category-list" value={category} required onChange={(event) => setCategory(event.target.value)}>
                        <option value="Produce">produce</option>
                        <option value="Dairy">dairy</option>
                        <option value="Bakery">bakery</option>
                        <option value="Meat">meat</option>
                        <option value="Frozen Foods">frozen foods</option>
                        <option value="Canned Goods">canned goods</option>
                        <option value="Dry Goods">dry goods</option>
                        <option value="Beverages">beverages</option>
                        <option value="Snacks">snacks</option>
                        <option value="Household">household</option>
                        <option value="Other">other</option>
                    </select>
                </div>

                <button className="mt-2 border-2 border-black p-2 rounded-lg w-full" type="submit" onClick={handleSubmit} disabled={!name}>Add to Cart</button>
            </form>  
        </div>
    )
}
    