<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Product;
use App\Models\ProductType;
use Illuminate\Http\Request;
use App\Models\ProductCondition;
use Illuminate\Http\RedirectResponse;

class ProductController extends Controller
{
    public function create(): Response
    {
        $type = ProductType::all();
        $condition = ProductCondition::all();
        return Inertia::render('Product/ProductForm')->with('type', $type)->with('condition', $condition);
    }

    public function getAll(): Response
    {
        $product = Product::all();
        return Inertia::render('Product/ProductList')->with('product', $product);
    }

    public function store(Request $request): RedirectResponse
    {
        // $request->validate([
        //     'product_type_id' => 'required|string|max:255',
        //     'product_condition_id' => 'required|string|max:255',
        //     'description' => 'required|string|max:255',
        //     'defect' => 'required|string|max:255',
        //     'amount' => 'required|string|max:255',
        //     'picture' => 'required|string|max:255',
        // ]);

        Product::create([
            'user_id' => auth()->user()->id,
            'product_type_id' => $request->product_type_id,
            'product_condition_id' => $request->product_condition_id,
            'description' => $request->description,
            'defect' => $request->defect,
            'amount' => $request->amount,
            'picture_url' => $request->picture,
        ]);
        
        return redirect()->route('product.all')->with('message', 'Product created successfully.');
    }

    public function update(Request $request, $id): RedirectResponse
    {
        $product = Product::find($id);
        $product->update([
            'user_id' => auth()->user()->id,
            'product_type_id' => $request->product_type_id,
            'product_condition_id' => $request->product_condition_id,
            'description' => $request->description,
            'defect' => $request->defect,
            'amount' => $request->amount,
            'picture_url' => $request->picture,
        ]);
        
        return redirect()->route('product.all')->with('message', 'Product Berhasil Diupdate.');
    }

    public function delete($id): RedirectResponse
    {
        $product = Product::find($id);
        $product->delete();
        return redirect()->route('product.all')->with('message', 'Product Berhasil Dihapus.');
    }
}
