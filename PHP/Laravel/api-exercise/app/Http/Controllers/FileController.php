<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    //
    public function upload(Request $req)
    {
      $result = $req->file('file')->store('apiDocds');
        return ["result" => $result];
    }
}