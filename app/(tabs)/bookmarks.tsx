import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ArticleCard from "@/components/ArticleCard";
import { SafeAreaView } from "react-native-safe-area-context";
import dummyData from "@/scripts/dummyData.json";
import { Link } from "expo-router";
import { fetchNews } from "@/utils/fetchNews";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function Bookmarks() {

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const bookmarkedArticleIds = useSelector((state: RootState) => state.bookmarks.bookmarkedArticles);
  const bookmarkedArticles = data.filter(({ uuid }) => bookmarkedArticleIds.includes(uuid));

  useEffect(() => {
    fetchNews(setData, setLoading)
    // setData(dummyData.data);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Bookmarks</Text>

      {loading && <ActivityIndicator animating={true} color={"blue"}/>}
      
      {bookmarkedArticles.length > 0 ? 
        (<FlatList 
          data={bookmarkedArticles}
          renderItem={({item}) => <ArticleCard article={item} />}
          keyExtractor={(item) => item.uuid}
        />)
        : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>We detect no bookmarks with you! 🤨</Text>
            <Text style={styles.emptyStateText}>Can you please go
              <Text style={styles.backLink}>
                <Link href="/home"> Home?</Link>🤗
              </Text>
            </Text>
          </View>
        )
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStateText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  backLink: {
    color: "blue",
  }
});
