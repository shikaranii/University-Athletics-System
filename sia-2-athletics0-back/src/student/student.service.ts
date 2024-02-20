import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
    constructor(private readonly prisma: PrismaService) {}
    
  async create(createStudentDto: CreateStudentDto) {
    return this.prisma.prismaClient.student.create({ data: createStudentDto});
  }

  async findAll() {
    return this.prisma.prismaClient.student.findMany();
  }

  async findOne(id: number) {
    const student = this.prisma.prismaClient.student.findUnique({ where: {id },
    });

    if (!student) {
      throw new NotFoundException('Student with ID ${id} not found')
    }
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
