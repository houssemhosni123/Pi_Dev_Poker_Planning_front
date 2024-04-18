import { User } from "app/auth/models";

export class Chat {
    id: number;
    
    content: string;
    auteur: User;
  }