import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

const postComment=async (data: any) => {
    try {
       let commentRes = await fetch(`${BASE_URL}/comments`, {
          method: "POST",
          mode: 'cors',
          headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization': 'Bearer '+getToken('jwtoken'),
          },
          body:JSON.stringify(data)
       });

       return await commentRes.json();
    } catch (error) {
       console.warn(error);
    }

 }

 export{
    postComment
 }