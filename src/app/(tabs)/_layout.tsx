import { AntDesign } from "@react-native-vector-icons/ant-design";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="home" color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{ headerShown: false, title: "Login" }}
      />
    </Tabs>
  );
}
