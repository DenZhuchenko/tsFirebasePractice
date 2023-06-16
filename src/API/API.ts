import axios from "axios";


export interface photosInterface{
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}


const instance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`
})


export const placeHolderAPI = {
    photos() {
        return instance.get<photosInterface[]>(`photos?_limit=100`)
            .then(res => res.data)
    }

}