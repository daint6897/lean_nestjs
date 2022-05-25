import { Controller, Inject, Get, Post, Body } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { CreateUserDto } from "../../dto/CreateUser.dto"
@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService
  ) { }

  @Get('')
  getUsers() {
    return this.userService.getUsers()
  }

  @Post('create')
  createUser(@Body() body: CreateUserDto) {
    console.log("body",body)
    return this.userService.createUser(body)
    // return body 
  }
}
