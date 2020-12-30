<?php

namespace App\Helpers;

use Webpatser\Uuid\Uuid;

class Helper
{
    public static function uuid() {
        return Uuid::generate(4);
    }
}
