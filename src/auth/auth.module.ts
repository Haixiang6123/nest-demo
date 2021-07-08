import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserModule } from '../authUser/authUser.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    AuthUserModule,
    PassportModule,
    JwtModule.register({
      secret: 'SECRET', // put env variables
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
