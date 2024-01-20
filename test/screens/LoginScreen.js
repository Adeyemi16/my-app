import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import { Fontisto, Foundation, Feather } from "@expo/vector-icons";

export default function LoginScreen() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 40,
      }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Login to your account
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              // backgroundColor: "#D0D0D0",
              padding: 5,
              borderRadius: 5,
              borderStyle: "solid",
              borderWidth: 2,
              marginTop: 30,
            }}
          >
            <Fontisto
              style={{
                marginRight: 3,
                borderStyle: "solid",
                borderRightWidth: 1,
                padding: 2,
              }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              style={{ color: "gray", marginVertical: 10, width: "79%" }}
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              // backgroundColor: "#D0D0D0",
              padding: 5,
              borderRadius: 5,
              borderStyle: "solid",
              borderWidth: 2,
              marginTop: 30,
            }}
          >
            <Foundation
              style={{
                marginRight: 3,
                borderStyle: "solid",
                borderRightWidth: 1,
                padding: 3,
              }}
              name="key"
              size={24}
              color="black"
            />
            <TextInput
              style={{ color: "gray", marginVertical: 10, width: "70%" }}
              placeholder="Enter your Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            {open ? (
              <Feather
                name="eye"
                size={24}
                color="black"
                onPress={() => setOpen(!open)}
              />
            ) : (
              <Feather
                name="eye-off"
                size={24}
                color="black"
                onPress={() => setOpen(!open)}
              />
            )}
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <Text>Keep me logged in</Text>

          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forget Password
          </Text>
        </View>

        <Pressable
          style={{
            width: 300,
            backgroundColor: "black",
            color: "white",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            alignItems: "center",
            justifyContent: "center",
            marginTop:20
          }}
        >
          <Text style={{color: "white", fontSize:16}}>Login </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
