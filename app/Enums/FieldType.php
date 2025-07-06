<?php

namespace App\Enums;

enum FieldType: string
{
    case TEXT = "TEXT";
    case LONG_TEXT = "LONG_TEXT";
    case DROPDOWN_SELECT = "DROPDOWN_SELECT";
    case SINGLE_SELECT = "SINGLE_SELECT";
    case MULTI_SELECT = "MULTI_SELECT";

}
