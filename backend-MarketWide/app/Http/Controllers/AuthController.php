<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistroRequest;
use App\Http\Requests\UpdateProfileRequest;
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

        // Verify email and password
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

    public function update(UpdateProfileRequest $request)
    {

        $data = $request->validated();

        $user = Auth::user();

        if ($request->has('password')) {
            // El usuario ha proporcionado una nueva contraseña, así que procesa la nueva contraseña
            $data['password'] = bcrypt($data['password']);
        } else {
            // El usuario no desea cambiar la contraseña, así que eliminamos estos campos
            unset($data['password']);
            unset($data['password_confirmation']);
        }

        $user->update($data);

        return [
            'user' => $user,
        ];
    }
}

function logout(Request $request)
{
    $user = $request->user();
    $user->currentAccessToken()->delete();

    return [
        'user' => null,
    ];
}
