import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Class {
  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}

@Entity()
export class Major extends Class {
  @Column()
  name: string;
}

@Entity()
export class Minor extends Class {
  @Column()
  isExist: boolean;
}
