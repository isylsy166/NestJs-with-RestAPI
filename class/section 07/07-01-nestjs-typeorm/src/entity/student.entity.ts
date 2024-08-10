import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Name {
  @Column()
  name: string;

  @Column()
  class: string;
}

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: string;

  @Column(() => Name)
  name: Name;

  @Column()
  studentNumber: string;

  @Column()
  class: string;
}

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column(() => Name)
  name: Name;

  @Column()
  class: string;

  @Column()
  salary: number;
}
