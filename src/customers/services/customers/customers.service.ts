import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [{ id: 1, email: 'aa' }, { id: 2, email: 'bb' }]

  findCustomer() {
    return {
      id: 1,
      email: "aaa1",
    }
  }


  findCustomerById(id: number) {
  
    return this.users.filter((user) => (user.id == id) )
  }
}
