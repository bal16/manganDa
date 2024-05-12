<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use illuminate\Http\Request;
use Psy\Readline\Hoa\Console;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('Home',['post'=>Post::all()]);
    }

    public function addPost(Request $request): RedirectResponse
    {
        // $id = $request -> input('id');
        $user_id = $request -> input('user_id');
        $store_id = $request -> input('store_id');
        $image = $request -> input('image');
        $is_store = $request -> input('is_store');
        $tanggalWaktu = Carbon::now('YmdHis');

        $id = $user_id . $store_id . $tanggalWaktu;
        $request -> input($id);

        return redirect('/');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
