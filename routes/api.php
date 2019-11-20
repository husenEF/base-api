<?php

$router->group(['namespace' => 'v1', 'prefix' => '/v1'], function ($router) {
    // $router->get('/login', function (Request $request) {
    //     $token = app('auth')->attempt($request->only('email', 'password'));
    //     // dd($token);
    //     return response()->json(compact('token'));
    // });

    /**
     * login
     */
    $router->group(['prefix' => '/auth'], function ($router) {
        $router->post('login', 'AuthController@login');
        $router->group(['middleware' => 'auth:api'], function ($router) {
            $router->get('/myprofile', 'UserController@index');
        });
    });
});
