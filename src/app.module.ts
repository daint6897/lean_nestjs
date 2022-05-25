import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm"
import { AuthModule } from './auth/auth.module';

import entities from "./typeorm"
@Module({
  imports: [CustomersModule, UsersModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:'remotemysql.com',
    port:3306,
    username:'cG8eMOhLxs',
    password:'XQ42Jyn4b6',
    database:'cG8eMOhLxs',
    entities:entities,
    synchronize:true
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
