import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetMatchArgs } from './dto/args/get-match-args';
import { CreateMatchInputData } from './dto/input/create-match-input-data';
import { MatchUpdateData } from './dto/input/update-match-data';
import { MatchService } from './match.service';
import { Match } from './models';

@Resolver()
export class MatchResolver {
    constructor(private readonly matchService: MatchService) {}

    @Query(() => String)
    sayHello(): string {
    return 'Hello World! GraplQL';
   }
   @Mutation(() => Match)
   createMatchData(@Args('creatematchInput') creatematchInput: CreateMatchInputData) {
    return this.matchService.create(creatematchInput);
  }

  @Query(() => Match, { name: 'match', nullable: true })
  getMatch(@Args() getuserArgs: GetMatchArgs) {
      return this.matchService.getMatch(getuserArgs);
  }
  
  @Query(() => [Match], { name: 'matchs' })
  findAll() {
    return this.matchService.findAll();
  }

  @Mutation(() => Match)
  public updateMatch(@Args('matchUpdateData') matchUpdateData:MatchUpdateData): Promise<Match> {
    return this.matchService.updateMatch(matchUpdateData)

}
}
