import { Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm'
import { Project } from './project.entity'
import { Skill } from '../../skills/entities/skill.entity'

@Entity('project_skills')
@Unique(['project', 'skill'])
export class ProjectSkill {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Project, project => project.skills, {
    onDelete: 'CASCADE',
  })
  project: Project

  @ManyToOne(() => Skill, skill => skill.projectSkills, {
    onDelete: 'CASCADE',
  })
  skill: Skill
}
