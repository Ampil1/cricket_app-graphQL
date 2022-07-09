import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class MatchUpdateData {
    @Field()
    @IsString()
    _id:string
    
    @Field()
    @IsString()
    matchId?: string

    @Field()
    @IsString()
    seriesName?: string;
    
    @Field()
    @IsString()
    teamName?: string; 
}