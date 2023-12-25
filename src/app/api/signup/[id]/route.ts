import { NextRequest, NextResponse } from "next/server";

export async function GET (request: Request,{params}:{params:{id:string}}) {
    try {
    // get the json data
    //  const jsonData = request.nextUrl.searchParams.get("name");
    //  console.log(jsonData);   
    // use database client to create data
      
        let json_response = {
            status:"success",
            data: {
                name:params.id
            }
        }
        return new NextResponse(JSON.stringify(json_response),{
            status:200,
            headers:{
                "Content-Type":"application/json"
            },
        });
    } catch (error) {
        console.log(error);
        
    }
    
  
}