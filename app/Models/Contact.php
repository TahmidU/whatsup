<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [];

    public function User(): BelongsTo{
        return $this->belongsTo(User::class, 'user_id');
    }

    public function Contactee(): BelongsTo{
        return $this->belongsTo(User::class, 'contactee_id');
    }
}
