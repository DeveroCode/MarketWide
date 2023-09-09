<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password as Password;

class RegistroRequest extends FormRequest
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
            'name' => ['required', 'string'],
            'email' => ['required', 'string', 'unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                Password::min(8)->letters()->numbers(),
            ],
            'type' => ['int'],
        ];
    }

    public function messages()
    {
        return [
            'name' => 'El nombre es requerido',
            'email.required' => 'El email es obligatorio',
            'emai.email' => 'El email no es correcto',
            'email.unique' => 'La cuenta ya existe por favor registre un nuevo email, o reinicie su contraseña',
            'password' => 'La contraseña debe contener al menos 8 caracteres, una letra y un número',
            'password.confirmed' => 'Las contraseñas no coinciden',
        ];
    }
}