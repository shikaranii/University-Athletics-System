import { SportCategory } from 'src/enums';
export class CreateStudentDto {
    firstName: string;   
    lastName: string;   
    sports: SportCategory[];
    contact: number;
    course: string; 
    year: number; 
    birthdate: string;
    nationality: string;
    weight: number; 
    height: number; 
    emergencyContact: number; 
    emergencyContactPerson: string;
    medicalCertificate: string | null; 
    bloodType: string;
    // Add other required properties...
}
