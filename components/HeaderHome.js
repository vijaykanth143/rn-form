import React from "react";
import { View, Text } from "react-native";
const HeaderHome = ({ name }) => {
  return (
    <View style={{ backgroundColor: "#2874F0" }}>
      <Text
        style={{
          fontSize: 25,
          padding: 15,
          color: "white",
        }}
      ></Text>
    </View>
  );
};

export default HeaderHome;
