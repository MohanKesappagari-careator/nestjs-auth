import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../role';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;
}
