import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProjectImage } from './project-image.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  // Imagen principal
  @Column({ nullable: true })
  coverImage: string;

  @Column({ nullable: true })
  url: string;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => ProjectImage, image => image.project, {
    cascade: true,
  })
  images: ProjectImage[];
}