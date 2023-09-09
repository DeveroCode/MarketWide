<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //'user_type' => 'vendedor'
        DB::table('type_users')->insert([
            'type' => 'vendedor',
        ]);

        DB::table('type_users')->insert([
            'type' => 'comprador',
        ]);
    }
}
