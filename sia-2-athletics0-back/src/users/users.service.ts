import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return  this.prisma.prismaClient.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
        role: createUserDto.role,
      },
    });
  }

  async findAll() {
    return this.prisma.prismaClient.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.prismaClient.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.prisma.prismaClient.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return this.prisma.prismaClient.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    const existingUser = await this.prisma.prismaClient.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Then, delete the user
    return this.prisma.prismaClient.user.delete({
      where: { id },
    });
  }
}