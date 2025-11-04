import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';

@Controller('api/attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  create(@Body() data: CreateAttendanceDto) {
    return this.attendanceService.create(data);
  }

  @Get('history/:user_id')
  findHistory(@Param('user_id') user_id: number) {
    return this.attendanceService.findHistory(Number(user_id));
  }

  @Get('summary/:user_id')
  findSummary(
    @Param('user_id') user_id: number,
    @Query('month') month: string,
    @Query('year') year: string,
  ) {
    return this.attendanceService.findSummary(
      Number(user_id),
      Number(month),
      Number(year),
    );
  }

  @Post('analysis')
  analyze(@Body('user_id') user_id: number) {
    return this.attendanceService.analyze(user_id);
  }
}