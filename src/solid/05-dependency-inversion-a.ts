import { PostService } from './05-dependency-inversion-b';

//* Main
(async () => {

    const postService = new PostService();

    const posts = await postService.getPosts();

    console.log({ posts });

})();