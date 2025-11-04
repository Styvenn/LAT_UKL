import { IsEmail, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email tidak valid' })
  email?: string;

  @IsOptional()
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password?: string;

  @IsOptional()
  role?: string;
}