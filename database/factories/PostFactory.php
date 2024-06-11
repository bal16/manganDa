<?php

namespace Database\Factories;

use App\Models\Like;
use App\Models\User;
use App\Models\Store;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id'=>fake()->unique()->numberBetween(1,100),
            'user_id'=>fake()->numberBetween(1,5),
            'body'=>fake()->sentence(50),
            'like'=>0,
            // 'store_id'=>Store::factory(),
            'is_store'=>false
        ];
    }
//     public function withLikes(int $count = 5): static
// {
//   return $this->state(function (array $attributes) use ($count) {
//     return [
//       'likes' => Like::factory()->count($count)->create(),
//     ];
//   });
// }
}

