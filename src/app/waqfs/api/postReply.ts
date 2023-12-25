import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";

//  add a reply
const postReply = async (data: any) => {
    try {
       let reply = await fetch(`${BASE_URL}/replies`, {
          method: "POST",
          mode: 'cors',
          headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization': 'Bearer '+getToken("jwtoken"),
          },
          body: JSON.stringify(data)
       });

       return await reply.json();
    } catch (error) {
       console.log(error);
    }

 }

 export{
    postReply
 }