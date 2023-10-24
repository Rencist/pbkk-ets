<?php

namespace Database\Factories;

use App\Models\ProductType;
use Illuminate\Support\Str;
use App\Models\ProductCondition;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::all();
        $type = ProductType::all();
        $condition = ProductCondition::all();

        return [
            'user_id' => 1,
            'product_type_id' => $type->random()->id,
            'product_condition_id' => $condition->random()->id,
            'description' => $this->faker->sentence(10),
            'defect' => $this->faker->sentence(5), // password
            'amount' =>  $this->faker->randomDigit(),
            'picture_url' => $this->faker->imageUrl(640, 480, 'animals', true), 
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    // public function unverified(): static
    // {
    //     return $this->state(fn (array $attributes) => [
    //         'email_verified_at' => null,
    //     ]);
    // }
}
