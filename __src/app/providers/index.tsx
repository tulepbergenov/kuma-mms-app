import { Children } from "@/shared/types";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const Providers = ({ children }: Children) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
};
