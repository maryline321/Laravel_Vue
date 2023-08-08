<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;

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

Route::get('/company/{id}', [CompanyController::class, 'getCompany']);
Route::post('/createCompany', [CompanyController::class, 'createCompany']);
Route::get('/companies', [CompanyController::class, 'getCompanies']);
Route::put('/company/{id}', [CompanyController::class, 'updateCompany']);
Route::get('/company/{id}', [CompanyController::class, 'deleteCompany']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
