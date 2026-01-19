import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';

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
  create(createEducationDto: CreateEducationDto) {
    return 'This action adds a new education';
  }

  getData() {
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} education`;
  }

  update(id: number, updateEducationDto: UpdateEducationDto) {
    return `This action updates a #${id} education`;
  }

  remove(id: number) {
    return `This action removes a #${id} education`;
  }
}
