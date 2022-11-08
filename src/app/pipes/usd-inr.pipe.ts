import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cusromPipe'
})
export class UsdInrPipe implements PipeTransform {

  // transform(value: number, name:string, gender:string, ...args: number[]): unknown {
  //   const [x]=args;
  //   return value*x;
  // }

  transform(value: string, gender:string): string {
   if(gender==="Male"){
    return "Mr. "+value;
   }else{
    return "Miss. "+value;
   }
  }
}
