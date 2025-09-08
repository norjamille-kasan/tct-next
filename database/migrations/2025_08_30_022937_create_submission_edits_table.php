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
        Schema::create('submission_edits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('submission_id')->constrained('submissions')->references('id')->onDelete('cascade');
            $table->text('request_reason');
            $table->text('response_reason')->nullable();
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('submission_edits');
    }
};
