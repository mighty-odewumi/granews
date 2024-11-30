import React from "react";
import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import BookmarkButton from "@/components/BookmarkButton";
import { formatDate } from "@/utils/formatDate";

type ArticleCardProps = {
  article: { 
    article_id: string, 
    title: string,
    source_name: string,
    image_url: string,
    pubDate: string,
  };
};

export default function ArticleCard({ article }: ArticleCardProps) {

  return (
    <Link href={`/home/${article.article_id}`} key={article.article_id} asChild>
      <TouchableOpacity onPress={() => {
        android_ripple: {
          foreground: true
          color: "#000"

        }
      }}>
        <View style={styles.articleCard}>
          
          <View style={styles.mainInfo}>
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.source}>{article.source_name}
                </Text>
              </View>

              <View>
                <Text style={styles.articleTitle} numberOfLines={3}>{article.title}</Text>
              </View>

            </View>

            <Image 
              source={{ uri: `${article.image_url}` }}
              style={styles.newsImage}
            />
          </View>

          <View style={styles.categoryDateAndBookmark}>
            <View style={styles.categoryAndDate}>
              <Text>{formatDate(article.pubDate)}</Text>
            </View>

            <BookmarkButton articleId={article.article_id} />

          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  articleCard: {
    marginVertical: 8,
    rowGap: 10,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    padding: 4,
    paddingBottom: 12,
  },
  mainInfo: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  source: {
    fontSize: 16,
    fontFamily: "RobotoLight",
    textTransform: "uppercase",
  },
  articleTitle: {
    fontFamily: "RobotoBold",
    fontSize: 18,
    letterSpacing: .5,
  },
  categoryDateAndBookmark: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryAndDate: {
    flexDirection: "row",
    marginRight: "auto",
    alignItems: "center", 
  },
  category: {
    backgroundColor: "",
    borderWidth: 1,
    borderRadius: 4,
    color: "gray",
    padding: 4,
  },
  bookmark: {
    height: 24, 
    width: 24,
  }
});
