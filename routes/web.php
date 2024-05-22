<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PostController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BookmarkController;

//

// Route::post('/', function (Request $request){
//     dd($request);
// });


// dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/store-register', [StoreController::class, 'create'])->name('StoreRegister');

// store
Route::get('/stores',[StoreController::class, 'show'])->name('stores');

// explore
Route::get('/explore',[PostController::class, 'showSearch'])->name('explore');

Route::middleware('auth')->group(function () {
    //Home
    Route::get('/', [PostController::class, 'show'])->name('home');
    Route::get('/dashboard', [PostController::class, 'show'])->name('home');
    Route::post('/', [PostController::class, 'store']);
    Route::get('/post/{id}', [PostController::class, 'index']);
    Route::post('/post/{id}', [CommentController::class, 'store']);
    // profile
    Route::get('/profile', [ProfileController::class, 'show'])->name('profile');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // post
    Route::post('/post/{user_id}/{store_id}',[PostController::class, 'create'])->name('post.create');
    Route::delete('/post/{id_post}',[PostController::class, 'destroy'])->name('post.destroy');

    // bookmark
    Route::get('/bookmark', [BookmarkController::class, 'show'])->name('bookmark');
    Route::delete('/bookmark/{id}',[BookmarkController::class, 'destroy'])->name('bookmark.destroy');
    Route::post('/bookmarks/{id}',[BookmarkController::class, 'create'])->name('bookmark.create');
});


require __DIR__.'/auth.php';
