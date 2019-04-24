import { Module } from '@nestjs/common';

import { CrudOperationsController } from './crud-operations.controller';
import { CrudOperationsService } from './crud-operations.service';

@Module({
  imports: [],
  controllers: [CrudOperationsController],
  providers: [CrudOperationsService],
})
export class CrudOperationsModule {}
