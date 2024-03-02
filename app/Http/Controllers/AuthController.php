<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{

    public function show(){
        return Inertia::render('Login');
    }

    public function authenticate(Request $request){
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if(auth()->attempt(request()->only(['username', 'password']))){
            return redirect()->route('dashboard.index');
        }

        return redirect()->back()->withErrors(['username', 'Invalid Credentials!']);
    }

    public function logout(){
        Auth::guard()->logout();

        return redirect()->route('auth.show');
    }


}
