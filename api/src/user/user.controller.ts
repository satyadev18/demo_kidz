import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async getUsers() {
    const allUsers = await this.userService.getAllUsers();
    return allUsers;
  }
  @Post('/')
  async addUser(@Body() createUserDTO: CreateUserDTO) {
    const User = await this.userService.addUser(createUserDTO);
    if (User) {
      const response = {
        message: 'User created successfully',
        statusCode: HttpStatus.OK,
      };
      return response;
    }
    return null;
  }
}
