import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(T: any, ch: string): any {
    if (ch === undefined) {
      return T
    }

    return T.filter((obj: any) => {
      return (
        obj.teamOne.toLowerCase().includes(ch.toLowerCase()) ||
        obj.teamTwo.toLowerCase().includes(ch.toLowerCase())
      );
    });
  }

}
