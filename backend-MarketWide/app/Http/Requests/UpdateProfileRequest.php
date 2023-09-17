<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password as Password;

class UpdateProfileRequest extends FormRequest
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
        $rules = [
            // data validation for update profile
            'name' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'string', 'email', 'max:255', Rule::unique('users')->ignore($this->user()->id)],
        ];

        // Si el campo 'password' está presente en la solicitud, aplicar las reglas de validación de contraseña
        if ($this->has('password')) {
            $passwordRules = [
                'password' => [
                    'confirmed',
                    Password::min(8)->letters()->numbers(),
                ],
            ];

            $rules = array_merge($rules, $passwordRules);
        };

        return $rules;
    }

    public function messages()
    {
        return [
            'name' => 'El nombre es requerido',
            'email.email' => 'El email no es correcto',
            'email.unique' => 'La cuenta ya existe por favor registre un nuevo email, o reinicie su contraseña',
            'password' => 'La contraseña debe contener al menos 8 caracteres, una letra y un número',
            'password.confirmed' => 'Las contraseñas no coinciden',
        ];
    }
}
