import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.posts)
  author: User;

  @Column()
  title: string;
}
