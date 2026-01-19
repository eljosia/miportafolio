import { Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';

const data = {
  description:
        'Desarrollador Full Stack con experiencia en Laravel, Node.js y NestJS.',
}

@Injectable()
export class AboutService {
  create(createAboutDto: CreateAboutDto) {
    return 'This action adds a new about';
  }

  getData() {
    return data;
  }

  update(id: number, updateAboutDto: UpdateAboutDto) {
    return `This action updates a #${id} about`;
  }

  remove(id: number) {
    return `This action removes a #${id} about`;
  }
}
