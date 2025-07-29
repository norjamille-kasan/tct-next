<?php

use App\Models\User;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);


test('guests are redirected to the login page', function () {
    $response = $this->get('/dashboard/segments');
    $response->assertRedirect('/login');
});


test('unauthorized users cannot visit the segment page', function () {
    $user = User::factory()->create();

    $this->actingAs($user);

    $response = $this->get('/dashboard/segments');
    $response->assertStatus(403);
});

test('authorized users can visit the segment page', function () {
    $user = User::factory()->create();
    $user->assignRole('super_admin');

    $this->actingAs($user);

    $response = $this->get('/dashboard/segments');
    $response->assertStatus(200);
});

// make test for validation errors
it('cannot create a segment with invalid data', function () {
    $user = User::factory()->create();
    $user->assignRole('super_admin');

    $this->actingAs($user);

    $response = $this->post('/dashboard/segments', []);
    $response->assertStatus(422);
});

it('can create a segment', function () {
    $user = User::factory()->create();
    $user->assignRole('super_admin');

    $this->actingAs($user);

    $response = $this->post('/dashboard/segments', [
        'name' => 'Test segment',
        'ref_key' => 'TEST-SEGMENT',
    ]);

    $response->assertStatus(302);
    $this->assertDatabaseHas('segments', [
        'name' => 'Test segment',
        'ref_key' => 'TEST-SEGMENT',
    ]);
});



