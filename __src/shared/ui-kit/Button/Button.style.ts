import { colors } from "@/app/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 8,
    minHeight: 56,
    paddingHorizontal: 16,
    width: "100%",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "500",
    textAlign: "center",
  },
});
