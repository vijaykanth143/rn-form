import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  BackHandler,
  Alert,
} from "react-native";
import { useEffect } from "react/cjs/react.production.min";

const Home = ({ route }) => {
  const { data } = route.params;
  const backAction = () => {
    null;
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.header}>
        <Text>{data.gender}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  home: {
    flex: 1,

    height: "100%",
  },
  header: {
    backgroundColor: "#2196F3",
    height: "7%",
  },
});

export default Home;
