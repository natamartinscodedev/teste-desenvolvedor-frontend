import React from 'react'

interface typeData {
    data: {
        id: number,
        name: string,
        active_principles: [
            {
                id: number,
                name: string
            }
        ],
        company: string,
        documents: [
            {
                expedient: number,
                id: string,
                type: string,
                url: string
            }
        ],
        published_at: string
    }
}

const index = ({ data }: typeData) => {

    return (
        <div>
            <p>{data.name}</p>
        </div>
    )
}

export default index