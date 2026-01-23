import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './entities/education.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

const data = [
  {
    id: 1,
    title: 'Ingeniería en Sistemas',
    place: 'Universidad X',
    year: '2018 - 2022',
  },
]

@Injectable()
export class EducationService {

  constructor(@InjectRepository(Education)
  private readonly educationRepo: Repository<Education>
  ) { }


  create(createEducationDto: CreateEducationDto) {
    // Agregar nuevo registro
    const newEducation = this.educationRepo.create(createEducationDto);
    return JSON.stringify({ message: 'Education created successfully', data: this.educationRepo.save(newEducation) });
  }

  getData() {
    return this.educationRepo.find();
  }

  findOne(id: number) {
    const education = this.educationRepo.findOne({ where: { id } });
    if (!education) {
      return JSON.stringify({ message: 'Education not found' });
    }
    return JSON.stringify({ message: 'Education found', data: education });
  }

  update(id: number, updateEducationDto: UpdateEducationDto) {
    const education = this.educationRepo.findOne({ where: { id } });
    if (!education) {
      return JSON.stringify({ message: 'Education not found' });
    }
    this.educationRepo.update(id, updateEducationDto);
    return JSON.stringify({ message: 'Education updated successfully', data: this.findOne(id) });
  }

  remove(id: number) {
    return `This action removes a #${id} education`;
  }
}
