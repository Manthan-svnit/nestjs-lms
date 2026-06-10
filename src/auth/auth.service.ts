import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/registeruser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {
    }
    async registerUser(registerUserDto : RegisterDto) {
        console.log('registerUserDto',registerUserDto);
        const saltrounds = 10;
        const hash = await bcrypt.hash(registerUserDto.password, saltrounds);

        return this.userService.CreateUser({...registerUserDto, password: hash});
    }
}
