import AsyncStorage from "@react-native-async-storage/async-storage";

export async function fetchBookmarks() {
  try {
    const savedArticles = await AsyncStorage.getItem("savedArticles");
    console.log("Saved articles", savedArticles);
  } catch (error) {
    console.error("An error occurred while fetching saved articles");
  }
}
