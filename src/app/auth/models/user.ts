import { Role } from "./role";

export class User {
  idUser: number;
  Nom: string;
  Prenom: string;
  avatar: string;
  email: string;
  password: string;
  rolee: Role;
  Status: boolean;
  Tel: string;
  token?: string;


 
}
