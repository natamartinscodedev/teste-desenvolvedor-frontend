import { fetchTypeData } from "@/ts/typeProducts";
import { useEffect, useState } from "react";

export function getDate(id: string) {
    const [productId, setproductId] = useState<fetchTypeData[]>([]);
    const fetchDate = async () => {
        const res = await fetch(`http://localhost:3000/data/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data: fetchTypeData[] = await res.json();

    };
    fetchDate();

    return {
        productId
    };
}
