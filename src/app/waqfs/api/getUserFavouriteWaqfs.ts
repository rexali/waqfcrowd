import { BASE_URL } from "@/constants/url";
import { getToken } from "@/utils/getToken";


const getUserFavouritesWaqfs = async (userId: any) => {
   try {
      let jwtoken = getToken('jwtoken');
      let waqfs = await fetch(`${BASE_URL}/waqfs/${userId}/favourites`, {
         method: "GET",
         mode: 'cors',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtoken,
         },
      });

      return await waqfs.json();
   } catch (error) {
      console.log(error);
   }
}

export {
   getUserFavouritesWaqfs
}

