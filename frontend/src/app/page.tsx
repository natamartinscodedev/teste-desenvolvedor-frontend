"use client"
import { getDate } from "@/Utils/fetchDate";
import CardProducts from '@/Components/CardProducts/index'
import { searchProductsByName } from "@/Utils/searchProducts";
import { useState } from "react";

export default function Home() {
  const { products }: any = getDate()
  const [search, setSearch] = useState('');
  const productName = searchProductsByName(search, products)

  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </div>
        <div className="container_card-products">
          {
            productName ? (
              productName.map((dates: any) => (
                <CardProducts key={dates.id} data={dates} />
              ))
            ) : (
              products.map((dates: any) => (
                <CardProducts key={dates.id} data={dates} />
              ))

            )
          }
        </div>
      </main>
      <footer></footer>
    </>
  );
}
