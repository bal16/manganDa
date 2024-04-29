<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;
    protected $fillable = [
        "address",
        "description",
        "is_open"
    ];
    public function report(){
        return $this->hasMany(Report::class);
    }
    public function rating(){
        return $this->hasMany(Rating::class);
    }
    public function post(){
        return $this->hasMany(Post::class);
    }
}
