<?php

namespace App\Http\Resources\Teacher;

use Illuminate\Http\Resources\Json\JsonResource;

class SubjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'suuid' => $this->suuid,
            'subject' => $this->subject,
            'grade' => $this->grade,
            'description' => $this->description,
            'status' => $this->status,
            'created_at' => $this->created_at
        ];
    }
}
