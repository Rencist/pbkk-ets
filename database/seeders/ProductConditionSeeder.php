<?php

namespace Database\Seeders;

use App\Models\ProductCondition;
use Illuminate\Database\Seeder;

class ProductConditionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            [
                'condition' => 'tes1'
            ], 
            [
                'condition' => 'tes2'
            ],
            [
                'condition' => 'tes3'
            ]
        ];

        foreach($types as $type){
            ProductCondition::create($type);
        }
    }
}
