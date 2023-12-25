import { dbTransact } from "@/app/api/data/dbTransact";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,) {
    try {
        if (request.method !== 'GET') {
            let error_response = {
                status: "fail",
                message: "wrong method "
            }

            return new NextResponse(JSON.stringify(error_response), {
                status: 404,
                headers: {
                    "Content-Type": "application/json"
                },
            });
        }

        // get the json data
        const name = request.nextUrl.searchParams.get("name");
        const data = request.url;
        // get all users using database transaction method
        const users = await dbTransact("select * from users", []);

        if (!name) {

            let error_response = {
                status: "fail",
                message: "Missing required params"
            }

            return new NextResponse(JSON.stringify(error_response), {
                status: 404,
                headers: {
                    "Content-Type": "application/json"
                },
            });
        }

        let json_response = {
            status: "success",
            data: {
                name: name
            }
        }

        return new NextResponse(JSON.stringify(users), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
        });
    } catch (error: any) {

        if (error.code === "P2002") {
            let error_response = {
                status: "fail",
                message: "Name already existed"
            }

            return new NextResponse(JSON.stringify(error_response), {
                status: 409,
                headers: {
                    "Content-Type": "application/json"
                },
            });
        }
        let error_response = {
            status: "fail",
            message: error.message
        }

        return new NextResponse(JSON.stringify(error_response), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            },
        });
    }
}