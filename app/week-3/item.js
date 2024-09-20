
export default function Item({name, quantity, category}) {
    return(
        <li className = "w-1/2 p-4 bg-sky-200 border-2">
            <h2 className = "text-xl font-bold uppercase">{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </li>
    );
}