Route::get('/welcome', function () {
    return Inertia::render('Welcome');
})->name('welcome');
