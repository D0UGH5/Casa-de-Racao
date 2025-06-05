<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  
    public function up(): void
    {
        Schema::create('racaos', function (Blueprint $table) {
            // protected $fillable = ['id', 'nome', 'marca', 'preco', 
            // 'validade', 'tipo', 'sabor', 'data_entrada'];
            
            $table->id();
            $table->string('nome');
            $table->string('marca');
            $table->decimal('preco');
            $table->string('validade');
            $table->string('tipo');
            $table->string('sabor');
            $table->string('data_entrada');
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('racaos');
    }
};
