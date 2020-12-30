import { Resolver, Query, Args } from '@nestjs/graphql';

import { HelloWorldService } from './hello-world.service';

// type Query {
//   hello(data: String): String
// }
@Resolver('HelloWorld')
export class HelloWorldResolver {
  constructor(private helloWorld: HelloWorldService) {}

  @Query(() => String)
  hello(@Args('data', { type: () => String, nullable: true }) data?: string): string {
    return this.helloWorld.message(data);
  }
}
