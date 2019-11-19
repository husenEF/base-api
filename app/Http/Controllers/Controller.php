<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

use Illuminate\Support\Facades\Auth;

class Controller extends BaseController
{
    //

    protected function respondWithToken($token)
    {
        $data = [
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60,
            'user' => Auth::user()
        ];
        return response()->json([
            'data' => $data,
            'message' => 'success get data',
            'code' => 200
        ], 200);
    }
}
