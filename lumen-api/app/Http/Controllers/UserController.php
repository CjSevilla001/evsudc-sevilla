<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUsers()
    {
        $users = [
            ['id' => 1, 'name' => 'Aj Sumayod', 'email' => 'sumayod@gmail.com'],
            ['id' => 2, 'name' => 'Kristoeffer Rey Rovembe', 'email' => 'rovembe@gmail.com']
        ];
        return response()->json($users);
    }
}
