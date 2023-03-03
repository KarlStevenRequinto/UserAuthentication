import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import { Controller } from "react-hook-form";

const CustomInput = ({
  rules = {},
  name,
  control,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      rules={rules}
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            <TextInput
              placeholder={placeholder}
              style={[styles.textInput]}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={styles.errorText}>{error.message || "Error"}</Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;
