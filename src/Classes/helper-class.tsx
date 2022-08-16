import { Doctor, MC_Prescription, Patient, Test_Prescription } from "./entity-class";

export function showSnackbar(enqueueSnackbar, data, onSuccess = () => {}) {
    data.message &&
      enqueueSnackbar(data.message, {
        variant: data.success ? "success" : "error",
      });
    data.success && onSuccess();
  }

  export class GeneratePrescription{
    patient: Patient;
    doctor: Doctor;
    medPresArray: MC_Prescription[];
    testPresArray: Test_Prescription[];
  }