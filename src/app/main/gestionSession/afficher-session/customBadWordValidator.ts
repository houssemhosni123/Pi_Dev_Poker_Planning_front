import { AbstractControl } from "@angular/forms";

export function customBadWordValidator(forbiddenWords: string[]) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (forbiddenWords.some(w => control.value.includes(w))) {
        return { badWord: 'The form contains a forbidden word.' };
      }
      return null;
    };
  }