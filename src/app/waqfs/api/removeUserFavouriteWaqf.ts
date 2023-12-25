import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

const removeUserFavouriteWaqf = async (data:any) => {
    try {
       let jwtoken = getToken('jwtoken');
       let waqfs = await fetch(`${BASE_URL}/waqfs/${data.userId}`, {
          method: "POST",
          mode: 'cors',
          headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization': 'Bearer '+jwtoken
          },
          body:JSON.stringify(data)
       });

       return await waqfs.json();
    } catch (error) {
       console.log(error);
    }
 }

 export{
   removeUserFavouriteWaqf
 }