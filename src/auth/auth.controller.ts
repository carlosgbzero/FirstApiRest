import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login,dto';
import { Role } from '../common/enums/role.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveI } from 'src/common/interfaces/UserActive.interface';


@Controller('auth')
export class AuthController {

    constructor( private readonly authService : AuthService) {
        
    }

    @Post('login')
    login(
        @Body() loginDto : LoginDto
    ){
        return this.authService.login(loginDto);
    }

    @Post('register')
    register(@Body() registerDto : RegisterDto){
        return this.authService.register(registerDto);
    }

    @Get('profile')
    @Auth([Role.User,Role.Admin])
    profile( @ActiveUser() user : UserActiveI ){
        return user
    }

}
