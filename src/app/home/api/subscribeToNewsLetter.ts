import { fetchData } from "@/app/waqfs/api/fetchData"
import { BASE_URL } from "@/constants/url"

async function subscribeToNewsLetter(email: any) {
    try {
        let result = await fetchData(`${BASE_URL}/subscriptions`, { body: JSON.stringify({ email }), method: "post" });
        console.log(result);
        return result
    } catch (error) {
        console.warn(error);
    }
}

export {
    subscribeToNewsLetter
}