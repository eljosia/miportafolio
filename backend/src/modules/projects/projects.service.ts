import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { ProjectSkill } from './entities/project-skill.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,

    @InjectRepository(ProjectSkill)
    private readonly projectSkillRepo: Repository<ProjectSkill>,
  ) { }

  async saveProjectSkills(projectId: number, skillIds: number[]) {
    const relations = skillIds.map(skillId =>
      this.projectSkillRepo.create({
        project: { id: projectId },
        skill: { id: skillId },
      }),
    );

    return this.projectSkillRepo.save(relations);
  }

  async create(createProjectDto: CreateProjectDto) {
    const { skillIds, ...projectData } = createProjectDto;

    // Crear proyecto
    const project = this.projectRepo.create(projectData);
    const savedProject = await this.projectRepo.save(project);

    // Crear relaciones
    if (skillIds?.length) {
      await this.saveProjectSkills(savedProject.id, skillIds);
    }

    return JSON.stringify({ message: 'Project created successfully', data: savedProject });
  }

  getData() {
    return this.projectRepo.find({
      relations: {
        skills: {
          skill: true,
        },
      },
      order: {
        order: 'ASC',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  async update(id: number, dto: UpdateProjectDto) {
    const { skillIds, ...projectData } = dto;

    await this.projectRepo.update(id, projectData);

    if (skillIds) {
      await this.projectSkillRepo.delete({
        project: { id },
      });

      await this.saveProjectSkills(id, skillIds);
    }

    return JSON.stringify({ message: 'Project updated successfully', data: this.findOne(id) });
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
