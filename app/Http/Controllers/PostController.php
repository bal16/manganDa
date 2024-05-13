<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Store;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use illuminate\Http\Request;
use Psy\Readline\Hoa\Console;
use Illuminate\Support\Facades\Session;



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
        $posts =$post->with(['user','store'])->get();
        
        return Inertia::render('Home',['post'=>$posts]);
    }

    public function showSearch(Request $request)
    {
        $query = $request -> input('query');

        // cari toko
        $stores = Store::where('name','like',"%$query%")->get();

        // cari postingan
        $posts = Post::where('body','like',"%$query%")->get();

        return Inertia::render('Explore',['post'=>$posts,'store'=>$stores]);
    }

    public function addPost(Request $request): RedirectResponse
    {
        // $id = $request -> input('id');
        $user_id = $request -> input('user_id');
        $store_id = $request -> input('store_id');
        $body = $request -> input('body');
        $image = $request -> input('image');
        $is_store = $request -> input('is_store');
        $tanggalWaktu = Carbon::now('YmdHis');

        $id_post = "p" . $user_id . $store_id . $tanggalWaktu;
        
        $existing_post = Post::find('id',$id_post)->first();
        if($existing_post){
            Session::flash('error','mohon ulangi postingan!');
        }else{
            $post = new Post();
            $post->id = $id_post;
            $post->user_id = $user_id;
            $post->store_id = $store_id;
            $post->body = $body;
            $post->image = $image;
            $post->is_store = $is_store;
            $post->save();

            Session::flash('success','berhasil menambahkan postingan!');
        }

        return redirect()->back();
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
    public function destroy(Post $post, Request $request, $id_post)
    {
        $post = Post::findOrFail($id_post);

        if ($post->user_id !== auth()->user()->id){
            abort(403);
        }

        $post -> delete();

        Session::flash('success','postingan berhasil dihapus');
        return redirect()->back();
    }
}
