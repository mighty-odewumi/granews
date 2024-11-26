import React, { useState, useEffect } from 'react';
import { 
  Image, 
  StyleSheet, 
  View, 
  Text, 
  StatusBar, 
  FlatList, 
  Pressable, 
  SafeAreaView,
  ActivityIndicator, 
} from 'react-native';
import Header from '@/components/header/Header';
import { MD2Colors, Searchbar } from "react-native-paper";
import dummyData from "@/scripts/dummyData.json";
import ArticleCard from '@/components/ArticleCard';
import { fetchNews } from '@/utils/fetchNews';

export default function HomeScreen() {

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");

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
  
  useEffect(() => {
    
    fetchNews(setData, setLoading);
    // setData(dummyData.data);
  }, [])

  
  return (
    <SafeAreaView style={styles.container}>
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

      {loading && <ActivityIndicator animating={true} color={"blue"}/>}

      <FlatList 
        data={data}
        keyExtractor={(item) => item.uuid}
        renderItem={({item}) => <ArticleCard article={item} />}
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
    // borderStyle: "dotted",
    borderBottomWidth: .3,
    backgroundColor: "#e0e0e0",
  },
  articleItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  articleContent: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  summary: {
    fontSize: 14,
    color: "#666",
  }
  
});
