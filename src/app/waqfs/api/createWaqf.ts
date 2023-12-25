import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

const createWaqf = async (data: any) => {
    try {
        let jwtoken = getToken('jwtoken');
        let result = await fetch(`${BASE_URL}/waqfs`, {
            method: "post",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+jwtoken,
            },
            body: JSON.stringify(data)
        });

        return await result.json();
    } catch (error) {
        console.log(error);
    }
}

export {
    createWaqf
}