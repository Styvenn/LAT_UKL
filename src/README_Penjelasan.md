 1. Attendance Module (Presensi)
Fungsi:

Modul ini digunakan untuk mencatat, melihat, menganalisis, dan merekap data kehadiran pengguna (user).
Ia berhubungan langsung dengan database melalui PrismaService.

Komponen dan Cara Kerja:

Controller (attendance.controller.ts)

Menangani request dari client (frontend / API tester seperti Postman).

Endpoint:

POST /api/attendance → tambah presensi baru.

GET /api/attendance/history/:user_id → ambil riwayat presensi user.

GET /api/attendance/summary/:user_id?month=&year= → rekap bulanan.

POST /api/attendance/analysis → analisis performa kehadiran user.

Semua permintaan diteruskan ke AttendanceService.

Service (attendance.service.ts)

Berisi logika utama dan operasi database.

create() → menyimpan presensi baru ke tabel attendance.

findHistory() → mengambil seluruh data presensi berdasarkan user_id.

findSummary() → menghitung total, hadir, absen, dan terlambat dalam satu bulan.

analyze() → menghitung persentase kehadiran dan memberi penilaian performa (Baik, Perlu diperbaiki, Buruk).

DTO (create-attendance.dto.ts)

Mengatur dan memvalidasi data input sebelum disimpan:

user_id → integer.

date → format YYYY-MM-DD.

time → format HH:MM:SS.

status → string, seperti hadir, izin, sakit.

Module (attendance.module.ts)

Menghubungkan controller, service, dan Prisma agar bisa berfungsi bersama.

 2. Auth Module (Autentikasi)
Fungsi:

Modul ini bertanggung jawab untuk login dan menghasilkan token autentikasi (JWT) agar user bisa mengakses sistem dengan aman.

Komponen dan Cara Kerja:

Controller (auth.controller.ts)

Endpoint: POST /auth/login

Menerima email dan password, lalu meneruskan ke AuthService.

Service (auth.service.ts)

login() → membuat token JWT berisi email user.

Token berlaku 1 jam (expiresIn: '1h').

Token ini bisa digunakan untuk otorisasi endpoint lain nanti.

DTO (login.dto.ts)

Validasi input login:

email harus format valid dan tidak kosong.

password minimal 6 karakter.

Module (auth.module.ts)

Menghubungkan controller dan service autentikasi.

 3. Users Module (Manajemen Pengguna)
Fungsi:

Modul ini mengatur data user — seperti membuat user baru, membaca data user tertentu, dan memperbarui profil user.

Komponen dan Cara Kerja:

Controller (users.controller.ts)

Endpoint:

POST /api/users → membuat user baru.

GET /api/users/:id → mengambil data user berdasarkan ID.

PUT /api/users/:id → memperbarui data user.

Service (users.service.ts)

Data user disimpan sementara di array lokal (belum ke database).

create() → membuat user baru dengan ID otomatis (Date.now()).

findOne() → mencari user berdasarkan ID.

update() → memperbarui data user jika ditemukan.

DTO:

create-user.dto.ts → validasi data saat membuat user (nama, email, password, role).

update-user.dto.ts → validasi data saat update (boleh sebagian, semua optional).

read-user.dto.ts → format data saat dibaca.

Module (users.module.ts)

Menyatukan controller dan service agar bisa berjalan di dalam sistem NestJS.
