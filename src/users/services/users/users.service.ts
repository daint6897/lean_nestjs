import { Injectable } from '@nestjs/common';
import {User} from "../../types/User"
import { CreateUserDto } from "../../dto/CreateUser.dto"
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm"
import {User as UserEntiry} from "src/typeorm"

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntiry) private readonly userRepository: Repository<UserEntiry>){
  
  }
  private user: User[] =[
    {
      username:"ahi",
      password:"aaaa"
    },
    {
      username:"ahu",
      password:"bbb"
    }
  ]

  getUsers(){
    return this.user;
  }

  getUserByUserName(username:string){
    return this.user.find((user)=>user.username == username)
  }


  createUser(params : CreateUserDto){
    const newUser = this.userRepository.create(params)
    return this.userRepository.save(newUser)
  }

  findUser(username: string){
    return this.userRepository.findOne({username})
  }
}
