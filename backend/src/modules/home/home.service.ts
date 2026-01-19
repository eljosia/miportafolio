import { Injectable } from '@nestjs/common';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';

const data = {
  profile_image: '/profile.jpg',
  title: 'José Ángel Rodriguez Corona',
  subtitle: 'Full Stack Developer',
}

@Injectable()
export class HomeService {
  create(createHomeDto: CreateHomeDto) {
    return 'This action adds a new home';
  }

  getData() {
    return data;
  }

  update(id: number, updateHomeDto: UpdateHomeDto) {
    return `This action updates a #${id} home`;
  }

  remove(id: number) {
    return `This action removes a #${id} home`;
  }
}
