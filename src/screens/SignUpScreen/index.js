import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const SignUpScreen = ({ navigation }) => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passRepeat, setPassRepeat] = useState("");
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const onRegisterPressed = async (data) => {
    const { username, password, email, name } = data;
    console.log("onRegisterPressed");

    const response = await Auth.signUp({
      username,
      password,
      attributes: { email, name, preferred_username: username },
    });
    console.log(data);
    console.log(response);
    navigation.navigate("ConfirmEmail");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onPressedTermsOfUse = () => {
    console.log("onPressedTermsOfUse");
  };

  const onPressedPrivacyPolicy = () => {
    console.log("onPressedPrivacyPolicy");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          name="name"
          control={control}
          placeholder="Name"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Name should be max 24 characters long",
            },
          }}
        />
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Username should be max 24 characters long",
            },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            required: "Email is required",
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
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
        />
        <CustomInput
          name="repeat-password"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: (value) => value === pwd || "Password does not match",
          }}
        />
        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onPressedTermsOfUse}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPressedPrivacyPolicy}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
