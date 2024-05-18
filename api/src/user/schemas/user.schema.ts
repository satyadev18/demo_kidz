import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  dob: Date;

  @Prop({ required: false })
  firstAid: string;

  @Prop({ required: false })
  address: string;

  @Prop({ required: false })
  postcode: string;

  @Prop({ required: false })
  country: string;

  @Prop({ required: false })
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
