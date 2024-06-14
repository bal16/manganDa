<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;
use Illuminate\Http\Request;

class MenuController extends Controller
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
    public function store(Request $request)
    {
        // dd($request);
        $store_id = $request->store_id;
        $name = $request->name;
        $price = $request->price;
        $request->validate([
            'image' => 'image|file|max:1024'
        ]);
        $image = $request->file('image')->store('post-images');

        Menu::create([
            'store_id' => $store_id,
            'name' => $name,
            'price' => $price,
            'image' => $image,
        ]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $menus = Menu::where('store_id', $id)->get();
        return response()->json([
            'menus' => $menus
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMenuRequest $request, Menu $menu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        //
    }
}
