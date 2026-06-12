import { AllCards } from "./Components/AllCards.jsx";
import { useState } from "react";
import { data } from "./utils/data.js";

function App() {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState(data);

    function filteredData() {
        if (search.trim() === "") {
            setProducts(data);
            return;
        }

        const result = data.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );

        setProducts(result);
    }

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold mt-10 text-[#800020]">
                Product Search
            </h1>

            <div className="mt-10 flex">
                <input
                    type="text"
                    placeholder="Search Item..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
                    px-4
                    py-3
                    w-[280px]
                    md:w-[400px]
                    rounded-l-xl
                    border-2
                    border-[#800020]
                    outline-none
                    bg-white
                    "
                />

                <button
                    onClick={filteredData}
                    className="
                    bg-[#800020]
                    text-white
                    px-6
                    rounded-r-xl
                    hover:bg-[#5c0016]
                    transition-all
                    duration-300
                    "
                >
                    Search
                </button>
            </div>

            <AllCards data={products} />
        </div>
    );
}

export default App;