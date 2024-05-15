<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Http\Requests\StorebookmarkRequest;
use App\Http\Requests\UpdatebookmarkRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

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
    public function create(Request $request)
    {
        dd($request->id);
        $user_id = $request -> input('user_id');
        $post_id = $request -> input('post_id');
        $bookmark_id = $request -> input("b" . $user_id . $post_id);

        $existingBookmark = Bookmark::find('id',$bookmark_id)->first();

        if($existingBookmark){
            Session::flash('error','Bookmark telah tersedia!');
        }else{
            $bookmark = new Bookmark();
            $bookmark->id = $bookmark_id;
            $bookmark->user_id = $user_id;
            $bookmark->post_id = $post_id;
            $bookmark->save();

            Session::flash('success','Bookmark berhasil ditambahkan');
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
        $id = auth()->user()->id;
        $bookmarks = Bookmark::where('user_id', $id)->get();
        return Inertia::render('Bookmark',[
            'bookmark'=>$bookmarks
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
        $bookmark = Bookmark::findOrFail($id);

        if ($bookmark->user_id !== auth()->user()->id) {
            abort(403); 
        }

        $bookmark->delete();

        Session::flash('success','bookmark telah dihapus');
        return redirect()->back();
    }
}
