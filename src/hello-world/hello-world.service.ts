import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {
  message(str = 'World'): string {
    return `Hello, ${str}!`;
  }
}
