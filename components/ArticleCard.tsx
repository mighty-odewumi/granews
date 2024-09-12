import { useDate } from "@/hooks/useDate";
import { View, Text, StyleSheet, Pressable, Image, } from "react-native";
import { Link } from "expo-router";
import { saveArticle } from "@/utils/saveArticle";


export default function ArticleCard(item: any) {

  const convertedDate = useDate(item);

  return (
    <Link href={`/home/${item.uuid}`} asChild >
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

            <Pressable onPress={() => saveArticle(item.uuid)}>
              <Image 
                source={require("@/assets/icons/bookmark2.png")}
                style={styles.bookmark}
              />
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
