<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Store;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Psy\Readline\Hoa\Console;
use Illuminate\Support\Carbon;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\StorePostRequest;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\UpdatePostRequest;



class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index(Request $request)
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        // dd($request);
        $validatedData = $request->validate([
            'image' => 'image|file|max:1024',
            'body' => 'required'
        ]);
        // $id = $request -> input('id');
        // $user_id = $request -> input('user_id');
        $validatedData['user_id'] = auth()->user()->id;
        // $validatedData['created_at'] = time();
        // $validatedData['updated_at'] = time();
        // $validatedData['user_id'] = auth()->user()->id;
        // $validatedData[''] = auth()->user()->id;
        // $store_id = $request -> input('store_id');
        // $body = $request -> input('body');
        // $image = $request -> input('image');
        // $is_store = $request -> input('is_store');
        // $tanggalWaktu = Carbon::now('YmdHis');

        // dd($validatedData);
        // $validatedData['id'] = "p" . $validatedData['user_id'] . $validatedData['store_id'];

        // $existing_post = Post::find('id',$validatedData['id_post'])->first();
        // if($existing_post){
        //     Session::flash('error','mohon ulangi postingan!');
        // }else{
            // $post = new Post();
            // $post->id = $id_post;
            // $post->user_id = $user_id;
            // $post->store_id = $store_id;
            // $post->body = $body;
            // $post->image = $image;
            // $post->is_store = $is_store;
            // $post->save();
        Post::create($validatedData);
        Session::flash('success','berhasil menambahkan postingan!');
        // }

        // return redirect('home');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        $posts =$post->with(['user','store'])->get();
        $stores = Store::select('id','name')->get();
        return Inertia::render('Home',['posts'=>$posts, 'store'=>$stores]);
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

    // public function store(Request $request): RedirectResponse
    // {
    //     $validatedData = $request->validate([
    //         'image' => 'image|file|max:1024',
    //         'body' => 'required'
    //     ]);
    //     // $id = $request -> input('id');
    //     // $user_id = $request -> input('user_id');
    //     $validatedData['user_id'] = auth()->user()->id;
    //     // $validatedData['created_at'] = time();
    //     // $validatedData['updated_at'] = time();
    //     // $validatedData['user_id'] = auth()->user()->id;
    //     // $validatedData[''] = auth()->user()->id;
    //     // $store_id = $request -> input('store_id');
    //     // $body = $request -> input('body');
    //     // $image = $request -> input('image');
    //     // $is_store = $request -> input('is_store');
    //     // $tanggalWaktu = Carbon::now('YmdHis');

    //     // dd($validatedData);
    //     // $validatedData['id'] = "p" . $validatedData['user_id'] . $validatedData['store_id'];

    //     // $existing_post = Post::find('id',$validatedData['id_post'])->first();
    //     // if($existing_post){
    //     //     Session::flash('error','mohon ulangi postingan!');
    //     // }else{
    //         // $post = new Post();
    //         // $post->id = $id_post;
    //         // $post->user_id = $user_id;
    //         // $post->store_id = $store_id;
    //         // $post->body = $body;
    //         // $post->image = $image;
    //         // $post->is_store = $is_store;
    //         // $post->save();
    //     Post::create($validatedData);
    //     Session::flash('success','berhasil menambahkan postingan!');
    //     // }

    //     return redirect('home');
    // }

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
