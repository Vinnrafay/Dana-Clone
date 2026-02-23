import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Tambah Ionicons
import { router } from "expo-router";
import React from "react";
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function AccountScreen() {
  // Fungsi Log Out dengan Konfirmasi
  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out from DANA?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log Out",
        style: "destructive",
        // 3. Pake router.replace biar user gak bisa "Back" lagi ke halaman Account
        onPress: () => router.replace("/mainscreen"),
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F7FA" }}>
      {/* 1. BLUE HEADER AREA */}
      <View style={{ backgroundColor: "#108EE9", paddingBottom: 40 }}>
        {/* ... (Konten Header Tetap Sama) */}
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            backgroundColor: "rgba(0,0,0,0.15)",
            borderRadius: 8,
            marginTop: 10,
            padding: 2,
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 25,
              paddingVertical: 6,
              backgroundColor: "#0497ff",
              borderRadius: 6,
            }}
          >
            <Text
              style={{ fontSize: 12, color: "#ffffff", fontWeight: "bold" }}
            >
              Personal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingHorizontal: 25, paddingVertical: 6 }}
          >
            <Text style={{ fontSize: 12, color: "white", opacity: 0.8 }}>
              Bisnis
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 25,
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#FFD200",
              borderWidth: 2,
              borderColor: "white",
              overflow: "hidden",
            }}
          >
            <Image
              source={require("../../assets/images/friend.png")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={{ marginLeft: 15, flex: 1 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Asril
            </Text>
            <Text style={{ color: "white", fontSize: 13, opacity: 0.9 }}>
              081123456789
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1.5,
                borderColor: "#ffffff",
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 15,
                marginTop: 8,
                alignSelf: "flex-start",
              }}
            >
              <MaterialIcons name="qr-code-scanner" size={14} color="#ffffff" />
              <Text
                style={{
                  color: "#f9fdff",
                  fontSize: 10,
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                SHOW MY QR
              </Text>
              <MaterialIcons name="chevron-right" size={14} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* 2. CONTENT AREA */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
          {/* MAIN CARD (Finance & Grid) */}
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              overflow: "hidden",
              elevation: 3,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 10,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
              }}
            >
              <Image
                source={require("../../assets/images/lazada.png")}
                style={{ width: 40, height: 40, borderRadius: 8 }}
              />
              <View style={{ marginLeft: 12, flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                  Diskon Rp40Rb
                </Text>
                <Text style={{ color: "#888", fontSize: 11, marginTop: 2 }}>
                  Yuk Belanja Di Lazada
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#CCC" />
            </TouchableOpacity>

            <View style={{ height: 1, backgroundColor: "#F5F5F5" }} />

            <View style={{ flexDirection: "row", paddingVertical: 15 }}>
              {/* Income & Expense Section (Tetap Sama) */}
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  borderRightWidth: 1,
                  borderRightColor: "#F5F5F5",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialIcons
                    name="arrow-upward"
                    size={16}
                    color="#4CD964"
                    style={{
                      backgroundColor: "#E8F9EE",
                      borderRadius: 8,
                      padding: 3,
                    }}
                  />
                  <View style={{ marginLeft: 8 }}>
                    <Text style={{ color: "#888", fontSize: 11 }}>Income</Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#108EE9",
                        fontSize: 14,
                      }}
                    >
                      Rp59.000
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialIcons
                    name="arrow-downward"
                    size={16}
                    color="#FF3B30"
                    style={{
                      backgroundColor: "#FEECEC",
                      borderRadius: 8,
                      padding: 3,
                    }}
                  />
                  <View style={{ marginLeft: 8 }}>
                    <Text style={{ color: "#888", fontSize: 11 }}>Expense</Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#108EE9",
                        fontSize: 14,
                      }}
                    >
                      Rp40.000
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ height: 1, backgroundColor: "#F5F5F5" }} />

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <AccountGridItem
                icon="account-balance-wallet"
                label="Balance"
                sub="Let's Top Up"
                color="#108EE9"
              />
              <AccountGridItem
                icon="track-changes"
                label="DANA Goals"
                sub="Create Goals"
                color="#FF1493"
              />
              <AccountGridItem
                icon="credit-card"
                label="Saved Cards"
                sub="0 Card"
                color="#108EE9"
              />
              <AccountGridItem
                icon="monetization-on"
                label="eMAS"
                sub="Start Investing"
                color="#FFB800"
              />
            </View>
          </View>

          {/* LIST MENU */}
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              marginTop: 15,
              paddingHorizontal: 15,
              elevation: 2,
            }}
          >
            <MenuRowItem icon="receipt-long" label="My Bills" color="#FFB800" />
            <MenuRowItem
              icon="account-balance"
              label="Bank Account"
              color="#108EE9"
            />
            <MenuRowItem
              icon="security"
              label="Account Security"
              color="#4CD964"
            />
          </View>

          {/* --- TOMBOL LOG OUT --- */}
          <TouchableOpacity
            onPress={handleLogout}
            activeOpacity={0.7}
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              marginTop: 15,
              paddingVertical: 18,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              elevation: 2,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 5,
            }}
          >
            <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
            <Text
              style={{
                color: "#FF3B30",
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: 10,
              }}
            >
              LOG OUT
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              color: "#CCC",
              fontSize: 12,
            }}
          >
            Version 2.44.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ... (Komponen Pendukung AccountGridItem & MenuRowItem Tetap Sama)
function AccountGridItem({ icon, label, sub, color }: any) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        width: "50%",
        paddingVertical: 20,
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: "#F5F5F5",
      }}
    >
      <MaterialIcons name={icon} size={26} color={color} />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 13,
          marginTop: 8,
          color: "#333",
        }}
      >
        {label}
      </Text>
      <Text style={{ fontSize: 10, color: "#108EE9", marginTop: 2 }}>
        {sub}
      </Text>
    </TouchableOpacity>
  );
}

function MenuRowItem({ icon, label, color }: any) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5",
      }}
    >
      <View style={{ backgroundColor: "#F5F7FA", padding: 8, borderRadius: 8 }}>
        <MaterialIcons name={icon} size={20} color={color} />
      </View>
      <Text
        style={{
          flex: 1,
          marginLeft: 15,
          fontWeight: "600",
          color: "#333",
          fontSize: 14,
        }}
      >
        {label}
      </Text>
      <MaterialIcons name="chevron-right" size={24} color="#CCC" />
    </TouchableOpacity>
  );
}
