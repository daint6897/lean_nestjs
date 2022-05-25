import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService2 {
  findCustomer(){
    return {
      id:1,
      email:"aaa1",
    }
  }
}
