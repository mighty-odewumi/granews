import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveArticle(articleId: string) {
  try {
    const savedArticles = await AsyncStorage.getItem("savedArticles");
    let savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];
    console.log("UUID", articleId);

    if (!savedArticlesArray.includes(articleId)) {
      savedArticlesArray.push(articleId);
    }

    await AsyncStorage.setItem("savedArticles", JSON.stringify(savedArticlesArray));
    console.log("Articles saved");
  } catch (error) {
    console.error("Couldn't save article");
  }
}
