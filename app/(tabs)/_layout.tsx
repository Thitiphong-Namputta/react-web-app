import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useWindowDimensions, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  let { height } = useWindowDimensions();

  const generateTab = () => {
    if (height > 714) {
      return (
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "home" : "home-outline"}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="setting"
            options={{
              title: "Setting",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "settings" : "settings-outline"}
                  color={color}
                />
              ),
            }}
          />
        </Tabs>
      );
    } else {
      return <View></View>;
    }
  };

  return (
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
    //     headerShown: false,
    //   }}
    // >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: "Home",
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon
    //           name={focused ? "home" : "home-outline"}
    //           color={color}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="setting"
    //     options={{
    //       title: "Setting",
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon
    //           name={focused ? "settings" : "settings-outline"}
    //           color={color}
    //         />
    //       ),
    //     }}
    //   />
    // </Tabs>
    <>{generateTab()}</>
  );
}
