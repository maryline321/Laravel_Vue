<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'=>['required', 'email'],
            'password'=>'required',
            'remember'=>'boolean'

        ]);

        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);
        if (!Auth::attempt($credentials, $remember)){
            return response([
                'message'=>'Email or password is incorrect'
            ], 
            status:442
        );
        }

        $user =Auth::User();
        if (!$user->is_admin){
            Auth::logout();
            return response([
                'message' =>'You don\'t have permission to authenticate as admin'
            ],
            status:403
        );


        }
    }
}
