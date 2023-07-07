import React from "react";
import { Text, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Screen from "./app/components/Screen";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>TweetDetails {route.params.id} </Text>
  </Screen>
);

export default function App() {
  const Stack = createNativeStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator
      initialRouteName="Tweets"
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );

  const Account = () => (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Feed" component={Tweets} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
