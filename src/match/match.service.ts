import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Match } from './models';
import { Model } from 'mongoose';
import { CreateMatchInputData } from './dto/input/create-match-input-data';
import { GetMatchArgs } from './dto/args/get-match-args';
import { MatchUpdateData } from './dto/input/update-match-data';

@Injectable()
export class MatchService {
    constructor(
        @InjectModel(Match.name)
        private readonly matchModel: Model<any>,
      ) {}

     public  create(matchInputData: CreateMatchInputData) {
        try{
          const reqdata = new this.matchModel(matchInputData);
          return reqdata.save();
        }
        catch (error) {
          return new Error(error.message)
        }
      }
      public getMatch(getUserArgs: GetMatchArgs){
        try{
            return this.matchModel.findById(getUserArgs);
        }
        catch(error){
            return new Error(error.message)
        } 
    }

    async findAll() {
        try{
          const allData = await this.matchModel.find();
    
          if (!allData) {
            return "Data not found"
          }
          return allData;
        }
        catch (error) {
          return new Error(error.message)
        }
      }
       async updateMatch(matchUpdateData:MatchUpdateData):Promise<any>{
        try{
          await this.matchModel.findByIdAndUpdate(matchUpdateData)
        }
        catch (error) {
            return new Error(error.message)
          }
      }
}
