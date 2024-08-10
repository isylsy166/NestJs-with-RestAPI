import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn() //User테이블에 있는 id를 Profile 테이블에서도 갖게 된다
  user: User;

  @Column()
  profileImg: string;
}
