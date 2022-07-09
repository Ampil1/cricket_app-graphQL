import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
@ObjectType()
export class Match {

    @Field(() => String)
    _id: string;

    @Prop()
    @Field()
    matchId:string;

    @Prop()
    @Field()
    seriesName: string;

    @Prop()
    @Field()
    teamName: string;

    // @Field(() => Int)
    // seriesStartDate: number;
    
    // @Field(() => Int)
    // serieseEndDate: number; 
}
export type MatchDocument = Match & Document;
export const MatchSchema = SchemaFactory.createForClass(Match);