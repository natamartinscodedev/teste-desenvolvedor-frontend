"use client"
import { getProductID } from '@/Utils/getProductId'
import { typeProduct } from '@/ts/typeProducts'
import React from 'react'

export const page = ({ params }: any) => {
    const { productId }: typeProduct = getProductID(params)

    console.log("CHEGOU AQUI ==>", productId)
    return (
        <div>
            <h2>NAME DO MEDICAMENTO: {productId.name}</h2>
            {productId && productId.documents && productId.documents.map((doc: any) => (
                <div key={doc.id} className='card_productID'>
                    <p>Expedient: {doc.expedient}</p>
                    <p>Type: {doc.type}</p>
                    <p>URL: {doc.url}</p>
                </div>
            ))}

        </div>
    )
}

export default page