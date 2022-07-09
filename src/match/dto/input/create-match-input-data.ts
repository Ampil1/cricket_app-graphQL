import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateMatchInputData {

    @Field()
    @IsString()
    matchId: string;
    

    @Field()
    @IsString()
    seriesName: string;
    
    @Field()
    @IsString()
    teamName: string;

}