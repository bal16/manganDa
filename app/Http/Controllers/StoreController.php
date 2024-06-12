<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Store;
use Illuminate\Http\Request;
use App\Http\Requests\StoreStoreRequest;
use App\Http\Requests\UpdateStoreRequest;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $store = Store::all();
        return Inertia::render('StoreList', [
           'stores' => $store
        ]);
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

        $existingStore = Store::where('user_id', $request->user_id)->first();

        if ($existingStore) {
            return redirect()->back()->withErrors(['user_id' => 'You have already registered a store.']);
        }

        $store = Store::create([
            'name' => $request->name,
            'user_id' => auth()->user()->id,
            'description' => $request->description,
            'address' => $request->address
        ]);

        // $userId = auth()->user()->id;
        // $user= User::find($userId);
        // $user->is_store = true;
        // $user->save();
        // User::up($user);
        // return redirect()->route('/login')->with('success', 'Store registered successfully.');
    }

    public function validate_store(Request $request) {
        $id_store = $request->id;

        // Mengambil instance model Store
        $store = Store::where('id', $id_store)->first();

        // Memastikan store ditemukan
        if ($store) {
            // Update properti is_validate
            $store->is_validate = true;
            $store->save();

            // Mengambil instance model User
            $user = User::where('id', $store->user_id)->first();

            // Memastikan user ditemukan
            if ($user) {
                // Update properti is_store
                $user->is_store = true;
                $user->save();
            }
        }
    }


    public function decline_store(Request $request){
        $store = Store::where('id', $request->id);
        $store->delete();
    }

    public function showStoreNotValidate(Request $request){

        $stores = Store::where('is_validate', false)->get();

        return Inertia::render('StoreValidate', [
            'stores' => $stores
        ]);
    }
    public function list(){

        $stores = Store::where('is_validate', false)->get();

        return response()->json([
            'stores' => $stores,
            'success' => true
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        $store = Store::findOrFail($id);
        $store->is_open = $request->is_open;
        $store->save();

        return response()->json(['success' => true, 'status' => $store->is_open]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Store $store)
    {
        $stores = Store::where('is_validate', true)->get();
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
