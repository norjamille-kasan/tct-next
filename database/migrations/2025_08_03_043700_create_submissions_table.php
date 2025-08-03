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
        Schema::create('submissions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->userstamps();
            $table->string('ref_id')->unique();
            $table->foreignId('task_id')->references('id')->on('tasks');
            $table->integer('total_minutes_spent')->nullable();
            $table->string('status');
            $table->json('task_original_value');


            $table->timestamp('started_at')->nullable();
            $table->timestamp('initial_submission_at')->nullable();
            $table->timestamp('final_submission_at')->nullable();

            //
            $table->timestamp('last_paused_at')->nullable();
            $table->timestamp('last_resumed_at')->nullable();
            $table->timestamp('last_edited_at')->nullable();

            //
            $table->boolean('is_locked');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('submissions');
    }
};
