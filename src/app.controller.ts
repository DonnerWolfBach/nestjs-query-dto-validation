import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {


  /**This should 
   * 
   */
  @Get()
  getHello(params): string {
    return params;
  }
}
