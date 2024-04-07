import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get('all')
  obtainStudents() {
    return this.studentService.findAll();
  }

  @Post('create')
  createStudents(@Body() body) {
    return this.studentService.create(body);
  }

  @Patch('update/:id/name/:name')
  updateStudent(@Param() params) {
    return this.studentService.update(params);
  }

  @Delete('delete/id/:id')
  deleteStudent(@Param() params) {
    return this.studentService.delete(params);
  }
}
