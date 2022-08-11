export class Person{
    id?:number;
    firstName?:string;
    lastName?:string;
    gender?:string;
    email?:string;
    mobileNo?:string;
    password?:string;
    dateOfBirth?: Date | null;
    role?:string;
    height?:string;
    weight?:string;
}

export class Patient{
    id?:number;
    address?:string;
    person?: Person;
    height?:number;
    weight?:number;
}
export class Doctor{
    id?:number;
    chamber?:string;
    bmdcNo?:string;
    nid?:string;
    speciality?:Speciality;
    person?: Person;
    experience?:number;
    fee?:number;
    degree?:number;

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
export class Payment{
    id?:number;
    method?:string;
    amount?:number;
    acc_no?:string;
}
export class Appointment{
    id?:number;
    patient?:Patient;
    doctor?:Doctor;
    date?:Date=new Date();
    payment?:Payment;
    problem?:string;
    status?:string;
    commentFromDoctor?:string;
    dateGivenByDoctor?:Date;
}
export class Prescription{
    id?:number;
    problem?:string;
    appointment?:Appointment;

}
export class Medicine{
    id?:number;
    name?:string;
    weight?:number;
    expirydate?:Date |null;
}
export class Test{
    id?:number;
    name?:string;
}
export class Test_Prescription{
    id?:number;
    prescription?:Prescription;
    test?:Test;
    finding?:string;
}
export class MC_Prescription{
    id?:number;
    prescription?:Prescription;
    medicine?:Medicine;
    dose?:number;
    duration?:number;
}
export class _Notification{
    id?:number;
    receiver?:Person;
    type?:string;
    message?:string;
    status?:string;

}

export class TakerSpeciality
{
    id?:number;
    name?:string;
    description?:string | null;
}

export class Taker{
    id?:number;
    pathology_registration_no?:string;
    nid?:string;
    takerSpeciality?:TakerSpeciality;
    person?:Person;
    
}