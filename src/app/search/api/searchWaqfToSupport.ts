import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

const searchWaqfToSupport = async (term: any, pageNumber:any=1) => {
   try {
      let jwtoken = getToken('jwtoken');
      let response = await fetch(`${BASE_URL}/searchs?term=${term}&page=${pageNumber}`, {
         method: "GET",
         mode: 'cors',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtoken,
         },
      });

      return await response.json();
   } catch (error) {
      console.log(error);
   }
}

export {
   searchWaqfToSupport
}
