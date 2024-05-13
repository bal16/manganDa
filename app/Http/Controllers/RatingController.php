<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use App\Http\Requests\StoreratingRequest;
use App\Http\Requests\UpdateratingRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class RatingController extends Controller
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
    public function create(Request $request)
    {
        $user_id = $request -> input('user_id');
        $store_id = $request -> input('store_id');
        $rating = $request -> input('rating');
        $rating_id = "r" . $user_id . $store_id;
        $request -> input($rating);

        $existingRating = Rating::where('id',$rating_id)->first();

        if($existingRating){
            Session::flash('error','Anda telah melakukan rating untuk toko ini!');
        }else{
            $rating = new Rating();
            $rating->id = $rating_id;
            $rating->user_id = $user_id;
            $rating->store_id = $store_id;
            $rating->rating = $request->input('rating');
            $rating->save();
            
            Session::flash('success', 'Rating berhasil ditambahkan');
        }
        return redirect()->back();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreratingRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Rating $rating)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rating $rating)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateratingRequest $request, rating $rating)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rating $rating)
    {
        //
    }
}
