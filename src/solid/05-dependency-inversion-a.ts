import { PostService } from './05-dependency-inversion-b';
import { JsonDataBaseService, LocalDataBaseService } from './05-dependency-inversion-c';

//* Main
(async () => {

    const provider = new LocalDataBaseService();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts });

})();