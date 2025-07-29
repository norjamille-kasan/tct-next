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
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->userstamps();
            $table->foreignId('task_id')->constrained('tasks');
            $table->text('message');
            $table->string('field_type');
            $table->integer('position')->default(0);
            $table->json('options')->nullable();
            $table->text('valid_input')->nullable();
            $table->boolean('required')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
