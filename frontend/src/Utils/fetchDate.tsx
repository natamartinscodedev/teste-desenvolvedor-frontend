import { useEffect, useState } from "react"

export function getDate() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products, setProducts] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [search, setSearch] = useState('')

    const typeUrl = search ? `data/${search}` : "data"

    const fetchDate = async () => {
        const res = await fetch("http://localhost:3000/" + `${typeUrl}` + `?_page=:${1}`)
        const date: any = await res.json()

        setProducts(date)
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchDate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        products,
        setSearch,
        search
    }
}