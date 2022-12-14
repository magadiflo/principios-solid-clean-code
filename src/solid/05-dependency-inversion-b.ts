import { LocalDataBaseService } from "./05-dependency-inversion-c";

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export class PostService {

    private posts: Post[] = [];

    constructor() { }

    //* Dentro de este método tenemos una dependencia oculta,
    //* es decir, una dependencia que no nos es fácil detectarla hasta que veamos el método getPosts()
    async getPosts() {
        const jsonDB = new LocalDataBaseService();
        this.posts = await jsonDB.getFakePosts();
        return this.posts;
    }
}