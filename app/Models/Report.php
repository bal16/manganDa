<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Report extends Model
{
    use HasFactory;
    protected $fillable = [
        "user_id",
        "store_id",
        "body",
        "is_post",
        "is_store"
    ];
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function store():BelongsTo
    {
        return $this->belongsTo(Store::class);
    }
    public function post():BelongsTo
    {
        return $this->belongsTo(Post::class);
    }
}
