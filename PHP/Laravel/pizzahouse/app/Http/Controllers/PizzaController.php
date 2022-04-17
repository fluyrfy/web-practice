<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pizza;

class PizzaController extends Controller
{
  // public function __construct()
  // {   對所有類方法執行中間件(身分驗證)
  //   $this->middleware('auth');
  // }

    public function index() {
      $pizzas = Pizza::all();
      // $name = request('name');
      $pizzas = Pizza::orderBy('name')->get();
      $pizzas = Pizza::where('type', 'hawaiian')->get();
      $pizzas = Pizza::latest()->get();

      return view('pizzas.index', ['pizzas' => $pizzas,
    ]);
    }
    public function show($id) {
      $pizza = Pizza::findOrFail($id);  // 找尋單筆數據 使用findOrFail而不是find
      return view('pizzas.show', ['pizza' => $pizza]);
    }

    public function create() {
      return view('pizzas.create');
    }

    public function store() {
      // error_log(request('name'));
      $pizza = new Pizza();
      $pizza->name = request('name');
      $pizza->type = request('type');
      $pizza->base = request('base');
      // error_log($pizza);
      // return request('toppings');
      $pizza->toppings = request('toppings');
      $pizza->save();
      return redirect('/')->with('mssg', 'Thanks for your order'); // 這裡不能像 return view 一樣傳參
    }

    public function destroy($id) {
      $pizza = Pizza::findOrFail($id);
      $pizza->delete();

      return redirect('/pizzas');
    }
}