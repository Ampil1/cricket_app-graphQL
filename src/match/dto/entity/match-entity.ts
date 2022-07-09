import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Match {

  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  
  @Prop()
  @Field()
  matchId: string
  
  @Prop()
  @Field()
  seriesName: string;

  @Prop()
  @Field()
  teamName: string;
}

export const BlogSchema = SchemaFactory.createForClass(Match);