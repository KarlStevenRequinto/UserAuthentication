import { View, Image, useWindowDimensions, ScrollView } from "react-native";
import { styles } from "./styles";
import Logo from "../../../assets/images/Logo_1.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { height } = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    } else {
      setLoading(true);
      try {
        const response = await Auth.signIn(data.username, data.password);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    console.log("onSignInPressed");
    // validate user
    // navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    console.log("Forgot Password");
    // navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    console.log("Sign Up");
    navigation.navigate("SignUp");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.35 }]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <CustomInput
          name="password"
          placeholder="password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: " Password should be minimum of 3 characters.",
            },
          }}
        />
        <CustomButton
          text={loading ? "Loading..." : "Sign in"}
          onPress={handleSubmit(onSignInPressed)}
        />

        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one "
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
