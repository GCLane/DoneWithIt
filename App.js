import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  if (!isReady) {
    <AppLoading
      startAsync={restoreToken()}
      onFinish={() => setIsReady(true)}
      onError={() => setIsReady(false)}
    />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
