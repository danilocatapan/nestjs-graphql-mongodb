import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { CreateStudentInput } from './student.input';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(
    private readonly studentService: StudentService
  ) {}

  @Mutation(returns => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query(returns => [StudentType])
  async students() {
    return this.studentService.getStudents();
  }

  @Query(returns => StudentType)
  async student(
    @Args('id') id: string,
  ) {
    return this.studentService.getStudent(id);
  }
}