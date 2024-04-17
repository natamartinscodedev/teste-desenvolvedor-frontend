'use client'
import { typeData } from '@/ts/typeProducts'
import Link from 'next/link'
import React, { useState } from 'react'

const index = ({ data }: typeData) => {
    const [id, setId]: any = useState('')
    const getIdProduct = () => {
        setId(data.id)
    }

    return (
        <Link
            onClick={getIdProduct}
            href={`product/${id}`}
            target='__blank'
            className='card_products'
        >
            <p>Nome: {data.name}</p>
        </Link>
    )
}

export default index