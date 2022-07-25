export class Person{
    id?:number;
    firstName?:string;
    lastName?:string;
    gender?:string;
    email?:string;
    mobileNo?:string;
    password?:string;
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
    person?: Person;

}