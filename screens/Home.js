import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  BackHandler,
  Alert,
  Image,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import female from "../assets/images/female.png";
import male from "../assets/images/male.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useEffect, useState } from "react";
import Input from "../components/input";
import { TouchableHighlight } from "react-native";
import Header from "../components/Header";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
const Home = ({ route }) => {
  const { data } = route.params;
  const [email, setEmail] = useState("");
  const [empcode, setEmpcode] = useState("");
  const [Answer, setAnswer] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState({});
  const [edit, seteditShow] = useState(false);
  const [showdata, setshowdata] = useState(false);
  const [showemail, setEmailChange] = useState(false);
  const [showname, setNameChange] = useState(false);
  const [showcode, setEmpcodeChange] = useState(false);
  const [password, setPassword] = useState(false);
  const [changePassword, setPasswordChange] = useState(false);
  console.log(password);
  console.log(changePassword);
  const navigation = useNavigation();
  const handleEmail = (e) => {
    setEmailChange(true);
    setEmail(e);
  };
  const handleEmpcode = (e) => {
    setEmpcodeChange(true);
    setEmpcode(e);
  };
  const handleName = (e) => {
    setNameChange(true);
    setName(e);
  };
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
  const editHandler = () => {
    seteditShow(true);
    setPassword(false);
  };

  const handleSubmit = () => {
    const empdata = { email: email, name: name, empcode: empcode };
    if (
      email.indexOf("@spinebiz.com", email.length - "@spinebiz.com".length) !==
        -1 ||
      email == ""
    ) {
      console.log("valid");
    } else {
      Alert.alert("Invalid email!", "Plz enter a valid Email", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }

    setDetails(empdata);
    setshowdata(true);
    seteditShow(false);
  };

  const forminputs = [
    {
      labelname: "Email",
      placeholder: "Enter your Email",
      name: "email",
      value: showemail ? details.email : data.email,

      type: "email",
      handle: handleEmail,
    },
    {
      labelname: "EmpCode",
      placeholder: "Enter your EmpCode",
      name: "empcode",
      value: showcode ? details.empcode : data.empcode,
      type: "text",
      handle: handleEmpcode,
    },
    {
      labelname: "UserName",
      placeholder: "Enter your Name",
      name: "name",
      value: showname ? details.name : data.name,
      type: "text",
      handle: handleName,
    },
  ];
  const handleAnswer = (e) => {
    setAnswer(e);
  };
  const homeswitch = () => {
    navigation.navigate("HomeScreen", {
      name: details.name ? details.name : data.name,
    });
  };

  const handlePassword = () => {
    if (data.answer !== Answer) {
      Alert.alert("Invalid Answer!", "Plz enter a valid Answer", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    } else {
      setPasswordChange(true);
    }
  };
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.header}>
        <Header detname={details.name} dataname={data.name} />
        <View style={styles.details}>
          {data.gender === "male" ? (
            <Image
              source={male}
              style={{
                borderRadius: 600,
                height: 90,
                width: 90,
                margin: 20,
              }}
            />
          ) : (
            <Image
              source={female}
              style={{
                borderRadius: 600,
                height: 90,
                width: 90,
                marginHorizontal: 20,
              }}
            />
          )}

          <Text style={{ color: "white", fontSize: 25, marginBottom: 10 }}>
            {details.name ? details.name : data.name}
          </Text>
          <Text style={{ color: "white", fontSize: 12, marginBottom: 10 }}>
            {details.empcode ? details.empcode : data.empcode}
          </Text>
          <Text style={{ color: "white", fontSize: 12 }}>
            {details.email ? details.email : data.email}
          </Text>
        </View>
        <TouchableOpacity style={styles.icons}>
          <Entypo
            name="home"
            size={24}
            color="black"
            style={{ padding: 10, paddingLeft: 20, textAlign: "left" }}
            onPress={homeswitch}
          />

          <Text
            onPress={() => {
              setPassword(true);
              seteditShow(false);
            }}
          >
            Change Password
          </Text>

          <MaterialCommunityIcons
            name="account-edit-outline"
            size={30}
            color="black"
            style={{ padding: 10, paddingRight: 20, textAlign: "right" }}
            onPress={editHandler}
          />
        </TouchableOpacity>
      </View>

      {edit ? (
        <KeyboardAwareScrollView style={{ backgroundColor: "white" }}>
          <View
            style={{
              height: "40%",
              backgroundColor: "white",
              paddingHorizontal: 10,
              paddingVertical: 25,
            }}
          >
            {forminputs.map((item) => (
              <Input
                labelname={item.labelname}
                placeholder={item.placeholder}
                onchange={item.handle}
                name={item.name}
                value={item.value}
                type={item.type}
              />
            ))}
            <View style={{}}>
              <Button title="Submit" onPress={handleSubmit} />
            </View>
          </View>
        </KeyboardAwareScrollView>
      ) : password ? (
        <KeyboardAwareScrollView style={{ backgroundColor: "white" }}>
          <View
            style={{
              height: "40%",
              backgroundColor: "white",
              paddingHorizontal: 10,
              paddingVertical: 25,
            }}
          >
            <Input
              labelname="Security Question"
              name={data.question}
              question={data.question}
            />
            <Input
              labelname="Answer"
              placeholder="Enter your answer"
              onchange={handleAnswer}
              name="answer"
              value={Answer}
              type="text"
            />
            <Button title="Submit" onPress={handlePassword} />
          </View>
        </KeyboardAwareScrollView>
      ) : null}
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
    height: "50%",
  },
  details: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Home;
