<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RacaoRequest extends FormRequest
{
    
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
/*
            $table->id();
            $table->string('nome');
            $table->string('marca');
            $table->decimal('preco');
            $table->string('validade');
            $table->string('tipo');
            $table->string('sabor');
            $table->string('data_entrada');
            $table->timestamps();
*/
        return [
           'id' => 'required|integer|max:4',
           'nome' => 'required|max:30',
           'marca' => 'required|max:30',
           'preco' => 'required|numeric|between:0,2',
           'validade' => 'required|max:30',
           'tipo' => 'required|max:20',
           'sabor' => 'required|max:30',
           'data_entrada' => 'required|max:8',
        
        ];
    }

    public function messages(): array
    {
        return[];
    }
}
