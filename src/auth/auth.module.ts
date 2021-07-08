import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserModule } from '../authUser/authUser.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [AuthUserModule, PassportModule.register({ session: true })],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
