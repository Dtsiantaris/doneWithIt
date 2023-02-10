import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CALL FUNCTION FROM FEED COMPONENT TO RENDER SAID COMPONENTS</Text>
      <Button title="BRO" />
    </View>
  );
}
function AddItemScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CALL FUNCTION ADD ITEM</Text>
    </View>
  );
}
function MyAccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CALL FUNCTION MY ACCOUNT</Text>
      <Button title="BRO" />
    </View>
  );
}
const bottomTab = createBottomTabNavigator();
export default function HomeScreen(props) {
  const navigationOptions = {
    title: "HomeScreen",
  };
  return (
    <NavigationContainer>
      <bottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Feed") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "My Account") {
              iconName = focused ? "account-circle" : "account-circle";
            } else if (route.name === "Add") {
              iconName = focused ? "add" : "add";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <bottomTab.Screen name="Feed" component={FeedScreen} />
        <bottomTab.Screen name="Add" component={AddItemScreen} />
        <bottomTab.Screen name="My Account" component={MyAccountScreen} />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
