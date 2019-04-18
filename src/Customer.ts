import { CustomerAddress } from './CustomerAddress';

export class DPSCustomer {
    constructor(public vatnumber:number, 
        public checkcheck: boolean,
        public creditlimt:number,
        public customername: string,
        public officialname: string,
        public legalform: string,
        public street:string,
        public streetno: number,
        public bus: string,
        public place: string,
        public postal: number,
        public country: string,
        public telephone: string,
        public generalEmail: string,
        public billingEmail: string,
        public contractEmail: string,
        public firstName:string,
        public lastName:string,
        public language:string,
        public position:string,
        public contactEmail:string,
        public mobileNumber:string,
        public createAsUser:boolean,
        public customerAdd: CustomerAddress,
        public phonenumber: string,
){
    }
    
}