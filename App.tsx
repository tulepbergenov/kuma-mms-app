import { Providers } from "@/app/providers";
import { baseStyles } from "@/app/styles";
import { Button } from "@/shared/ui-kit";
import { Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <Providers>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <View style={baseStyles.container}>
          <Text>Kuma</Text>
          <View
            style={{
              marginBottom: 5,
            }}
          >
            <View>
              <TextInput />
              <TextInput />
            </View>
            <Button title="Войти" />
          </View>
          <Button title="Восстановить пароль" />
        </View>
      </View>
    </Providers>
  );
};

export default App;
