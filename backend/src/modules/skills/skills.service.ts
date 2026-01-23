import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';
import { SkillCategory } from './entities/skill-category.entity';
import { CreateSkillCategoryDto } from './dto/create-skill-category.dto';


@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillRepo: Repository<Skill>,

    @InjectRepository(SkillCategory)
    private readonly skillCategoryRepo: Repository<SkillCategory>,
  ) {}


  createCategory(createSkillCategoryDto: CreateSkillCategoryDto) {
    //CREA UNA CATEGORIA PARA SKILLS
    const newCategory = this.skillCategoryRepo.create(createSkillCategoryDto);
    return this.skillCategoryRepo.save(newCategory);
  }

 async create(dto: CreateSkillDto) {
    const category = await this.skillCategoryRepo.findOne({ where: { id: dto.categoryId } });
    if (!category) {
      return JSON.stringify({ message: 'Category not found' });
    }

    const skill = this.skillRepo.create({
      name: dto.name,
      level: dto.level,
      icon: dto.icon,
      category: category,
    });

    return this.skillRepo.save(skill);
  }

  getData() {
    // Obtener todos los registros

    return this.skillRepo.find({
      relations: {
        category: true,
      },
    });
  }

  getCategoryData() {
    // Obtener todos los registros

    return this.skillCategoryRepo.find();
  }

  findOne(id: number) {
    const skill = this.skillRepo.findOne({ where: { id } });
    if (!skill) {
      return JSON.stringify({ message: 'Skill not found' });
    }
    return skill;
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
