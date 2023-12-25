import { BASE_URL } from "@/constants/url";
import { fetchData } from "./fetchData";

const getUserWaqfs = async (userId: any) => {
    try {  
        
        return await fetchData(`${BASE_URL}/waqfs/${userId}/users`, { method: "post" });
    } catch (error) {
        console.log(error);
    }
}

export {
    getUserWaqfs
}