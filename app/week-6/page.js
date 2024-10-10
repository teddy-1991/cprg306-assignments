import ItemList from './item-list';

export default function Page() {
    return (
        <main>
            <div className="flex justify-center flex-col">
                <h1 className = "text-4xl font-bold my-5">Shopping List</h1>
                <ItemList />
            </div>
        </main>
    );
}