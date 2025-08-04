<?php

namespace App\Models;

use App\Traits\Models\CompanyRelations;
use Illuminate\Database\Eloquent\Model;
use Mattiverse\Userstamps\Traits\Userstamps;

class Company extends Model
{
    use CompanyRelations;
    use Userstamps;
}
