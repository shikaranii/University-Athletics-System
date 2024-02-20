import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
    constructor(private readonly prisma: PrismaService) {}
    
    //create
  async create(createStudentDto: CreateStudentDto) {
    return this.prisma.prismaClient.student.create({ data: createStudentDto});
  }
   //read
  async findAll() {
    return this.prisma.prismaClient.student.findMany();
  }
  //read pne
  async findOne(id: number) {
    const student = this.prisma.prismaClient.student.findUnique({ where: {id },
    });

    if (!student) {
      throw new NotFoundException('Student with ID ${id} not found')
    }

    return student;
  }
   //update
  async update(id: number, updateStudentDto: UpdateStudentDto) {
   const existingStudent = this.prisma.prismaClient.student.findUnique({ where: {id},
  });
  
  if (!existingStudent) {
    throw new NotFoundException('Student with ID ${id} not found')
  }

  return this.prisma.prismaClient.student.update({where: {id},
  data: updateStudentDto})
  }

  //delete 
  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
