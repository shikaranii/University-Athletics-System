import { Controller, Post, Get, Body } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; // Update the path if needed

@Controller('Student')
export class StudentsController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async createStudent(@Body() body: any) {
    try {
      const newStudent = await this.prismaService.createStudent(body);
      return newStudent;
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }

  @Get()
  async getAllStudents() {
    try {
      return await this.prismaService.getAllStudents();
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }
}
