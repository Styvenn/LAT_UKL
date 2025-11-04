import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  // Simpan data user sementara di dalam array
  private users: any[] = [];

  // CREATE
  create(createUserDto: CreateUserDto) {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return {
      status: 'success',
      message: 'User berhasil dibuat',
      data: newUser,
    };
  }

  // READ
  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      return { status: 'error', message: 'User tidak ditemukan' };
    }
    return {
      status: 'success',
      data: user,
    };
  }

  // UPDATE
  update(id: number, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      return { status: 'error', message: 'User tidak ditemukan' };
    }

    this.users[index] = { ...this.users[index], ...updateUserDto };
    return {
      status: 'success',
      message: 'User berhasil diupdate',
      data: this.users[index],
    };
  }
}