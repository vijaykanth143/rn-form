import { View, Text, TouchableOpacity } from "react-native";

import React from "react";

const Header = ({ detname, dataname }) => {
  return (
    <View style={{ backgroundColor: "#2874F0" }}>
      <Text style={{ fontSize: 25, padding: 10, color: "white" }}>
        Hi, <Text style={{ fontSize: 20 }}>{detname ? detname : dataname}</Text>
        <Text style={{ fontSize: 20 }}>👋</Text>
      </Text>
    </View>
  );
};

export default Header;
