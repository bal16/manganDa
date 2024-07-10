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
        'name',
        'map_link'
    ];
    protected $with = [
        'user',
    ];
    
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
