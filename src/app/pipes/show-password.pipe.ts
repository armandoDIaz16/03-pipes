import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showPassword'
})
export class ShowPasswordPipe implements PipeTransform {

    transform(value: string, args1: boolean = false): string {
        let password = '';

        if (args1) {
          password = value;
          return password;
        } else {
          const lengthPassword = value.length;
          for (let index = 0; index < lengthPassword; index++) {
             password += '*';
          }
          return password;
        }

      }

}
