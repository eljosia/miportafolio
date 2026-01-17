import { Controller, Get, Post, Body } from '@nestjs/common';
import { GalleryService } from './gallery.service';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get()
  getAll() {
    return this.galleryService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.galleryService.create(body);
  }
}