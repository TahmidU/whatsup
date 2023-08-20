<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Group extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'desc'
    ];


    public function Chat(): BelongsTo{
        return $this->belongsTo(Chat::class);
    }

    public function GroupMembers(): HasMany{
        return $this->hasMany(User::class);
    }
}
