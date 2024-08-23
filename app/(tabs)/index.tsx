import Header from '@/components/Header';
import Search from '@/components/Search';
import { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, StatusBar } from 'react-native';


export default function HomeScreen() {

  const [data, setData] = useState([]);

  const url = "https://newsapi.org/v2/top-headlines?country=ng&apiKey=d9a2c6ca0154424daebb75f56169aabd";

  async function fetchData() {
    try{
      await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
    } catch(error) {
        console.error("Couldn't fetch data!", error);
    } finally {

    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      {/* <StatusBar  backgroundColor={"#5474FD"} barStyle={"dark-content"} /> */}
      <StatusBar  backgroundColor={"#5474FD"} />

      <Header />
      <View style={styles.container}>
        <Search />



      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .75,
    margin: 16,
    marginTop: 0,
  }
});
