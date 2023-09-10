<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistroRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // methods for users
    public function register(RegistroRequest $request)
    {
        // Validate register
        $data = $request->validated();

        // Create user
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'type_user_id' => $data['type'],
        ]);

        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user,
        ];
    }

    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        // Vericated email and password
        if (!Auth::attempt($data)) {
            return response([
                'errors' => ['El email o el password son incorrectos.'],
            ], 422);
        }

        // Authenticated user
        $user = Auth::user();

        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user,
        ];
    }

    public function logout(Request $request)
    {

    }
}
