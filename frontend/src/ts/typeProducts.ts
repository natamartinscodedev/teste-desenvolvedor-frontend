export interface typeData {
    data: {
        id: number,
        name: string,
        active_principles: {
            id: number;
            name: string;
        }[],

        company: string,
        documents: {
            expedient: number;
            id: string;
            type: string;
            url: string;
        }[],

        published_at: string;
    }
}

export interface fetchTypeData {
    id: number;
    name: string;
    active_principles: {
        id: number;
        name: string;
    }[];
    company: string;
    documents: {
        expedient: number;
        id: string;
        type: string;
        url: string;
    }[];
    published_at: string;
}