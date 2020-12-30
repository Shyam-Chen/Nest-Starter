import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { HelloWorldModule } from '~/hello-world/hello-world.module';
import { CrudOperationsModule } from '~/crud-operations/crud-operations.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
    }),
    HelloWorldModule,
    CrudOperationsModule,
  ],
})
export class AppModule {}
