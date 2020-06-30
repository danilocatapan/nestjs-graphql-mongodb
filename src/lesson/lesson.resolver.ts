import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
  @Query(returns => LessonType)
  lesson() {
    return {
      id: 'abc123',
      name: 'Danilo',
      startDate: (new Date()).toISOString(),
      endDate: (new Date()).toISOString()
    }
  }
}