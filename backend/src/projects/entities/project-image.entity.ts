import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class ProjectImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column({ default: 0 })
  order: number;

  @ManyToOne(() => Project, project => project.images, {
    onDelete: 'CASCADE',
  })
  project: Project;
}
