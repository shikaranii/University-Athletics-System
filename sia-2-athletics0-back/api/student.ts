// api/students.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function createStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, age, ...otherFields } = req.body; // Extract form data
    const newStudent = await prisma.student.create({
      data: {
        name,
        age,
        // Other fields...
      },
    });
    res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Failed to create student' });
  }
}
