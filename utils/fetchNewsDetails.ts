import { API_KEY } from "@/constants/ApiKey";
import axios from "axios";
import { Dimensions } from "react-native";

export async function fetchNewsDetails(id, setData) {
  const url = new URL(`https://api.thenewsapi.com/v1/news/uuid/${id}`);
  const { height, width } = Dimensions.get("screen");

  url.searchParams.append("api_token", API_KEY);
  const mainUrl = url.href;
  console.log(mainUrl);
  
  try {
    await axios.get(mainUrl)
    .then(response => setData(response.data))
  } catch (error) {
    console.log("An error occurred while fetching details", error);
  }
}
