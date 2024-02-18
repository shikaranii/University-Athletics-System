import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Define a type for the request body
interface CreateStudentRequestBody {
  firstName: string;
  lastName: string;
  course: string;
  year: number; // Corrected type
  emergencyContact: string;
  emergencyContactPerson: string;
  nationality: string;
  weight: number; // Corrected type
  height: number; // Corrected type
  bloodType: string;
  acadYear: string;
}

export default async function createStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Type assertion for req.body
    const body = req.body as CreateStudentRequestBody;

    // Extract form data from the typed request body
    const {
      firstName,
      lastName,
      course,
      year,
      emergencyContact,
      emergencyContactPerson,
      nationality,
      weight,
      height,
      bloodType,
      acadYear,
    } = body;

    // Create a new student using Prisma
    const newStudent = await prisma.student.create({
      data: {
        firstName,
        lastName,
        course,
        year,
        emergencyContact,
        emergencyContactPerson,
        nationality,
        weight,
        height,
        bloodType,
        acadYear,
      },
    });

    // Send a success response with the created student
    res.status(201).json(newStudent);
  } catch (error) {
    // Handle errors
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Failed to create student' });
  }
}
