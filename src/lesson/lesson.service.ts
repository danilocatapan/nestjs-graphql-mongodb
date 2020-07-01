import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import * as faker from 'faker';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;

    const lesson = this.lessonRepository.create({
      id: faker.random.uuid(),
      name,
      startDate,
      endDate,
      students: []
    });

    return this.lessonRepository.save(lesson);
  }

  async getLesson(id): Promise<Lesson> {
    return this.lessonRepository.findOne({ id });
  }

  async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  async assignStudentsToLesson(lessonId: string, studentIds: string[]): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({ id: lessonId });
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonRepository.save(lesson);
  }
}
