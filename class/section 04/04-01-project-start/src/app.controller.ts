import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome() {
    return 'Home Page';
  }

  @Get('post')
  getPost(): Post {
    return {
      author: 'newjeans_official',
      title: '뉴진스 민지',
      content: '메이크업 하는 민지',
      likeCount: 1000000,
      commentCount: 5000,
    };
  }

  @Get('user')
  getUser() {
    return 'User Page';
  }
}
