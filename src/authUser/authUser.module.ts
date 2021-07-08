import { Module } from '@nestjs/common';
import { AuthUserService } from './authUser.service';

@Module({
  providers: [AuthUserService],
  exports: [AuthUserService],
})
export class AuthUserModule {}
