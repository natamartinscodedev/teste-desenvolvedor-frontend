'use client'
import { typeData } from '@/ts/typeProducts'
import Link from 'next/link'
import React, { useState } from 'react'

const index = ({ data }: typeData) => {
    const [id, setId]: any = useState('')

    // console.log("Data ==>", data)

    const getIdProduct = (e: any) => {
        e.preventDefault()
        setId(data.id)
    }

    return (
        <Link
            onClick={getIdProduct}
            href={`Product/${id}`}
            className='card_products'
        >
            <p>Nome: {data.name}</p>
        </Link>
    )
}

export default index