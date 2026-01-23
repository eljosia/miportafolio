import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Skill } from './skill.entity'

@Entity('skill_categories')
@Unique(['name'])
export class SkillCategory {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ default: 0 })
  order: number

  @OneToMany(() => Skill, skill => skill.category)
  skills: Skill[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
