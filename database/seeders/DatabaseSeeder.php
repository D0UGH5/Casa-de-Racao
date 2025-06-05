<?php

namespace Database\Seeders;

use App\Models\racao;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    
    public function run(): void
    {

        //protected $fillable = ['id', 'marca', 
        // 'preco', 'validade', 'tipo', 'sabor', 'data_entrada'];
        racao::create(['id'=>1, 'nome'=> 'racao premium' , 'marca'=>'Gold', 'preco'=>23.50, 'validade'=> '3 meses', 'tipo' => 'cachorro', 'sabor'=> 'carne', 'data_entrada' => '2025-02-09']);
    }
}
