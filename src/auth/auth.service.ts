import { BadRequestException, Injectable, UnauthorizedException, UseFilters } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

import * as bcryptjs from "bcryptjs";
import { LoginDto } from './dto/login,dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService : UsersService,
        private readonly jwtService : JwtService,
    ){ }

    async register(registerDto : RegisterDto){
        const user = await this.userService.findOneByEmail(registerDto.email)

        if(user)
            throw new BadRequestException("User already exists")

        await this.userService.create({
            name : registerDto.name,
            email : registerDto.email,
            password : await bcryptjs.hash(registerDto.password, 12)
        });

        return {
            name : registerDto.name,
            email : registerDto.email
        }
    }

    async login(loginDto : LoginDto){
        const user = await this.userService.findOneByEmailWithPassword(loginDto.email);

        if(!user)
            throw new UnauthorizedException("Invalid email")

        const isPasswordValid = await bcryptjs.compare(loginDto.password, user.password)

        if(!isPasswordValid)
            throw new UnauthorizedException("Invalid password")

        const payload = {email : user.email, role: user.role};
        const token = await this.jwtService.signAsync(payload);
        return {
            token : token,
            email : user.email,
            role : user.role
        }
    }

}
