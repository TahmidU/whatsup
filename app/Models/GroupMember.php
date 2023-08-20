<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GroupMember extends Model
{
    use HasFactory;

    public function Group(): BelongsTo{
        return $this->belongsTo(Group::class);
    }

    public function User(): BelongsTo{
        return $this->belongsTo(User::class);
    }
}
