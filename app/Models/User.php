<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $with = [
        // "user",
        "comment",
        "rating",
        "bookmark",
        "report",
        // "post",
    ];
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function like():HasMany
    {
        return $this->hasMany(Like::class);
    }
    public function comment():HasMany
    {
        return $this->hasMany(Comment::class);
    }
    public function rating():HasMany
    {
        return $this->hasMany(Rating::class);
    }
    public function post():HasMany
    {
        return $this->hasMany(Post::class);
    }
    public function report():HasMany
    {
        return $this->hasMany(Report::class);
    }
    public function bookmark():HasMany
    {
        return $this->hasMany(Bookmark::class);
    }
}
