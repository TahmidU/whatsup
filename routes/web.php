<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Create controllers for these pages

Route::get('/', function () {
    return Inertia::render('Home');
})->name("home");

Route::get('/login', function () {
    return Inertia::render('Login');
});
