<?php

namespace Database\Seeders;

use App\Models\Bookmark;
use App\Models\Like;
use App\Models\Post;
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
        User::create([
            'name' => 'nopal',
            'username' => 'nopallll',
            'email' => 'nopal@gmail.com',
            'password' => bcrypt('nopal123'),
        ]);

        User::create([
            'name' => 'didi',
            'username' => 'didilll',
            'email' => 'didi@gmail.com',
            'password' => bcrypt('didi123'),
        ]);
        //!! KLO MAO NGESEED PAKHE TINKER
        // User::factory(5)->create();
        // Post::factory(100)->create();
        // Like::factory(100)->create();
        // Bookmark::factory(200)->create();
        // Store::factory(3)->create();

        // User::factory(5)->create()->each(function ($user) {
        //     Store::factory(1)->create(['user_id' => $user->id]);
        //     Post::factory(20)->create(['user_id' => $user->id])->each(function ($post) {
        //         Like::factory(5)->create(['post_id' => $post->id]);
        //     });
        // });
    }
}
