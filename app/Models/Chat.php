<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * A chat is essentially a room for both 1-to-1 and groups conversations
 */
class Chat extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected $cast = [
        'created_datetime' => 'datetime'
    ];

    public function ChatGroup(): HasOne{
        return $this->hasOne(Group::class);
    }
}
