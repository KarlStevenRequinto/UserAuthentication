import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../CustomButton";
const SocialSignInButtons = () => {
  const onSignInwithFBPressed = () => {
    console.log("Sign in with FB");
  };

  const onSignInwithGooglePressed = () => {
    console.log("Sign in with Google");
  };

  const onSignInwithApplePressed = () => {
    console.log("Sign in with Apple");
  };
  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInwithFBPressed}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInwithGooglePressed}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInwithApplePressed}
        bgColor="#E3E3E3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
