import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

//  get profile
const getUserProfile = async (id: any) => {
    try {
        let response = await fetch(`${BASE_URL}/profiles/${id}/locations`, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken('jwtoken'),
            }
        });

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}
export{
    getUserProfile
}