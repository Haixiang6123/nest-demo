import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { Client } from './client.entity';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return req.user;
  }

  @Get('protected')
  protectedMethod(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  getHello(): Promise<Client> {
    return this.appService.findOneById(1);
  }
}
