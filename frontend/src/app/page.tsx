"use client"
// import { getDate } from "@/Utils/fetchDate";
// import CardProducts from '@/Components/CardProducts/index'
// import { searchProductsByName } from "@/Utils/searchProducts";
// import { useState } from "react";

// export default function Home() {
//   const { products }: any = getDate()
//   const [search, setSearch] = useState('');
//   const productName = searchProductsByName(search, products)

//   return (
//     <>
//       <header>
//         <nav></nav>
//       </header>
//       <main>
//         <div>
//           <input
//             type="text"
//             value={search}
//             onChange={(e: any) => setSearch(e.target.value)}
//           />
//         </div>
//         <div className="container_card-products">
//           {
//             productName ? (
//               productName.map((dates: any) => (
//                 <CardProducts key={dates.id} data={dates} />
//               ))
//             ) : (
//               products.map((dates: any) => (
//                 <CardProducts key={dates.id} data={dates} />
//               ))

//             )
//           }
//         </div>
//       </main>
//       <footer></footer>
//     </>
//   );
// }


// teste

import { getDate } from "@/Utils/fetchDate";
import CardProducts from '@/Components/CardProducts/index'
import { searchProductsByName } from "@/Utils/searchProducts";
import { useState } from "react";

export default function Home() {
  const { products }: any = getDate()
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Filtrar os produtos com base na pesquisa e na página atual
  const filteredProducts = searchProductsByName(search, products).slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Função para mudar de página
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
          {filteredProducts.map((product: any) => (
            <CardProducts key={product.id} data={product} />
          ))}
        </div>
        {/* Paginação */}
        <div className="pagination">
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
