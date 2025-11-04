1. Autentikasi dan Otorisasi
Endpoint: /api/auth/login
Method: POST
Description: Untuk login pengguna dan menghasilkan token autentikasi.
<img width="1103" height="208" alt="image" src="https://github.com/user-attachments/assets/56e5b20b-d05d-49a5-8ff9-b19d0a30864a" />

2. Pengelolaan Data Pengguna
- Menambah Pengguna
Endpoint: /api/users
Method: POST
Description: Untuk menambahkan data pengguna baru.
<img width="732" height="301" alt="image" src="https://github.com/user-attachments/assets/1b88bcf6-b462-4716-9c38-7494bdcb7491" />

- Mengubah Data Pengguna
Endpoint: /api/users/{id}
Method: PUT
Description: Untuk mengubah data pengguna.
<img width="714" height="290" alt="image" src="https://github.com/user-attachments/assets/a91294c5-a15d-4204-a280-8157df5ff2b6" />

- Mengambil Data Pengguna
Endpoint: /api/users/{id}
Method: GET
Description: Mengambil data pengguna berdasarkan ID.
<img width="588" height="285" alt="image" src="https://github.com/user-attachments/assets/3b3b13ba-be55-481e-b745-bb8e715f9fdc" />

3. Pencatatan Presensi
- Melakukan Presensi
Endpoint: /api/attendance
Method: POST
Description: Untuk mencatat kehadiran pengguna pada hari tersebut.
<img width="693" height="311" alt="image" src="https://github.com/user-attachments/assets/39883191-fbff-4bb0-b256-919436d526d9" />

- Melihat Riwayat Presensi Pengguna
Endpoint: /api/attendance/history/{user_id}
Method: GET
Description: Mengambil riwayat presensi pengguna berdasarkan ID pengguna.
<img width="741" height="507" alt="image" src="https://github.com/user-attachments/assets/2fb2efa8-2611-4f37-a237-0922891a8994" />

4. Analisis Kehadiran
- Melihat Rekap Kehadiran Bulanan
Endpoint: /api/attendance/summary/{user_id}
Method: GET
Description: Menampilkan rekap kehadiran bulanan pengguna.
<img width="578" height="226" alt="image" src="https://github.com/user-attachments/assets/510cb435-1691-4131-8c24-8c200d2a2c5c" />

- Analisis Tingkat Kehadiran Berdasarkan Parameter Tertentu
Manajemen ingin mengetahui persentase kehadiran setiap pengguna berdasarkan parameter yang lebih spesifik, misalnya per periode tertentu. Manajemen juga ingin membandingkan tingkat kehadiran antar-kelompok, misalnya berdasarkan kelas atau jabatan, guna mengidentifikasi tren yang mungkin menunjukkan potensi masalah kedisiplinan.
Endpoint: /api/attendance/analysis
Method: POST
Description: Melakukan analisis tingkat kehadiran pengguna berdasarkan periode waktu dan kategori tertentu.
<img width="766" height="252" alt="image" src="https://github.com/user-attachments/assets/a8b97855-4db9-4020-b485-77f3586bd236" />
