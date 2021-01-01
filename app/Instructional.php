<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Instructional extends Model
{
    protected $fillable = [
        'iuuid',
        'subject_id',
        'type',
        'title',
        'status',
    ];
}
