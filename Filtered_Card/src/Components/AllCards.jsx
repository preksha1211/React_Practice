export function AllCards({ data }) {
    if (data.length === 0) {
        return (
            <h1 className="text-5xl text-[#800020] mt-20 font-bold">
                No Product Found 😔
            </h1>
        );
    }

    return (
        <div className="mt-10 flex flex-wrap justify-center gap-8 px-5 pb-10">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="
                    w-[300px]
                    bg-white
                    rounded-2xl
                    shadow-lg
                    shadow-blue-200
                    border
                    border-blue-100
                    overflow-hidden
                    hover:scale-105
                    hover:shadow-2xl
                    transition-all
                    duration-300
                    "
                >
                    <div className="overflow-hidden">
                        <img
                            src={`https://picsum.photos/300/200?random=${item.id}`}
                            alt={item.title}
                            className="
                            w-full
                            h-[200px]
                            object-cover
                            hover:scale-110
                            transition-all
                            duration-500
                            "
                        />
                    </div>

                    <div className="p-4">
                        <h2 className="text-xl font-bold text-[#800020] line-clamp-1">
                            {item.title}
                        </h2>

                        <p className="text-gray-600 mt-2 line-clamp-3">
                            {item.description}
                        </p>

                        <div className="flex justify-between items-center mt-4">
                            <p className="text-2xl font-bold text-blue-700">
                                ${item.price}
                            </p>

                            <button
                                className="
                                bg-blue-700
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                hover:bg-blue-800
                                transition-all
                                "
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}