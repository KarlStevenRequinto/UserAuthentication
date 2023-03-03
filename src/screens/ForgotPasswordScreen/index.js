import { Text, ScrollView } from "react-native";
import { styles } from "./styles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ForgotPasswordScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const [username, setUsername] = useState("");

  const onSendPressed = (data) => {
    console.log(data);
    navigation.navigate("NewPassword");
  };

  const onSignInPressed = (data) => {
    console.log(data);
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Text style={styles.title}>Reset Your Password</Text>

      <CustomInput
        name="username"
        control={control}
        placeholder="Enter your username"
        rules={{ required: "Username is required" }}
      />

      <CustomButton
        text="SEND"
        onPress={handleSubmit(onSendPressed)}
        type="PRIMARY"
      />

      <CustomButton
        text="Back to Sign in"
        onPress={handleSubmit(onSignInPressed)}
        type="TERTIARY"
      />
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
