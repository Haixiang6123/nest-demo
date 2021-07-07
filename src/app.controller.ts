import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Client } from './client.entity';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): Promise<Client> {
    return this.appService.findOneById(1);
  }
}
