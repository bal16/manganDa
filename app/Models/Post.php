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
        "store",
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
    public function store():BelongsTo
    {
        return $this->belongsTo(Store::class);
    }
}
