import { Module } from '@nestjs/common';

import { HelloWorldModule } from './hello-world/hello-world.module';
import { CrudOperationsModule } from './crud-operations/crud-operations.module';

@Module({
  imports: [
    HelloWorldModule,
    CrudOperationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
