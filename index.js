import female from "../assets/images/female.png";
import male from "../assets/images/male.png";
import edit from "../assets/images/edit.png";
import React from "react";
import { useState } from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
const GenderSelection = (props) => {
  const [onEditMale, setOneditMale] = useState(false);
  const [onShowGenderMale, setShowMale] = useState(false);
  const [onEditFemale, setOneditFemale] = useState(false);
  const [onShowGenderFemale, setShowFemale] = useState(false);
  const [gender, setGender] = useState("");
  const handleGenderMale = () => {
    setShowMale(!onShowGenderMale);
    setOneditMale(!onEditMale);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={handleGenderMale}>
        <Image
          source={male}
          style={{
            borderRadius: 600,
            height: 90,
            width: 90,
            marginHorizontal: 10,
          }}
        />
        {onEditMale ? (
          <Image
            source={edit}
            resizeMode="contain"
            style={{
              position: "absolute",
              borderRadius: 50,
              width: 25,
              height: 25,
              bottom: 5,
              right: 10,
            }}
          />
        ) : null}
      </TouchableOpacity>
      <Text>or</Text>
      <TouchableOpacity>
        <Image
          source={female}
          style={{
            borderRadius: 600,
            height: 90,
            width: 90,
            marginHorizontal: 10,
          }}
        />
        {onEditFemale ? (
          <Image
            source={edit}
            resizeMode="contain"
            style={{
              position: "absolute",
              borderRadius: 50,
              width: 25,
              height: 25,
              bottom: 5,
              right: 10,
            }}
          />
        ) : null}
      </TouchableOpacity>

      
      {onShowGenderMale ? (
        <TouchableOpacity onPress={handleGenderMale}>
          <Image
            source={male}
            style={{
              borderRadius: 600,
              height: 90,
              width: 90,
              marginHorizontal: 10,
            }}
          />
          {onEditMale ? (
            <Image
              source={edit}
              resizeMode="contain"
              style={{
                position: "absolute",
                borderRadius: 50,
                width: 25,
                height: 25,
                bottom: 5,
                right: 10,
              }}
            />
          ) : null}
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};
export default GenderSelection;
