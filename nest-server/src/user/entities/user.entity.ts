import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pageData: string;

  @Column()
  account: string;

  @Column()
  password: string;

  @Column()
  createTime: Date;

  @Column()
  updateTime: Date;
}
