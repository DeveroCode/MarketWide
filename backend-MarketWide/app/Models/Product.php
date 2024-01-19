<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // data to fill in
    protected $fillable = [
        'marca',
        'modelo',
        'condicion',
        'codigo',
        'descripcion',
    ];

    public function condicion()
    {
        return $this->belongsTo(Estado::class, 'condicion', 'id');
    }
}
