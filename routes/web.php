<?php

use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StoreController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// 
Route::get('/', [PostController::class, 'show'])->name('home');
Route::post('/', [CommentController::class, 'addPost']);


// dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// store
Route::get('/stores',[StoreController::class, 'show'])->name('stores');

// explore
Route::get('/explore',[PostController::class, 'showSearch'])->name('explore');

Route::middleware('auth')->group(function () {
    // profile
    Route::get('/profile', [ProfileController::class, 'show'])->name('profile');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // post
    Route::post('/bookmark/{user_id}/{store_id}',[PostController::class, 'create'])->name('post.create');
    Route::delete('/post/{id_post}',[PostController::class, 'destroy'])->name('post.destroy');

    // bookmark
    Route::get('/bookmark', [BookmarkController::class, 'show'])->name('bookmark');
    Route::delete('/bookmark/{id}',[BookmarkController::class, 'destroy'])->name('bookmark.destroy');
    Route::post('/bookmarks/{post_id}/{user_id}',[BookmarkController::class, 'create'])->name('bookmark.create');
});


require __DIR__.'/auth.php';
