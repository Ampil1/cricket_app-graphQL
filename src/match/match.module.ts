import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchResolver } from './match.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Match, MatchSchema } from './models';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: Match.name, schema: MatchSchema}
    ])
  ],
  providers: [MatchService, MatchResolver]
})
export class MatchModule {}
