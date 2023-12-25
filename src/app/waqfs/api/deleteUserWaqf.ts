import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";


const deleteUserWaqf = async (data: { userId: any, waqfId: any }) => {
   try {
      let token = getToken('jwtoken') as string;
      let waqfs = await fetch(`${BASE_URL}/waqfs`, {
         method: "delete",
         mode: 'cors',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
         },
         body: JSON.stringify(data)
      });

      return await waqfs.json();
   } catch (error) {
      console.log(error);
   }
};

export {
   deleteUserWaqf
}