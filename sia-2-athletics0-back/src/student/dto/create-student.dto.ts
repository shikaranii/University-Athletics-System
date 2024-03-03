export class CreateStudentDto {
    firstName: string;   
    lastName: string;   
    sport: {
        connect: {
            id: number; // Assuming you're connecting by ID
        };
    };
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
