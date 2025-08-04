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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->userstamps();
            $table->foreignId('company_id')->constrained('companies');
            $table->foreignId('segment_id')->constrained('segments');
            $table->string('ref_key')->unique()->nullable();
            $table->text('title');
            $table->text('description')->nullable();
            $table->string('computation_category')->nullable();
            $table->integer('question_version')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
