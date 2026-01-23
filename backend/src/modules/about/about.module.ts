import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { About } from './entities/about.entity';


@Module({
  controllers: [AboutController],
  providers: [AboutService],
  imports: [TypeOrmModule.forFeature([About])],
})
export class AboutModule {}
