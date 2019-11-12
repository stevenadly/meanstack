import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTrim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any,length: number): any {

    return value.substr(0,length);
  }

}
