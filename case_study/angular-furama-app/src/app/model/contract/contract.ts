import {Customer} from '../customer/customer';
import {Facility} from '../facility/facility';

export interface Contract {
  id?:number;
  code?:string;
  startDate?:string;
  endDate?:string;
  deposit?:string;
  customer?:Customer;
  facility?:Facility;
}
