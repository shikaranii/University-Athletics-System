// types.ts     

export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    course: string;
    courseId: number;
    year: number;
    emergencyContact: number;
    emergencyContactPerson: string;
    nationality: string;
    weight: number;
    height: number;
    bloodType: string;
    acadYear: number;
    statusId: number;
    status: Status;
    sport?: Sport; // Optional as it's a one-to-one relationship
    sportId?: number; // Optional as it's a foreign key referencing Sport
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Define the Status type
  export interface Status {
    id: number;
    // Define other fields if any
  }
  
  // Define the Sport type
  export interface Sport {
    id: number;
    name: string;
    sportCategory: SportCategory;
    students: Student[]; // One-to-many relationship with Student
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Define the SportCategory type if it exists
  export interface SportCategory {
    // Define fields for SportCategory if needed
  }
  