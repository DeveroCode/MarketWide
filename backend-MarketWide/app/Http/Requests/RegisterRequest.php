<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password as RulesPassword;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            // data from Vue - Front-End
            'name' => ['required', 'string'],
            'email' => ['required', 'unique:users, email'],
            'password' => [
                'required',
                'confirmed',
                RulesPassword::min(8)->letters()->numbers(),
            ],
            'type_user_id' => ['required', 'string'],
        ];
    }
}