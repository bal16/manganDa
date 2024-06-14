<?php

use App\Http\Controllers\MenuController;
use App\Http\Controllers\StoreController;
use App\Models\Post;
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

Route::get('/menus/{id}', [MenuController::class, 'show']);

Route::get('/taged-store/{id}',function($id){
    $posts = Post::where('store_id',$id)->get();

    return response()->json([
        'reviews' => $posts
    ]);
});
