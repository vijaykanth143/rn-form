import React from "react";
import { View, Text } from "react-native";
const HeaderReg = ({ name }) => {
  return (
    <View style={{ backgroundColor: "#2874F0" }}>
      <Text
        style={{
          fontSize: 20,
          padding: 10,
          color: "white",
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default HeaderReg;
