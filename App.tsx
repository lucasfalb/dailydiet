import theme from "./src/theme";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { NunitoSans_700Bold, NunitoSans_400Regular, useFonts} from "@expo-google-fonts/nunito-sans";
import { Home } from "@screens/Home";
export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Home />:null}
    </ThemeProvider>
  );
}
