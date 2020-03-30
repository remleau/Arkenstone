<?php

use App\Events\NewMessage;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', function () {
	
	broadcast(new NewMessage('allo'));
	return view('app');

})->where('any', '.*');

Route::prefix('api')->group(function () {

	Route::prefix('auth')->group(function () {
		Route::post('login', 'AuthController@login');
	});
    
});