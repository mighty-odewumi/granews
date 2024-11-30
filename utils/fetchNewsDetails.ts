import { API_KEY } from "@/constants/ApiKey";
import { ApiUrl } from "@/constants/ApiUrl";
import axios from "axios";

export async function fetchNewsDetails(id, setData) {
  const url = new URL(ApiUrl);

  url.searchParams.append("apikey", API_KEY);
  url.searchParams.append("id", id);
  const mainUrl = url.href;
  
  try {
    await axios.get(mainUrl)
    .then(response => {
      setData(response.data.results[0]);
    })
  } catch (error) {
    console.log("An error occurred while fetching details", error);
  }
}
