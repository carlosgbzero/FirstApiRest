import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constants/jwt.constants';

@Module({
  imports : [
    UsersModule,
    JwtModule.register({
      global:true,
      secret: jwtConstant.secret,
      signOptions: {expiresIn: "1d"},
    })
    ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
