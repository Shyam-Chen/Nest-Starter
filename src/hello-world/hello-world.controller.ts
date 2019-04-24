import { Controller, Get } from '@nestjs/common';

import { HelloWorldService } from './hello-world.service';

@Controller('hello-world')
export class HelloWorldController {
  constructor(private helloWorld: HelloWorldService) {}

  @Get()
  send(): object {
    return {
      data: this.helloWorld.message(),
    };
  }
}
