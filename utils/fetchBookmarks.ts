import AsyncStorage from "@react-native-async-storage/async-storage";

export async function fetchBookmarks() {
  try {
    const savedArticles = await AsyncStorage.getItem("savedArticles");
    if (savedArticles !== null) {
      const savedArticlesArray = JSON.parse(savedArticles);
      console.log("Saved articles", savedArticlesArray);
    }
  } catch (error) {
    console.error("An error occurred while fetching saved articles");
  }
}

export async function toggleSaveArticle(articleId: string, isSaved: boolean, setIsSaved: any) {
  try {
    const savedArticles = await AsyncStorage.getItem("savedArticles");
    let savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];
    if (isSaved) { // The logic checks if an article is already saved, then we want to remove it since we're toggling the state and therefore wanna remove it from the list.
      savedArticlesArray = savedArticlesArray.filter((id: string) => id === articleId); // Filters out article if already saved.
    } else { // If it isn't we wanna add the article when we click on the bookmark icon
      savedArticlesArray.push(articleId); // Save if it hasn't been saved yet.
    }

    await AsyncStorage.setItem("savedArticles", JSON.stringify(savedArticlesArray));
    setIsSaved(!isSaved);
  } catch (error) {
    console.error("Error toggling article");
  }
}
