<?php


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group([
    'namespace' => 'api',
    //    'middleware' => 'auth:api',
    'prefix' => '/api',
], function () use ($router) {
    require __DIR__ . '/../routes/api.php';
});


// $router->get('/login', function (Request $request) {
//     $token = app('auth')->attempt($request->only('email', 'password'));
//     // dd($token);
//     return response()->json(compact('token'));
// });

$router->get('/', function () use ($router) {
    // return $router->app->version();
    return view('index');
});
