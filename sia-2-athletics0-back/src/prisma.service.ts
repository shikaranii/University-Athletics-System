import { Injectable } from '@nestjs/common';
import { PrismaClient, Student } from '@prisma/client';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getPrismaClient(): PrismaClient {
    return this.prisma;
  }
  
  async createStudent(data: Partial<Student>): Promise<Student> {
    return this.prisma.student.create({ data });
  }

  async getAllStudents(): Promise<Student[]> {
    return this.prisma.student.findMany();
  }

  async getStudentById(id: number): Promise<Student | null> {
    return this.prisma.student.findUnique({ where: { id } });
  }

  async updateStudent(id: number, data: Partial<Student>): Promise<Student> {
    return this.prisma.student.update({ where: { id }, data });
  }

  async deleteStudent(id: number): Promise<Student> {
    return this.prisma.student.delete({ where: { id } });
  }
}
