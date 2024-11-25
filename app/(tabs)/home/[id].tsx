import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, ImageBackground, Dimensions, ScrollView, } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import dummyData from "@/scripts/dummyData2.json";
import { Icon } from "react-native-paper";
import BookmarkButton from "@/components/BookmarkButton";
import { fetchNewsDetails } from "@/utils/fetchNewsDetails";
import { formatDate } from "@/utils/formatDate";

export default function DetailsPage({ route }: any) {
  const [data, setData] = useState<any>({});

  const { id } = useLocalSearchParams(); // Gotten from the path Link in ArticleCard not any function
  console.log("ID: ", id);
  const { height } = Dimensions.get("screen");

  useEffect(() => {
    fetchNewsDetails(id, setData);
    // setData(dummyData);
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
            <TouchableOpacity 
              onPress={() => {
                router.back();
              }}
              style={styles.backBtn}
            >
              <Icon 
                source="keyboard-backspace"
                size={30}
              />
            </TouchableOpacity>
            <View style={styles.bookmarkContainer}>
              <BookmarkButton articleId={id} />
              {/* <Text style={styles.bookmarkText}>Save Article</Text> */}
            </View>

          </View>
        </View>
      </ImageBackground>

      <View style={[styles.detailsBodyContainer, { height: height / 2}]}>
        <ScrollView>
          <View>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.metaInfo}>
              <Text style={styles.source}>{data.source}</Text>
              <Text style={styles.date}>{formatDate(data.published_at)}</Text>
            </View>

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
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    padding: 10,
  },
  bookmarkContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    padding: 12,
  },
  bookmarkText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#007aff",
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
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 8,
  },
  metaInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  source: {
    color: "#666",
    fontSize: 14,
    marginTop: 6,
  },
  date: {
    marginVertical: 6,
    color: "#666",
    fontSize: 14,
  },
  detailsBody: {
    fontWeight: "semibold",
    fontSize: 16,
    lineHeight: 24,
  },

});
