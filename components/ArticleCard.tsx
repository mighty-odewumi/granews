import { useEffect, useState } from "react";
import { useDate } from "@/hooks/useDate";
import { View, Text, StyleSheet, Pressable, Image, } from "react-native";
import { Link, router } from "expo-router";
import { checkIfSaved, saveArticle } from "@/utils/saveArticle";
import { toggleSaveArticle } from "@/utils/fetchBookmarks";
import { Icon } from "react-native-paper";

export default function ArticleCard(item: any) {

  const [isSaved, setIsSaved] = useState(false);
  const convertedDate = useDate(item);

  useEffect(() => {
    checkIfSaved(item.uuid, isSaved, setIsSaved);
  }, [item.uuid])

  return (
    <Link href={`/home/${item.uuid}`} asChild>
      <Pressable onPress={() => {
        android_ripple: {
          foreground: true
          color: "#000"

        }
      }}>
        <View style={styles.articleCard}>
          
          <View style={styles.mainInfo}>
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.source}>{item.source}
                </Text>
              </View>

              <View>
                <Text style={styles.articleTitle}>{item.title}</Text>
              </View>

            </View>

            <Image 
              source={{ uri: `${item.image_url}` }}
              style={styles.newsImage}
            />
          </View>

          <View style={styles.categoryDateAndBookmark}>
            <View style={styles.categoryAndDate}>
              <Text>{convertedDate}</Text>
            </View>

            <Pressable onPress={() => toggleSaveArticle(item.uuid, isSaved, setIsSaved)}>
              {isSaved ? (<Icon
                source="bookmark-check"
                size={28}
                color="blue"
              />)
              : (<Icon
                source="bookmark-outline"
                size={28}
              />)}
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Link>
  )
}


const styles = StyleSheet.create({
  articleCard: {
    marginVertical: 24,
    rowGap: 10,
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
