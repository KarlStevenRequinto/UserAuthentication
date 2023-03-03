import { Text, ScrollView } from "react-native";
import { styles } from "./styles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ConfirmEmailScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const onConfirmPressed = () => {
    console.log("onConfirmPressed");
    navigation.navigate("Home");
  };

  const onSignInPressed = () => {
    console.log("onSignInPressed");
    navigation.navigate("SignIn");
  };

  const onResendPressed = () => {
    console.log("onResendPressed");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Text style={styles.title}>Create an account</Text>

      <CustomInput
        name="code"
        control={control}
        placeholder="Enter your confirmation code"
        rules={{ required: "Confirmation code is required" }}
      />

      <CustomButton
        text="Confirm"
        onPress={handleSubmit(onConfirmPressed)}
        type="PRIMARY"
      />

      <CustomButton
        text="Resend Code"
        onPress={onResendPressed}
        type="SECONDARY"
      />

      <CustomButton
        text="Back to Sign in"
        onPress={onSignInPressed}
        type="TERTIARY"
      />
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
