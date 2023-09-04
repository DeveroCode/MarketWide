<?php

use App\Http\Controllers\AuthController;
use App\Models\type_user;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// show type_users in frontend
Route::apiResource('/type_users', type_user::class);

//  Authentication
Route::post('/register', [AuthController::class, 'register']);
