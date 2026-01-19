import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

const data = [
  {
    id: 1,
    category: "Backend",
    skills: ["Laravel", "NestJS", "Node.js", "MySQL", "PostgreSQL"]
  },
  {
    id: 2,
    category: "Frontend",
    skills: ["Next.js", "React", "Tailwind", "HTML", "CSS"]
  },
  {
    id: 3,
    category: "DevOps",
    skills: ["Linux", "Docker", "Nginx", "Git"]
  }
]

@Injectable()
export class SkillsService {
  create(createSkillDto: CreateSkillDto) {
    return 'This action adds a new skill';
  }

  getData() {
    return data;
  }

  findOne(id: number) {
    var skill = data.find(item => item.id === id);
    return skill;
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
