<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    // methods for users
    public function register(RegisterRequest $request)
    {
        // Validate register
        $data = $request->validated();
    }

    public function login(Request $request)
    {

    }

    public function logout(Request $request)
    {

    }
}
