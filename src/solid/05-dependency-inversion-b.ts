import { LocalDataBaseService, JsonDataBaseService } from './05-dependency-inversion-c';

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: LocalDataBaseService) { }

    //* Dentro de este método tenemos una dependencia oculta,
    //* es decir, una dependencia que no nos es fácil detectarla hasta que veamos el método getPosts()
    async getPosts() {
        //* const jsonDB = new LocalDataBaseService();
        //* const jsonDB = new JsonDataBaseService();
        this.posts = await this.postProvider.getPosts();
        return this.posts;
    }
}