import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { someSchema } from './someSchema.dto';

@Controller()
export class AppController {


  /**This should evalaute wether the query-params fit to someSchema and return it if so
   * 
   */
  @Get()
  getHello(@Query(ValidationPipe) params : someSchema) {
    return params;
  }
}
