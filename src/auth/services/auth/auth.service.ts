import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService
  ){
  
  }
  async validate(username:string,password:string){
    const userAuth = await this.userService.findUser(username)

    if(userAuth){
      console.log(userAuth)
    }
  }
}
