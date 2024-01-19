<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            //
            $table->string('marca')->nullable(false);
            $table->string('modelo')->nullable(false);
            $table->integer('condicion')->nullable(false);
            $table->string('codigo')->nullable();
            $table->text('descripcion')->nullable(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            //
            $table->dropColumn('marca', 'modelo', 'condicion', 'codigo', 'descripcion');
        });
    }
};
