﻿import { StatusUser } from "./StatusUser";
import { Role } from "./role";

export class User {
  idUser: number;
  nom: string;
  prenom: string;
  avatar: string;
  email: string;
  Status: StatusUser;

  password: string;
  rolee: Role;
  Tel: string;
  token?: string;


 
}
