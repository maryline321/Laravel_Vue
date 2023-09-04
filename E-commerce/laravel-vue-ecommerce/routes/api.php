<?php

use App\Http\Controllers\CustomApi\CustomAuthControllerController;
use App\Http\Controllers\CustomApi\ProductController;
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

Route::middleware('auth:sanctum', 'admin')-> group(function()
{

Route::get('/user', [CustomAuthControllerController::class, 'getUser']);
Route::post('/logout', [CustomAuthControllerController::class, 'logout']);

Route::apiResource('products', ProductController::class);

}
);


Route::post('/login', [CustomAuthControllerController::class, 'login']);
