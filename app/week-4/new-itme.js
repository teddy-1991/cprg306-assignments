"use client"
import {useState} from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

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
            <div className = "flex bg-white m-2 p-2">
                <p className = "w-10">{quantity}</p>
                <button onClick={decrement} disabled={quantity <= 1}><img className = "w-7 h-5" src="https://img.icons8.com/?size=48&id=nEvcFXQg4vYw&format=png" alt="minus icon" /></button>
                <button onClick={increment} disabled={quantity >= 20}><img className = "w-7 h-5" src="https://img.icons8.com/?size=48&id=nrj2gY9kMw2T&format=png" alt="plus icon" /></button>        
            </div>    
        </div>
    )
}
