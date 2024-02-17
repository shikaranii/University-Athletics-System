import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async createStudent(@Body() body: any) {
    try {
      const { firstName, lastName, course, 
            year, emergencyContact, emergencyContactPerson,
            nationality, weight, height, bloodType, acadYear, 
            } = body;
      const newStudent = await this.prismaService.Student.create({
        data: {
            firstName, lastName, course, 
            year, emergencyContact, emergencyContactPerson,
            nationality, weight, height, bloodType, acadYear, 
        }
      });
      return newStudent;
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }

  @Get()
  async getAllStudents() {
    try {
      return await this.prismaService.Student.findMany();
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }

  // Similarly, define methods for updating and deleting students
}