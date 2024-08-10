import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Role, User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { Profile } from './entity/profile.entity';
import { Posts } from './entity/post.entity';
import { title } from 'process';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    @InjectRepository(Posts)
    private readonly postRepository: Repository<Posts>,
  ) {}

  @Post('users')
  postUser() {
    return this.userRepository.save({});
  }

  @Get('users')
  getUsers() {
    return this.userRepository.find({
      relations: {
        profile: true,
      },
    });
  }

  @Patch('users/:id')
  async patchUser(@Param('id') id: string) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    return this.userRepository.save({ ...user });
  }

  @Post('user/profile')
  async createUserAndProfile() {
    const user = await this.userRepository.save({
      email: 'soyeon@codefactory.ai',
    });
    const profile = await this.profileRepository.save({
      profileImg: 'asdf.jpg',
      user: user,
    });

    return user;
  }

  @Post('user/post')
  async createUserAndPosts() {
    const user = await this.userRepository.save({
      email: 'soyeon@codefactory.ai',
    });

    const post1 = await this.postRepository.save({
      author: user,
      title: 'post 1',
    });

    const post2 = await this.postRepository.save({
      author: user,
      title: 'post 2',
    });

    return user;
  }
}
