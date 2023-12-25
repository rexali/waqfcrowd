import { decode } from '../../../../lib/jwt';

import { NextResponse } from "next/server";
import { getCookies } from '@/app/auth/utils/getCookies';

export async function GET(request: Request) {

    // get request method
    const { method } = request;
    // check whether is get
    if (method !== 'GET') {
        
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


    try {

        const my_authCookie = await getCookies("my_auth");

        const my_auth = my_authCookie?.value;

        if (my_authCookie?.name !== 'my_auth') {

            return new NextResponse(JSON.stringify({ loggedIn: false }), {
                status: 403,
                headers: {
                    "content-Type": "application/json"
                },
            });

        }

        return new NextResponse(JSON.stringify({ loggedIn: true, user: decode(my_auth) }), {
            status: 200,
            headers: {
                "content-Type": "application/json"
            },
        });

    } catch (error) {
        console.log(error);
    }

}