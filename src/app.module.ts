import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './student/students.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://anacaszapata:khvrES0VEKyM0QVF@estudiantesprofesores.ukdbcld.mongodb.net/',
    ),
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
