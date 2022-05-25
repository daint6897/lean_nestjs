import { Controller, Get, Req, Res, Param, Body, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from "express"
import { CreateCustomerDto } from '../../dtos/CreateCustomer.dto';
import { CustomersService } from "../../services/customers/customers.service"
@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {

  }

  @Get(':id')
  getCustomer(@Param('id') id: number, @Req() req: Request, @Res() res: Response) {
    console.log(id)
    const customer = this.customersService.findCustomerById(id)
    if (customer) {
      res.status(200).send(customer)
    } else {
      res.status(400).send({ msg: "err" })
    }
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() body: CreateCustomerDto, @Req() req: Request, @Res() res: Response) {
    console.log(2, body)
    res.send(body);
  }
}
