import { StyleSheet, View, Text, Image, } from "react-native";



export default function Header() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerMainText}>GraNews</Text>
          <Text style={styles.headerSubText}>Get Latest Updates</Text>
        </View>
          

        <Image source={require("@/assets/images/avatar.png")} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 16,
    marginTop: 44,
    marginBottom: 42,
  },
  headerMainText: {
    fontWeight: "900",
    marginBottom: 4,
  },
  headerSubText: {
    fontWeight: "400",
    fontSize: 12,
  }
});
