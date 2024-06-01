<?php

namespace App\Http\Controllers;

use App\Models\Store;
use App\Http\Requests\StoreStoreRequest;
use App\Http\Requests\UpdateStoreRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;

class StoreController extends Controller
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

        return Inertia::render('RegisterStore');
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required',
            'address' => 'required',
            'user_id' => 'required|unique:stores,user_id'
        ]);
        // dd($request);

        $store = Store::create([
            'name' => $request->name,
            'user_id' => auth()->user()->id,
            'description' => $request->description,
            'address' => $request->address
        ]);

        $user = auth()->user();
        $user->is_store = true;
        $user->save();

        return redirect()->route('/')->with('success', 'Store registered successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Store $store)
    {
        $stores = Store::all();
        return Inertia::render('Stores',['stores'=>$stores]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Store $store)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStoreRequest $request, Store $store)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Store $store)
    {
        //
    }
}
