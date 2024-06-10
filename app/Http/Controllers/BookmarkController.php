<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Http\Requests\StorebookmarkRequest;
use App\Http\Requests\UpdatebookmarkRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use App\Models\Store;


class BookmarkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request, $post_id)
    {
        $user_id = auth()->user()->id;
        $id = 'b' . $post_id . $user_id;

        $existingBookmark = Bookmark::where('id', $id)->exists();

        if($existingBookmark){
            return redirect()->back()->with('alert','bookmark sudah ada');
        }else{
            $validatedData['id'] = $id;
            $validatedData['user_id'] = auth()->user()->id;
            $validatedData['post_id'] = $post_id;

            Bookmark::insert($validatedData);

        }
        return redirect()->back();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $post_id, $id_user)
    {

    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $user = $request->user();

        $posts = Post::whereHas('bookmark', function ($query) use ($user) {
            $query->where('user_id', $user->id);        
        })->with(['user','bookmark'])->get();

        $userBookmarks = collect();

        $stores = Store::all();
        // Memeriksa apakah pengguna telah login
        if ($request->user()) {
            // Mendapatkan semua bookmark milik pengguna yang sedang login
            $userBookmarks = Bookmark::where('user_id', $request->user()->id)->get()->keyBy('post_id');
        }
        $posts->each(function ($post) use ($userBookmarks) {
            if ($userBookmarks->has($post->id)) {
                $post->isBookmark = true;
                $post->bookmark_id = $userBookmarks->get($post->id)->id;
            } else {
                $post->isBookmark = false;
                $post->bookmark_id = null;
            }
        });
        return Inertia::render('Bookmark',[
            'posts'=>$posts,'bookmark'=>$userBookmarks,'stores'=>$stores, 'user'=>$user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(bookmark $bookmark)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatebookmarkRequest $request, bookmark $bookmark)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(bookmark $bookmark, Request $request, $id)
    {
        $user_id = auth()->user()->id;
        try {
            $bookmark = Bookmark::where('post_id', $id)->where('user_id', $user_id)->first();

            if (!$bookmark) {
                return response()->json(['message' => 'Bookmark tidak ditemukan'], 404);
            }

            $bookmark->delete();

            return response()->json(['message' => 'Bookmark berhasil dihapus'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Terjadi kesalahan saat menghapus bookmark', 'error' => $e->getMessage()], 500);
        }
    }
}
