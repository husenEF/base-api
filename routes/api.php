<?php

use \Illuminate\Http\Request;

$router->group(['namespace' => 'v1', 'prefix' => '/v1'], function ($router) {
    $router->get('/login', function (Request $request) {
        $token = app('auth')->attempt($request->only('email', 'password'));
        // dd($token);
        return response()->json(compact('token'));
    });
});
