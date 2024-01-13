<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register');
