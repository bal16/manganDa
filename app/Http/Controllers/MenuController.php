<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
    public function show(Request $request)
    {
        $menus = Menu::where('store_id', $request->id)->get();
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
    public function destroy(Request $request)
    {
        // dd($request);
        $menu_id = $request->id;
        $menu = Menu::findOrFail($menu_id);

        if(auth()->user()->role_id != 3){
            return response()->json(['message'=>'anda tidak boleh menghapus menu ini!'], 403);
        }

        $menu->delete();
        Storage::delete($menu->image);

    }
}
