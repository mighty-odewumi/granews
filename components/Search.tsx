import { useState } from "react";
import { TextInput, Pressable, Image, StyleSheet, View, } from "react-native";

export default function Search() {

  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <TextInput 
        keyboardType="default"
        placeholder="Search for article..."
        onChangeText={setInput}
        style={styles.textInput}
      />

      <Pressable
        
      >
        <Image 
          source={require("@/assets/icons/search3.png")}
          style={styles.searchBtn}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "relative",
  },
  textInput: {
    // borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "white",
    height: 80,
    padding: 20,
    flexBasis: 0,
    flexGrow: 2,
    flexShrink: 1,
    borderRadius: 20,
    paddingRight: 100,
  },
  searchBtn: {
    width: 80,
    height: 80,
    backgroundColor: "#5474FD",
    resizeMode: "center",
    // padding: 30,
    borderRadius: 20,
    position: "absolute",
    right: 0,
  }
});
