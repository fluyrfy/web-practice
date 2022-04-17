@extends('layouts.layout')

@section('content')
<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title m-b-md">
            <img src="/img/pizza-house.jpg" alt="this is pizza house logo"> </br>
            The North's Best Pizzas
        </div>
        <p class="mssg"> {{ session('mssg') }} </p>
        <a href="{{ route('pizzas.create') }}">Order a Pizza</a>
    </div>
</div>
@endsection
