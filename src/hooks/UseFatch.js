import { useEffect, useState } from "react";

export const UseFatch = (apiURL) => {
let [api,updateApi] = useState([]);


useEffect(()=>{

let fetchingAPI = async ()=>{
   
let fetching = await fetch(apiURL);
let converINJson = await fetching.json();

updateApi(converINJson.results)

}
fetchingAPI()

},[apiURL])


return {api}

}



