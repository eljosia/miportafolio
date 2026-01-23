import { Injectable } from '@nestjs/common';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Home } from './entities/home.entity';
import { Repository } from 'typeorm'

const data = {
  profile_image: '/profile.jpg',
  title: 'José Ángel Rodriguez Corona',
  subtitle: 'Full Stack Developer',
}

@Injectable()
export class HomeService {

  constructor(@InjectRepository(Home)
  private readonly homeRepo: Repository<Home>) {}

  create(createHomeDto: CreateHomeDto) {
    // Agregar nuevo registro
    const newHome = this.homeRepo.create(createHomeDto);
    return this.homeRepo.save(newHome);
  }

  getData() {
    return this.homeRepo.find();
  }

  update(id: number, updateHomeDto: UpdateHomeDto) {
    return `This action updates a #${id} home`;
  }

  remove(id: number) {
    return `This action removes a #${id} home`;
  }
}
