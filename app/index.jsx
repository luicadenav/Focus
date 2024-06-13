import { StatusBar, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

function App() {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-pblack">aja esta es mi app</Text>
        <StatusBar style="auto" />
        <Link href="/profile" style={{ color: "blue" }}>
          go to profile
        </Link>
      </View>
    </>
  );
}

export default App;
