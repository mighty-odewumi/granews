import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveArticle(articleId: string, isSaved, setIsSaved) {
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

export async function checkIfSaved(articleId: string, isSaved: boolean, setIsSaved: any) {
  try {
    const savedArticles = await AsyncStorage.getItem("savedArticles");
    const savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];
    console.log("UUID", articleId);  
    setIsSaved(savedArticlesArray.includes(articleId));
  } catch (error) {
    console.error("Error checking if article is saved!");
  }
}
