<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Rating;
use App\Models\Store;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Post;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function show(Request $request)
    {
        $user = auth()->user();
        
        $post = Post::where('user_id',$user->id)->with(['user','bookmark'])->orderBy('created_at','desc')->get();
        $store = Store::all();
        $rating = NULL;
        $userStore = Store::where('user_id', $user->id)->first();
        if ($userStore->is_validate) {
            $rating = Rating::where('store_id', $userStore->id)->avg('rate');
            $rating = $rating ? number_format($rating, 1) : '0.0';
            $user->name = $userStore->name;
                
            $post->transform(function ($post) use ($userStore) {
                $post->user->name = $userStore->name;
                return $post;
            });
        }


        // dd(auth()->user());
        return Inertia::render('Profile',[
            'post'=>$post,
            'stores'=>$store,   
            'user'=>$user,
            'rating' => $rating 
        ]);
    }

    public function userProfile(Request $request){
        
        $user_id = $request->id;
        $post = Post::where('user_id',$user_id)->with(['user','bookmark'])->orderBy('created_at','desc')->get();
        $store = Store::all();
        $user = (User::where('id',$user_id)->get())[0];

        $rating = NULL;
        $userStore = Store::where('user_id', $user_id)->first();

        $userRating = 0;
        
        if ($userStore) {
            $rating = Rating::where('store_id', $userStore->id)->avg('rate');
            $rating = $rating ? number_format($rating, 1) : '0.0';
            $user->name = $userStore->name;
                
            $post->transform(function ($post) use ($userStore) {
                $post->user->name = $userStore->name;
                return $post;
            });
            $userRating = Rating::where('store_id', $userStore->id)
            ->where('user_id', auth()->user()->id)
            ->first();
        }


        return Inertia::render(
            'Profile', [
                'post'=>$post,
                'stores'=>$store,
                'user'=>$user,
                'rating' => $rating,
                'userRating' => $userRating
            ]
            );
    }

    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
