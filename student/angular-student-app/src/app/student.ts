import {Clazz} from "./clazz";

export interface Student {
  id?:number;
  code?:string;
  name?:string;
  dayOfBirth?:string;
  gender?:string;
  address?:string;
  clazz?:Clazz;
}
