import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDTO } from './dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async addUser(createUserDTO: CreateUserDTO): Promise<User> {
    try {
      const newUser = await this.userModel.create(createUserDTO);
      return newUser.save();
    } catch (error) {
      throw new BadRequestException(error.message.split('Path')[1]);
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const products = await this.userModel.find().exec();
      return products;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
