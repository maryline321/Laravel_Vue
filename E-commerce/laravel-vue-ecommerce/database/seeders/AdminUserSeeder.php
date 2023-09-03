<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        User::create([
            'name'=> 'Admin',
            'email'=>'chebetmaryline2@gmail.com',
            'password' => bcrypt('chebet123'),
            'email_verified_at' => now(),
            'is_admin' => true

        ]);
        
    }
}
