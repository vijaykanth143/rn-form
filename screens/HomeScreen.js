import React from "react";
import { SafeAreaView, Text, BackHandler, Alert } from "react-native";
import HeaderHome from "../components/HeaderHome";

const HomeScreen = ({ route, navigation }) => {
  const name = route.params;
  console.log(name);
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "YES", onPress: () => navigation.goBack() },
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );
  return (
    <SafeAreaView>
      <HeaderHome name={name.name} navigate={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
