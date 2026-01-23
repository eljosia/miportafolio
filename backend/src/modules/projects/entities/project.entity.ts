import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { ProjectSkill } from './project-skill.entity'

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ nullable: true, type: 'text' })
  description?: string

  @Column({ nullable: true })
  image?: string

  @Column({ nullable: true })
  githubUrl?: string

  @Column({ nullable: true })
  demoUrl?: string

  @Column({ default: false })
  featured: boolean

  @Column({ default: 0 })
  order: number

  @OneToMany(() => ProjectSkill, ps => ps.project)
  skills: ProjectSkill[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
