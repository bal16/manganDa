<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;
    
    public $incrementing = false;

    protected $with = [
        "user",
        // "comment",
        // "like",
        // "bookmark",
        // "report",
        // "store",
    ];

    use HasFactory;
    protected $fillable= [
        "body",
        "like",
        "image",
        "is_store",
        "user_id",
        "id"
    ];

    public function user() :BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // public function comment():HasMany
    // {
    //     return $this->hasMany(Comment::class);
    // }
    // public function like():HasMany
    // {
    //     return $this->hasMany(Like::class);
    // }
    // public function bookmark():HasMany
    // {
    //     return $this->hasMany(Bookmark::class);
    // }
    // public function report():HasMany
    // {
    //     return $this->hasMany(Report::class);
    // }
    // public function store():BelongsTo
    // {
    //     return $this->belongsTo(Store::class);
    // }
}
