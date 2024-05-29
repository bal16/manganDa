<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Store>
 */
class StoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'=>fake()->unique()->numberBetween(1,7),
            'name'=>fake()->name(),
            'description'=>fake()->sentence(),
            'address'=>fake()->address(),
            'is_open'=>true,

        ];
    }
}
