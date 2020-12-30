import { Module } from '@nestjs/common';

import { HelloWorldController } from './hello-world.controller';
import { HelloWorldResolver } from './hello-world.resolver';
import { HelloWorldService } from './hello-world.service';

@Module({
  imports: [],
  controllers: [HelloWorldController],
  providers: [HelloWorldResolver, HelloWorldService],
})
export class HelloWorldModule {}
