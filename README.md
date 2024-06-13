<p align="center">
    <a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a>
    <a href="https://inertiajs.com" target="_blank"><img src="https://avatars.githubusercontent.com/u/47703742?s=280&v=4" height="400" alt="Inertia Logo"></a>
</p>



# manganDa

Students often have busy daily schedules, whether it's attending classes, working on assignments, or participating in other activities. The multitude of activities they engage in also impacts their limited free time. This lack of free time affects the amount of time they have for meals and other activities, often leaving students confused about choosing what to eat. Besides the limited time, the boredom that arises from always eating the same food every day and the lack of information about food options in their area pose additional challenges.

## Tech-Stack

1. Laravel-InertiaJs as the fullstack framework
2. React as the frontend framework
3. daisyUI as the UI library
4. MySQL as the database
5. Tailwind CSS as the CSS framework
6. Axios for HTTP requests

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
