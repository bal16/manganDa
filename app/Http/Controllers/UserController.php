<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::where('is_admin', false)->get();
        return Inertia::render('UserList', [
            'users' => $users,
        ]);
    }
}
