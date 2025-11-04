import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ aktifkan global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // hapus properti yang tidak ada di DTO
      forbidNonWhitelisted: false, // kalau ada properti aneh → error
      transform: true, // otomatis ubah payload ke instance DTO
    }),
  );

  await app.listen(3000);
}
bootstrap();