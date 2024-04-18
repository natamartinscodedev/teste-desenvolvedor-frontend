"use client"
import React from 'react'
import { downloadPDF } from '@/Utils/donwloadPDF'
import { getProductID } from '@/Utils/getProductId'
import { typeProduct } from '@/ts/typeProducts'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'

export const page = ({ params }: any) => {
    const { productId }: typeProduct = getProductID(params)

    return (
        <div className='conatiner_productID container'>
            <div className='box_subtitle subtitleID'>
                <h2>Informações do Medicamento</h2>
            </div>
            <div className='box_infoID'>
                <Link href='/'><MoveLeft /></Link>
                <p>NOME: {productId.name}</p>
                <ul>
                    {productId && productId.documents && productId.documents.map((doc: any) => (
                        <div key={doc.id} className='card_productID'>
                            <li>Expedient: {doc.expedient}</li>
                            <li>Tipo: {doc.type}</li>
                            <button onClick={() => downloadPDF(doc.url)}>Baixar PDF</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default page