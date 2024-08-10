import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Professor, Student } from './entity/student.entity';
import { Major, Minor } from './entity/class.entity';
import { Profile } from './entity/profile.entity';
import { Posts } from './entity/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User, //
      Profile,
      Posts,
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres', // 데이터베이스 타입
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'typeormstudy',
      entities: [
        User,
        Student,
        Professor,
        Major,
        Minor, //
        Profile,
        Posts,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
