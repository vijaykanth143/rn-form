import React from "react";
import { View, Text } from "react-native";
const HeaderHome = ({ name, navigate }) => {
  return (
    <View style={{ backgroundColor: "#2874F0" }}>
      <Text
        style={{
          fontSize: 25,
          padding: 15,
          color: "white",
        }}
        onPress={() => navigate.goBack()}
      >
        Back
      </Text>
    </View>
  );
};

export default HeaderHome;
