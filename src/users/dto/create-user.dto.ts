import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nama tidak boleh kosong' })
  name: string;

  @IsEmail({}, { message: 'Email tidak valid' })
  email: string;

  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password: string;

  @IsNotEmpty({ message: 'Role harus diisi' })
  role: string;
}