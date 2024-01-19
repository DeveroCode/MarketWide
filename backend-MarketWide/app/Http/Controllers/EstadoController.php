<?php

namespace App\Http\Controllers;

use App\Http\Resources\EstadoCollection;
use App\Models\Estado;

class EstadoController extends Controller
{
    public function index()
    {
        return new EstadoCollection(Estado::all());
    }

}
