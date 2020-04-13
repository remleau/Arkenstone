<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function create(Request $request)
    {
        // broadcast(new NewMessage(response()->json($request, 201))->toOthers();
        return response()->json($request, 201);
    }
}
