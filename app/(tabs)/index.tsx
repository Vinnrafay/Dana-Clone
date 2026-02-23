import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function Home() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const cardShadow = {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F7FA" }}>
      {/* 1. STICKY TOP HEADER */}
      <View
        style={{
          backgroundColor: "#108EE9",
          paddingHorizontal: 20,
          paddingTop: 10,
          paddingBottom: 15,
          zIndex: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/dana_logo.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: "white",
                marginRight: 8,
              }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 12,
                    fontWeight: "600",
                  }}
                >
                  Rp
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "700",
                    marginLeft: 4,
                  }}
                >
                  {isBalanceVisible ? "49.000" : "••••••"}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => setIsBalanceVisible(!isBalanceVisible)}
                style={{ marginLeft: 10 }}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons
                  name={isBalanceVisible ? "eye-outline" : "eye-off-outline"}
                  size={16}
                  color="white"
                  style={{ opacity: 0.8 }}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{ marginLeft: 6 }}>
                <MaterialCommunityIcons
                  name="plus-box-outline"
                  size={18}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <Feather name="mail" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* 2. TOP ACTION BLUE AREA */}
        <View
          style={{
            backgroundColor: "#108EE9",
            paddingHorizontal: 20,
            paddingBottom: 30,
            paddingTop: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <HeaderAction icon="qr-code-scanner" label="Scan" type="material" />
            <HeaderAction icon="add-box" label="Top Up" type="material" />
            <HeaderAction icon="send" label="Send" type="feather" />
            <HeaderAction
              icon="account-balance-wallet"
              label="Request"
              type="material"
            />
          </View>
        </View>

        {/* 3. PROMO LAZADA */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            backgroundColor: "white",
            margin: 16,
            marginTop: -15,
            padding: 16,
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            ...cardShadow,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Image
              source={require("../../assets/images/lazada.png")}
              style={{ width: 44, height: 44, borderRadius: 8 }}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                Diskon Rp40Rb
              </Text>
              <Text style={{ color: "#888", fontSize: 11, marginTop: 2 }}>
                Yuk Belanja Di Lazada
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#108EE9",
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 11 }}>
              AMBIL
            </Text>
          </View>
        </TouchableOpacity>

        {/* 4. MAIN MENU GRID */}
        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 16,
            paddingVertical: 20,
            borderRadius: 12,
            ...cardShadow,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 25,
            }}
          >
            <MenuIcon
              label="Voucher A+"
              imageSource={require("../../assets/images/medali.png")}
            />
            <MenuIcon
              label="Emas"
              imageSource={require("../../assets/images/emas.png")}
            />
            <MenuIcon
              label="DANA Kaget"
              imageSource={require("../../assets/images/walletbiru.png")}
            />
            <MenuIcon
              label="Saldo Digital"
              imageSource={require("../../assets/images/walletpink.png")}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <MenuIcon
              label="DANA Deals"
              imageSource={require("../../assets/images/tiketgolden.png")}
            />
            <MenuIcon
              label="Games"
              imageSource={require("../../assets/images/games.png")}
            />
            <MenuIcon
              label="DANA Goals"
              imageSource={require("../../assets/images/panah.png")}
            />
            <MenuIcon
              label="View All"
              imageSource={require("../../assets/images/viewall.png")}
            />
          </View>
        </View>

        {/* 5. FEED SECTION */}
        <View
          style={{
            backgroundColor: "white",
            margin: 16,
            padding: 16,
            borderRadius: 12,
            ...cardShadow,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <View>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Feed</Text>
              <Text style={{ color: "#999", fontSize: 11 }}>
                Find out what your friends are up to!
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{ color: "#108EE9", fontWeight: "bold", fontSize: 12 }}
              >
                EXPLORE
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/friend.png")}
              style={{ width: 36, height: 36, borderRadius: 18 }}
            />
            <Text
              style={{ marginLeft: 12, color: "#444", flex: 1, fontSize: 12 }}
              numberOfLines={2}
            >
              <Text style={{ fontWeight: "bold", color: "#000" }}>
                Your Friends
              </Text>{" "}
              just received Pulsa Voucher from{" "}
              <Text style={{ color: "#FFB800", fontWeight: "bold" }}>
                DANA SURPRISE
              </Text>
            </Text>
          </View>
        </View>

        {/* 6. HORIZONTAL BANNERS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 4 }}
          style={{ marginBottom: 10 }}
        >
          <BannerItem source={require("../../assets/images/banner.png")} />
          <BannerItem source={require("../../assets/images/tiktokshop.png")} />
          <BannerItem source={require("../../assets/images/danadeals.png")} />
        </ScrollView>

        {/* 7. NEARBY */}
        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 16,
            padding: 16,
            borderRadius: 12,
            ...cardShadow,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Nearby</Text>
            <TouchableOpacity>
              <Text
                style={{ color: "#108EE9", fontWeight: "bold", fontSize: 12 }}
              >
                EXPLORE
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", paddingVertical: 10 }}>
            <Ionicons name="location-outline" size={32} color="#DDD" />
            <Text style={{ color: "#999", fontSize: 12, marginTop: 4 }}>
              No merchants around you.
            </Text>
          </View>
        </View>

        {/* 8. DANA PROTECTION */}
        <View
          style={{
            backgroundColor: "white",
            margin: 16,
            padding: 16,
            borderRadius: 12,
            ...cardShadow,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/danaprotec.png")}
                style={{ width: 22, height: 22 }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 13,
                  marginLeft: 8,
                  color: "#333",
                }}
              >
                DANA PROTECTION
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#108EE9",
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 15,
              }}
            >
              <Text
                style={{ color: "#108EE9", fontSize: 10, fontWeight: "bold" }}
              >
                DISCOVER
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ProtectionItem icon="shield-check" label="Money-back Guarantee" />
            <ProtectionItem icon="lock" label="Secure Data Privacy" />
            <ProtectionItem icon="headphones" label="24/7 Assistance" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- SUB-COMPONENTS ---
function MenuIcon({ label, imageSource }: any) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ alignItems: "center", width: "25%" }}
    >
      <Image
        source={imageSource}
        style={{ width: 32, height: 32 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 11,
          textAlign: "center",
          marginTop: 8,
          color: "#333",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function HeaderAction({ icon, label, type }: any) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={{ alignItems: "center" }}>
      <View style={{ height: 40, justifyContent: "center" }}>
        {type === "material" ? (
          <MaterialIcons name={icon} size={30} color="white" />
        ) : (
          <Feather name={icon} size={28} color="white" />
        )}
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 12,
          fontWeight: "600",
          marginTop: 2,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function ProtectionItem({ icon, label }: any) {
  return (
    <View style={{ width: "30%", alignItems: "center" }}>
      <MaterialCommunityIcons name={icon} size={22} color="#108EE9" />
      <Text
        style={{
          fontSize: 9,
          color: "#666",
          textAlign: "center",
          marginTop: 6,
          lineHeight: 12,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

function BannerItem({ source }: any) {
  return (
    <Image
      source={source}
      style={{
        width: width * 0.85,
        height: 130,
        borderRadius: 12,
        marginRight: 12,
      }}
      resizeMode="cover"
    />
  );
}
