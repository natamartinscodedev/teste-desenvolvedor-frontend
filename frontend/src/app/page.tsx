"use client"
import { getDate } from "@/Utils/fetchDate";
import CardProducts from '@/Components/CardProducts/index'

export default function Home() {
  const { products, setSearch }: any = getDate()
  //  console.log("Date Product ==>", products)

  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main>
        <div>
          <input
            type="text"
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </div>
        {
          products && products.map((dates: any) => (
            <CardProducts key={dates.id} data={dates} />
          ))
        }
      </main>
      <footer></footer>
    </>
  );
}
