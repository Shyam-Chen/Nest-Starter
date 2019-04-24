import { Controller, Get } from '@nestjs/common';

import { CrudOperationsService } from './crud-operations.service';

@Controller('crud-operations')
export class CrudOperationsController {
  constructor(private crudOperations: CrudOperationsService) {}

  @Get()
  send(): object {
    return {
      data: [],
    };
  }
}
