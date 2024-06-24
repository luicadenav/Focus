import { View, Text, FlatList, Image, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "./../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { useState, useEffect } from "react";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    //recall videos
  };

  useEffect(() => {
    const fetchData = async ()=>{
      setIsLoading(true);
      try {
        const response = await get
      } catch (error) {
        Alert.alert('Error', error.message)
      }finally{
        setIsLoading(false)
      }

    };
  }, []);

  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1 }, { id: 2 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text>{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  JSMastery
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>

              <Trending posts={[{ id: 1 }, { id: 2 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
