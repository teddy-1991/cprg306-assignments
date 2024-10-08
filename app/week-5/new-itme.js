"use client"
import {useState} from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    function handleSubmit(event) {
        event.preventDefault();
        const item = { name, quantity, category };

        console.log(item);
        alert(`Name: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`);

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
            <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full h-auto"onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg" id="name" type="text" placeholder="Item Name" value={name} required onChange={(event) => setName(event.target.value)} />
                </label>

                <div className = "flex justify-evenly mt-2">
                    <div className="flex ml-1 border-2 border-gray-300 p-2 rounded-lg">
                        <p className = "w-7 text-white">{quantity}</p>
                        <button type="button" onClick={decrement} disabled={quantity <= 1}><img className = "w-7 h-5" src="https://img.icons8.com/?size=48&id=nEvcFXQg4vYw&format=png" alt="minus icon" /></button>
                        <button type="button" onClick={increment} disabled={quantity >= 20}><img className = "w-7 h-5" src="https://img.icons8.com/?size=48&id=nrj2gY9kMw2T&format=png" alt="plus icon" /></button>        
                    </div>
                    <select className="ml-1 border-2 border-gray-300 p-2 rounded-lg" name="category" id="category-list" value={category} required onChange={(event) => setCategory(event.target.value)}>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button className="mt-2 border-2 border-gray-300 p-2 rounded-lg text-white w-full"type="submit" onClick={handleSubmit}>Add to Cart</button>
            </form>  
    )
}
