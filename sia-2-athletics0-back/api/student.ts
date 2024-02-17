// api/students.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function createStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {  firstName, lastName, course, 
        year, emergencyContact, emergencyContactPerson,
        nationality, weight, height, bloodType, acadYear,  } = req.body; // Extract form data
    const newStudent = await prisma.student.create({
      data: {
        
        firstName, lastName, course, 
        year, emergencyContact, emergencyContactPerson,
        nationality, weight, height, bloodType, acadYear, 
      },
    });
    res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Failed to create student' });
  }
}
