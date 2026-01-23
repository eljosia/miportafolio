import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { Home } from './entities/home.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [HomeController],
  providers: [HomeService],
  imports: [TypeOrmModule.forFeature([Home])],
})
export class HomeModule {}
