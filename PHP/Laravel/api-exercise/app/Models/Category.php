<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    // protected $connection = 'category';
    protected $primaryKey = 'cid';
    protected $table = 'category';
    public $timestamps = false;
}