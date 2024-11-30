import { API_KEY } from "@/constants/ApiKey";
import axios from "axios";
import { Dimensions } from "react-native";

export async function fetchNewsDetails(id, setData) {
  const url = new URL(`https://newsdata.io/api/1/latest`);
  const { height, width } = Dimensions.get("screen");

  url.searchParams.append("apikey", API_KEY);
  url.searchParams.append("id", id);
  const mainUrl = url.href;
  console.log(mainUrl);
  
  try {
    await axios.get(mainUrl)
    .then(response => {
      console.log(response.data.results);
      setData(response.data.results[0]);
    })
  } catch (error) {
    console.log("An error occurred while fetching details", error);
  }
}
