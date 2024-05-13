<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable= [
        "body",
        "like",
        "image",
        "is_store",
        "user_id"
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function comment(){
        return $this->hasMany(Comment::class);
    }
    public function like(){
        return $this->hasMany(Like::class);
    }
    public function bookmark(){
        return $this->hasMany(Bookmark::class);
    }
    public function report(){
        return $this->hasMany(Report::class);
    }
    public function store(){
        return $this->belongsTo(Store::class);
    }
}
