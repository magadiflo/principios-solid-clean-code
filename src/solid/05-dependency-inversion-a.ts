import { PostService } from './05-dependency-inversion-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-inversion-c';

//* Main
(async () => {

    const providerLocal = new LocalDataBaseService();
    const providerJson = new JsonDataBaseService();
    const providerWebApi = new WebApiPostService();

    const postService = new PostService(providerWebApi);

    const posts = await postService.getPosts();

    console.log({ posts });

})();