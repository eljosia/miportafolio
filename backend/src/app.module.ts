import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';
import { SkillsModule } from './modules/skills/skills.module';
import { EducationModule } from './modules/education/education.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HomeModule,
    AboutModule,
    SkillsModule,
    EducationModule,
    ProjectsModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
