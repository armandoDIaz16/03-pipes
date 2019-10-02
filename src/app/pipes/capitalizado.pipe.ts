import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizado' })
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, args1 = true): any {

        let nombres = value.split(' ');
        if (args1) {
            nombres = nombres.sort();
        } else {
            nombres = nombres.reverse();
        }
        return nombres.join(' ');

    }
}