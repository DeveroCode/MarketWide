<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProductoRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create(CreateProductoRequest $request)
    {
        // Validate create product
        $data = $request->validated();

        // Create product
        $product = Product::create([
            'marca' => $data['marca'],
            'modelo' => $data['modelo'],
            'condicion' => $data['condicion'],
            'codigo' => $data['codigo'],
            'descripcion' => $data['descripcion'],
        ]);

        return $product;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
