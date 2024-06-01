<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\Comment;
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
        $post = Post::with('user')->find($request->id);
        $stores = Store::all();

        $comments = Comment::where('post_id',$request->id)->get();

        // dd($post);
        return Inertia::render('SinglePost',[
            'posts' => $post,
            'stores' => $stores,
            'comments'=>$comments
        ]);
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
        if(!auth()->user()){
            return redirect('/login');
        }

        $id = 'p' . auth()->user()->id . str_replace([':', '-', ' '], '', date('Y-m-d H:i:s'));
        $validatedData = $request->validate([
            'id'=>'unique',
            'image' => 'image|file|max:1024',
            'body' => 'required',
        ]);

        if(Store::where('user_id',auth()->user()->id)->exists()){
            $validatedData['is_store'] = true;
        }

        if($request ->file('image')){
            $validatedData['image'] = $request->file('image')->store('post-images');
        }

        $validatedData['user_id'] = auth()->user()->id;
        $validatedData['id'] = $id;
        $validatedData['created_at'] = date('Y-m-d H:i:s');
        $validatedData['updated_at'] = date('Y-m-d H:i:s');

        Post::insert($validatedData);
        Session::flash('success','berhasil menambahkan postingan!');

    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        // Mendapatkan semua post dengan relasi user, store, dan bookmark
        // $posts = Post::with(['user', 'store', 'bookmark'])->orderBy('created_at', 'desc')->get();
        $posts = Post::all();

        // Mendapatkan semua store
        $stores = Store::all();

        // Inisialisasi variabel bookmark
        $userBookmarks = collect();

        // Memeriksa apakah pengguna telah login
        if ($request->user()) {
            // Mendapatkan semua bookmark milik pengguna yang sedang login
            $userBookmarks = Bookmark::where('user_id', $request->user()->id)->get()->keyBy('post_id');
        }

        // Menambahkan kolom isBookmark ke setiap post
        $posts->each(function ($post) use ($userBookmarks) {
            if ($userBookmarks->has($post->id)) {
                $post->isBookmark = true;
                $post->bookmark_id = $userBookmarks->get($post->id)->id;
            } else {
                $post->isBookmark = false;
                $post->bookmark_id = null;
            }
        });
        $posts->each(function ($post) {
            if($post->user->is_store){
                $store = Store::where('user_id', $post->user->id)->first();
                if ($store) {
                    $post->user->name = $store->name;
                }
            }
        });




        // dd($posts);
        // Mengembalikan response dengan data yang telah dimodifikasi
        return Inertia::render('Home', [
            'posts' => $posts,
            'stores' => $stores,
            'bookmark' => $userBookmarks
        ]);
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
