import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    secondary: colors.secondary,
    background: colors.white,
  },
};
