<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AuthController;

Route::middleware("auth:sanctum")->group(function (){

    Route::controller(DashboardController::class)->name('dashboard.')->group(function (){
        Route::get('/dashboard', 'index')->name('index');
    });

});

Route::get('/', function () {
    return Inertia::render('Home');
})->name("home");

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/safety', function () {
    return Inertia::render('Safety');
})->name('safety');

Route::get('/support', function () {
    return Inertia::render('Support');
})->name('support');

Route::get('/careers', function () {
    return Inertia::render('Careers');
})->name('careers');

Route::controller(RegisterController::class)->name("register.")->group(function () {
    Route::get('/register', 'show')->name('show');
    Route::post('/register', 'store')->name('store.user');    
});

Route::controller(AuthController::class)->name('auth.')->group(function() {
    Route::get('/login', 'show')->name('show');
    Route::post('/login', 'authenticate')->name('create');
    Route::get('/logout', 'logout')->name('destroy');
});

