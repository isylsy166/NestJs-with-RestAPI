import { Injectable, NotFoundException } from '@nestjs/common';
import { IPostModel } from './posts.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PostModel } from './entities/posts.entity';

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

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostModel)
    private readonly postRepository: Repository<PostModel>,
  ) {}

  async getAllPosts() {
    return this.postRepository.find();
  }

  async getPostById(id) {
    const post = await this.postRepository.findOne({
      where: {
        id: id, // 또는 그냥 id
      },
    });

    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  // async createPost(author: string, title: string, content: string) {
  async createPost(postData: IPostModel) {
    // 1. 저장할 객체를 생성한다
    const post = this.postRepository.create({
      // id는 자동생성
      author: postData.author,
      title: postData.title,
      content: postData.content,
      likeCount: 0,
      commentCount: 0,
    });

    // 2. 객체를 저장한다
    const newPost = await this.postRepository.save(post);

    return newPost;
  }

  async updatePost(
    postId: number,
    author: string,
    title: string,
    content: string,
  ) {
    //save의 기능
    // id 기준으로 데이터가 존재하지 않는다면 새로 생성한다
    // 데이터가 존재한다면 => 존재하는 값을 업데이트 한다
    const post = await this.postRepository.findOne({ where: { id: postId } });

    if (!post) {
      throw new NotFoundException();
    }

    if (author) {
      post.author = author;
    }

    if (title) {
      post.title = title;
    }

    if (content) {
      post.content = content;
    }

    const newPost = await this.postRepository.save(post);

    return newPost;
  }

  async deletePost(postId: number) {
    const post = await this.postRepository.findOne({ where: { id: postId } });
    if (!post) {
      throw new NotFoundException();
    }

    const newPost = this.postRepository.delete(postId);

    return newPost;
  }
}
