<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Http\Requests\StorereportRequest;
use App\Http\Requests\UpdatereportRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reports = Report::with('user')->get();

        return Inertia::render("ReportList",[
            'reports' => $reports
        ]);
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
        // $request->validate([
        //     'body' => 'required|string|max:255',
        // ]);

        $report = Report::create([
            'user_id' => auth()->user()->id,
            'post_id' => $request->post,
            'body' => $request->body
        ]);

        return redirect()->back()->with('message', 'Laporan Anda telah dikirim.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatereportRequest $request, report $report)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        //
    }
}
