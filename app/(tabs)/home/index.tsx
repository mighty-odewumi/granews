import Header from '@/components/Header';
import Search from '@/components/Search';
import { useState, useEffect } from 'react';
import { Link, router, useRouter } from "expo-router";
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
// import scrapper, { scrapeArticle } from "@/scripts/scrapper";
import axios from "axios";
import dummyData from "@/scripts/dummyData.json";

export default function HomeScreen() {

  const [data, setData] = useState<any[]>([]);

  const url = "https://newsapi.org/v2/top-headlines?country=ng&apiKey=d9a2c6ca0154424daebb75f56169aabd";

  const url3 = "https://news.google.com/rss/articles/CBMiRkFVX3lxTE11RzQtM1BnakVVWWs1VW5MM2dNNXktNEluNS1RSjlTRndoVVBMVjZ5SzVZZFU0Q2I0Rm16WS1SZUdGOGV2dVE?oc=5";


  const apiKey1 = "DaTFTark8fn29YgMcw4jDX5kMJymWjOgwPVnwXGC";

  const apiKey2 = "ThgcId8ETmkPgbqfGpenEtlvykBgiKOnqvqu5Mlr";

  const apiKey3 = "5hnA353pQo2y62yJH3lQwhZAhuHNqAd7XpBYCaRy";

  const mainUrl = new URL("https://api.thenewsapi.com/v1/news/top");
  mainUrl.searchParams.append("api_token", apiKey3);
  // url2.searchParams.append("limit", "5");
  const finalUrl = mainUrl.href;
  // console.log(finalUrl);

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

 
  async function fetchData() {
    try{
      await axios.get("@/scripts/dummyData.json")
      .then(response => {
        console.log(response.data);  // Axios handles parsing automatically
        setData(response.data.data);
      })
    } catch(error) {
        console.error("Couldn't fetch data!", error);
    } finally {

    }
  }

  useEffect(() => {
    
    /* async function fetchArticle() {
      const content = await scrapeArticle(url3);
      console.log("Here is the content", content);
    }  */

    // fetchArticle();
    // fetchData();
    setData(dummyData.data);
  }, [])

  const articleCard = (item: any) => {

    const date = new Date(`${item.published_at}`);
    const convertedDate = date.toLocaleString("en-US", { 
      timeZone: "UTC", 
      month: "short", 
      day: "numeric",
      year: "numeric",
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    console.log(convertedDate);

    return (
      <Link href={`/home/${item.uuid}`} asChild >
        <Pressable >
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
                <Text>{convertedDate} • </Text>
                <Text style={styles.category}>{item.categories[0]}</Text>
              </View>

              <Pressable>
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


  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar  backgroundColor={"#5474FD"} barStyle={"dark-content"} /> */}
      <StatusBar  backgroundColor={"#5474FD"} />

      <Header />
      <Search />
      <FlatList 
        data={data}
        renderItem={({item}) => articleCard(item)}
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
  flatList: {
    marginHorizontal: 16,
  },
  separator: {
    borderBottomWidth: 1,
    backgroundColor: "gray",
  },
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
  },
  articleTitle: {
    fontWeight: "700",
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
