import { View, Text } from "react-native";
import { Stack, useLocalSearchParams,  } from "expo-router";

export default function DetailsPage() {
  const params = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Details #${params.id}` }}/>
      <Text>
        Details for {params.id}
      </Text>
    </View>
  )
}
