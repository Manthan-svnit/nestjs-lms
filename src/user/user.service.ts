import { Injectable } from '@nestjs/common';
import { RegisterDto } from '../auth/dto/registeruser.dto';

@Injectable()
export class UserService {
    CreateUser(registerUserDto : RegisterDto) {
        return { message: 'User Created Successfully!!' };
    }
}
