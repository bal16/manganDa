<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Store extends Model
{
    use HasFactory;
    protected $fillable = [
        "address",
        "description",
        "is_open",
        "user_id",
        'name'
    ];
    protected $with = [
        // 'rating',
        // 'post',
        'user',
        // 'report',
    ];
    // public function report() :HasMany
    // {
    //     return $this->hasMany(Report::class);
    // }
    // public function rating():HasMany
    // {
    //     return $this->hasMany(Rating::class);
    // }
    // public function post():HasMany
    // {
    //     return $this->hasMany(Post::class);
    // }
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
