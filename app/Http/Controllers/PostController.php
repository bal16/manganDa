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
        $id = 'p' . auth()->user()->id . date('Y-m-d H:i:s');
        dd($id);
        $validatedData = $request->validate([
            'id'=>'unique',
            'image' => 'image|file|max:1024',
            'body' => 'required',
            'created_at' => ''
        ]);

        if(Store::select('user_id')->where('user_id','=', auth()->user()->id)){
            $validatedData['is_store'] = true;
        }else{
            $validatedData['is_store'] = false;
        }

        if($request ->file('image')){
            $validatedData['image'] = $request->file('image')->store('post-images');
        }

        $validatedData['user_id'] = auth()->user()->id;
        $validatedData['id'] = $id;

        Post::insert($validatedData);
        Session::flash('success','berhasil menambahkan postingan!');

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
