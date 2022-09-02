export default interface IEmployee {
  registration: string;
  salary: number;
  admissionDate: string;
  generateRegistration(): string;
}