<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Store;
use App\Models\Comment;
use App\Models\Bookmark;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Psy\Readline\Hoa\Console;
use Illuminate\Support\Carbon;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\StorePostRequest;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
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

        $comments = Comment::where('post_id', $request->id)
            ->with('user')
            ->get();

        // dd($post);
        return Inertia::render('SinglePost', [
            'posts' => $post,
            'stores' => $stores,
            'comments' => $comments
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
        if (!auth()->user()) {
            return redirect('/login');
        }

        $id = 'p' . auth()->user()->id . str_replace([':', '-', ' '], '', date('Y-m-d H:i:s'));
        $validatedData = $request->validate([
            'id' => 'unique',
            'image' => 'image|file|max:1024',
            'body' => 'required',
        ]);

        // if(Store::where('user_id',auth()->user()->id)->exists()){
        //     $validatedData['is_store'] = true;
        // }

        if ($request->file('image')) {
            $validatedData['image'] = $request->file('image')->store('post-images');
        }
        if ($request->tag != null) $validatedData['store_id'] = $request->tag;
        $validatedData['user_id'] = auth()->user()->id;
        // $validatedData['store_id'] = $validatedData['tag'];
        $validatedData['id'] = $id;
        $validatedData['created_at'] = date('Y-m-d H:i:s');
        $validatedData['updated_at'] = date('Y-m-d H:i:s');

        Post::insert($validatedData);
        Session::flash('success', 'berhasil menambahkan postingan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        // Mendapatkan semua post dengan relasi user dan store
        $posts = Post::orderBy('created_at', 'desc')->paginate(10);

        // Mendapatkan semua store
        $stores = Store::where('is_validate', true)->get();

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

        // Update user name if user is a store
        // $stores = [
        //     [
        //         'id'=> 1,
        //         'name'=> 'nopalstore',
        //         'user_id'=> 1
        //     ]
        // ];
        $posts->each(function ($post) use ($stores) {
    if ($post->user->role_id == 3) {
        $store = ($stores->filter(function ($store) use ($post){
            return $store['user_id'] == $post->user_id;
        })->first());
        // dd($store);
        if (!empty($store)) {
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


    public function explore(Request $request)
    {
        // $query = $request -> input('query');

        // // cari toko
        // $stores = Store::where('name','like',"%$query%")->get();

        // // cari postingan
        // $posts = Post::where('body','like',"%$query%")->get();

        if ($request) {
            $query = $request->input('query');

            // $stores = Store::where('is_validate', true)
            //                 // ->where('name', 'like', "%$query%")s
            //                 ->get();
            $stores = Store::where('is_validate', true)->get();
            $posts = Post::where('body', 'like', "%$query%")->get();
        } else {
            $stores = Null;
            $posts = Null;
        }

        return Inertia::render('Explore', ['posts' => $posts, 'stores' => $stores]);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');
        if ($query != '') {
            $stores = Store::where('name', 'like', "%$query%")->where('is_validate', true)->get();
            $posts = Post::where('body', 'like', "%$query%")->with(['user'])->get();

            return response()->json([
                'success' => true,
                'posts' => $posts,
                'stores' => $stores
            ]);
        } else {
            return response()->json([
                'success' => false,
                'posts' => [],
                'stores' => []
            ]);
        }
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
    public function destroy(Request $request, $id)
    {
        // dd($id);
        $post = Post::findOrFail($id);
        if ($post->image) {
            Storage::delete($post->image);
        }
        Post::destroy($post->id);
        if (auth()->user()->is_admin || auth()->user()->id == $post->user_id) {
            $post->delete();
        }
    }
}
