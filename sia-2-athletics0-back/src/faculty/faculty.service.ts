import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FacultyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFacultyDto: CreateFacultyDto) {
    return this.prisma.prismaClient.faculty.create({ 
      data: {
        name: createFacultyDto.name,
        email: createFacultyDto.email,
        year: createFacultyDto.year,
        emergencyContact: createFacultyDto.emergencyContact,
        emergencyContactPerson: createFacultyDto.emergencyContactPerson,
        nationality: createFacultyDto.nationality,
        weight: createFacultyDto.weight,
        height: createFacultyDto.height,
      }
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

  //this to update
  update(id: number, updateFacultyDto: UpdateFacultyDto) {
    return `This action updates a #${id} faculty`;
  }

  //edit this to remove/delete 
  async remove(id: number) {
    const existingFaculty = await this.prisma.prismaClient.faculty.findUnique({where: {id},
    });

    if (!existingFaculty) {
      throw new NotFoundException('Student with ID ${id} not found')
    }

    return this.prisma.prismaClient.faculty.delete({where: {id},});
  }
}
