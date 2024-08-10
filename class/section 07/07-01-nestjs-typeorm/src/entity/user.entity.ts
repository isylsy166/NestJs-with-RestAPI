import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Posts } from './post.entity';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  // @Column({
  //   type: 'varchar',
  //   length: 50,
  //   nullable: true,
  //   default: 'default name',
  // })
  @Column()
  email: string;

  @Column({ default: 'default nickname' })
  nickname: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  // 데이터가 업데이트 될 때 마다 1씩 증가한다 초기값 : 1
  // save() 함수가 몇 번 불렸는지 기억
  @VersionColumn()
  version: number;

  @Column()
  @Generated('increment')
  additionalId: number;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  // 프로필
  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;

  // 게시물
  @OneToMany(() => Posts, (post) => post.author)
  posts: Posts[]; // 여러개를 받기 때문에 배열로
}
