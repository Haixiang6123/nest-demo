import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { Client } from './client.entity';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { msg: 'logged in' };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  protectedMethod(@Request() req): string {
    return req.user;
  }

  @Get('hello')
  getHello(): Promise<Client> {
    return this.appService.findOneById(1);
  }
}
