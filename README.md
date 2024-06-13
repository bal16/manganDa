
# manganDa

Mahasiswa sering kali memiliki jadwal harian yang padat, entah itu kuliah, mengerjakan tugas, maupun kegiatan-kegiatan lainnya. Banyaknya aktivitas yang dilakukan juga berimbas pada keterbatasan waktu yang dimiliki sebagai waktu luang. Kurangnya waktu luang tersebut berpengaruh pada singkatnya waktu untuk makan dan melakukan aktivitas lainnya, sehingga sering kali mahasiswa kebingungan dalam memilih menu makanan. Selain keterbatasan waktu, rasa bosan yang muncul akibat selalu memakan menu makanan yang sama setiap harinya dan kurangnya persebaran informasi mengenai makanan yang ada di daerah mereka menjadi masalah tersendiri.

## Tech-Stack

    1. Laravel-InertiaJs sebagai fullstack framework
    2. React sebagai frontend framework
    3. daisyUI sebagai UI library
    4. MySQL sebagai database
    5. Tailwind CSS sebagai framework CSS
    6. Axios untuk HTTP requests

## Installation

### Prerequisites

- Node.js & npm
- PHP & Composer
- MySQL

### Steps

1. Clone the repository

```bash
git clone https://github.com/bal16/projectRpl.git
```

2. Install backend dependencies

```bash
composer install
```

3. Install frontend dependencies

```bash
npm install
```

4. Setup environment variables

```bash
cp .env.example .env
```
Configure the .env file with your database and other credentials.

5. Generate application key

```bash
php artisan key:generate
```

6. Link laravel storage  

```bash
php artisan storage:link
```

7. Run migrations

```bash
php artisan migrate --seed
```

8. Run the application

```bash
npm run dev
php artisan serve
```
The application should now be running at http://localhost:8000.


``` We hope this platform helps you find delicious and affordable meals, making your busy student life a little easier and more enjoyable!```

## Contribute

...
