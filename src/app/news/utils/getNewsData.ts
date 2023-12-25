import axios from "axios";

const getNewsData =  async () => {
    try {
        let {data} = await axios.get(`https://almubarakwaqf.org/wp-json/wp/v2/posts`, {
            headers: {
              'Content-Type': 'application/json',
            }
          });
          console.log(data);
          
    } catch (error) {
      console.warn(error);
    }
  };

export{
    getNewsData
}