export interface Course {
    id: number,
    title: string,
    creation_date: string,
    duration: string,
    description: string,
    ready?:boolean,
}

export interface User {
    id: number,
    first_name: string,
    last_name: string
}