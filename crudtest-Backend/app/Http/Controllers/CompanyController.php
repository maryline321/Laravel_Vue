<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyRequest;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller

{
   
    public function createCompany(CompanyRequest $request)
    {
        $company = Company::create([
            'name'=>$request->input('name'),
            'email'=>$request->input('email'),
            'address'=>$request->input('address'),
            'website'=>$request->input('website'),
        ]);

        return response()->json($company, 201);
    }

    public function getCompany($id)
    {
        $company =Company::find($id);

        if(!$company){
            return response()->json(['message'=>'User not found'], 404);
        }

        return response()->json($company, 200);
     }

    public function getCompanies()
    {
        $companies=Company::all();

        return response()->json($companies,status: 200);
        return  $companies;
    }

public function updateCompany(CompanyRequest $request, $id)
{
    $company = Company::find($id);

    if (!$company) {
        return response()->json(['message' => 'Company not found'], 404);
    }

    $company->update([
        'name' => $request->input('name'),
        'email' => $request->input('email'),
        'address' => $request->input('address'),
        'website' => $request->input('website'),
    ]);

    return response()->json($company, 200);
}

public function deleteCompany($id)
{
    $company = Company::find($id);

    if (!$company) {
        return response()->json(['message' => 'Company not found'], 404);
    }

    $company->delete();

    return response()->json(['message' => 'Company deleted'], 200);
}
}