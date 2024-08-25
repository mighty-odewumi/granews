import { Link, useRouter } from "expo-router";
import { View, Text, Pressable, } from "react-native";

export default function Home() {

  const router = useRouter();
  

  return (
    <View>
      <Text>Home here</Text>
      <Link href="/home/1" asChild onPress={() => router.setParams({ id: "1" })}>
        {/* <Pressable onPress={}> */}
          <Text>Link 1</Text>
        {/* </Pressable> */}
      </Link>

      <Link href="/home/2" asChild onPress={() => router.setParams({ id: "1" })}>
        {/* <Pressable onPress={() => router.setParams({ id: "2" })}> */}
          <Text>Link 2</Text>
        {/* </Pressable> */}
      </Link>

      <Link href="/home/3" asChild onPress={() => router.setParams({ id: "1" })}>
        {/* <Pressable onPress={() => router.setParams({ id: "3" })}> */}
          <Text>Link 3</Text>
        {/* </Pressable> */}
      </Link>
    </View>
  )
}
