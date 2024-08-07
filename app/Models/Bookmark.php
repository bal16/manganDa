<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Bookmark extends Model
{
    public $incrementing = false;

    use HasFactory;
    protected $fillable = [
        'user_id',
        'post_id',
        'id'
    ];

    public function post():BelongsTo
    {
        return $this->belongsTo(Post::class);
    }
}

