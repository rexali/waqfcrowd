import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";
import axios from "axios";
import FormData from "form-data";

// update profile
const updateUserProfile = async (formdata: FormData, userId:any) => {
   
   try {
      const { data } = await axios.post(`${BASE_URL}/profiles/${userId}`, formdata, {
         headers: {
            'Authorization': 'Bearer ' + getToken("jwtoken"),
         }
      });
      return data;
   } catch (error) {
      console.log(error);
   }
}

export {
   updateUserProfile
}