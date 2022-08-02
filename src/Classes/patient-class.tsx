export class Person{
    id?:number;
    firstName?:string;
    lastName?:string;
    gender?:string;
    email?:string;
    mobileNo?:string;
    password?:string;
    dateOfBirth?: Date | null;
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
    speciality?:Speciality;
    person?: Person;

}
export class Speciality{
    id?:number;
    name?:string;
    description?:string | null;
}

export class _Rating{
    id?:number;
    ratingVal?:number | null;
    patient?:Patient;
    doctor?:Doctor;
}