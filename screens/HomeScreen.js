import React from "react";
import { SafeAreaView, Text } from "react-native";
import HeaderHome from "../components/HeaderHome";

const HomeScreen = ({ route }) => {
  const name = route.params;
  console.log(name);
  return (
    <SafeAreaView>
      <HeaderHome name={name.name} />
    </SafeAreaView>
  );
};

export default HomeScreen;
