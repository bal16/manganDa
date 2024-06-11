<?php

use App\Http\Controllers\RatingController;
use App\Http\Controllers\ReportController;
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


// store
Route::get('/stores',[StoreController::class, 'show'])->name('stores');

// explore
Route::get('/explore',[PostController::class, 'explore'])->name('explore');

Route::middleware('auth')->group(function () {
    // Store
    Route::get('/store-register', [StoreController::class, 'create'])->name('store.create')->middleware('is_store');
    Route::post('/store-register', [StoreController::class, 'store'])->name('store.store');

    //Home
    Route::get('/', [PostController::class, 'show'])->name('home')->middleware('admin_cant_open');
    Route::get('/dashboard', [PostController::class, 'show'])->name('home')->middleware('admin_cant_open');
    Route::post('/', [PostController::class, 'store']);
    Route::get('/post/{id}', [PostController::class, 'index']);

    // profile
    Route::get('/profile', [ProfileController::class, 'show'])->name('profile')->middleware('admin_cant_open');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/profile/{id}',[ProfileController::class, 'userProfile'])->name('profile.single-user');

    // post
    Route::post('/post/{user_id}/{store_id}',[PostController::class, 'create'])->name('post.create');
    Route::delete('/post/{id}',[PostController::class, 'destroy'])->name('post.destroy');
    // Route::delete('/post/{id}',[ReportController::class, 'index'])->name('report.index');

    // bookmark
    Route::get('/bookmark', [BookmarkController::class, 'show'])->name('bookmark');
    Route::delete('/bookmark/{id}',[BookmarkController::class, 'destroy'])->name('bookmark.destroy');
    Route::post('/bookmarks/{id}',[BookmarkController::class, 'create'])->name('bookmark.create');

    //  rating
    Route::post('/rating',[RatingController::class, 'store'])->name('rating.store');
    Route::put('/rating/{id}', [RatingController::class, 'update'])->name('rating.update');

    // comment
    Route::post('/post/{id}', [CommentController::class, 'store'])->name('comment.store');
    
    //search
    Route::post('/search',[PostController::class, 'search']);
    Route::get('/dashboard',function(){
        return Inertia::render('Dashboard');
    });
    
    
    // report
    Route::post('/report', [ReportController::class, 'store'])->name('report.store');
    Route::get('/report',[ReportController::class, 'index'])->name('report.index');
    Route::delete('/report/{id}',[ReportController::class, 'destroy'])->name('report.destroy');
});

Route::middleware('is_admin')->group(function(){
    Route::get('/dashboard',function(){
        return Inertia::render('Dashboard');
    })->name('dashboard');
});


// Route::middleware('is_store')->group(function(){
//     Route::get('/store-register',function(){
//         return Inertia::render('Dashboard');
//     })->name('store.create');
// });

// Route::middleware('admin_cant_open')->group(function(){
//     Route::get('/profile', [ProfileController::class, 'show'])->name('profile');
//     Route::get('/profile/{id}',[ProfileController::class, 'userProfile'])->name('profile.single-user');
// });



require __DIR__.'/auth.php';
