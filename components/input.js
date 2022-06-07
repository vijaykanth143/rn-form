import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
const Input = (props) => {
  return (
    <>
      <Text
        style={{
          marginBottom: 5,
          fontSize: 18,
          fontFamily: "Fantasy",
          color: "#2196F3",
        }}
      >
        {props.labelname}
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "grey",
          borderWidth: 2,
          paddingLeft: 8,
          marginBottom: 15,
          borderRadius: 5,
        }}
        placeholder={props.placeholder}
        name={props.name}
        onChangeText={props.onchange}
        textContentType={props.type}
        value={props.question}
        defaultValue={props.value}
        secureTextEntry={props.secureTextEntry}
      />
    </>
  );
};
export default Input;
