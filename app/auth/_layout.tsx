import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
export default function AuthLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "เข้าสู่ระบบ",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "log-in" : "log-in-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: "ลงทะเบียน",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "create" : "create-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
