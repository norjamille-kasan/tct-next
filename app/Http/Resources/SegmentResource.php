<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SegmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=> $this->id,
            'company_id'=> $this->company_id,
            'ref_key'=> $this->ref_key,
            'name'=> $this->name,
            'description'=> $this->description,
            'color'=> $this->color,
            'created_at'=> $this->created_at,
            'updated_at'=> $this->updated_at,
            'company'=> new CompanyResource($this->whenLoaded('company'))
        ];
    }
}
