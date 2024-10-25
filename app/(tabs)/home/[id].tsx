import { View, Text, StyleSheet, Image, StatusBar, Pressable, ImageBackground, Dimensions, ScrollView, } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";
import dummyData from "@/scripts/dummyData2.json";
import { API_KEY } from "@env";
import { Icon } from "react-native-paper";
import { toggleSaveArticle } from "@/utils/fetchBookmarks";
import { checkIfSaved } from "@/utils/saveArticle";


export default function DetailsPage() {
  const { id } = useLocalSearchParams(); // Gotten from the path Link in ArticleCard not any function

  const [data, setData] = useState<any>({});
  const [isSaved, setIsSaved] = useState(false);

  const url = new URL(`https://api.thenewsapi.com/v1/news/uuid/${id}`);

  const { height, width } = Dimensions.get("screen");

  url.searchParams.append("api_token", API_KEY);
  const mainUrl = url.href;
  console.log(mainUrl);

  useEffect(() => {
    checkIfSaved(Array.isArray(id) ? id[0] : id, isSaved, setIsSaved);
  }, [id])

  async function fetchData() {
    try {
      await axios.get(mainUrl)
      .then(response => setData(response.data))
    } catch (error) {
      console.log("An error occurred while fetching details", error);
    }
  }

  useEffect(() => {
    // fetchData();
    setData(dummyData);
    console.log(data);
  },[id])

  return (
    <>
      <Stack.Screen options={{ headerTitle: `Details #${id}`, headerShown: false, }}/>

      <ImageBackground 
        source={{uri: `${data.image_url}`}}
        style={[styles.imageBackground, { height: height / 2}]}
      >
        <View style={styles.container}>
          <View style={styles.detailsHeader}>
            <Pressable onPress={() => {
              router.back();
            }}>
              <Icon 
                source="keyboard-backspace"
                size={30}
                color=""
              />
            </Pressable>

            <Pressable onPress={() => toggleSaveArticle(id, isSaved, setIsSaved) }>
              {isSaved ? (<Icon
                  source="bookmark-check"
                  size={30}
                  color="blue"
                />)
                : (<Icon
                  source="bookmark-outline"
                  size={30}
                />)}
            </Pressable>

          </View>
        </View>
      </ImageBackground>

      <View style={[styles.detailsBodyContainer, { height: height / 2}]}>
        <ScrollView>
          <View style={styles.detailsBodyHeader}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.source}>{data.source}</Text>
            <Text style={styles.date}>{data.published_at}</Text>

          </View>

          <Text style={styles.detailsBody}>
            {data.snippet}.
            
            &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa, eveniet at optio fuga rerum amet dolorem dignissimos eaque ad? Minima eveniet culpa autem harum facere. 
            Dolore, nesciunt provident! Veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, incidunt et voluptatum dolorem velit ducimus omnis iure repellendus corrupti, non porro autem reprehenderit, iusto minima eligendi sit quos perspiciatis placeat?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum illum vel optio nam similique quasi tempora hic. Pariatur quia commodi cumque quas accusantium! Sit expedita delectus cumque accusantium autem repellendus. 

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis sint nesciunt commodi, esse porro vero delectus corrupti provident rerum tempore qui obcaecati, hic, facere dicta alias totam ipsa natus consectetur.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus enim doloremque eaque quasi molestias quibusdam, nobis adipisci suscipit dolorum, hic distinctio sunt eius earum reiciendis sit expedita. Eaque, tenetur! Repellendus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia itaque placeat dolorem, ratione natus sed officia. Delectus ab nobis esse tempora voluptatem sed explicabo quo? Cum quas fugit deserunt.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptate asperiores odit praesentium harum esse ducimus debitis dicta animi, quaerat ab cumque delectus facilis necessitatibus tempore at. Explicabo, facilis ipsum!

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex illo rerum at itaque autem cum aut recusandae voluptatum dolores vitae possimus adipisci similique molestiae odit saepe facilis, delectus quidem eos!
          </Text>
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    flex: 1,
    borderBottomRightRadius: 4,
  },
  container: {
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 16,
  },
  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  backBtn: {
    width: 30,
    height: 30,
  },
  bookmark: {
    width: 30,
    height: 30,
  },
  detailsBodyContainer: {
    flex: 1,
    padding: 24,
    paddingTop: 32,
    elevation: 2,
    shadowColor: "#000",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#fff",
  },
  detailsBodyHeader: {

  },
  title: {
    fontWeight: "900",
    fontSize: 28,
  },
  source: {
    color: "gray",
    fontSize: 24,
    marginTop: 6,
  },
  date: {
    marginVertical: 6,
  },
  detailsBody: {
    fontWeight: "semibold",
    lineHeight: 20,
  },

});
