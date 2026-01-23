import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

import { SkillCategory } from './skill-category.entity'
import { ProjectSkill } from '../../projects/entities/project-skill.entity'

@Entity('skills')
@Unique(['name', 'category'])
export class Skill {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  level?: number

  @Column({ nullable: true })
  icon?: string

  @ManyToOne(() => SkillCategory, category => category.skills, {
    onDelete: 'CASCADE',
  })
  category: SkillCategory

  @OneToMany(() => ProjectSkill, ps => ps.skill)
  projectSkills: ProjectSkill[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
