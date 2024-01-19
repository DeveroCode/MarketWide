<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EstadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('estados')->insert([
            'id' => 1,
            'condicion' => 'Nuevo',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('estados')->insert([
            'id' => 2,
            'condicion' => 'Usado',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
