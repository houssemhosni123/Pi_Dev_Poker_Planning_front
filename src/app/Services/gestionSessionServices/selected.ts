import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedUserStoryService {
  selectedUserStoryTitle: string | undefined;

  constructor() { }
}