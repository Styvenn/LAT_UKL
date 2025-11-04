import { IsInt, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateAttendanceDto {
  @IsInt()
  user_id: number;

  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { 
    message: 'Format date harus YYYY-MM-DD' })
  date: string;

  @IsString()
  @Matches(/^\d{2}:\d{2}:\d{2}$/, { 
    message: 'Format time harus HH:MM:SS' })
  time: string;

  @IsString()
  @IsNotEmpty()
  status: string; // contoh: "hadir", "izin", "sakit"
}
