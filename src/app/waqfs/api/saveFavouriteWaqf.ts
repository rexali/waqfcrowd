import { BASE_URL } from "@/constants/url";
import { fetchData } from "./fetchData";
// import { Data } from "../types/data";
import { savePathLink } from "@/utils/savePathLink";

const saveFavouriteWaqf = async (data:any, successCallback?: any, failCallback?: any) => {
   try {
      if (data.userId) {
         const result = await fetchData(`${BASE_URL}/likes`, { body: JSON.stringify(data), method: "post" });
         if (result.affectedRows===1) {
            successCallback();
         }
      } else {
        savePathLink();
      }
   } catch (error) {
      failCallback();
      console.warn(error);
   }
}

export {
   saveFavouriteWaqf
}
