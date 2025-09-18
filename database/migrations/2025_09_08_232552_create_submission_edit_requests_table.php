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
        Schema::create('submission_edit_requests', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('submission_id')->constrained('submissions')->references('id')->onDelete('cascade');
            $table->text('request_remarks');
            $table->text('response_remarks')->nullable();
            $table->string('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('submission_edit_requests');
    }
};
