<?php

namespace App\Http\Controllers;
use App\Http\Request\RacaoRequest;
use App\Models\racao;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RacaoController extends Controller
{
    public function index()
    {
        return View()->with('RacaoCollection',racoes::paginate(2));
    }

    
    public function create()
    {
        return View('racao.create');
    }

   
    public function store(RacaoRequest $request)
    {
        racao::create($request->all());
        return rediurect('/racaos');
    }

   
    public function show(racao $racao)
    {
        return View()->with('objetoRacao',$racao);
    }

    
    public function edit(racao $racao)
    {
        return View()->with('objetoRacao', $racao);
    }

    
    public function update(RacaoRequest $request, racao $racao)
    {
        $racao->update($request->all());
        return redirect('racao');
    }

    
    public function destroy(racao $racao)
    {
        $racao->delete();
        return redirect('/racao');
    }
}
