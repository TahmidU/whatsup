<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class UserController extends Controller
{

    public function create(){
        return Inertia::render("Register");
    }

    public function store(Request $request){

        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'other_username' => 'required|string|max:255',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);

        // Create another test user
        User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'username' => $request->other_username,
            'password' => Hash::make($request->password),
        ]);

        Auth::login($user);

        return redirect()->route('dashboard.index');
    }

    public function authenticateUser(){
        return Inertia::render('Login');
    }
}
