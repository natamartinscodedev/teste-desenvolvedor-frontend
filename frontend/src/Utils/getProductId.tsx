import { typeProduct } from "@/ts/typeProducts";
import { useEffect, useState } from "react";

export function getProductID(product: any) {
    const [productId, setproductId] = useState<typeProduct[]>([]);
    const fetchDate = async () => {
        const res = await fetch(`http://localhost:3000/data/${product.pathId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        const data: typeProduct[] = await res.json();

        setproductId(data)
    };
    useEffect(() => {
        window.scrollTo(0, 0)
        fetchDate()

    }, [])

    return {
        productId
    };
}
