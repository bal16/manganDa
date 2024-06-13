<?php

use App\Http\Controllers\StoreController;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/top-rated-store',function(Request $request){
    $stores = Store::all();

    return response()->json($stores);
});
