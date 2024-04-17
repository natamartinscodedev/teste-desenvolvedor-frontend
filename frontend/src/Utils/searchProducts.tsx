import { fetchTypeData } from "@/ts/typeProducts";

export function searchProductsByName(name: string, products: fetchTypeData[]): fetchTypeData[] {
    return products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
}
