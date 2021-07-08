import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserModule } from '../authUser/authUser.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [AuthUserModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
