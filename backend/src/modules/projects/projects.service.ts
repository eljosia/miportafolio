import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

const data = [
  {
        id: 1,
        title: 'POS Restaurante',
        image: '/demo.jpg',
        gitHubUrl: 'https://github.com/user/repo',
        demoUrl: 'https://demo.com',
      },
      {
        id: 2,
        title: 'POS Restaurante',
        image: '/demo.jpg',
      },
      {
        id: 3,
        title: 'POS Restaurante',
        image: '/demo.jpg',
        gitHubUrl: 'https://github.com/user/repo',
        demoUrl: 'https://demo.com',
      },
      {
        id: 4,
        title: 'POS Restaurante',
        image: '/demo.jpg',
      },
]
@Injectable()
export class ProjectsService {
  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  getData() {
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
