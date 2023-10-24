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
                'type' => 'Elektronik'
            ], 
            [
                'type' => 'Furnitur'
            ],
            [
                'type' => 'Transportasi'
            ],
            [
                'type' => 'Kendaraan'
            ],
            [
                'type' => 'Pakaian'
            ],
            [
                'type' => 'Alat Olahraga'
            ],
            [
                'type' => 'Alat Musik'
            ],
            [
                'type' => 'Alat Elektronik'
            ],
            [
                'type' => 'Alat Tulis'
            ],
            [
                'type' => 'Alat Masak'
            ],
            [
                'type' => 'Alat Rumah Tangga'
            ],
            [
                'type' => 'Alat Kesehatan'
            ],
            [
                'type' => 'Alat Kebersihan'
            ],
            [
                'type' => 'Alat Hewan Peliharaan'
            ],
            [
                'type' => 'Alat Pertukangan'
            ],
            [
                'type' => 'Alat Pertanian'
            ],
            [
                'type' => 'Alat Perikanan'
            ],
            [
                'type' => 'Alat Perkebunan'
            ]
        ];

        foreach($types as $type){
            ProductType::create($type);
        }
    }
}
