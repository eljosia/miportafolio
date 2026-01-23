import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { CreateSkillCategoryDto } from './dto/create-skill-category.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('/api/skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/category')
  createCategory(@Body() createSkillCategoryDto: CreateSkillCategoryDto) {
    return this.skillsService.createCategory(createSkillCategoryDto);
  }

  @Get()
  findAll() {
    return this.skillsService.getData();
  }

  @Get('/category')
  findCategory() {
    return this.skillsService.getCategoryData();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(+id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(+id);
  }
}
