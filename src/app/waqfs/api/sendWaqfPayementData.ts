import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

const sendWaqfPaymentData = async (data: {category:any,amount:any, userId?:any}) => {
   try {
      let jwtoken = getToken('jwtoken');
      let res = await fetch(`${BASE_URL}/donations`, {
         method: "POST",
         mode: 'cors',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+jwtoken
         },
         body: JSON.stringify(data)
      });

      return await res.json();
   } catch (error) {
      console.log(error);
   }
};

export {
   sendWaqfPaymentData
}