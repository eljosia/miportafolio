import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Image)
    private repo: Repository<Image>,
  ) {}

  findAll() {
    return this.repo.find({ order: { created_at: 'DESC' } });
  }

  create(data: Partial<Image>) {
    const image = this.repo.create(data);
    return this.repo.save(image);
  }
}
