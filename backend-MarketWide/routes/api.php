<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\type_userController;
use App\Http\Resources\userResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
 */
Route::middleware(['auth:sanctum'])->group(function () {
    // Ruta para obtener los datos del usuario
    Route::get('/user', function (Request $request) {
        $user = Auth::user();

        return new userResource($user);
    });
    Route::post('/logout', [AuthController::class, 'logout']);

    // Otras rutas protegidas que requieran autenticación
});
// show type_users in frontend
Route::apiResource('/type_users', type_userController::class);

//  Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
