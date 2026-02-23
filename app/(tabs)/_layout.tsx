import { Tabs } from "expo-router";
import {
  ClipboardList,
  Home,
  QrCode,
  UserRound,
  Wallet2,
} from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ACTIVE = "#0086FF"; // biru utama (light)
const INACTIVE = "#B6C2CF"; // abu muda
const TAB_BG = "#FFFFFF"; // putih

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ACTIVE,
        tabBarInactiveTintColor: INACTIVE,
        tabBarStyle: {
          height: 100,
          paddingBottom: 10,
          paddingTop: 8,
          backgroundColor: TAB_BG,
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={22} color={color} />,
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "Activity",
          tabBarIcon: ({ color }) => <ClipboardList size={22} color={color} />,
        }}
      />

      {/* PAY BUTTON */}
      <Tabs.Screen
        name="pay"
        options={{
          title: "PAY",
          tabBarButton: (props) => (
            <TouchableOpacity
              onPress={props.onPress}
              disabled={props.accessibilityState?.disabled}
              accessibilityState={props.accessibilityState}
              activeOpacity={0.9}
              style={[
                props.style,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: -18,
                },
              ]}
            >
              <View
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: 31,
                  backgroundColor: ACTIVE,
                  alignItems: "center",
                  justifyContent: "center",
                  elevation: 6,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 3 },
                  shadowOpacity: 0.15,
                  shadowRadius: 5,
                }}
              >
                <QrCode size={24} color="#FFFFFF" />
              </View>

              <Text
                style={{
                  marginTop: 6,
                  fontSize: 11,
                  fontWeight: "700",
                  color: ACTIVE,
                }}
              >
                PAY
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color }) => <Wallet2 size={22} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserRound size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}
