<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('remember_token');
            $table->dropColumn('email_verified_at');
            $table->dropColumn('email');
            $table->dropColumn('name');

            $table->string('first_name');
            $table->string('last_name');
            $table->string('username')->unique();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {}
};
