import { FormikProps, FormikValues } from 'formik';
import { ReactNode } from 'react';

export interface AppUser {
  email?: string;
  role?: UserRole;
  id?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  image?: string;
}
export enum UserRole {
  // eslint-disable-next-line no-unused-vars
  ADMIN = 'ADMIN',
  // eslint-disable-next-line no-unused-vars
  USER = 'USER',
  // eslint-disable-next-line no-unused-vars
  STAFF = 'STAFF',
  // eslint-disable-next-line no-unused-vars
  GUEST = 'GUEST',
}
export interface FormValues {
  fullname: string;
  dob: string;
  gender: 'male' | 'female';
  religion: 'christian' | 'muslim' | 'traditional' | 'not';
  nationality: string;
  address: string;
  phone: string;
  email: string;
  currentSchool: string;
  studentClass: 'JSS1' | 'JSS2' | 'TBD';
  achievements?: string;
  extracurricular?: string;
  parentname: string;
  parentEmail: string;
  parentphone: string;
  parentoccupation: string;
}

export interface UploadType {
  photo?: string | null;
  birthCert?: string | null;
  signature?: string | null;
}

export interface AppDataType {
  name: string;
  [key: string]: string;
}
export interface EnrollmentFormProps {
  formik: FormikProps<FormikValues>;
  handleUpload: (
    acceptedFiles: File[],
    type: 'photo' | 'birthCert' | 'signature',
  ) => Promise<string | undefined>;
  handleDelete: (type: keyof UploadType) => void;
  uploadType: UploadType;
  isUploading: boolean;
  user: AppUser;
  AppData: AppDataType;
}

export interface FormSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface FormFieldProps {
  label: string;
  id: keyof FormValues;
  error?: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'select';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  options?: SelectOption[];
}
export interface HeaderProps {
  user?: AppUser | null;
  onSignOut?: () => void;
}
export type Gender = 'male' | 'female';
export type Religion = 'christian' | 'muslim' | 'traditional' | 'none';

export interface StudentFormValues {
  // Student Information
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  religion: Religion;
  nationality: string;
  address: string;
  phone: string;
  email: string;

  // Academic Information
  currentSchool: string;
  classApplying: string;
  achievements?: string;
  extracurricular?: string;

  // Parent/Guardian Details
  parentName: string;
  parentEmail: string;
  parentPhone: string;
}

export interface FormSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export interface StudentFormFieldProps {
  label: string;
  error?: string;
  touched?: boolean;
  required?: boolean;
  children: React.ReactNode;
}
