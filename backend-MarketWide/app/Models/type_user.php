<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class type_user extends Model
{
    use HasFactory;

    protected $fillable = ['type_user'];

    // connection with foreing with type_user_table
    public function user()
    {
        return $this->hasMany(User::class, 'user_id');
    }
}
