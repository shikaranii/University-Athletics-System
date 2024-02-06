export class CreatePersonDto {}
interface CreatePersonDTO {
    firstName: string;
    lastName: string;
    emergencyContact: number;
    emergencyContactPerson: string;
    nationalityId: number;
    weight: number;
    height: number;
    bloodId: number;
    acadYear: number;
    statusId: number;
  }
  
  export default CreatePersonDTO;