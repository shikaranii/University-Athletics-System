// types.ts     
export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    contact: number;
    course: string;
    // courseId: number;
    year: number;
    // emergencyContact: number;
    // emergencyContactPerson: string;
    nationality: string;
    weight: number;
    height: number;
    birthDate: number;
    // bloodType: string;
    // acadYear: number;
    // statusId: number;
    // status: Status;
    sport: SportCategory[];  // Optional as it's a one-to-one relationship
    // sportId?: number; // Optional as it's a foreign key referencing Sport
    // createdAt: Date;
    // updatedAt: Date;
  }
  
  // // Define the Status type
  // export interface Status {
  //   id: number;
  //   // Define other fields if any
  // }
  
  // Define the Sport type
  
  // export enum SportCategory {
  //   DoTA = 'DoTA',
  //   Valorant = 'Valorant',
  //   SwimmingMen = 'Swimming Men',
  //   SwimmingWomen = 'Swimming Women',
  //   BasketballMen = 'Basketball Men',
  //   BasketballWomen = 'Basketball Women',
  // }
  export interface Sports {
   id: number;
   name: string;
   students: Student[]; // One-to-many relationship with Student
   category: SportCategory;
   //   createdAt: Date;
  //   updatedAt: Date;
  }

  export type SportList = Sports[];
  
  // Define the SportCategory type if it exists
  
  export interface Events {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
  }
  export interface Faculty {
    id: number;
    name: string;
    lastName: string;
    contact: number;
    course: string;
    // courseId: number;
    year: number;
    // emergencyContact: number;
    // emergencyContactPerson: string;
    // nationality: string;
    weight: number;
    height: number;
    birthDate: number;
    // bloodType: string;
    // acadYear: number;
    // statusId: number;
    // status: Status;
    sport: SportCategory;  // Optional as it's a one-to-one relationship
    // sportId?: number; // Optional as it's a foreign key referencing Sport
    // createdAt: Date;
    // updatedAt: Date;
  }
  
  export enum SportCategory {

    Valorant = 'Valorant',
    SwimmingMen = 'SwimmingMen',
    SwimmingWomen = 'SwimmingWomen',
    BasketballMen = 'BasketballMen',
    BasketballWomen = 'BasketballWomen',
   
  }