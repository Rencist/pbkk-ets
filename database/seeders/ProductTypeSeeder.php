<?php

namespace Database\Seeders;

use App\Models\ProductType;
use Illuminate\Database\Seeder;

class ProductTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            [
                'type' => 'good'
            ], 
            [
                'type' => 'decent'
            ],
            [
                'type' => 'broken'
            ]
        ];

        foreach($types as $type){
            ProductType::create($type);
        }
    }
}
