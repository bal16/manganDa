<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Store;
use App\Models\Report;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(!auth()->check() || auth()->user()->role_id != 2){
            // abort(code: 403);
            return redirect(route('home'));
        }
        $userCount = User::count() - 1;
            $reportCount = Report::count();
            $validStoreCount = Store::where('is_validate', '1')->count();
            $unvalStoreCount = Store::where('is_validate', '0')->count();

            Inertia::share([
                    'jumlah' => [
                    'user' => $userCount,
                    'report' => $reportCount,
                    'store' => $validStoreCount,
                    'unvalStore' => $unvalStoreCount,
                ]
            ]);

        return $next($request);
    }

}
