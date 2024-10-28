<?php

use Illuminate\Support\Facades\Route;

// All route except /api/* will be redirected to the Vue Router
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
