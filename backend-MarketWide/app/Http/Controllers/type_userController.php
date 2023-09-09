<?php

namespace App\Http\Controllers;

use App\Http\Resources\type_userCollection;
use App\Models\type_user;

class type_userController extends Controller
{
    //
    public function index()
    {
        return new type_userCollection(type_user::all());
    }
}
