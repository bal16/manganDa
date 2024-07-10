<?php

namespace Database\Seeders;

use App\Models\Bookmark;
use App\Models\Like;
use App\Models\Post;
use App\Models\Role;
use App\Models\User;
use App\Models\Store;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::create([
            'name' => 'user',
        ]);
        Role::create([
            'name' => 'admin',
        ]);
        Role::create([
            'name' => 'store',
        ]);
        User::create([
            'name' => 'admin',
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin'),
            'role_id' => 2
        ]);

        User::create([
            'name' => 'nopal',
            'username' => 'nopallll',
            'email' => 'nopal@gmail.com',
            'password' => bcrypt('nopal123'),
            'role_id' => 3,
        ]);

        User::create([
            'name' => 'didi',
            'username' => 'didilll',
            'email' => 'didi@gmail.com',
            'password' => bcrypt('didi123'),
        ]);


        Store::create([
            'user_id' => 2,
            'name' => 'Nopal Food',
            'description' => 'Warteg Dekat UNNES',
            'address' => 'Cempakasari',
            'map_link' => 'map.google.com',
            'is_validate' => true,
            'ratings' => 5,
        ]);

        //!! KLO MAO NGESEED PAKHE TINKER  atau uncomment
        User::factory(5)->create();
        // Post::factory(100)->create();
        // Bookmark::factory(200)->create();
        // App\Models\Post::factory(100)->create();
        // App\Models\Like::factory(100)->create();
        // App\Models\Bookmark::factory(200)->create();
        // App\Models\Store::factory(3)->create();

    }
}
