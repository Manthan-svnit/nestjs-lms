import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registeruser.dto';

@Controller('auth') //prefix attach as auth...
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() registerUserDto :RegisterDto) {
        const result = this.authService.registerUser(registerUserDto);
        return result;
    }
}
