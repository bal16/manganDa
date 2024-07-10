<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use App\Http\Requests\StoreratingRequest;
use App\Http\Requests\UpdateratingRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Psy\Readline\Hoa\Console;
use App\Models\Store;

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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'store_id' => 'required|exists:stores,id',
            'rate' => 'required|integer|min:1|max:5',
        ]);

        $rating = Rating::create([
            'user_id' => $request->user_id,
            'store_id' => $request->store_id,
            'rate' => $request->rate
        ]);

        $averageRating = Rating::where('store_id', $request->store_id)->avg('rate');

        $store = Store::findOrFail($request->store_id);
        $store->ratings = $averageRating;
        $store->save();

        return response()->json(['message' => 'Rating created successfully', 'rating' => $rating], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
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
    public function update(Request $request)
    {
        // Fetch the rating by ID
        $rating = Rating::findOrFail($request->id);

        // Update the rating
        $rating->update([
            'rate' => $request->rate,
        ]);

        $averageRating = Rating::where('store_id', $request->store_id)->avg('rate');

        $store = Store::findOrFail($request->store_id);
        $store->ratings = $averageRating;
        $store->save();

        return response()->json(['message' => 'Rating updated successfully', 'rating' => $rating], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rating $rating)
    {
        //
    }
}
