import {
  // Body,
  Controller,
  // Delete,
  Get,
  // HttpCode,
  // HttpStatus,
  // Param,
  // Patch,
  // Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

   @Get()
   getHello(): string {
     return this.appService.getHello();
   }

  // @Get()
  // getAll() {
  //   return 'This return a text';
  // }

  // @Get('notes')
  // getNotes() {
  //   return 'This return a notes';
  // }

  // /* @Get(':id')
  // getById(@Param() params) {
  //   return `This return a param ${params.id}`;
  // } */

  // @Get(':id')
  // getOnlyOneParamById(@Param('id') id: string) {
  //   return `This return a only param ${id}`;
  // }

  // /* @Post()
  // createStudent(@Body() body) {
  //   return body;
  // } */

  // @Post()
  // @HttpCode(HttpStatus.GONE)
  // createStudentByName(@Body('name') body) {
  //   return body;
  // }

  // @Patch(':id')
  // updateStudents(@Param('id') id: string) {
  //   return `This update an user by id`;
  // }

  // @Delete(':id')
  // deleteStudent(@Param('id') id: string) {
  //   return `Delete an user by id #${id}`;
  // }

  // @Get('/convert/:id')
  // convertNUmber(@Param('id') id: number) {
  //   return this.appService.convert(id);
  // }
}
