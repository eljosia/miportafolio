import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('contact')
export class Contact {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column({ nullable: true })
  phone?: string

  @Column({ nullable: true })
  githubUrl?: string

  @Column({ nullable: true })
  linkedinUrl?: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
