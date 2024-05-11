<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/test', [PostController::class, 'show'])->name('test');
Route::get('/', [PostController::class, 'show'])->name('home');
Route::get('/explore', function () {
    return Inertia::render('Explore',);
})->name('explore');
Route::get('/stores', function () {
    return Inertia::render('Stores',);
})->name('stores');
Route::get('/bookmark', function () {
    return Inertia::render('Bookmark',);
})->name('bookmark');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'show'])->name('profile');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
