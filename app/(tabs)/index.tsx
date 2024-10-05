import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  const [website, setWebsite] = useState("https://reactnative.dev/");
  const [websiteToShow, setWebsiteToShow] = useState(
    "https://reactnative.dev/"
  );
  return (
    <SafeAreaProvider>
      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TextInput
              value={website}
              onChangeText={(text: string) => {
                setWebsite(text);
              }}
            />
          </View>
          <Button
            onPress={() => {
              setWebsiteToShow(website);
            }}
            title="Load Website"
          />
        </View>
        <Text>Currently displaying: {websiteToShow}</Text>
      </View>
      <WebView source={{ uri: websiteToShow }} style={{ flex: 1 }} />
    </SafeAreaProvider>
  );
}
