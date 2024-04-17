import { fetchTypeData } from "@/ts/typeProducts";
import { useEffect, useState } from "react";

export function getDate() {
    const [products, setProducts] = useState<fetchTypeData[]>([]);
    // const typeUrl = search ? `data/${search}` : "data";

    const fetchDate = async () => {
        const res = await fetch("http://localhost:3000/data", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data: fetchTypeData[] = await res.json();

        const sortedProducts = data.sort((a: fetchTypeData, b: fetchTypeData) => new Date(a.published_at) - new Date(b.published_at));
        setProducts(sortedProducts);
    };

    useEffect(() => {
        fetchDate();
    }, [search]);

    return {
        products,
        setSearch,
        search
    };
}
