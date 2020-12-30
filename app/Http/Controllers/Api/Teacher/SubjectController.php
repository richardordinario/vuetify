<?php

namespace App\Http\Controllers\Api\Teacher;

use App\Http\Controllers\Controller;
use App\Http\Resources\Teacher\SubjectResource;
use Illuminate\Http\Request;
use App\Helpers\Helper;
use App\Subject;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Subject::paginate(6);
        // $data = [
        //     'all' => ,
        //     'publish' => Subject::where('status', 1)->paginate(6),
        //     'approval' => Subject::where('status', 0)->paginate(6),
        //     'draft' => Subject::where('status', 2)->paginate(6),
        // ];
        return response()->json($data, 201);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'subject' => 'required',
            'grade' => 'required',
        ]);

        Subject::create([
            'suuid' => Helper::uuid(),
            'subject' => $request->subject,
            'grade' => $request->grade,
        ]);
        return response()->json('Save Successfully', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
