import { Module } from '@nestjs/common';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';


@Module({
  controllers: [GalleryController],
  providers: [GalleryService],
  imports: [TypeOrmModule.forFeature([Image])]
})
export class GalleryModule {}
