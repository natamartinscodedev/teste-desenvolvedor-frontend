"use client"
import { getDate } from "@/Utils/fetchDate";
import CardProducts from '@/Components/CardProducts/index'
import { searchProductsByName } from "@/Utils/searchProducts";
import { useState } from "react";
import { Search } from "lucide-react";

function Home() {
  const { products }: any = getDate()
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const filteredProducts = searchProductsByName(search, products).slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <main className="container_main container">
        <div className="box_subtitle">
          <h2>Bulário Eletrônico</h2>
        </div>

        <div className="box_search-product">
          <span><Search size={20} /></span>
          <input
            type="text"
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
            placeholder="Procure pelo medicamento aqui..."
          />
        </div>

        <div className="container_card-products">
          {filteredProducts.map((product: any) => (
            <CardProducts key={product.id} data={product} />
          ))}
        </div>

        <div className="box_pagination">
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default Home