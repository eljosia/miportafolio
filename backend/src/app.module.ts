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
import { TypeOrmModule } from '@nestjs/typeorm'
import { env } from 'process';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersController } from './modules/users/users.controller';

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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.DATABASE_HOST,
      port: env.DATABASE_PORT ? parseInt(env.DATABASE_PORT) : 3306,
      username: env.DATABASE_USER,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: env.DATABASE_SYNC === 'true' ? true : false, // never use TRUE in production
      logging: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
