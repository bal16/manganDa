<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Http\Requests\StorecommentRequest;
use App\Http\Requests\UpdatecommentRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class CommentController extends Controller
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorecommentRequest $request)
    {
        //
    }

    public function addComment( Request $request )
    {
        $tanggalWaktu = Carbon::now('YmdHis');
        $user_id = $request -> input('user_id'); 
        $post_id = $request -> input('post_id'); 
        $id = $user_id . $post_id . $tanggalWaktu;
        $request -> input($id);
        $body = $request -> input('body'); 

    }

    /**
     * Display the specified resource.
     */
    public function showByPost(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatecommentRequest $request, comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
