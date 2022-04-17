<?php

namespace App\Http\Controllers;

// require '../vendor/autoload.php';
use App\Models\Category;
use Illuminate\Http\Request;
use Validator;

class CategoryController extends Controller
{
    public function getData($id = null)
    {
        // $category = Category::
        return $id ? Category::findOrFail($id) : Category::all();
    }

    public function show($cid)
    {
        // intval($cid);
        // $category = Category::where('cid', $cid)->get();
        $category = Category::findOrFail($cid);
        return $category;
    }

    public function create(Request $request)
    {
        $rules = array('cid' => "required");
        $validator = Validator::make($request->all(), $rules); // 將請求驗證
        if ($validator->fails()) {
            return response()->json($validator->errors(), 401); // 更改狀態碼(未經授權)
        } else {
            $category = new Category;
            $category->cid = $request->cid;
            $category->cname = $request->cname;
            $result = $category->save();
            if ($result) {

                return ["Result" => 'Data has been saved'];
            } else {
                return ["Result" => 'Operation failed'];
            }
        }
    }

    public function update(Request $req)
    {
        $category = Category::findOrFail($req->cid);
        $category->cname = $req->cname;
        $result = $category->save();
        if ($result) {
            # code...
            return ["Result" => 'data is updated'];
        }
    }

    public function search($name = null)
    {
        // $category = Category::all();
        // return Category::where("cname", $name)->get();
        $category = Category::where("cname", "like", "%" . $name . "%")->get();
        return count($category) != 0 ? $category : ["msg" => "No data that you want"];
    }

    public function delete($id = null)
    {
        $category = Category::find($id);
        error_log($category);
        if ($category) {
            # code...
            $result = $category->delete();
            return $result ? ["Result" => "record has been delete"] : ["Result" => "delete operation is failed"];
        } else {
            return ["Result" => "this record is not exist"];
        }
    }
}
