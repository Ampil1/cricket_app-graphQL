import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

@ArgsType()
export class GetMatchsArgs {
    @Field(() => [String])
    @IsArray()
    matchId: string[];

}