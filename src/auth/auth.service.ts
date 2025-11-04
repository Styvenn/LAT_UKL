import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  async login(loginDto: LoginDto) {
    // Sementara: langsung sukses
    const token = jwt.sign(
      { email: loginDto.email },
      'secretKey123', // nanti ganti pakai ENV
      { expiresIn: '1h' }
    );

    return {
      status: 'success',
      message: 'Login berhasil',
      token,
    };
  }
}