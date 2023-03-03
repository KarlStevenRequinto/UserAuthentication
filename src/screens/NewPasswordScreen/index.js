import { Text, ScrollView } from "react-native";
import { styles } from "./styles";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewPasswordScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSubmitPressed = (data) => {
    console.log(data);
    navigation.navigate("Home");
  };

  const onSignInPressed = () => {
    console.log("onSignInPressed");
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Text style={styles.title}>Reset Your Password</Text>

      <CustomInput
        placeholder="Code"
        name="code"
        control={control}
        rules={{ required: "Code is required" }}
      />

      <CustomInput
        placeholder="Enter your new password"
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password should be at least 8 characters long",
          },
          maxLength: {
            value: 24,
            message: "Password should be max 24 characters long",
          },
        }}
        secureTextEntry
      />

      <CustomButton
        text="Submit"
        onPress={handleSubmit(onSubmitPressed)}
        type="PRIMARY"
      />

      <CustomButton
        text="Back to Sign in"
        onPress={onSignInPressed}
        type="TERTIARY"
      />
    </ScrollView>
  );
};

export default NewPasswordScreen;
