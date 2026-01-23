import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) { }

  findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email, isActive: true } });
  }
  async createAdmin() {
    const exists = await this.userRepo.findOne({
      where: { email: 'admin@admin.com' },
    })

    if (exists) {
      return { message: 'Admin already exists' }
    }

    const password = await bcrypt.hash('admin123', 10)

    const user = this.userRepo.create({
      email: 'admin@admin.com',
      password,
    })

    await this.userRepo.save(user)

    return { message: 'Admin user created' }
  }
}