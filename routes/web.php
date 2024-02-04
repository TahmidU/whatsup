<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/login', function () {
//     return Inertia::render('Login');
// })->name('login');

Route::controller(UserController::class)->name("user.")->group(function () {
    Route::get('/register', 'create')->name('register');
    Route::get('/login', 'authenticateUser')->name("login");
    Route::post('/register', 'store')->name('register');    
});

