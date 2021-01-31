import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { someSchema } from './someSchema.dto';

@Controller()
export class AppController {


  /**This should 
   * 
   */
  @Get()
  getHello(@Query(ValidationPipe) params : someSchema) {
    return params;
  }
}
