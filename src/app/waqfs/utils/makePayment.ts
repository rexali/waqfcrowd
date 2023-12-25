import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import axios from "axios";

export async function makePayment(amount: any, email: any) {

    try {
        let {
            data: {
                status, data: {
                    authorization_url
                }
            }
        } = await axios.post(`${BASE_URL}/get_transaction_url`, { amount, email }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken('jwtoken'),
            }
        });

        if (status) {
            if (typeof window !== "undefined") {
                window.location.assign(authorization_url);
            }
        }

    } catch (error) {
        console.warn(error);
    }
};