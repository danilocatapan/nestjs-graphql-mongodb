import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import * as faker from 'faker';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>
  ) {}

  async createLesson(name, startDate, endDate): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: faker.random.uuid(),
      name,
      startDate,
      endDate
    });

    return this.lessonRepository.save(lesson);
  }
}
