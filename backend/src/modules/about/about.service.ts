import { Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { About } from './entities/about.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


const data = {
  description:
    'Desarrollador Full Stack con experiencia en Laravel, Node.js y NestJS.',
}

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private readonly aboutRepo: Repository<About>,
  ) { }

  async createOrUpdate(createAboutDto: CreateAboutDto) {
    const about = await this.aboutRepo.findOne({ where: { id: 1 } });

    if (about) {
      about.description = createAboutDto.description;
      return this.aboutRepo.save(about);
    }

    const newAbout = this.aboutRepo.create({
      id: 1,
      ...createAboutDto,
    });

    return this.aboutRepo.save(newAbout);
  }

  create(createAboutDto: CreateAboutDto) {
    // Agregar nuevo registro
    const newAbout = this.aboutRepo.create(createAboutDto);
    return this.aboutRepo.save(newAbout);
  }

  getData() {
    return this.aboutRepo.findOne({ where: { id: 1 } });
  }

  update(id: number, updateAboutDto: UpdateAboutDto) {
    return `This action updates a #${id} about`;
  }

  remove(id: number) {
    return `This action removes a #${id} about`;
  }
}
