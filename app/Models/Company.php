<?php

namespace App\Models;

use App\Traits\Models\CompanyRelations;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Mattiverse\Userstamps\Traits\Userstamps;

class Company extends Model
{
    use Userstamps;
    use CompanyRelations;
}
