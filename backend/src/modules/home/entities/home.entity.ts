import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('home')
export class Home {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  subtitle: string

  @Column()
  profileImage: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
