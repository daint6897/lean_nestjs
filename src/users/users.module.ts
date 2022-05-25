import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { User } from 'src/typeorm'
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  controllers: [UsersController],
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [{
    provide: 'USER_SERVICE',
    useClass: UsersService
  }]
})
export class UsersModule { }
