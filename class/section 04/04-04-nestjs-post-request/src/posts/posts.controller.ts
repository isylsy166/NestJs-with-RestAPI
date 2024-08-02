import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostModel } from './posts.interface';

let posts: PostModel[] = [
  {
    id: 1,
    author: 'newjeans_official',
    title: '뉴진스 민지',
    content: '메이크업 하는 민지',
    likeCount: 1000000,
    commentCount: 5000,
  },
  {
    id: 2,
    author: 'newjeans_official',
    title: '뉴진스 혜린',
    content: '노래 연습하는 혜린',
    likeCount: 1000000,
    commentCount: 5000,
  },
  {
    id: 3,
    author: 'newjeans_official',
    title: '뉴진스 하니',
    content: '춤 연습하는 혜린',
    likeCount: 1000000,
    commentCount: 5000,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts() {
    return posts;
  }

  // GET /posts/:id
  @Get(':id')
  getPost(@Param('id') id: string) {
    const post = posts.find((post) => post.id === +id);
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  @Post()
  postPosts(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    const post: PostModel = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };

    posts = [...posts, post];

    return post;
  }
}
