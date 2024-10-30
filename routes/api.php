<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', 'App\Http\Controllers\API\AuthController@login');
Route::get('/auth/me', 'App\Http\Controllers\API\AuthController@me')->middleware('auth:sanctum');
Route::put('/auth/me', 'App\Http\Controllers\API\AuthController@updateMe')->middleware('auth:sanctum');
