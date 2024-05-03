import { ButtonProps, Pressable, Text } from "react-native";
import { styles } from "./Button.style";

export const Button = ({ onPress, title }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
        },
        styles.button,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
