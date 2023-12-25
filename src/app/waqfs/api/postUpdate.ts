import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

const postUpdate = async (data: { waqfId: any, title: any, body: any, userId: any }) => {
    try {
        let jwtoken = getToken('jwtoken') as string;
        let res = await fetch(`${BASE_URL}/updates`, {
            method: "post",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwtoken
            },
        });

        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export {
    postUpdate
}