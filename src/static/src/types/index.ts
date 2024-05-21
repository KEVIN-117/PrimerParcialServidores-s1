export interface Data{
    books: {
        _id: any | number,
        title: string,
        author: string}[]
}

export interface Book{
    _id: number,
    title: string,
    author: string
}