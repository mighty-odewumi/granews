import React, { useState, useEffect } from 'react';
import { Link, router, useNavigation, useRouter } from "expo-router";
import { 
  Image, 
  StyleSheet, 
  View, 
  Text, 
  StatusBar, 
  FlatList, 
  Pressable, 
  SafeAreaView, 
} from 'react-native';
import Header from '@/components/header/Header';
import { Searchbar } from "react-native-paper";
import axios from "axios";
import dummyData from "@/scripts/dummyData.json";
// import { API_KEY } from "@env";
import { saveArticle } from '@/utils/saveArticle';
import ArticleCard from '@/components/ArticleCard';


export default function HomeScreen() {

  const [data, setData] = useState<any[]>([]);

  const [searchQuery, setSearchQuery] = useState("");
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

  const testUrl = "@/scripts/dummyData.json";

  const mainUrl = new URL("https://api.thenewsapi.com/v1/news/top");
  mainUrl.searchParams.append("api_token", API_KEY);
  const finalUrl = mainUrl.href;

  const categories = {
    general: "",
    science: "",
    sports: "",
    business: "",
    health: "",
    entertainment: "",
    tech: "",
    politics: "",
    food: "",
    travel: ""
  };

  const router = useRouter();

  const navigation = useNavigation();
 
  async function fetchData() {
    try{
      await axios.get(finalUrl)  // "@/scripts/dummyData.json"
      .then(response => {
        console.log(response.data);  // Axios handles parsing automatically
        setData(response.data.data);
      })
    } catch(error) {
        console.error("Couldn't fetch data!", error);
    } finally {

    }
  }

  function sendSnippets(snippet: any, uuid: any) {
    console.log("Send Snippets", snippet);
    router.push({
      pathname: "/(tabs)/home/[id]",
      params: {
        id: uuid,
        snippet: "snippet"
      }
    });
    console.log("Sent!");
  }

  useEffect(() => {
    
    // fetchData();
    setData(dummyData.data);
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar  backgroundColor={"#5474FD"} barStyle={"dark-content"} /> */}
      <StatusBar  barStyle={'dark-content'} />

      <Header />

      <Searchbar 
        placeholder="Search more..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        theme={{ colors: 
          { 
            primary: "#5474FD", 
            elevation: { level3: "#ededee" } 
          }
        }}
        style={styles.searchBar}
      />

      <FlatList 
        data={data}
        renderItem={({item}) => <ArticleCard {...item} />}
        ItemSeparatorComponent={(props) => <View style={styles.separator}></View>}
        style={styles.flatList}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  searchBar: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  flatList: {
    marginHorizontal: 16,
  },
  separator: {
    borderStyle: "dotted",
    borderBottomWidth: .3,
    backgroundColor: "#ededed",
  },
  
});
