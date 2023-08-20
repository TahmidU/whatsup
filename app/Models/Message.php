<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'message'
    ];

    protected $casts = [
        'created_datatime' => 'datetime',
        'read' => 'boolean'
    ];

    public function User(): BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function Chat(): BelongsTo{
        return $this->belongsTo(Chat::class);
    }
}
