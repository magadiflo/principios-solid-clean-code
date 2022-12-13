//* Hay que agregar la dependencia de axios con ```npm install axios```

//** NO ES RECOMENDABLE que nuestras clases tengan dependencias con librerías de terceros, en este caso
//** se tiene una dependencia con axios
//*import axios from 'axios';
import { HttpClient } from './02-open-closed-c';

export class TodoService {

    constructor(private http: HttpClient) { }

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor(private http: HttpClient) { }

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor(private http: HttpClient) { }

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}