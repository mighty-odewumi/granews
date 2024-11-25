import axios from "axios";
import { API_KEY } from "@/constants/ApiKey";

export async function fetchNews(setData, setLoading) {
    
  const mainUrl = new URL("https://api.thenewsapi.com/v1/news/top");
  mainUrl.searchParams.append("api_token", API_KEY);
  const finalUrl = mainUrl.href;

  try{
    setLoading(true);
    await axios.get(finalUrl)  // "@/scripts/dummyData.json"
    .then(response => {
      console.log(response.data);  // Axios handles parsing automatically
      setData(response.data.data);
      setLoading(false);
    })
  } catch(error) {
      console.error("Couldn't fetch data!", error);
  } finally {
    setLoading(false);
  }
}