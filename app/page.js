import Link from "next/link";

export default function Page() {
    return (
        <main>
            <div className = "flex flex-col justify-start items-center h-screen ">
                <div className = "mt-32 w-3/4 bg-gray-100" >
                    <div className = "text-center">
                        <h1 className = "text-xl font-bold uppercase">CPRG 306: Web Development 2 - Assignments</h1>
                    </div>
                    <div className = "self-start">
                        <ul>
                            <li className = "hover:text-green-300"><Link href="/week-2">Week 2 Assignment</Link></li>
                            <li className = "hover:text-green-300"><Link href="/week-3">Week 3 Assignment</Link></li>
                            <li className = "hover:text-green-300"><Link href="/week-4">Week 4 Assignment</Link></li>
                            <li className = "hover:text-green-300"><Link href="/week-5">Week 5 Assignment</Link></li>
                            <li className = "hover:text-green-300"><Link href="/week-6">Week 6 Assignment</Link></li>
                            <li className = "hover:text-green-300"><Link href="/week-7">Week 7 Assignment</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
