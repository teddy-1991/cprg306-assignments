
export default function Item({name, quantity, category, onSelect}) {
    return(
        <li className = "p-2 bg-sky-200 border-2 cursor-pointer" onClick={onSelect}>
            <h2 className = "text-xl font-bold uppercase">{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </li>
    );
}