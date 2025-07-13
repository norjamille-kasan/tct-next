<?php

use App\Models\User;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);


beforeEach(function () {
    $this->user = User::role('super_admin')->first();
});

// make a test for
// only user can access company index is user with has view:company permission
test('only user can access company index', function () {
    $unauthorizedUser = User::factory()->create();

    $this->actingAs($unauthorizedUser);

    $response = $this->get('/dashboard/companies');

    $response->assertStatus(403);

    $this->actingAs($this->user);

    $response = $this->get('/dashboard/companies');

    $response->assertStatus(200);
});


// only user can access company create is user with has create:company permission
// only user can access company show is user with has view:company permission
// only user can access company edit is user with has update:company permission
// only user can access company update is user with has update:company permission
// only user can access company destroy is user with has delete:company permission

