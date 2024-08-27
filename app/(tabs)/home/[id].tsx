import { View, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const params = useLocalSearchParams();
  // const router = useRouter();
  const { id, snippet } = params;

  // console.log(id, snippet);

  const [data, setData] = useState<any>({});

  const apiKey = "DaTFTark8fn29YgMcw4jDX5kMJymWjOgwPVnwXGC";

  const url = new URL(`https://api.thenewsapi.com/v1/news/uuid/${id}`);

  url.searchParams.append("api_token", apiKey);
  const mainUrl = url.href;
  console.log(mainUrl);

  async function fetchData() {
    try {
      await axios.get(mainUrl)
      .then(response => setData(response.data))
    } catch (error) {
      console.log("An error occurred while fetching details", error);
    }
  }

  useEffect(() => {
    fetchData();
    console.log(data);
  },[id])

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Details #${params.id}` }}/>
      <Text>
        Details for {params.id}
      </Text>

      <Text>
        Snippet is {data.snippet}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },

});
