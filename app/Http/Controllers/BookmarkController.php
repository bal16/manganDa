<?php

namespace App\Http\Controllers;

use App\Models\bookmark;
use App\Http\Requests\StorebookmarkRequest;
use App\Http\Requests\UpdatebookmarkRequest;

class BookmarkController extends Controller
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
    public function store(StorebookmarkRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(bookmark $bookmark)
    {
        //
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
    public function destroy(bookmark $bookmark)
    {
        //
    }
}
