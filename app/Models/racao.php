<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class racao extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'nome', 'marca', 'preco', 'validade', 'tipo', 'sabor', 'data_entrada'];
}
