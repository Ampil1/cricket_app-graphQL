import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, isNotEmpty } from 'class-validator';

@ArgsType()
export class GetMatchArgs {
    @Field()
    @IsNotEmpty()
    _id: string;
}