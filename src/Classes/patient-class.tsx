export class Person{
    id?:number;
    firstName?:string;
    lastName?:string;
    gender?:string;
    email?:string;
    mobileNo?:string;
    password?:string;
    dateOfBirth?: Date;
}

export class Patient{
    id?:number;
    address?:string;
    person?: Person;
}
export class Doctor{
    id?:number;
    chamber?:string;
    bmdcNo?:string;
    nid?:string;
    speciality?:string;
    person?: Person;

}
export class Speciality{
    id?:number;
    name?:string;
    description?:string;
}