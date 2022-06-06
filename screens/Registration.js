//This is an example of online Emulator by https://aboutreact.com
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Form,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
  Picker,
  AsyncStorageStatic,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import female from "../assets/images/female.png";
import male from "../assets/images/male.png";
import edit from "../assets/images/edit.png";
import Input from "../components/input";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeaderReg from "../components/HeaderReg";
import DropdownComponent from "../components/Dropdown";

const Registrstion = (props) => {
  const [email, setEmail] = useState("");
  const [empcode, setEmpcode] = useState("");
  const [name, setName] = useState("");
  const [passWord, setPassword] = useState("");
  const [category] = useState([
    {
      itemName: "What is Your Petname?",
    },
    {
      itemName: "What is your School name?",
    },
    {
      itemName: "What is your native place?",
    },
  ]);
  const [selectedcat, setcat] = useState("");
  const [details, setDetails] = useState({});
  const [onEditMale, setOneditMale] = useState(false);
  const [onShowGenderMale, setShowMale] = useState(false);
  const [onEditFemale, setOneditFemale] = useState(false);
  const [onShowGenderFemale, setShowFemale] = useState(false);
  const [modalvisible, setmodalvisible] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [gender, setGender] = useState("");
  const navigation = useNavigation();
  console.log(category);
  const handleEmail = (e) => {
    setEmail(e);
  };
  const handleEmpcode = (e) => {
    setEmpcode(e);
  };
  const handleName = (e) => {
    setName(e);
  };
  const handlePassword = (e) => {
    setPassword(e);
  };
  const handleSubmit = () => {
    const data = {
      email: email,
      empcode: empcode,
      name: name,
      gender: gender,
      passWord: passWord,
    };

    if (
      email.indexOf("@spinebiz.com", email.length - "@spinebiz.com".length) !==
      -1
    ) {
      setDetails(data);
    } else {
      Alert.alert("Invalid email!", "Plz enter a valid Email", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }

    if (
      email.length <= 0 ||
      empcode.length <= 0 ||
      name.length <= 0 ||
      gender.length <= 0
    ) {
      Alert.alert(
        "Invalid Inputs!",
        "Plz enter valid inputs(Non-empty inputs)",
        [{ text: "Okay", style: "destructive" }]
      );
    }
    navigation.navigate("Home", { data });

    setEmpcode("");
    setName("");
    setEmail("");
    setmodalvisible(true);
    setShowMale(false);
    setShowFemale(false);
    setOneditFemale(false);
    setOneditMale(false);
  };

  const data = [
    {
      labelname: "Email",
      placeholder: "Enter your Email",
      name: "email",
      value: email,
      type: "email",
      handle: handleEmail,
    },
    {
      labelname: "EmpCode",
      placeholder: "Enter your EmpCode",
      name: "empcode",
      value: empcode,
      type: "text",
      handle: handleEmpcode,
    },
    {
      labelname: "UserName",
      placeholder: "Enter your Name",
      name: "name",
      value: name,
      type: "text",
      handle: handleName,
    },
    {
      labelname: "Password",
      placeholder: "Enter your Password",
      name: "password",
      value: passWord,
      type: "password",
      handle: handlePassword,
    },
  ];
  const handleGenderMale = () => {
    setmodalvisible(!modalvisible);
    setShowMale(!onShowGenderMale);
    setOneditMale(!onEditMale);
  };
  useEffect(() => {
    setGender(onShowGenderMale ? "male" : onShowGenderFemale ? "Female" : "");
  }, [onShowGenderMale, onShowGenderFemale]);
  // useEffect(() => {
  //   setGender(onShowGenderFemale ? "Female" : "");
  // }, [onShowGenderFemale]);
  const handleGenderFemale = () => {
    setmodalvisible(!modalvisible);
    setShowFemale(!onShowGenderFemale);
    setOneditFemale(!onEditFemale);
    setGender("Female");
  };
  const onValueChangeCat = (value) => {
    setcat(value);
  };
  return (
    <View style={{ height: "100%" }}>
      <HeaderReg name="Employee Registration" />
      <View
        style={{
          height: "40%",
          justifyContent: "center",
          paddingHorizontal: 20,
          backgroundColor: "#2196F3",
          shadowColor: "black",
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <StatusBar animated={true} backgroundColor="#1767DD" />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {modalvisible ? (
            <>
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
              <TouchableOpacity onPress={handleGenderFemale}>
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
            </>
          ) : null}

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
          ) : null}
          {onShowGenderFemale ? (
            <TouchableOpacity onPress={handleGenderFemale}>
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
          ) : null}
        </View>
      </View>
      <KeyboardAwareScrollView style={{ backgroundColor: "white" }}>
        <View
          style={{
            height: "60%",
            backgroundColor: "white",
            paddingHorizontal: 10,
            paddingVertical: 25,
          }}
        >
          {data.map((item) => (
            <Input
              labelname={item.labelname}
              placeholder={item.placeholder}
              onchange={item.handle}
              name={item.name}
              value={item.value}
              type={item.type}
            />
          ))}
          <Text
            style={{
              marginBottom: 5,
              fontSize: 18,
              fontFamily: "Fantasy",
              color: "#2196F3",
            }}
          >
            Select a Question
          </Text>
          <Picker
            itemStyle={styles.itemStyle}
            mode="dropdown"
            style={styles.pickerStyle}
            selectedValue={selectedcat}
            onValueChange={onValueChangeCat}
          >
            {category.map((item, index) => (
              <Picker.Item
                color="#0087F0"
                label={item.itemName}
                value={item.itemName}
                index={index}
              />
            ))}
          </Picker>
          <View style={{}}>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  itemStyle: {
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    color: "#007aff",
  },
  pickerStyle: {
    height: 40,
    borderColor: "grey",
    borderWidth: 2,
    paddingLeft: 8,
    marginBottom: 15,
    borderRadius: 5,
  },
});
export default Registrstion;
