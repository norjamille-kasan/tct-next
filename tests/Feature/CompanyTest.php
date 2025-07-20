<?php

use App\Models\Company;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);


test('guests are redirected to the login page', function () {
    $response = $this->get('/dashboard/companies');
    $response->assertRedirect('/login');
});


test('unauthorized users cannot visit the company page', function () {
    $user = User::factory()->create();

    $this->actingAs($user);

    $response = $this->get('/dashboard/companies');
    $response->assertStatus(403);
});

test('authorized users can visit the company page', function () {
    $user = User::factory()->create();
    $user->assignRole('super_admin');

    $this->actingAs($user);

    $response = $this->get('/dashboard/companies');
    $response->assertStatus(200);
});



test('unauthorized users cannot visit the company create page', function () {
    $user = User::factory()->create();

    $this->actingAs($user);

    $response = $this->get('/dashboard/companies/create');
    $response->assertStatus(403);
});

test('authorized users can visit the company create page', function () {
    $user = User::factory()->create();
    $user->assignRole('super_admin');

    $this->actingAs($user);

    $response = $this->get('/dashboard/companies/create');
    $response->assertStatus(200);
});

test('unauthorized users cannot create a company', function () {
    $user = User::factory()->create();

    $this->actingAs($user);

    $response = $this->post('/dashboard/companies', [
        'name' => 'Test company',
        'ref_key' => 'TEST-COMPANY',
    ]);

    $response->assertStatus(403);
});

test('authorized users can create a company', function () {
    $user = User::factory()->create();
    $user->assignRole('super_admin');

    $this->actingAs($user);

    $response = $this->post('/dashboard/companies', [
        'name' => 'Test company',
        'ref_key' => 'TEST-COMPANY',
    ]);

    $response->assertStatus(302);
    $this->assertDatabaseHas('companies', [
        'name' => 'Test company',
        'ref_key' => 'TEST-COMPANY',
    ]);
});

test('unauthorized users cannot visit the company edit page', function () {
    $user = User::factory()->create();

    $this->actingAs($user);

    $response = $this->get('/dashboard/companies/1/edit');
    $response->assertStatus(403);
});

test('authorized users can visit the company edit page', function () {
    $user = User::factory()->create();
    $user->assignRole('super_admin');

    $this->actingAs($user);

    $response = $this->get('/dashboard/companies/1/edit');
    $response->assertStatus(200);
});

test('unauthorized users cannot update a company', function () {
    $user = User::factory()->create();

    $this->actingAs($user);

    $response = $this->put('/dashboard/companies/1', [
        'name' => 'Updated Test company',
    ]);

    $response->assertStatus(403);
});

test('authorized users can update a company', function () {
    $user = User::factory()->create();
    $user->assignRole('super_admin');

    $this->actingAs($user);

    $response = $this->put('/dashboard/companies/1', [
        'name' => 'Updated Test company',
    ]);

    $response->assertStatus(302);
    $this->assertDatabaseHas('companies', [
        'name' => 'Updated Test company',
    ]);
});

test('unauthorized users cannot delete a company', function () {
    $user = User::factory()->create();

    $this->actingAs($user);

    $response = $this->delete('/dashboard/companies/1');

    $response->assertStatus(403);
});

test('authorized users can delete a company', function () {
    $user = User::factory()->create();
    $user->assignRole('super_admin');

    $this->actingAs($user);

    $response = $this->delete('/dashboard/companies/1');

    $response->assertStatus(302);
    $this->assertDatabaseMissing('companies', [
        'id' => 1,
    ]);
});





