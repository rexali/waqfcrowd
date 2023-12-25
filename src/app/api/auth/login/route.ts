import { encode } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";
import { serialize } from 'cookie';

export async function POST(request: NextRequest) {

    const { method } = request;

    const { email, password } = await request.json();

    if (method !== 'POST') {
        let error_response = {
            status: "fail",
            message: "wrong method "
        }

        return new NextResponse(JSON.stringify(error_response), {
            status: 404,
            headers: {
                "content-Type": "application/json"
            },
        });
    };

    if (!email || !password) {
        let error_response = {
            status: "fail",
            message: "Missing required params"
        }
        return new NextResponse(JSON.stringify(error_response), {
            status: 400,
            headers: {
                "content-Type": "application/json"
            },
        });
    };

    const user = authenticateUser(email, password);

    if (user) {
    
        return new NextResponse(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                "content-Type": "application/json",
                "Set-Cookie": serialize('my_auth', user, { path: '/', httpOnly:false }),
            },
        });

        
    } else {
    
        let error_response = {
            success: "false",
            message: 'Wrong email of password',
        }

        return new NextResponse(JSON.stringify(error_response), {
            status: 401,
            headers: {
                "content-Type": "application/json"
            },
        });
    }

}


function authenticateUser(email: string, password: string) {
    const validEmail = 'johndoe@somecompany.com';
    const validPassword = 'strongpassword';
    if (email === validEmail && password === validPassword) {

        return encode({
            id: 'f678f078-fcfe-43ca-9d20-e8c9a95209b6',
            name: 'John Doe',
            email: 'johndoe@somecompany.com',
        });
    }

    return null;
}
