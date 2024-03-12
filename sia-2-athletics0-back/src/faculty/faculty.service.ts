import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FacultyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFacultyDto: CreateFacultyDto) {
    return this.prisma.prismaClient.faculty.create({ 
      data: 
      name: createFacultyDto.name,
      email: createFacultyDto.email,
      year: createFacultyDto.year,
      emergencyContact: createFacultyDto.emergencyContact,
      emergencyContactPerson: createFacultyDto.emergencyContactPerson,
      nationality: createFacultyDto.nationality,
      weight: createFacultyDto.weight,
      height: createFacultyDto.height
      bloodType: createFacultyDto.bloodType,
    });
  }
  async findAll() {
    return this.prisma.prismaClient.faculty.findMany();
  }

  async findOne(id: number) {
    const faculty = this.prisma.prismaClient.faculty.findUnique({ where: {id },
    });

    if (!faculty) {
      throw new NotFoundException('Faculty Member with ID ${id} not found')
    }

    return faculty;
  }
  update(id: number, updateFacultyDto: UpdateFacultyDto) {
    return `This action updates a #${id} faculty`;
  }

  remove(id: number) {
    return `This action removes a #${id} faculty`;
  }
}
