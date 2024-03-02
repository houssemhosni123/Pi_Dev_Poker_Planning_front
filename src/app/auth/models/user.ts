import { StatusUser } from "./StatusUser";
import { Role } from "./role";

export class User {
  idUser: number;
  Nom: string;
  Prenom: string;
  avatar: string;
  email: string;
  password: string;
  rolee: Role;
  Status: StatusUser;
  Tel: string;
  token?: string;


 
}
