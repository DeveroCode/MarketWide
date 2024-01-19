<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductoRequest extends FormRequest
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
            // product data
            'marca' => ['required', 'string'],
            'modelo' => ['required', 'string'],
            'condicion' => ['required', 'integer'],
            'codigo' => ['string', 'nullable'],
            'descripcion' => ['required', 'string'],
        ];
    }

    public function messages()
    {
        return [
            'marca.required' => 'Por favor especifique la marca',
            'modelo.required' => 'El modelo del producto es requerido',
            'condicion.required' => 'La condición es requerida',
            'descripcion.required' => 'La descripción es requerida',
        ];
    }
}
